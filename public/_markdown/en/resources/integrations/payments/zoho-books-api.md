---
title: "ZohoBooksApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Payments & Finance](/en/resources/integrations/payments/stripe.md)
ZohoBooksApi

# ZohoBooksApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the zoho-books API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_zoho_books_api)](https://pypi.org/project/arcade_zoho_books_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_zoho_books_api)](https://pypi.org/project/arcade_zoho_books_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_zoho_books_api)](https://pypi.org/project/arcade_zoho_books_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_zoho_books_api)](https://pypi.org/project/arcade_zoho_books_api/)

ZohoBooksApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The ZohoBooksApi MCP Server offers a comprehensive suite of tools for managing financial transactions and accounting within Zoho Books. Users can efficiently perform actions such as:

## Available Tools

Tool Name

Description

ZohoBooksApi.CreateBankAccount

Create a bank or credit card account in your organization.

ZohoBooksApi.ListBankAccounts

List all bank and credit card accounts for your organization.

ZohoBooksApi.UpdateBankAccountZohoBooks

Modify a bank account in Zoho Books.

ZohoBooksApi.GetBankAccountDetails

Retrieve detailed information of a specified bank account.

ZohoBooksApi.DeleteBankAccount

Delete a bank account from your organization.

ZohoBooksApi.DeactivateBankAccount

Deactivate a bank account in Zoho Books.

ZohoBooksApi.ActivateBankAccount

Activate a bank account in Zoho Books.

ZohoBooksApi.ImportBankStatements

Import bank or credit card feeds into your account.

ZohoBooksApi.GetLastImportedBankStatement

Retrieve the last imported bank statement details for an account.

ZohoBooksApi.DeleteLastImportedBankStatement

Delete the last imported bank statement.

ZohoBooksApi.FetchBankAccountRules

Fetch rules for a specified bank account.

ZohoBooksApi.CreateFinancialAccountRule

Create and apply rules for banking and credit accounts.

ZohoBooksApi.GetBankAccountRuleDetails

Retrieve details of a specific bank account rule.

ZohoBooksApi.UpdateBankAccountRule

Update or modify a bank account rule in Zoho Books.

ZohoBooksApi.DeleteBankAccountRule

Deletes a bank account rule, removing its effect on transactions.

ZohoBooksApi.CreateBankTransaction

Creates a bank transaction in Zoho Books.

ZohoBooksApi.GetBankTransactions

Retrieve all transaction details for a bank account.

ZohoBooksApi.UpdateBankTransaction

Update details of a specific bank transaction.

ZohoBooksApi.FetchBankTransactionDetails

Fetch details of a specific bank transaction by ID.

ZohoBooksApi.DeleteBankTransaction

Delete a bank transaction using its ID.

ZohoBooksApi.FindMatchingBankTransactions

Find matching uncategorized bank transactions.

ZohoBooksApi.MatchBankTransaction

Match an uncategorized bank transaction with an existing one.

ZohoBooksApi.UnmatchBankTransaction

Unmatch a previously matched bank transaction.

ZohoBooksApi.ExcludeBankTransaction

Exclude a transaction from a bank or credit card account.

ZohoBooksApi.RestoreBankTransaction

Restores an excluded bank transaction in your account.

ZohoBooksApi.CategorizeBankTransaction

Categorize an uncategorized bank transaction.

ZohoBooksApi.CategorizeBankTransactionAsExpense

Categorize an uncategorized bank transaction as an expense.

ZohoBooksApi.UncategorizeBankTransaction

Revert a categorized bank transaction to uncategorized.

ZohoBooksApi.CategorizeTransactionAsVendorPayment

Categorize a bank transaction as a vendor payment.

ZohoBooksApi.CategorizeTransactionAsPayment

Categorize an uncategorized transaction as a Customer Payment.

ZohoBooksApi.CategorizeTransactionAsRefund

Categorize a transaction as a credit note refund.

ZohoBooksApi.CategorizeRefundVendorCredit

Categorize transactions as vendor credit refunds.

ZohoBooksApi.CategorizeBankTransactionPaymentRefund

Categorize bank transactions as payment refunds.

ZohoBooksApi.CategorizeVendorPaymentRefund

Categorize bank transactions as Vendor Payment Refund.

ZohoBooksApi.CreateCurrencyAdjustment

Create a base currency adjustment.

ZohoBooksApi.ListBaseCurrencyAdjustments

Fetch base currency adjustments list from Zoho Books.

ZohoBooksApi.GetBaseCurrencyAdjustmentDetails

Retrieve base currency adjustment details by ID.

ZohoBooksApi.DeleteCurrencyAdjustment

Deletes the specified base currency adjustment.

ZohoBooksApi.ListCurrencyAdjustmentAccounts

Retrieve accounts involved in currency adjustments.

ZohoBooksApi.CreateVendorBill

Create a bill received from your vendor.

ZohoBooksApi.ListAllBills

Retrieve all bills with pagination support.

ZohoBooksApi.UpdateBillByCustomField

Update or create a bill using a custom field identifier.

ZohoBooksApi.UpdateBillInZoho

Updates a bill by modifying details in Zoho Books.

ZohoBooksApi.RetrieveBillDetails

Retrieve the details of a specific bill.

ZohoBooksApi.DeleteExistingBill

Deletes an existing bill if no payments are applied.

ZohoBooksApi.UpdateCustomFieldsInBill

Update custom fields in existing bills.

ZohoBooksApi.MarkBillVoid

Mark a bill as void in Zoho Books.

ZohoBooksApi.MarkBillOpen

Mark a void bill as open in Zoho Books.

ZohoBooksApi.SubmitBillForApproval

Submit a bill for approval in Zoho Books.

ZohoBooksApi.ApproveBill

Approve a bill in Zoho Books.

ZohoBooksApi.UpdateBillingAddress

Updates the billing address for a specified bill.

ZohoBooksApi.GetBillPaymentsList

Retrieve the list of payments made for a specific bill.

ZohoBooksApi.ApplyVendorCreditsToBill

Apply vendor credits to a bill.

ZohoBooksApi.DeleteBillPayment

Delete a payment made to a bill.

ZohoBooksApi.RetrieveBillAttachment

Retrieve the attachment from a specific bill.

ZohoBooksApi.AttachFileToBill

Attach a file to a specific bill.

ZohoBooksApi.DeleteBillAttachment

Delete the file attached to a specific bill.

ZohoBooksApi.GetBillHistory

Retrieve the complete history and comments for a bill.

ZohoBooksApi.AddCommentToBill

Add a comment to a specific bill in Zoho Books.

ZohoBooksApi.DeleteBillComment

Delete a specific comment from a bill in Zoho Books.

ZohoBooksApi.ConvertPurchaseOrderToBill

Fetch bill payload from purchase orders.

ZohoBooksApi.CreateChartOfAccount

Creates an account with a specified account type.

ZohoBooksApi.ListChartOfAccounts

Retrieve a list of all chart of accounts.

ZohoBooksApi.UpdateAccountInfo

Updates account information in Zoho Books.

ZohoBooksApi.GetAccountDetails

Retrieve detailed information for a specified account.

ZohoBooksApi.DeleteAccount

Delete a chart of account in Zoho Books.

ZohoBooksApi.ActivateChartOfAccount

Activate a chart of account in Zoho Books.

ZohoBooksApi.DeactivateChartOfAccount

Deactivate a specific chart of account.

ZohoBooksApi.ListAccountTransactions

Retrieve transactions for a specified account.

ZohoBooksApi.DeleteTransaction

Delete a specified accounting transaction.

ZohoBooksApi.CreateContactPerson

Create a contact person for a contact in Zoho Books.

ZohoBooksApi.UpdateContactPerson

Update an existing contact person's details.

ZohoBooksApi.DeleteContactPerson

Delete an existing contact person from the records.

ZohoBooksApi.ListContactPersons

Retrieve contact persons for a given contact ID.

ZohoBooksApi.GetContactPersonDetails

Retrieve details of a specific contact person.

ZohoBooksApi.MarkPrimaryContactPerson

Mark a contact person as primary for a contact.

ZohoBooksApi.CreateBusinessContact

Create a new business contact with comprehensive details.

ZohoBooksApi.RetrieveContactList

Retrieve and filter a list of contacts from Zoho Books.

ZohoBooksApi.UpdateContactByCustomField

Update a contact using a unique custom field value.

ZohoBooksApi.UpdateBusinessContact

Update detailed information for an existing business contact.

ZohoBooksApi.RetrieveContactDetails

Retrieve comprehensive details of a specific contact.

ZohoBooksApi.DeleteContact

Delete an existing contact from the system.

ZohoBooksApi.ActivateContact

Activate a contact in Zoho Books.

ZohoBooksApi.MarkContactInactive

Mark a Zoho Books contact as inactive.

ZohoBooksApi.EnableContactPortalAccess

Enable portal access for a specified contact in Zoho Books.

ZohoBooksApi.EnablePaymentReminder

Enable automated payment reminders for a contact.

ZohoBooksApi.DisableContactPaymentReminder

Disable automated payment reminders for a contact.

ZohoBooksApi.EmailContactStatement

Sends an email statement to a specified contact.

ZohoBooksApi.GetContactStatementMailContent

Retrieve the statement email content for a contact.

ZohoBooksApi.SendEmailToContact

Send an email directly to a specified contact.

ZohoBooksApi.GetContactActivityRecentComments

Retrieve recent comments for a specific contact.

ZohoBooksApi.GetContactAddresses

Retrieve addresses for a specified contact.

ZohoBooksApi.AddContactAddress

Add an additional address to a contact in Zoho Books.

ZohoBooksApi.UpdateContactAddress

Edit the additional address of a contact.

ZohoBooksApi.DeleteContactAddress

Deletes an additional address of a contact.

ZohoBooksApi.GetContactRefundHistory

Retrieve the refund history of a specific contact.

ZohoBooksApi.TrackContactFor1099Reporting

Track a contact for 1099 reporting in Zoho Books.

ZohoBooksApi.Stop1099TrackingForVendor

Stop 1099 payment tracking for a vendor in the U.S.

ZohoBooksApi.RetrieveUnusedRetainerPayments

Retrieve unused retainer payments for a contact.

ZohoBooksApi.CreateCreditNote

Create a new credit note for customer adjustments.

ZohoBooksApi.ListCreditNotes

Retrieve and filter a list of credit notes.

ZohoBooksApi.UpdateCreditNoteWithCustomField

Update or create a credit note using a custom field.

ZohoBooksApi.UpdateCreditNoteDetails

Update details of an existing credit note.

ZohoBooksApi.GetCreditNoteDetails

Retrieve details of a specific credit note using its ID.

ZohoBooksApi.DeleteCreditNote

Delete an existing credit note using its ID.

ZohoBooksApi.EmailCreditNote

Send a credit note via email.

ZohoBooksApi.GetCreditNoteEmailContent

Retrieve email content for a given credit note.

ZohoBooksApi.MarkCreditNoteVoid

Marks a credit note as void in Zoho Books.

ZohoBooksApi.ConvertCreditNoteToDraft

Convert a voided credit note to a draft status.

ZohoBooksApi.MarkCreditNoteOpen

Convert a draft credit note to open status in Zoho Books.

ZohoBooksApi.SubmitCreditNoteForApproval

Submit a credit note for approval in Zoho Books.

ZohoBooksApi.ApproveCreditNote

Approve a credit note for a specified ID.

ZohoBooksApi.RetrieveCreditNoteEmailHistory

Retrieve the email history of a specific credit note.

ZohoBooksApi.UpdateCreditNoteBillingAddress

Update the billing address for a specific credit note.

ZohoBooksApi.UpdateCreditNoteShippingAddress

Updates the shipping address of an existing credit note.

ZohoBooksApi.GetCreditNotePdfTemplates

Retrieve all credit note PDF templates from Zoho Books.

ZohoBooksApi.UpdateCreditNoteTemplate

Updates the PDF template for a specified credit note.

ZohoBooksApi.ListCreditNoteInvoices

List invoices to which the credit note is applied.

ZohoBooksApi.ApplyCreditNoteToInvoice

Apply credit note to existing invoices in Zoho Books.

ZohoBooksApi.DeleteCreditNoteInvoice

Delete the credits applied to an invoice of a credit note.

ZohoBooksApi.GetCreditNoteComments

Retrieve comments and history of a credit note.

ZohoBooksApi.AddCreditNoteComment

Add a comment to an existing credit note.

ZohoBooksApi.DeleteCreditNoteComment

Delete a specific comment from a credit note.

ZohoBooksApi.CreditNoteRefundListing

Retrieve a paginated list of credit note refunds.

ZohoBooksApi.ListCreditNoteRefunds

Retrieve refunds for a specific credit note.

ZohoBooksApi.RefundCreditNote

Process a credit note refund in Zoho Books.

ZohoBooksApi.GetCreditNoteRefund

Retrieve refund details for a specific credit note.

ZohoBooksApi.UpdateRefundTransaction

Update the refunded transaction details.

ZohoBooksApi.DeleteCreditNoteRefund

Delete a specific credit note refund by ID.

ZohoBooksApi.CreateCurrency

Create a currency for transactions in Zoho Books.

ZohoBooksApi.ListConfiguredCurrencies

Retrieve the list of configured currencies in Zoho Books.

ZohoBooksApi.UpdateCurrencyDetails

Update the details of a currency in Zoho Books.

ZohoBooksApi.GetCurrencyDetails

Get the details of a specific currency.

ZohoBooksApi.RemoveCurrency

Remove a specific currency from the system.

ZohoBooksApi.ListCurrencyExchangeRates

Retrieve exchange rates for a specific currency.

ZohoBooksApi.CreateExchangeRate

Create an exchange rate for a specified currency.

ZohoBooksApi.GetCurrencyExchangeRate

Retrieve details of a specific currency exchange rate.

ZohoBooksApi.UpdateExchangeRate

Update exchange rate details for a currency in Zoho Books.

ZohoBooksApi.DeleteExchangeRate

Delete an exchange rate for a specific currency.

ZohoBooksApi.ListCustomModuleRecords

Fetches records from a specified custom module.

ZohoBooksApi.UpdateCustomModuleRecords

Updates existing custom module records in bulk.

ZohoBooksApi.CreateCustomModule

Creates a custom module in Zoho Books.

ZohoBooksApi.DeleteCustomModule

Deletes a specified custom module in Zoho Books.

ZohoBooksApi.GetCustomModuleRecordDetails

Fetch details of an organization in Zoho Books.

ZohoBooksApi.UpdateCustomModuleRecord

Update an existing custom module in Zoho Books.

ZohoBooksApi.DeleteCustomModuleRecord

Delete an individual record from a custom module.

ZohoBooksApi.CreateCustomerDebitNote

Create a customer debit note for invoice adjustments.

ZohoBooksApi.ListCustomerDebitNotes

Retrieve and organize customer debit notes easily.

ZohoBooksApi.UpdateCustomerDebitNote

Update an existing customer debit note.

ZohoBooksApi.GetCustomerDebitNote

Retrieve the details of a customer debit note from Zoho Books.

ZohoBooksApi.DeleteCustomerDebitNote

Delete an existing customer debit note in Zoho Books.

ZohoBooksApi.CreateCustomerPayment

Create a new customer payment in Zoho Books.

ZohoBooksApi.ListCustomerPayments

List all payments made by your customers.

ZohoBooksApi.BulkDeleteCustomerPayments

Delete multiple customer payments efficiently.

ZohoBooksApi.UpdatePaymentByCustomField

Update or upsert a customer payment using a unique custom field.

ZohoBooksApi.UpdateCustomerPaymentInfo

Update an existing payment information.

ZohoBooksApi.GetCustomerPaymentDetails

Retrieve details of a specific customer payment.

ZohoBooksApi.DeleteCustomerPayment

Delete an existing payment for a customer.

ZohoBooksApi.ListCustomerPaymentRefunds

Retrieve refunds for a specified customer payment.

ZohoBooksApi.RefundExcessPayment

Refund the excess amount paid by a customer.

ZohoBooksApi.UpdateCustomerPaymentCustomFields

Update custom fields in existing customer payments.

ZohoBooksApi.GetCustomerPaymentRefundDetails

Obtain details of a specific customer payment refund.

ZohoBooksApi.UpdatePaymentRefund

Update details of a customer payment refund.

ZohoBooksApi.DeleteCustomerPaymentRefund

Delete a refund for an existing customer payment.

ZohoBooksApi.CreateCustomerEstimate

Create an estimate for a customer using Zoho Books.

ZohoBooksApi.ListEstimates

Retrieve a list of all estimates with pagination.

ZohoBooksApi.UpdateEstimateWithCustomField

Update or create an estimate using a custom field value.

ZohoBooksApi.UpdateEstimate

Update an existing estimate in Zoho Books.

ZohoBooksApi.RetrieveEstimateDetails

Retrieve the details of a specific estimate.

ZohoBooksApi.DeleteEstimate

Delete an existing estimate in Zoho Books.

ZohoBooksApi.UpdateEstimateCustomFields

Update custom fields in a specific estimate.

ZohoBooksApi.MarkEstimateAsSent

Mark a draft estimate as sent.

ZohoBooksApi.AcceptEstimate

Mark a sent estimate as accepted if the customer has accepted it.

ZohoBooksApi.DeclineEstimate

Marks a sent estimate as declined if rejected by customer.

ZohoBooksApi.SubmitEstimateForApproval

Submit an estimate for approval.

ZohoBooksApi.ApproveEstimate

Approve an estimate in Zoho Books.

ZohoBooksApi.SendEstimateEmail

Send an email estimate to a customer.

ZohoBooksApi.GetEstimateEmailContent

Retrieve the email content for a specific estimate.

ZohoBooksApi.SendEstimatesEmail

Send multiple estimates to customers via email.

ZohoBooksApi.ExportEstimatesAsPdf

Export up to 25 estimates as a single PDF document.

ZohoBooksApi.ExportAndPrintEstimates

Export and print estimates as a PDF file.

ZohoBooksApi.UpdateEstimateBillingAddress

Updates the billing address for a specific estimate.

ZohoBooksApi.UpdateEstimateShippingAddress

Updates the shipping address for an existing estimate in Zoho Books.

ZohoBooksApi.GetEstimateTemplates

Retrieve all estimate PDF templates.

ZohoBooksApi.UpdateEstimateTemplate

Update the PDF template for an estimate.

ZohoBooksApi.GetEstimateComments

Get the complete history and comments of an estimate.

ZohoBooksApi.AddEstimateComment

Add a comment for a specific estimate in Zoho Books.

ZohoBooksApi.UpdateEstimateComment

Update an existing comment on an estimate.

ZohoBooksApi.DeleteEstimateComment

Delete an estimate comment.

ZohoBooksApi.CreateExpense

Create a billable or non-billable expense record.

ZohoBooksApi.ListExpenses

Retrieve a list of expenses with pagination.

ZohoBooksApi.UpdateExpenseWithCustomField

Update or create an expense using custom field values.

ZohoBooksApi.UpdateExistingExpense

Update an existing expense in Zoho Books.

ZohoBooksApi.GetExpenseDetails

Retrieve details of a specific expense by ID.

ZohoBooksApi.DeleteExpenseEntry

Delete an existing expense entry in Zoho Books.

ZohoBooksApi.GetExpenseComments

Retrieve comments and history for a specific expense.

ZohoBooksApi.ListCompanyEmployees

Retrieve a paginated list of all employees.

ZohoBooksApi.CreateEmployeeForExpense

Create an employee for an expense record in Zoho Books.

ZohoBooksApi.FetchEmployeeDetails

Retrieve detailed information about an employee.

ZohoBooksApi.DeleteEmployeeRecord

Remove an employee from the records in Zoho Books.

ZohoBooksApi.RetrieveExpenseReceipt

Retrieve the receipt attached to an expense.

ZohoBooksApi.AttachExpenseReceipt

Attach a receipt to a specified expense.

ZohoBooksApi.DeleteExpenseReceipt

Deletes the receipt attached to an expense.

ZohoBooksApi.CreateFixedAsset

Create a fixed asset in Zoho Books.

ZohoBooksApi.GetFixedAssetsList

Retrieve a list of fixed assets from Zoho Books.

ZohoBooksApi.UpdateFixedAssetInfo

Update fixed asset details in Zoho Books.

ZohoBooksApi.GetFixedAssetDetails

Retrieve details of a fixed asset using its ID.

ZohoBooksApi.DeleteFixedAsset

Delete a specified fixed asset.

ZohoBooksApi.FetchAssetHistory

Fetch the detailed history of a specific fixed asset.

ZohoBooksApi.GetAssetDepreciationSummary

Displays detailed future depreciation rates for a fixed asset.

ZohoBooksApi.ActivateFixedAsset

Activate a fixed asset to begin depreciation calculation.

ZohoBooksApi.CancelFixedAsset

Cancel a fixed asset in Zoho Books.

ZohoBooksApi.MarkFixedAssetAsDraft

Set a fixed asset status to draft in Zoho Books.

ZohoBooksApi.WriteOffFixedAsset

Remove a fixed asset from the records.

ZohoBooksApi.SellFixedAsset

Initiate the sale of a specified fixed asset.

ZohoBooksApi.AddFixedAssetComment

Add a comment to a fixed asset in Zoho Books.

ZohoBooksApi.DeleteAssetComment

Delete a comment from a fixed asset in Zoho Books.

ZohoBooksApi.CreateFixedAssetType

Create a fixed asset type in Zoho Books.

ZohoBooksApi.GetFixedAssetTypeList

Retrieve a list of fixed asset types.

ZohoBooksApi.UpdateFixedAssetType

Update a fixed asset type with new information.

ZohoBooksApi.DeleteFixedAssetType

Deletes a specified fixed asset type from the system.

ZohoBooksApi.ImportCustomerFromCrm

Import a customer from Zoho CRM to Zoho Books using CRM account ID.

ZohoBooksApi.CrmToBooksContactImport

Import a customer from Zoho CRM to Zoho Books using CRM contact ID.

ZohoBooksApi.ImportVendorFromCrm

Import a vendor from Zoho CRM to Zoho Books using CRM vendor ID.

ZohoBooksApi.ImportCrmProductToZohoBooks

Import a product from Zoho CRM to Zoho Books.

ZohoBooksApi.CreateCustomerInvoice

Create an invoice for your customer.

ZohoBooksApi.GetInvoiceList

Retrieve and organize a list of invoices from Zoho Books.

ZohoBooksApi.UpdateInvoiceByCustomField

Update or create an invoice using a custom field value.

ZohoBooksApi.UpdateInvoice

Update details of an existing invoice in Zoho Books.

ZohoBooksApi.GetInvoiceDetails

Retrieve details of a specific invoice by ID.

ZohoBooksApi.DeleteInvoiceInZohoBooks

Delete an existing invoice in Zoho Books.

ZohoBooksApi.MarkInvoiceAsSent

Mark a draft invoice as sent.

ZohoBooksApi.VoidInvoiceStatus

Mark an invoice as void in Zoho Books.

ZohoBooksApi.MarkInvoiceAsDraft

Mark a voided invoice as draft in Zoho Books.

ZohoBooksApi.SendInvoicesEmail

Send up to 10 invoices by email to customers.

ZohoBooksApi.CreateInvoiceFromSalesOrder

Create an invoice from a confirmed sales order.

ZohoBooksApi.AssociateInvoiceWithSalesOrder

Link existing invoices to sales orders for tracking.

ZohoBooksApi.SubmitInvoiceForApproval

Submit an invoice for approval in Zoho Books.

ZohoBooksApi.ApproveInvoice

Approve a specified invoice for processing.

ZohoBooksApi.GetInvoiceEmailContent

Retrieve the email content for a specific invoice.

ZohoBooksApi.SendInvoiceEmail

Email an invoice to a customer with optional content customization.

ZohoBooksApi.RemindCustomerInvoicePayment

Remind customers of unpaid invoices by email.

ZohoBooksApi.GetPaymentReminderEmailContent

Fetch the email content of a payment reminder for an invoice.

ZohoBooksApi.SendInvoiceReminders

Send email reminders for unpaid invoices.

ZohoBooksApi.ExportInvoicesAsPdf

Export up to 25 invoices as a single PDF file.

ZohoBooksApi.ExportAndPrintInvoices

Export and print multiple invoices as PDFs.

ZohoBooksApi.DisableInvoicePaymentReminder

Disable automated payment reminders for an invoice.

ZohoBooksApi.ActivateInvoiceReminder

Enable automated payment reminders for invoices.

ZohoBooksApi.WriteOffInvoiceBalance

Write off the balance amount of an invoice in Zoho Books.

ZohoBooksApi.CancelWriteOffInvoice

Cancel the write-off amount of an invoice in Zoho Books.

ZohoBooksApi.ModifyInvoiceAddress

Update the billing address for a specific invoice.

ZohoBooksApi.UpdateInvoiceShippingAddress

Update the shipping address of a specific invoice.

ZohoBooksApi.ListInvoiceTemplates

Fetch all invoice PDF templates from Zoho Books.

ZohoBooksApi.UpdateInvoiceTemplate

Update the PDF template for a specific invoice.

ZohoBooksApi.GetInvoicePayments

Retrieve a list of payments for a specific invoice.

ZohoBooksApi.GetInvoiceCreditsApplied

Retrieve the credits applied to a specific invoice.

ZohoBooksApi.ApplyCreditsToInvoice

Apply customer credits to an invoice.

ZohoBooksApi.DeleteInvoicePayment

Delete a payment made to an invoice in Zoho Books.

ZohoBooksApi.RemoveInvoiceCredit

Remove a specific credit applied to an invoice.

ZohoBooksApi.GetInvoiceAttachment

Fetch attachment file from a specified invoice.

ZohoBooksApi.AttachInvoiceFile

Attach a file to a specified invoice.

ZohoBooksApi.SetInvoiceAttachmentPreference

Set the email attachment preference for an invoice.

ZohoBooksApi.DeleteInvoiceAttachment

Delete the file attached to an invoice.

ZohoBooksApi.RetrieveInvoiceDocument

Retrieve a document attached to a specific invoice.

ZohoBooksApi.DeleteInvoiceDocument

Delete a document attached to an invoice.

ZohoBooksApi.DeleteInvoiceExpenseReceipt

Delete attached expense receipts from an invoice.

ZohoBooksApi.UpdateInvoiceCustomFields

Update custom fields in an existing invoice.

ZohoBooksApi.GetInvoiceComments

Get comments and history of an invoice.

ZohoBooksApi.AddInvoiceComment

Add a comment to a specific invoice.

ZohoBooksApi.UpdateInvoiceComment

Update an existing comment on an invoice.

ZohoBooksApi.DeleteInvoiceComment

Delete a specific comment from an invoice.

ZohoBooksApi.GenerateInvoicePaymentLink

Generate a payment link for an invoice with expiry.

ZohoBooksApi.CreateNewZohoItem

Create a new item in Zoho Books inventory.

ZohoBooksApi.ListActiveInventoryItems

Retrieve a paginated list of all active inventory items.

ZohoBooksApi.UpdateItemViaCustomField

Update or create an item using a unique custom field.

ZohoBooksApi.UpdateZohoItemDetails

Update the details of an item in Zoho Books.

ZohoBooksApi.RetrieveItemDetails

Retrieve details of a specific item in Zoho Books.

ZohoBooksApi.DeleteItemInZohoBooks

Delete an item from Zoho Books.

ZohoBooksApi.UpdateItemCustomFields

Updates custom fields in an existing item.

ZohoBooksApi.ActivateInactiveItem

Activate an inactive item in Zoho Books.

ZohoBooksApi.MarkItemInactive

Mark an item as inactive in Zoho Books.

ZohoBooksApi.CreateJournalEntry

Create a journal entry in Zoho Books.

ZohoBooksApi.GetJournalList

Retrieve a list of accounting journals.

ZohoBooksApi.UpdateJournalInZohoBooks

Updates a journal entry in Zoho Books with specified details.

ZohoBooksApi.GetJournalDetails

Retrieve the details of a specific journal entry in Zoho Books.

ZohoBooksApi.DeleteJournalEntry

Delete a specific journal entry by ID.

ZohoBooksApi.PublishDraftJournal

Mark a draft journal as published in Zoho Books.

ZohoBooksApi.AttachFileToJournal

Attach a file to a Zoho Books journal entry.

ZohoBooksApi.AddJournalComment

Add a comment to a journal entry in Zoho Books.

ZohoBooksApi.DeleteJournalComment

Delete a journal comment in Zoho Books.

ZohoBooksApi.EnableOrganizationLocations

Enable locations for an organization in Zoho Books.

ZohoBooksApi.CreateZohoBookLocation

Create a new location in Zoho Books.

ZohoBooksApi.ListInventoryLocations

Retrieve all available locations from Zoho Inventory.

ZohoBooksApi.UpdateLocationInZohoBooks

Update location details in Zoho Books.

ZohoBooksApi.DeleteLocation

Delete a location from the system.

ZohoBooksApi.ActivateLocation

Marks a location as active.

ZohoBooksApi.MarkLocationInactive

Marks a specific location as inactive in Zoho Books.

ZohoBooksApi.SetPrimaryLocation

Marks a specified location as primary in Zoho Books.

ZohoBooksApi.CreateOpeningBalance

Creates an opening balance for accounts.

ZohoBooksApi.UpdateOpeningBalance

Update the existing opening balance information.

ZohoBooksApi.GetOpeningBalance

Retrieves the opening balance for accounts.

ZohoBooksApi.DeleteOpeningBalance

Delete the entered opening balance in Zoho Books.

ZohoBooksApi.CreateOrganizationInZohoBooks

Create a new organization in Zoho Books.

ZohoBooksApi.ListOrganizations

Retrieve the list of organizations from Zoho Books.

ZohoBooksApi.UpdateOrganizationDetails

Update an organization's details in Zoho Books.

ZohoBooksApi.GetOrganizationDetails

Retrieve details of an organization from Zoho Books.

ZohoBooksApi.CreateProject

Create a new project in Zoho Books.

ZohoBooksApi.ListProjects

Retrieve a list of all projects with pagination.

ZohoBooksApi.UpdateProjectWithCustomField

Update or create projects using a unique custom field.

ZohoBooksApi.UpdateProjectDetails

Update details of a project in Zoho Books.

ZohoBooksApi.GetProjectDetails

Retrieve detailed information of a specific project by ID.

ZohoBooksApi.DeleteProject

Deletes an existing project in Zoho Books.

ZohoBooksApi.ActivateProject

Activate a project in Zoho Books.

ZohoBooksApi.DeactivateProject

Deactivate a project in Zoho Books.

ZohoBooksApi.CloneProject

Clone an existing project in Zoho Books.

ZohoBooksApi.AssignUsersToProject

Assign users to a specific project in Zoho Books.

ZohoBooksApi.ListProjectUsers

Get a list of users associated with a project.

ZohoBooksApi.InviteUserToProject

Invite a user to a project in Zoho Books.

ZohoBooksApi.UpdateProjectUserDetails

Update user details in a specific project.

ZohoBooksApi.GetProjectUserDetails

Fetch details of a user within a project in Zoho Books.

ZohoBooksApi.RemoveUserFromProject

Remove a user from a specific project in Zoho Books.

ZohoBooksApi.PostProjectComment

Post a comment to a specified project.

ZohoBooksApi.GetProjectComments

Retrieve comments for a specified project.

ZohoBooksApi.DeleteProjectComment

Delete a specific comment from a project.

ZohoBooksApi.ListProjectInvoices

Retrieve invoices for a specific project in Zoho Books.

ZohoBooksApi.CreateVendorPurchaseOrder

Generate a purchase order for a vendor.

ZohoBooksApi.ListPurchaseOrders

Retrieve a list of all purchase orders.

ZohoBooksApi.UpdatePurchaseOrderByCustomField

Update or create a purchase order via custom field value.

ZohoBooksApi.UpdatePurchaseOrder

Update an existing purchase order in Zoho Books.

ZohoBooksApi.RetrievePurchaseOrderDetails

Retrieve the details of a purchase order.

ZohoBooksApi.DeletePurchaseOrder

Delete an existing purchase order in Zoho Books.

ZohoBooksApi.UpdateCustomFieldsPurchaseOrder

Update custom field values in purchase orders.

ZohoBooksApi.OpenPurchaseOrder

Mark a draft purchase order as open.

ZohoBooksApi.MarkPurchaseOrderBilled

Mark a purchase order as billed in Zoho Books.

ZohoBooksApi.CancelPurchaseOrder

Cancel a specific purchase order in Zoho Books.

ZohoBooksApi.SubmitPurchaseOrder

Submit a purchase order for approval.

ZohoBooksApi.ApprovePurchaseOrder

Approve a purchase order.

ZohoBooksApi.SendPurchaseOrderEmail

Send a purchase order email to the vendor.

ZohoBooksApi.GetPurchaseOrderEmailContent

Retrieves the email content of a purchase order.

ZohoBooksApi.UpdatePurchaseOrderBillingAddress

Update the billing address for a specific purchase order.

ZohoBooksApi.GetPurchaseOrderTemplates

Retrieve all purchase order PDF templates from Zoho Books.

ZohoBooksApi.RetrievePurchaseOrderAttachment

Retrieve the file attached to a specific purchase order.

ZohoBooksApi.AttachFileToPurchaseOrder

Attach a file to a specified purchase order.

ZohoBooksApi.UpdatePurchaseOrderEmailAttachment

Update email attachment preference for a purchase order.

ZohoBooksApi.DeletePurchaseOrderAttachment

Deletes the attachment from a purchase order.

ZohoBooksApi.GetPurchaseOrderComments

Retrieve comments and history of a purchase order.

ZohoBooksApi.AddPurchaseOrderComment

Add a comment to a purchase order in Zoho Books.

ZohoBooksApi.UpdatePurchaseOrderComment

Update an existing comment on a purchase order.

ZohoBooksApi.DeletePurchaseOrderComment

Delete a comment from a purchase order.

ZohoBooksApi.RejectPurchaseOrder

Reject a specific purchase order in Zoho Books.

ZohoBooksApi.CreateRecurringBill

Create a recurring bill in Zoho Books.

ZohoBooksApi.UpdateRecurringBillCustomField

Update or create a recurring bill using a unique custom field.

ZohoBooksApi.UpdateRecurringBill

Update details of a recurring bill in Zoho Books.

ZohoBooksApi.GetRecurringBillDetails

Retrieve details of a recurring bill from Zoho Books.

ZohoBooksApi.DeleteRecurringBill

Delete an existing recurring bill in Zoho Books.

ZohoBooksApi.StopRecurringBill

Stop an active recurring bill in Zoho Books.

ZohoBooksApi.ResumeRecurringBill

Resume a stopped recurring bill in Zoho Books.

ZohoBooksApi.GetRecurringBillHistory

Get history and comments of a recurring bill.

ZohoBooksApi.CreateRecurringExpense

Create a recurring expense in Zoho Books.

ZohoBooksApi.ListRecurringExpenses

Retrieve all recurring expenses from your records.

ZohoBooksApi.UpdateRecurringExpense

Update or create a recurring expense using a custom field.

ZohoBooksApi.ModifyRecurringExpense

Update a recurring expense in Zoho Books.

ZohoBooksApi.GetRecurringExpenseDetails

Get details of a specific recurring expense in Zoho Books.

ZohoBooksApi.DeleteRecurringExpense

Delete an existing recurring expense in Zoho Books.

ZohoBooksApi.StopRecurringExpense

Stop an active recurring expense in Zoho Books.

ZohoBooksApi.ResumeRecurringExpense

Resumes a stopped recurring expense cycle.

ZohoBooksApi.ListChildExpenses

Retrieve child expenses from a recurring expense.

ZohoBooksApi.GetRecurringExpenseHistory

Get history and comments of a recurring expense.

ZohoBooksApi.CreateRecurringInvoice

Create a new recurring invoice in Zoho Books.

ZohoBooksApi.ListRecurringInvoices

Retrieve details of all recurring invoices.

ZohoBooksApi.UpdateRecurringInvoiceCustomField

Update or create a recurring invoice using a custom field.

ZohoBooksApi.UpdateRecurringInvoice

Update details of a recurring invoice in Zoho Books.

ZohoBooksApi.GetRecurringInvoiceDetails

Retrieve details of a specific recurring invoice.

ZohoBooksApi.DeleteRecurringInvoice

Delete an existing recurring invoice.

ZohoBooksApi.StopRecurringInvoice

Stop an active recurring invoice in Zoho Books.

ZohoBooksApi.ResumeRecurringInvoice

Resumes a stopped recurring invoice.

ZohoBooksApi.UpdateRecurringInvoiceTemplate

Update the PDF template for a recurring invoice.

ZohoBooksApi.GetRecurringInvoiceHistory

Get the complete history and comments of a recurring invoice.

ZohoBooksApi.CreateRetainerInvoice

Create a retainer invoice for a customer.

ZohoBooksApi.ListRetainerInvoices

List all retainer invoices with pagination.

ZohoBooksApi.ModifyInvoice

Update an existing invoice in Zoho Books.

ZohoBooksApi.GetRetainerInvoiceDetails

Retrieve details of a specific retainer invoice.

ZohoBooksApi.DeleteRetainerInvoice

Delete an existing retainer invoice.

ZohoBooksApi.MarkInvoiceSent

Marks a draft retainer invoice as sent.

ZohoBooksApi.ModifyRetainerInvoiceTemplate

Update the PDF template for a retainer invoice.

ZohoBooksApi.VoidRetainerInvoice

Mark a retainer invoice as void.

ZohoBooksApi.MarkRetainerInvoiceAsDraft

Mark a voided retainer invoice as draft.

ZohoBooksApi.SubmitRetainerInvoice

Submit a retainer invoice for approval in Zoho Books.

ZohoBooksApi.ApproveRetainerInvoice

Approve a retainer invoice in Zoho Books.

ZohoBooksApi.EmailRetainerInvoiceToCustomer

Send a retainer invoice to a customer via email.

ZohoBooksApi.RetrieveRetainerInvoiceEmailContent

Retrieve the email content of a retainer invoice.

ZohoBooksApi.UpdateBillingAddressRetainerInvoice

Update billing address for a retainer invoice.

ZohoBooksApi.GetRetainerInvoiceTemplates

Retrieve all retainer invoice PDF templates.

ZohoBooksApi.GetRetainerInvoiceAttachment

Retrieve the file attached to a retainer invoice.

ZohoBooksApi.AttachFileToInvoice

Attach a file to an invoice.

ZohoBooksApi.DeleteRetainerInvoiceAttachment

Delete a file attached to a retainer invoice.

ZohoBooksApi.GetRetainerInvoiceHistory

Get the history and comments of a retainer invoice.

ZohoBooksApi.AddRetainerInvoiceComment

Add a comment to a specific retainer invoice.

ZohoBooksApi.DeleteRetainerInvoiceComment

Remove a specific comment from a retainer invoice.

ZohoBooksApi.UpdateRetainerInvoiceComment

Update a comment on a retainer invoice.

ZohoBooksApi.CreateSalesOrder

Create a sales order for a customer.

ZohoBooksApi.ListSalesOrders

Retrieve a list of all sales orders.

ZohoBooksApi.UpdateSalesOrderWithCustomField

Update or create a sales order using a custom field.

ZohoBooksApi.UpdateSalesOrderInZohoBooks

Update details of an existing sales order in Zoho Books.

ZohoBooksApi.GetSalesOrderDetails

Retrieve details of a specific sales order.

ZohoBooksApi.DeleteSalesOrder

Delete an existing sales order.

ZohoBooksApi.UpdateSalesOrderCustomFields

Update custom fields in existing sales orders efficiently.

ZohoBooksApi.OpenSalesOrder

Mark a draft sales order as open in Zoho Books.

ZohoBooksApi.MarkSalesOrderAsVoid

Mark a sales order as void in Zoho Books.

ZohoBooksApi.UpdateSalesOrderSubStatus

Update the sub status of a sales order in Zoho Books.

ZohoBooksApi.EmailSalesOrderToCustomer

Email a sales order to a customer.

ZohoBooksApi.GetSalesOrderEmailContent

Retrieve email content for a specific sales order.

ZohoBooksApi.SubmitSalesOrderForApproval

Submit a sales order for approval in Zoho Books.

ZohoBooksApi.ApproveSalesOrder

Approve a specified sales order in Zoho Books.

ZohoBooksApi.ExportSalesOrdersPdf

Export sales orders as a single PDF document.

ZohoBooksApi.ExportPrintSalesOrders

Export and print sales orders as PDFs.

ZohoBooksApi.UpdateSalesOrderBillingAddress

Updates the billing address for a specific sales order.

ZohoBooksApi.UpdateShippingAddressSalesOrder

Update the shipping address for a specific sales order.

ZohoBooksApi.GetSalesOrderTemplates

Retrieve all sales order PDF templates from Zoho Books.

ZohoBooksApi.UpdateSalesOrderTemplate

Update the PDF template for a sales order.

ZohoBooksApi.GetSalesOrderAttachment

Retrieve the file attached to a specific sales order.

ZohoBooksApi.AttachFileToSalesOrder

Attach a file to a specific sales order in Zoho Books.

ZohoBooksApi.SetSalesOrderAttachmentPreference

Sets attachment preference for sales order emails.

ZohoBooksApi.DeleteSalesOrderAttachment

Delete an attached file from a sales order in Zoho Books.

ZohoBooksApi.GetSalesOrderComments

Retrieve the history and comments of a sales order.

ZohoBooksApi.AddSalesOrderComment

Add a comment to a sales order in Zoho Books.

ZohoBooksApi.UpdateSalesOrderComment

Update an existing comment on a sales order.

ZohoBooksApi.DeleteSalesOrderComment

Delete a comment from a sales order in Zoho Books.

ZohoBooksApi.CreateSalesReceipt

Create a sales receipt for immediate payment transactions.

ZohoBooksApi.ListSalesReceipts

Retrieve a list of all sales receipts.

ZohoBooksApi.UpdateSalesReceipt

Update an existing sales receipt in Zoho Books.

ZohoBooksApi.GetSalesReceiptDetails

Retrieve the details of a sales receipt.

ZohoBooksApi.DeleteSalesReceipt

Delete an existing sales receipt in Zoho Books.

ZohoBooksApi.EmailSalesReceiptToCustomer

Email a sales receipt to the customer.

ZohoBooksApi.AddProjectTask

Add a task to a specific project.

ZohoBooksApi.GetProjectTasks

Retrieve a list of tasks for a specified project.

ZohoBooksApi.UpdateProjectTask

Update the details of a project task.

ZohoBooksApi.GetTaskDetails

Retrieve detailed information about a specific task in a project.

ZohoBooksApi.DeleteProjectTask

Remove a task from a specific project in Zoho Books.

ZohoBooksApi.CreateAssociatedTax

Create and associate a tax with an item.

ZohoBooksApi.ListTaxes

Retrieve a list of simple and compound taxes.

ZohoBooksApi.UpdateTaxDetails

Update the details of a specified tax.

ZohoBooksApi.GetTaxDetails

Retrieve the details of a specific tax.

ZohoBooksApi.DeleteTax

Delete a simple or compound tax in Zoho Books.

ZohoBooksApi.RetrieveTaxGroupDetails

Retrieve details of a specific tax group.

ZohoBooksApi.UpdateTaxGroupDetails

Update details of a specific tax group in Zoho Books.

ZohoBooksApi.DeleteTaxGroup

Delete a tax group if not associated with transactions.

ZohoBooksApi.CreateTaxGroup

Create a tax group with multiple associated taxes.

ZohoBooksApi.CreateTaxAuthority

Create a tax authority in Zoho Books.

ZohoBooksApi.GetTaxAuthorities

Retrieve the list of tax authorities.

ZohoBooksApi.UpdateTaxAuthorityDetails

Update details of a tax authority.

ZohoBooksApi.GetTaxAuthorityDetails

Retrieve details of a specific tax authority.

ZohoBooksApi.DeleteTaxAuthority

Delete a specific tax authority.

ZohoBooksApi.CreateTaxExemption

Create a tax exemption in Zoho Books.

ZohoBooksApi.GetTaxExemptionsList

Retrieve a list of tax exemptions from Zoho Books.

ZohoBooksApi.UpdateTaxExemptionDetails

Update the details of a tax exemption.

ZohoBooksApi.GetTaxExemptionDetails

Retrieve the details of a tax exemption using its ID.

ZohoBooksApi.DeleteTaxExemption

Delete a specific tax exemption from Zoho Books.

ZohoBooksApi.LogTimeEntries

Log time entries in Zoho Books.

ZohoBooksApi.ListTimeEntries

Retrieve all time entries with pagination.

ZohoBooksApi.DeleteTimeEntries

Delete time tracking entries from projects.

ZohoBooksApi.UpdateTimeEntry

Updates an existing logged time entry.

ZohoBooksApi.GetTimeEntryDetails

Retrieve details of a specific time entry.

ZohoBooksApi.DeleteLoggedTimeEntry

Delete a specific logged time entry.

ZohoBooksApi.StartTimeTracking

Initiate time tracking for a specific entry.

ZohoBooksApi.StopTimeTracking

Stop the timer for a time entry.

ZohoBooksApi.GetCurrentRunningTimer

Retrieve the current running timer for a user.

ZohoBooksApi.CreateOrganizationUser

Create a user for your organization in Zoho Books.

ZohoBooksApi.GetOrganizationUsers

Retrieve the list of all users in the organization.

ZohoBooksApi.UpdateUserDetails

Update user details in Zoho Books.

ZohoBooksApi.GetUserDetails

Retrieve detailed information about a specific user in Zoho Books.

ZohoBooksApi.RemoveUserFromOrganization

Delete a user from the organization.

ZohoBooksApi.GetCurrentUserDetails

Retrieve details of the current user from Zoho Books.

ZohoBooksApi.SendInvitationEmail

Send an invitation email to a user in Zoho Books.

ZohoBooksApi.ActivateInactiveUser

Mark an inactive user as active.

ZohoBooksApi.DeactivateUserAccount

Deactivate a user's account in Zoho Books.

ZohoBooksApi.CreateVendorCredit

Create vendor credit for returns or adjustments.

ZohoBooksApi.ListVendorCredits

Retrieve and filter vendor credits from Zoho Books.

ZohoBooksApi.UpdateVendorCredit

Update an existing vendor credit in Zoho Books.

ZohoBooksApi.GetVendorCreditDetails

Retrieve details of a specific vendor credit.

ZohoBooksApi.DeleteVendorCredit

Delete a vendor credit by its ID.

ZohoBooksApi.OpenVendorCreditStatus

Change a vendor credit status to open in Zoho Books.

ZohoBooksApi.MarkVendorCreditVoid

Mark an existing vendor credit as void in Zoho Books.

ZohoBooksApi.SubmitVendorCreditForApproval

Submit a vendor credit for approval.

ZohoBooksApi.ApproveVendorCredit

Approve a vendor credit in Zoho Books.

ZohoBooksApi.ListBillsWithVendorCredit

List bills with applied vendor credit from a vendor credit ID.

ZohoBooksApi.ApplyVendorCreditToBill

Apply vendor credit to an existing bill in Zoho Books.

ZohoBooksApi.RemoveVendorBillCredit

Delete credits applied to a vendor bill.

ZohoBooksApi.RefundVendorCredit

Process a refund for vendor credit.

ZohoBooksApi.ListVendorCreditRefunds

Retrieve all refunds for a specified vendor credit.

ZohoBooksApi.UpdateVendorCreditRefund

Update a refunded vendor credit transaction.

ZohoBooksApi.GetVendorCreditRefund

Retrieve a refund for a specific vendor credit.

ZohoBooksApi.DeleteVendorCreditRefund

Delete a vendor credit refund in Zoho Books.

ZohoBooksApi.FetchVendorCreditRefunds

Retrieve a paginated list of vendor credit refunds.

ZohoBooksApi.AddVendorCreditComment

Add a comment to an existing vendor credit.

ZohoBooksApi.GetVendorCreditComments

Retrieve history and comments for a vendor credit.

ZohoBooksApi.DeleteVendorCreditComment

Delete a vendor credit comment in Zoho Books.

ZohoBooksApi.CreateVendorPayment

Create and apply a payment to a vendor's bill.

ZohoBooksApi.ListVendorPayments

Fetch all payments made to vendors.

ZohoBooksApi.UpdateVendorPaymentWithCustomId

Update or create a vendor payment using a unique custom field.

ZohoBooksApi.DeleteMultipleVendorPayments

Delete multiple vendor payments in one action.

ZohoBooksApi.UpdateVendorPayment

Update or modify an existing vendor payment.

ZohoBooksApi.FetchVendorPaymentDetails

Retrieve details of a vendor payment by payment ID.

ZohoBooksApi.DeleteVendorPayment

Delete an existing vendor payment in Zoho Books.

ZohoBooksApi.ListVendorPaymentRefunds

List all refunds for a vendor payment.

ZohoBooksApi.RefundVendorOverpayment

Refund excess amount paid to a vendor.

ZohoBooksApi.GetVendorPaymentRefundDetails

Retrieve details of a specific vendor payment refund.

ZohoBooksApi.UpdateVendorPaymentRefund

Update the refunded transaction for a vendor payment.

ZohoBooksApi.DeleteVendorPaymentRefund

Delete a refund from an existing vendor payment.

ZohoBooksApi.SendVendorPaymentEmail

Send a payment receipt email to a vendor.

ZohoBooksApi.GetVendorPaymentEmailContent

Retrieve email content for a vendor payment receipt.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## ZohoBooksApi.CreateBankAccount



Create a bank or credit card account in your organization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which to create the bank or credit card account. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListBankAccounts



List all bank and credit card accounts for your organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. This is required to list all associated bank and credit card accounts in Zoho Books.
-   **account\_status\_filter** (`string`, optional) Specify the status to filter accounts: ‘Status.All’, ‘Status.Active’, or ‘Status.Inactive’.
-   **sort\_by** (`string`, optional) Specify the sorting criterion for the accounts. Options: ‘account\_name’, ‘account\_type’, ‘account\_code’.
-   **page\_number** (`integer`, optional) The page number of results to retrieve. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to be fetched per page. Default value is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBankAccountZohoBooks



Modify a bank account in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to be modified. Required for identifying the specific organization’s bank account. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_account\_id** (`string`, optional) Unique identifier of the bank account to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBankAccountDetails



Retrieve detailed information of a specified bank account.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID for the organization. Required to specify which organization’s data to access.
-   **bank\_account\_id** (`string`, required) Unique identifier used to specify the bank account for detailed retrieval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBankAccount



Delete a bank account from your organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required to identify which organization’s bank account is to be deleted.
-   **bank\_account\_unique\_id** (`string`, required) Unique identifier of the bank account to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeactivateBankAccount



Deactivate a bank account in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books. This is required to identify which organization’s bank account to deactivate.
-   **bank\_account\_id** (`string`, required) Unique identifier of the bank account to deactivate in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateBankAccount



Activate a bank account in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. This ID is required to activate a bank account within the specified organization.
-   **bank\_account\_id** (`string`, required) Unique identifier of the bank account to be activated in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ImportBankStatements



Import bank or credit card feeds into your account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to import bank statements for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetLastImportedBankStatement



Retrieve the last imported bank statement details for an account.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization used to retrieve the bank statement.
-   **bank\_account\_id** (`string`, required) Unique identifier of the bank account for retrieving the last imported statement.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteLastImportedBankStatement



Delete the last imported bank statement.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. This is required to specify which organization’s bank statement needs to be deleted.
-   **bank\_account\_unique\_identifier** (`string`, required) Unique identifier for the bank account from which the statement will be deleted.
-   **bank\_statement\_id** (`string`, required) Unique identifier of the bank statement to be deleted. Required for identifying which statement to remove.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchBankAccountRules



Fetch rules for a specified bank account.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. This ID is necessary to fetch the rules linked with the specified bank or credit card account.
-   **bank\_account\_id** (`integer`, required) ID of the bank or credit card account to fetch rules for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateFinancialAccountRule



Create and apply rules for banking and credit accounts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Used to specify which organization’s account rules are being altered. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBankAccountRuleDetails



Retrieve details of a specific bank account rule.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which to retrieve the bank account rule details.
-   **bank\_account\_rule\_id** (`string`, required) Unique identifier of the bank account rule to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBankAccountRule



Update or modify a bank account rule in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books for which the bank account rule needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_account\_rule\_id** (`string`, optional) Unique identifier for the bank account rule to update in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBankAccountRule



Deletes a bank account rule, removing its effect on transactions.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID representing the organization. Required for identifying the correct account.
-   **bank\_account\_rule\_id** (`string`, required) Unique identifier of the bank account rule to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateBankTransaction



Creates a bank transaction in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the bank transaction is to be created. This ID helps identify the specific organization within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBankTransactions



Retrieve all transaction details for a bank account.

**Parameters**

-   **organization\_id** (`string`, required) A unique ID representing the organization for which transactions are being queried. This is required to specify the context of the request.
-   **bank\_account\_id** (`integer`, optional) Unique identifier for the bank account to retrieve transactions for.
-   **transaction\_type\_filter** (`string`, optional) Specify the type of transactions to retrieve. Expected as a string, e.g., ‘expense’, ‘income’.
-   **transaction\_date\_range** (`string`, optional) Specify the start and end date for the transaction date range. Use ‘date\_start’ for the start and ‘date\_end’ for the end date.
-   **transaction\_amount\_range** (`number`, optional) Set a range of transaction amounts to filter transactions. Use two numbers: start amount, end amount.
-   **transaction\_status\_list\_view** (`string`, optional) Filter transactions by status: all, uncategorized, manually\_added, matched, excluded, categorized.
-   **transaction\_reference\_number** (`string`, optional) Search for a transaction using its reference number for more precise results.
-   **transaction\_filter\_type** (`string`, optional) Filter transactions by type: Status.All, Status.Uncategorized, Status.Categorized, Status.ManuallyAdded, Status.Excluded, Status.Matched.
-   **sort\_transactions\_by** (`string`, optional) Specify how to sort transactions. Allowed value: ‘date’.
-   **transaction\_status\_filter** (`string`, optional) Filter transactions by status: All, uncategorized, manually\_added, matched, excluded, categorized.
-   **search\_transactions\_by\_text** (`string`, optional) Search transactions using contact name or transaction description.
-   **transaction\_page\_number** (`integer`, optional) Page number of transactions to fetch, with a default value of 1. Used for pagination.
-   **records\_per\_page** (`integer`, optional) Specify the number of transaction records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBankTransaction



Update details of a specific bank transaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books for which the bank transaction is being updated. This is required to specify the organization context for the transaction update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_identifier** (`string`, optional) Unique identifier for the specific bank transaction to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchBankTransactionDetails



Fetch details of a specific bank transaction by ID.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the bank transaction details need to be fetched.
-   **bank\_transaction\_id** (`string`, required) Unique identifier for the bank transaction to fetch its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBankTransaction



Delete a bank transaction using its ID.

**Parameters**

-   **organization\_id** (`string`, required) Specify the ID of the organization to target for transaction deletion.
-   **bank\_transaction\_id** (`string`, required) Unique identifier for the bank transaction to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FindMatchingBankTransactions



Find matching uncategorized bank transactions.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to search transactions for.
-   **transaction\_id** (`string`, required) Unique identifier for the bank transaction to search for matching entries.
-   **bank\_transaction\_id** (`string`, required) Unique identifier of the bank transaction to be matched.
-   **transaction\_type** (`string`, optional) Specify the type of transaction. Allowed values: deposit, refund, transfer\_fund, card\_payment, sales\_without\_invoices, expense\_refund, owner\_contribution, interest\_income, other\_income, owner\_drawings, sales\_return. Note: Some types are module-specific and cannot be created under this endpoint.
-   **filter\_date\_after** (`string`, optional) Specify the date after which transactions should be filtered. Use YYYY-MM-DD format.
-   **filter\_date\_before** (`string`, optional) Specify a date in YYYY-MM-DD format. Transactions before this date will be filtered.
-   **minimum\_transaction\_amount** (`number`, optional) Minimum amount to filter transactions. Only transactions equal to or greater than this amount are included.
-   **maximum\_transaction\_amount** (`number`, optional) Maximum amount for filtering transactions. Only transactions with an amount less than or equal to this value will be included.
-   **transaction\_contact\_name** (`string`, optional) Name of the contact person involved in the transaction.
-   **transaction\_reference\_number** (`string`, optional) Reference number of the transaction to filter matching records.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number to fetch. Default is 1, used for pagination.
-   **records\_per\_page** (`integer`, optional) Number of records to be fetched per page. The default value is 200.
-   **show\_all\_transactions** (`boolean`, optional) Set to true to display all transactions without applying filters; false to filter transactions.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MatchBankTransaction



Match an uncategorized bank transaction with an existing one.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_id** (`string`, optional) Unique identifier of the bank transaction to be matched. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **account\_id** (`string`, optional) The mandatory Account ID for listing transactions to match. This is required to specify the bank account in Zoho Books. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UnmatchBankTransaction



Unmatch a previously matched bank transaction.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the transaction unmatching is to be performed.
-   **transaction\_id** (`string`, required) The unique identifier of the bank transaction to be unmatched.
-   **account\_id\_for\_transactions** (`string`, optional) The mandatory ID of the account for which transactions are to be unlisted. This is essential to specify the correct account involved in the transaction.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExcludeBankTransaction



Exclude a transaction from a bank or credit card account.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to which the transaction belongs.
-   **transaction\_id** (`string`, required) Unique identifier of the bank transaction to be excluded.
-   **account\_id\_for\_transaction\_exclusion** (`string`, optional) The ID of the account from which a transaction will be excluded. This is a mandatory field.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RestoreBankTransaction



Restores an excluded bank transaction in your account.

**Parameters**

-   **organization\_id** (`string`, required) ID of the Zoho Books organization to restore the transaction for.
-   **bank\_transaction\_id** (`string`, required) The unique identifier for the specific bank transaction to be restored.
-   **account\_id** (`string`, optional) Mandatory Account ID for which transactions are to be restored.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeBankTransaction



Categorize an uncategorized bank transaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) Provide the ID of the organization to categorize the transaction. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_id** (`string`, optional) Unique identifier of the bank transaction to be categorized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeBankTransactionAsExpense



Categorize an uncategorized bank transaction as an expense.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization in Zoho Books. Required to identify which organization’s transaction is being categorized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_id** (`string`, optional) Unique identifier for the bank transaction to be categorized as an expense. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attachment\_document** (`string`, optional) Document file to attach with the transaction as a string (e.g., base64 encoded or URL). Only used when mode is ‘execute’.
-   **total\_number\_of\_files** (`integer`, optional) Total count of files to be attached to the transaction. Only used when mode is ‘execute’.
-   **document\_identifiers** (`integer`, optional) Comma-separated list of document IDs to be attached to the transaction. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UncategorizeBankTransaction



Revert a categorized bank transaction to uncategorized.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books for which the transaction is to be uncategorized.
-   **bank\_transaction\_id** (`string`, required) Unique identifier of the bank transaction to uncategorize.
-   **account\_id\_for\_transactions** (`string`, optional) The mandatory Account ID for which transactions are to be listed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeTransactionAsVendorPayment



Categorize a bank transaction as a vendor payment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique string ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **transaction\_id** (`string`, optional) Unique identifier of the bank transaction to categorize as vendor payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeTransactionAsPayment



Categorize an uncategorized transaction as a Customer Payment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization in Zoho Books for which the transaction is being categorized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_id** (`string`, optional) Unique identifier of the bank transaction to be categorized as Customer Payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeTransactionAsRefund



Categorize a transaction as a credit note refund.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Must match the organization in Zoho Books to categorize transactions accurately. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **transaction\_id** (`string`, optional) Unique identifier of the bank transaction to categorize as a refund from a credit note. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeRefundVendorCredit



Categorize transactions as vendor credit refunds.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Specify the ID of the organization for which the transaction is being categorized as a vendor credit refund. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_transaction\_id** (`string`, optional) Unique identifier of the bank transaction to categorize as a vendor credit refund. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeBankTransactionPaymentRefund



Categorize bank transactions as payment refunds.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_statement\_line\_id** (`string`, optional) Unique identifier for the bank statement line to be categorized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CategorizeVendorPaymentRefund



Categorize bank transactions as Vendor Payment Refund.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization whose transactions are being categorized. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bank\_statement\_line\_id** (`string`, optional) Unique identifier for the bank statement line to categorize as Vendor Payment Refund. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCurrencyAdjustment



Create a base currency adjustment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization in Zoho Books. Required for currency adjustments. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **account\_identifiers** (`string`, optional) Comma-separated IDs of accounts for currency adjustments in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListBaseCurrencyAdjustments



Fetch base currency adjustments list from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve currency adjustments from.
-   **filter\_by\_date** (`string`, optional) Filter the base currency adjustment list by specific date ranges. Allowed values are: Date.All, Date.Today, Date.ThisWeek, Date.ThisMonth, Date.ThisQuarter, Date.ThisYear.
-   **sort\_currency\_adjustment\_list\_by** (`string`, optional) Specify the sorting criterion for the currency adjustment list. Options include: adjustment\_date, exchange\_rate, currency\_code, debit\_or\_credit, or gain\_or\_loss.
-   **search\_by\_last\_modified\_time** (`string`, optional) Use a timestamp to filter adjustments by their last modified time.
-   **fetch\_page\_number** (`integer`, optional) The page number to fetch. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBaseCurrencyAdjustmentDetails



Retrieve base currency adjustment details by ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose currency adjustment details are being retrieved.
-   **base\_currency\_adjustment\_identifier** (`string`, required) Unique identifier of the base currency adjustment to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCurrencyAdjustment



Deletes the specified base currency adjustment.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization whose currency adjustment you want to delete.
-   **base\_currency\_adjustment\_id** (`string`, required) Unique identifier of the base currency adjustment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCurrencyAdjustmentAccounts



Retrieve accounts involved in currency adjustments.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the currency adjustment accounts are needed.
-   **currency\_id\_for\_adjustment** (`string`, required) ID of the currency to post an adjustment for. This specifies which currency is being adjusted.
-   **adjustment\_date** (`string`, required) Specify the date for the currency adjustment in YYYY-MM-DD format.
-   **exchange\_rate** (`number`, required) Specify the exchange rate for the currency to affect transactions.
-   **adjustment\_notes** (`string`, required) Notes for the base currency adjustment, providing additional information or context.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateVendorBill



Create a bill received from your vendor.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in which the bill will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attachment\_file\_path** (`string`, optional) Path to the file to attach. Accepts GIF, PNG, JPEG, JPG, BMP, and PDF formats. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListAllBills



Retrieve all bills with pagination support.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s bills to list.
-   **filter\_by\_bill\_number** (`string`, optional) Filter bills using the bill number. Use exact matches, prefix with ‘bill\_number\_startswith’, or substring with ‘bill\_number\_contains’.
-   **filter\_by\_reference\_number** (`string`, optional) Filter bills by reference number. Supports exact matches, prefix matching using `reference_number_startswith`, and substring matching using `reference_number_contains`. Useful for finding bills by external references or vendor invoice numbers.
-   **bill\_date\_filter** (`string`, optional) Filter bills by bill date in YYYY-MM-DD format. Use for specific dates, date ranges (date\_start/date\_end), or relative dates (date\_before/date\_after).
-   **filter\_by\_status** (`string`, optional) Specify the status of bills to filter by. Options include ‘paid’, ‘open’, ‘overdue’, ‘void’, or ‘partially\_paid’.
-   **filter\_by\_description\_text** (`string`, optional) Filter bills using description text. Supports exact matches, prefix matching with ‘description\_startswith’, or substring matching with ‘description\_contains’. Useful for finding bills by line item descriptions or vendor notes.
-   **filter\_by\_vendor\_name** (`string`, optional) Filter bills by vendor name. Use prefix matching with ‘vendor\_name\_startswith’ or substring matching with ‘vendor\_name\_contains’.
-   **filter\_by\_total\_amount** (`number`, optional) Filter bills by total amount using conditions like less than, greater than, etc. Specify conditions using keys like ‘total\_less\_than’ or ‘total\_greater\_than’.
-   **filter\_by\_vendor\_id** (`integer`, optional) Unique identifier to filter bills by a specific vendor, retrieving all related bills.
-   **filter\_by\_item\_id** (`integer`, optional) Filter bills by a specific item ID. Retrieves all bills containing a particular product or service item based on its unique identifier.
-   **recurring\_bill\_identifier** (`integer`, optional) Filter bills by a specific recurring bill ID to retrieve all bills generated from a recurring template or schedule.
-   **filter\_by\_purchase\_order\_id** (`integer`, optional) Specify the Purchase Order ID to filter bills associated with a specific order. Helps track procurement workflows.
-   **filter\_by\_last\_modified\_time** (`string`, optional) Filter bills by last modification timestamp using ISO 8601 format (YYYY-MM-DDTHH:MM:SS+/-HHMM) to find bills modified at or after a specific time.
-   **bill\_status\_filter** (`string`, optional) Filter bills by status. Options: Status.All, Status.PartiallyPaid, Status.Paid, Status.Overdue, Status.Void, Status.Open.
-   **search\_text** (`string`, optional) Filter bills using general text across bill number, reference number, and vendor name to find matches. Useful for quick searches.
-   **page\_number** (`integer`, optional) Specify the page number for pagination to navigate multiple pages of bills.
-   **bills\_per\_page** (`integer`, optional) Specify the number of bills to retrieve per page. Default is 200, but adjustable for performance needs and rate limits.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort bills by. Available options: vendor\_name, bill\_number, date, due\_date, total, balance, created\_time.
-   **sorting\_order** (`string`, optional) Specify the sort order for bills: ‘A’ for ascending, ‘D’ for descending.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBillByCustomField



Update or create a bill using a custom field identifier.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the bill is to be updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_identifier\_key** (`string`, optional) Specify the API name of the custom field with unique values for identifying the bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_unique\_value** (`string`, optional) Provide the unique value from the custom field to identify and update the specific bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **enable\_upsert** (`boolean`, optional) Set to true to enable upsert functionality. Creates a new bill if no existing bill matches the custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBillInZoho



Updates a bill by modifying details in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required for updating a bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_unique\_identifier** (`string`, optional) The unique identifier for the bill to be updated in Zoho Books. Ensure this matches the bill you intend to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **file\_attachment** (`string`, optional) File to attach. Allowed extensions: gif, png, jpeg, jpg, bmp, pdf. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveBillDetails



Retrieve the details of a specific bill.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which the bill details are being retrieved.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to retrieve its details. This should be provided as a string.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteExistingBill



Deletes an existing bill if no payments are applied.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books needed to delete the bill.
-   **bill\_identifier** (`string`, required) The unique identifier of the bill you wish to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomFieldsInBill



Update custom fields in existing bills.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the bill’s custom fields are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_identifier** (`string`, optional) Unique identifier of the bill to update its custom fields. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkBillVoid



Mark a bill as void in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Used to specify which organization’s bill should be marked as void.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to mark as void in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkBillOpen



Mark a void bill as open in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization in Zoho Books to mark the bill as open.
-   **bill\_id** (`string`, required) Unique identifier of the bill to mark as open in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitBillForApproval



Submit a bill for approval in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books for which the bill is being submitted.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveBill



Approve a bill in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization for which the bill needs approval.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to be approved in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBillingAddress



Updates the billing address for a specified bill.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the billing address is being updated. This identifier is necessary to access specific organizational data. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_unique\_identifier** (`string`, optional) Provide the unique identifier for the bill to update its billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBillPaymentsList



Retrieve the list of payments made for a specific bill.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which to retrieve bill payments.
-   **bill\_identifier** (`string`, required) Unique identifier for the specific bill to retrieve payment details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApplyVendorCreditsToBill



Apply vendor credits to a bill.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization where credits are being applied. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_identifier** (`string`, optional) Unique identifier for the bill to apply credits to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBillPayment



Delete a payment made to a bill.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books for which the bill payment is to be deleted.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to be deleted.
-   **bill\_payment\_identifier** (`string`, required) Unique identifier of the bill payment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveBillAttachment



Retrieve the attachment from a specific bill.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to specify which organization’s bill attachment to retrieve.
-   **bill\_identifier** (`string`, required) The unique identifier of the bill to retrieve its attachment.
-   **get\_thumbnail** (`boolean`, optional) Set to true to get the thumbnail of the attachment instead of the full file.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachFileToBill



Attach a file to a specific bill.

**Parameters**

-   **organization\_identifier** (`string`, required) The ID of the organization in Zoho Books to which the bill belongs.
-   **bill\_id** (`string`, required) Unique identifier of the bill for which the file will be attached. Use this to specify the target bill in Zoho Books.
-   **file\_attachment** (`string`, optional) File to attach to the bill. Accepted formats: gif, png, jpeg, jpg, bmp, pdf.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBillAttachment



Delete the file attached to a specific bill.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization within Zoho Books. This is required to specify which organization’s bill attachment is to be deleted.
-   **bill\_unique\_identifier** (`string`, required) Unique identifier for the specific bill whose attachment is to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetBillHistory



Retrieve the complete history and comments for a bill.

**Parameters**

-   **organization\_id** (`string`, required) String identifier for the organization whose bill history and comments you wish to retrieve.
-   **bill\_identifier** (`string`, required) Unique identifier of the bill to retrieve its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddCommentToBill



Add a comment to a specific bill in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization in Zoho Books. Required to specify which organization’s bill to comment on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_identifier** (`string`, optional) Unique identifier for the bill to add a comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteBillComment



Delete a specific comment from a bill in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization from which the bill comment will be deleted.
-   **bill\_identifier** (`string`, required) The unique identifier for the bill from which the comment will be deleted. This ID is necessary to specify the correct bill in Zoho Books.
-   **comment\_id** (`string`, required) Unique identifier of the comment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ConvertPurchaseOrderToBill



Fetch bill payload from purchase orders.

**Parameters**

-   **organization\_id** (`string`, required) Enter the ID of the organization for which the bill will be created.
-   **purchase\_order\_ids** (`string`, required) Comma-separated IDs of the purchase orders to be converted into a bill.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateChartOfAccount



Creates an account with a specified account type.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the account is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListChartOfAccounts



Retrieve a list of all chart of accounts.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to retrieve chart of accounts for.
-   **account\_type\_filter** (`string`, optional) Filter accounts based on type and status. Options: AccountType.All, AccountType.Active, AccountType.Inactive, AccountType.Asset, AccountType.Liability, AccountType.Equity, AccountType.Income, AccountType.Expense.
-   **sort\_accounts\_by** (`string`, optional) Specify how to sort the accounts. Options: ‘account\_name’, ‘account\_type’.
-   **last\_modified\_time\_filter** (`string`, optional) Fetch accounts modified since a specific timestamp, formatted as YYYY-MM-DDTHH:MM:SSZ.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of records to retrieve per page. Defaults to 200 if not specified.
-   **include\_balance** (`boolean`, optional) Include current account balances in the response when set to true.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateAccountInfo



Updates account information in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The ID of the organization for which the account will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **account\_identifier** (`string`, optional) Unique identifier for the account to update in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetAccountDetails



Retrieve detailed information for a specified account.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to which the account belongs.
-   **account\_unique\_id** (`string`, required) Unique identifier for the account details request.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteAccount



Delete a chart of account in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books.
-   **account\_identifier** (`string`, required) The unique identifier for the account to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateChartOfAccount



Activate a chart of account in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books that needs the account to be activated.
-   **account\_unique\_identifier** (`string`, required) Unique identifier of the account to be activated in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeactivateChartOfAccount



Deactivate a specific chart of account.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to deactivate the chart of account for.
-   **account\_identifier** (`string`, required) The unique identifier of the account to be deactivated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListAccountTransactions



Retrieve transactions for a specified account.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization whose account transactions are being queried.
-   **account\_id** (`string`, required) The unique ID of the account to retrieve transactions for.
-   **transaction\_date\_range** (`string`, optional) Specify a date range for searching transactions. Use ‘yyyy-mm-dd’ format. Supports ‘date.start’, ‘date.end’, ‘date.before’, and ‘date.after’.
-   **amount\_range** (`number`, optional) Specify the amount range to filter account transactions. Use fields like less\_than, less\_equals, greater\_than, and greater\_equals to define the criteria.
-   **filter\_by\_account\_type** (`string`, optional) Filter accounts based on account type and status. Options: AccountType.All, AccountType.Active, AccountType.Inactive, AccountType.Asset, AccountType.Liability, AccountType.Equity, AccountType.Income, AccountType.Expense.
-   **transaction\_type** (`string`, optional) Filter transactions by type, such as ‘invoice’, ‘expense’, or ‘refund’.
-   **sort\_by** (`string`, optional) Specify the column to sort transactions. Possible values: ‘account\_name’, ‘account\_type’.
-   **page\_number** (`integer`, optional) Page number to be fetched for the transaction list. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to be fetched per page. Default is 200. Specify a custom integer to override.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTransaction



Delete a specified accounting transaction.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books for which the transaction will be deleted.
-   **transaction\_identifier** (`string`, required) Unique identifier for the transaction to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateContactPerson



Create a contact person for a contact in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization where the contact person will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateContactPerson



Update an existing contact person’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID representing the organization whose contact person is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_person\_identifier** (`string`, optional) Unique identifier for the contact person to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteContactPerson



Delete an existing contact person from the records.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to identify which entity the contact person belongs to.
-   **contact\_person\_id** (`string`, required) Unique identifier for the contact person to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListContactPersons



Retrieve contact persons for a given contact ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the contact persons are being retrieved.
-   **contact\_identifier** (`string`, required) Unique identifier for the contact to retrieve associated persons.
-   **page\_number** (`integer`, optional) The page number to fetch when listing contact persons. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specifies the number of contact records to retrieve per page. The default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetContactPersonDetails



Retrieve details of a specific contact person.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. This identifies which organization the contact person belongs to.
-   **contact\_identifier** (`string`, required) Unique identifier for the contact in Zoho Books.
-   **contact\_person\_identifier** (`string`, required) Unique identifier of the contact person in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkPrimaryContactPerson



Mark a contact person as primary for a contact.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization. This is required to specify which organization’s contact is being updated.
-   **contact\_person\_identifier** (`string`, required) Unique identifier for the contact person to be marked as primary.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateBusinessContact



Create a new business contact with comprehensive details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization for which the contact is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveContactList



Retrieve and filter a list of contacts from Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) Provide the ID of the organization to retrieve relevant contact data.
-   **filter\_contact\_by\_type** (`string`, optional) Filter contacts by type. Accepts ‘customer’ or ‘vendor’.
-   **contact\_name\_filter** (`string`, optional) Filter contacts by name. Use ‘startswith’ or ‘contains’ for match type. Max-length: 100 characters.
-   **search\_by\_company\_name** (`string`, optional) Search contacts by company name. Maximum length is 100 characters. Use variants like ‘company\_name\_startswith’ and ‘company\_name\_contains’ for different search methods.
-   **primary\_contact\_first\_name** (`string`, optional) Search contacts by the first name of the primary contact person. Use ‘first\_name\_startswith’ or ‘first\_name\_contains’. Max-length 100.
-   **search\_by\_last\_name** (`string`, optional) Search contacts by last name of the primary contact person. Supports ‘startswith’ or ‘contains’ options. Max-length 100.
-   **address\_search** (`string`, optional) Search contacts by address field. Use ‘address\_startswith’ or ‘address\_contains’. Max-length 100.
-   **email\_search\_criteria** (`string`, optional) Search contacts by email of the primary contact person. Use ‘startswith’ or ‘contains’ in the string to specify the search variant. Max length is 100 characters.
-   **contact\_phone\_number** (`string`, optional) Search contacts by primary contact’s phone number. Supports ‘startswith’ and ‘contains’ variants. Max length of 100 characters.
-   **contact\_status\_filter** (`string`, optional) Filter contacts by status. Options include All, Active, Inactive, Duplicate, PortalEnabled, PortalDisabled, OverDue, Unpaid, CreditLimitExceed, and Crm.
-   **search\_contacts\_text** (`string`, optional) Search contacts using contact name or notes. Maximum length is 100 characters.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort contacts by. Allowed values: contact\_name, first\_name, last\_name, email, outstanding\_receivable\_amount, created\_time, and last\_modified\_time.
-   **crm\_contact\_id** (`string`, optional) CRM Contact ID to filter specific contact details.
-   **crm\_account\_id** (`string`, optional) Specify the CRM Account ID for the contact to retrieve specific contact details.
-   **crm\_vendor\_id** (`string`, optional) The CRM Vendor ID associated with the contact, used to filter results.
-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number to be fetched. Defaults to 1 if not provided.
-   **records\_per\_page** (`integer`, optional) The number of contact records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateContactByCustomField



Update a contact using a unique custom field value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books. This is required to specify which organization’s records to update or create. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to identify the contact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value of the custom field used to identify the contact. Must be a non-duplicate value. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_contact\_if\_not\_found** (`boolean`, optional) Set to true to create a new contact if the unique custom field value isn’t found. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBusinessContact



Update detailed information for an existing business contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization to which the contact belongs. This is required for identifying the organization context for the update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_id** (`string`, optional) Unique identifier for the contact to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveContactDetails



Retrieve comprehensive details of a specific contact.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier of the organization for which the contact details are being retrieved.
-   **contact\_id** (`string`, required) Unique identifier for the contact to retrieve detailed information.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteContact



Delete an existing contact from the system.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization from which the contact will be deleted.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier of the contact to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateContact



Activate a contact in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to which the contact belongs.
-   **contact\_identifier** (`string`, required) Unique identifier of the contact to be marked as active.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkContactInactive



Mark a Zoho Books contact as inactive.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books.
-   **contact\_identifier** (`string`, required) Unique identifier of the contact in Zoho Books. Required to specify which contact to mark as inactive.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EnableContactPortalAccess



Enable portal access for a specified contact in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization within Zoho Books, required to enable portal access for a contact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_unique\_id** (`string`, optional) Unique identifier for the specific contact whose portal access is to be enabled. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EnablePaymentReminder



Enable automated payment reminders for a contact.

**Parameters**

-   **organization\_id** (`string`, required) Provide the unique ID of the organization for which to enable payment reminders.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier of the contact for whom the payment reminder is enabled.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DisableContactPaymentReminder



Disable automated payment reminders for a contact.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books for which payment reminders will be disabled.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier of the contact to disable payment reminders for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EmailContactStatement



Sends an email statement to a specified contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to send the email statement to a specified contact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_identifier** (`string`, optional) Unique identifier of the contact to send the statement to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **statement\_start\_date** (`string`, optional) The starting date for the statement in the format \[yyyy-mm-dd\]. If omitted, the current month will be used. Only used when mode is ‘execute’.
-   **statement\_end\_date** (`string`, optional) End date for the statement in the format \[yyyy-mm-dd\]. If not provided, the current month’s statement will be sent. Only used when mode is ‘execute’.
-   **attachment\_files** (`string`, optional) Files to be attached with the statement email, in multipart/form-data format. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetContactStatementMailContent



Retrieve the statement email content for a contact.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to retrieve statement mail content for the contact.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier for the contact to retrieve the statement mail content.
-   **statement\_start\_date** (`string`, optional) Start date for the statement. Use format \[yyyy-mm-dd\]. Defaults to current month if not provided.
-   **statement\_end\_date** (`string`, optional) End date for the statement in the format \[yyyy-mm-dd\].

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendEmailToContact



Send an email directly to a specified contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization to which the contact belongs. It is required for sending the email. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_id** (`string`, optional) Unique identifier for the contact to send the email to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **send\_customer\_statement\_with\_email** (`boolean`, optional) Indicate if a customer statement PDF should be sent with the email. Use ‘true’ to send, ‘false’ otherwise. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetContactActivityRecentComments



Retrieve recent comments for a specific contact.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose contact comments you want to retrieve.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier of the contact to retrieve recent comments.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number to be fetched. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to be fetched per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetContactAddresses



Retrieve addresses for a specified contact.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. This ID is necessary to fetch the contact’s addresses within the specified organization.
-   **contact\_id** (`string`, required) Unique identifier of the contact in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddContactAddress



Add an additional address to a contact in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the contact address will be added. This is required to specify the target organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_id** (`string`, optional) The unique identifier for the contact to which an address will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateContactAddress



Edit the additional address of a contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This is required to specify which organization’s contact address needs updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_identifier** (`string`, optional) Unique identifier of the contact to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **address\_identifier** (`string`, optional) Unique identifier of the address to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteContactAddress



Deletes an additional address of a contact.

**Parameters**

-   **organization\_id** (`string`, required) Unique ID of the organization in Zoho Books required for address deletion.
-   **contact\_unique\_id** (`string`, required) Unique identifier for the contact whose address you want to delete.
-   **address\_identifier** (`string`, required) Unique identifier of the address to be deleted for the specified contact.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetContactRefundHistory



Retrieve the refund history of a specific contact.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required to access the specific account data.
-   **contact\_unique\_identifier** (`string`, required) Unique identifier of the contact in Zoho Books for refund history retrieval.
-   **page\_number** (`integer`, optional) The page number to fetch for the contact’s refund history. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specifies how many refund records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.TrackContactFor1099Reporting



Track a contact for 1099 reporting in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization in Zoho Books required for 1099 reporting. This should be the ID specific to the organization tracked in the U.S.A.
-   **contact\_unique\_id** (`string`, required) Unique identifier of the contact for 1099 tracking.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.Stop1099TrackingForVendor



Stop 1099 payment tracking for a vendor in the U.S.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization where 1099 tracking will be stopped.
-   **vendor\_contact\_id** (`string`, required) Unique identifier of the vendor contact to stop 1099 tracking.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveUnusedRetainerPayments



Retrieve unused retainer payments for a contact.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization to filter retainer payments.
-   **contact\_id** (`string`, required) The unique identifier for the contact whose unused retainer payments are being retrieved. This is required to specify which contact’s data you want to access.
-   **filter\_by\_currency\_id** (`string`, optional) Currency ID to filter unused retainer payments by a specific currency.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCreditNote



Create a new credit note for customer adjustments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the credit note is being created. Required for identifying the correct entity within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_id** (`string`, optional) Invoice ID for the required invoice to associate with the credit note. Only used when mode is ‘execute’.
-   **use\_custom\_credit\_note\_number** (`boolean`, optional) Set to true to provide your own credit note number, bypassing auto-numbering. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCreditNotes



Retrieve and filter a list of credit notes.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which you want to list credit notes. Required for identification and retrieval.
-   **credit\_note\_number** (`string`, optional) Filter credit notes by a specific credit note number. The number must be a unique identifier, up to 100 characters.
-   **filter\_date** (`string`, optional) Filter credit notes by the date they were raised. Use yyyy-mm-dd format to search for specific credit notes.
-   **filter\_by\_status** (`string`, optional) Specify the status to filter credit notes. Options include: ‘open’, ‘closed’, ‘void’, or ‘draft’.
-   **filter\_by\_total\_amount** (`number`, optional) Filter credit notes by their total amount. Input a specific total value to retrieve matching credit notes.
-   **filter\_by\_reference\_number** (`string`, optional) Filter credit notes by their reference number, limited to 100 characters.
-   **filter\_by\_customer\_name** (`string`, optional) Filter credit notes by customer name. Use to search for credit notes associated with a specific customer. Max-Length is 100 characters.
-   **filter\_by\_item\_name** (`string`, optional) Search for credit notes by item name. Maximum length is 100 characters.
-   **filter\_by\_customer\_id** (`string`, optional) Search for credit notes associated with a specific customer using the customer ID. Retrieve customer IDs from the contacts API.
-   **filter\_by\_item\_description** (`string`, optional) Filter credit notes by item description. Use ‘startswith:’ or ‘contains:’ for flexible matching. Max length of 100 characters.
-   **filter\_by\_item\_id** (`string`, optional) Filter credit notes by item ID to find notes containing a specific item. Obtain item IDs from the items API.
-   **filter\_by\_line\_item\_id** (`string`, optional) Search for credit notes containing a specific line item using its ID.
-   **filter\_by\_tax\_id** (`string`, optional) Filter credit notes using a specific tax ID. Retrieve the tax ID from the taxes API.
-   **status\_filter** (`string`, optional) Filter credit notes by status using predefined values: ‘Status.All’, ‘Status.Open’, ‘Status.Draft’, ‘Status.Closed’, ‘Status.Void’.
-   **search\_text** (`string`, optional) Search credit notes across multiple fields like credit note number, customer name, and reference number. Max-length is 100 characters.
-   **sort\_credit\_notes\_by\_column** (`string`, optional) Specify the column by which to sort the credit notes. Allowed values: ‘customer\_name’, ‘creditnote\_number’, ‘balance’, ‘total’, ‘date’, and ‘created\_time’.
-   **page\_number** (`integer`, optional) Page number for pagination. Specify which page of results to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify the number of credit notes to be returned per page for pagination. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCreditNoteWithCustomField



Update or create a credit note using a custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization to which the credit note belongs. This identifies the target organization for the update or creation operation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_key** (`string`, optional) The API name of the unique custom field used to identify the credit note. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_unique\_value** (`string`, optional) The unique value for the custom field used to identify the credit note to update or create. Ensure this matches the specific custom field’s unique value constraints. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_credit\_note\_if\_not\_found** (`boolean`, optional) Set to true to create a new credit note if the unique custom field value isn’t found in existing credit notes. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCreditNoteDetails



Update details of an existing credit note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to specify which organization’s credit note to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_unique\_identifier** (`string`, optional) Unique identifier for the credit note to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to provide your own credit note number instead of using the auto-generated one. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCreditNoteDetails



Retrieve details of a specific credit note using its ID.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books.
-   **credit\_note\_id** (`string`, required) The unique identifier of the credit note to retrieve details for. This ID is essential for accessing the specific credit note information.
-   **response\_format** (`string`, optional) Specify the format of the credit note details: json, pdf, or html. Default is html.
-   **export\_with\_default\_print\_option** (`boolean`, optional) Specify whether to export the credit note PDF with the default print option. Use ‘true’ or ‘false’.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCreditNote



Delete an existing credit note using its ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose credit note you wish to delete.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EmailCreditNote



Send a credit note via email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) ID of the organization for which the credit note is being emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_id** (`string`, optional) Unique identifier of the credit note to be emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_id\_for\_credit\_note** (`string`, optional) Customer ID for whom the credit note is raised. Used to identify the recipient of the email. Only used when mode is ‘execute’.
-   **email\_attachments** (`string`, optional) The file paths or URLs of files to attach to the email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCreditNoteEmailContent



Retrieve email content for a given credit note.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to retrieve the credit note email content for. This is a required field.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to retrieve its email content.
-   **specified\_email\_template\_id** (`string`, optional) ID of a specific email template. If not provided, defaults to customer’s or the default template.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkCreditNoteVoid



Marks a credit note as void in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books to mark the credit note as void.
-   **credit\_note\_identifier** (`string`, required) Unique identifier of the credit note to mark as void in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ConvertCreditNoteToDraft



Convert a voided credit note to a draft status.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to be converted to draft.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkCreditNoteOpen



Convert a draft credit note to open status in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to be converted to Open status.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitCreditNoteForApproval



Submit a credit note for approval in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization for which the credit note is being submitted for approval.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to submit for approval in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveCreditNote



Approve a credit note for a specified ID.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization for which the credit note is being approved.
-   **credit\_note\_identifier** (`string`, required) A unique string identifier for the specific credit note to approve.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveCreditNoteEmailHistory



Retrieve the email history of a specific credit note.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which you want to retrieve the credit note email history.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to retrieve its email history.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCreditNoteBillingAddress



Update the billing address for a specific credit note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. Required to specify which organization’s data is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_identifier** (`string`, optional) A unique identifier for the credit note to update its billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCreditNoteShippingAddress



Updates the shipping address of an existing credit note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) ID of the organization to which the credit note belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_id** (`string`, optional) Unique identifier of the credit note to update the shipping address for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCreditNotePdfTemplates



Retrieve all credit note PDF templates from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required to fetch credit note templates.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCreditNoteTemplate



Updates the PDF template for a specified credit note.

**Parameters**

-   **organization\_identifier** (`string`, required) Unique identifier for the organization. Required to specify which organization’s credit note template will be updated.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to be updated.
-   **credit\_note\_template\_id** (`string`, required) Unique identifier of the credit note template to be updated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCreditNoteInvoices



List invoices to which the credit note is applied.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which you want to list the invoices associated with the credit note.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to retrieve associated invoices.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApplyCreditNoteToInvoice



Apply credit note to existing invoices in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization within Zoho Books to which the credit note is being applied. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_id** (`string`, optional) Unique identifier of the credit note to apply to invoices. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCreditNoteInvoice



Delete the credits applied to an invoice of a credit note.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to identify which organization’s data is being manipulated.
-   **credit\_note\_unique\_id** (`string`, required) Unique identifier for the credit note to delete its associated invoice credits.
-   **credit\_note\_invoice\_id** (`string`, required) Unique identifier of the credit note invoice to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCreditNoteComments



Retrieve comments and history of a credit note.

**Parameters**

-   **organization\_identifier** (`string`, required) Provide the organization’s unique ID to retrieve credit note comments.
-   **credit\_note\_id** (`string`, required) Provide the unique identifier of the credit note to retrieve its comments and history.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddCreditNoteComment



Add a comment to an existing credit note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The string ID of the organization to which the credit note belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_id** (`string`, optional) Unique identifier of the credit note to which the comment will be added. This is required to specify the exact credit note targeted for the comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCreditNoteComment



Delete a specific comment from a credit note.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Required for deleting a credit note comment.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to which the comment belongs.
-   **comment\_unique\_identifier** (`string`, required) The unique ID of the comment to be deleted from a credit note.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreditNoteRefundListing



Retrieve a paginated list of credit note refunds.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Use this to specify which organization’s credit note refunds to list.
-   **customer\_identifier** (`string`, optional) ID of the customer for whom the credit note is raised. Provide to filter refunds by customer.
-   **refunds\_sort\_column** (`string`, optional) Specifies the attribute to sort the credit note refunds. Use values like ‘refund\_mode’, ‘reference\_number’, ‘date’, ‘creditnote\_number’, ‘customer\_name’, ‘amount\_bcy’, or ‘amount\_fcy’.
-   **pagination\_page\_number** (`integer`, optional) Page number for pagination to specify which page of results to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of records to display per page in the paginated results. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCreditNoteRefunds



Retrieve refunds for a specific credit note.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve credit note refunds for.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to retrieve refunds for.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve in paginated results. Default is 1.
-   **results\_per\_page** (`integer`, optional) Number of records to return per page, controlling pagination. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RefundCreditNote



Process a credit note refund in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books for which the credit note refund is being processed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_id** (`string`, optional) Unique identifier of the credit note to refund. This is required to specify which credit note the refund applies to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCreditNoteRefund



Retrieve refund details for a specific credit note.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which the credit note refund is being retrieved. Use a valid organization identifier.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to retrieve refund details for.
-   **credit\_note\_refund\_id** (`string`, required) Unique identifier of the credit note refund to retrieve specific refund details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRefundTransaction



Update the refunded transaction details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization. Required to identify which organization’s records are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_identifier** (`string`, optional) Unique identifier of the credit note to update the refund transaction. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **credit\_note\_refund\_id** (`string`, optional) Provide the unique identifier of the credit note refund to update its transaction details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCreditNoteRefund



Delete a specific credit note refund by ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to delete a credit note refund.
-   **credit\_note\_id** (`string`, required) Unique identifier of the credit note to be refunded.
-   **credit\_note\_refund\_id** (`string`, required) Unique identifier of the credit note refund to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCurrency



Create a currency for transactions in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the currency is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListConfiguredCurrencies



Retrieve the list of configured currencies in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Required to retrieve currency data for a specific organization.
-   **exclude\_base\_currency\_filter** (`string`, optional) Set to exclude the base currency from the result. Use ‘Currencies.ExcludeBaseCurrency’.
-   **page\_number** (`integer`, optional) The page number of currency records to fetch. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of currency records to fetch per page. Defaults to 200 if not specified.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCurrencyDetails



Update the details of a currency in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the currency details are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **currency\_unique\_identifier** (`string`, optional) Unique identifier of the currency to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCurrencyDetails



Get the details of a specific currency.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the currency details are requested.
-   **currency\_identifier** (`string`, required) Unique identifier for the currency to fetch details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemoveCurrency



Remove a specific currency from the system.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID representing the organization for which the currency deletion is requested.
-   **currency\_identifier** (`string`, required) Unique identifier of the currency to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCurrencyExchangeRates



Retrieve exchange rates for a specific currency.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve exchange rates.
-   **currency\_identifier** (`string`, required) Unique identifier for the currency to retrieve exchange rates.
-   **exchange\_rate\_from\_date** (`string`, optional) Date to start retrieving exchange rates. Returns rates from this date or nearest previous match.
-   **sort\_by\_column** (`string`, optional) Sorts the exchange rates by the specified column. Only ‘effective\_date’ is allowed.
-   **return\_current\_date\_exchange\_rate\_only** (`boolean`, optional) Set to true to return the exchange rate only if it’s available for the current date.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateExchangeRate



Create an exchange rate for a specified currency.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the exchange rate is being created. This must be a unique identifier within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **currency\_identifier** (`string`, optional) Unique identifier for the currency used to create the exchange rate in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCurrencyExchangeRate



Retrieve details of a specific currency exchange rate.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which you want to retrieve exchange rate details.
-   **currency\_unique\_identifier** (`string`, required) Unique identifier for the currency. Use to specify the currency for the exchange rate details.
-   **exchange\_rate\_unique\_id** (`string`, required) Unique identifier of the exchange rate to retrieve details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateExchangeRate



Update exchange rate details for a currency in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the exchange rate is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **currency\_unique\_identifier** (`string`, optional) Unique identifier for the currency you want to update the exchange rate for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **exchange\_rate\_identifier** (`string`, optional) Unique identifier for the exchange rate to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteExchangeRate



Delete an exchange rate for a specific currency.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the exchange rate is being deleted.
-   **currency\_identifier** (`string`, required) Unique identifier for the currency whose exchange rate is to be deleted.
-   **exchange\_rate\_identifier** (`string`, required) Unique identifier for the exchange rate to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCustomModuleRecords



Fetches records from a specified custom module.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the Zoho organization to fetch records from.
-   **custom\_module\_name** (`string`, required) Name of the custom module from which to retrieve records in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomModuleRecords



Updates existing custom module records in bulk.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization that owns the module records to be updated. This ID is required to specify which organization’s records are being modified. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **module\_name** (`string`, optional) Specify the name of the custom module to update records in bulk. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCustomModule



Creates a custom module in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the custom module is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_module\_name** (`string`, optional) Specify the name for the custom module to be created in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCustomModule



Deletes a specified custom module in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **module\_name** (`string`, required) The name of the custom module to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCustomModuleRecordDetails



Fetch details of an organization in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **module\_name** (`string`, required) The name of the module associated with the organization in Zoho Books.
-   **custom\_module\_id** (`integer`, required) The ID for the specific custom module in Zoho Books that you want to retrieve details for. This value should be an integer.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomModuleRecord



Update an existing custom module in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **module\_name** (`string`, optional) The name of the custom module to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_module\_id** (`integer`, optional) The ID of the custom module to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCustomModuleRecord



Delete an individual record from a custom module.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s module record to delete.
-   **module\_name** (`string`, required) Name of the custom module containing the record to delete.
-   **custom\_module\_id** (`integer`, required) The unique integer ID of the custom module to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCustomerDebitNote



Create a customer debit note for invoice adjustments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) A unique identifier for the organization to which the debit note will be associated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **send\_debit\_note** (`boolean`, optional) Set to true to send the debit note to the associated contacts. Accepts true or false. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore automatic debit note number generation, requiring manual entry. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCustomerDebitNotes



Retrieve and organize customer debit notes easily.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization for this request. Required for identifying the organization whose debit notes are being queried.
-   **search\_item\_name** (`string`, optional) Search debit notes based on product or service names. Supports ‘item\_name\_startswith’ and ‘item\_name\_contains’. Max length is 100 characters.
-   **search\_by\_item\_id** (`string`, optional) Search for customer debit notes using a specific item ID to filter based on product or service identifiers.
-   **item\_description\_filter** (`string`, optional) Filter debit notes by item description using detailed descriptions of products or services. Supports ‘startswith’ and ‘contains’ variants. Max length: 100 characters.
-   **search\_by\_customer\_name** (`string`, optional) Search debit notes by customer name. Filters based on the business or individual name. Maximum 100 characters.
-   **customer\_email\_filter** (`string`, optional) Filter debit notes by customer email address, with a maximum length of 100 characters, to find specific customers or generate segment reports.
-   **search\_by\_total\_amount** (`string`, optional) Filter debit notes by the total amount, including taxes, discounts, and adjustments. Useful for finding specific price ranges or high-value transactions.
-   **search\_by\_outstanding\_balance** (`string`, optional) Filter debit notes by the remaining unpaid amount owed by the customer. Useful for finding overdue debit notes, tracking receivables, or generating aging reports.
-   **search\_by\_custom\_field** (`string`, optional) Filter debit notes using custom fields. Supports ‘custom\_field\_startswith’ and ‘custom\_field\_contains’ for searching specific text patterns.
-   **search\_date\_range** (`string`, optional) Filter debit notes by creation date using yyyy-mm-dd format. Supports variants: date\_start, date\_end, date\_before, date\_after.
-   **filter\_due\_date** (`string`, optional) Search debit notes by due date using yyyy-mm-dd format. Supports ‘due\_date\_start’, ‘due\_date\_end’, ‘due\_date\_before’, and ‘due\_date\_after’ variants.
-   **creation\_date\_filter** (`string`, optional) Filter debit notes by creation date. Use formats: ‘yyyy-mm-dd’, ‘created\_date\_start’, ‘created\_date\_end’, ‘created\_date\_before’, or ‘created\_date\_after’.
-   **last\_modified\_timestamp** (`string`, optional) Filter debit notes modified after this timestamp in YYYY-MM-DDTHH:MM:SS-UTC format.
-   **status\_filter** (`string`, optional) Filter debit notes by their status. Allowed values: sent, draft, overdue, paid, void, unpaid, partially\_paid, viewed.
-   **search\_by\_customer\_id** (`string`, optional) Search debit notes by the customer’s unique identifier. Use the customer ID from the Contacts API to find all corresponding debit notes.
-   **filter\_by\_debit\_note\_type** (`string`, optional) Set to ‘Type.DebitNote’ to filter debit notes specifically. Required for this search.
-   **general\_search\_text** (`string`, optional) Search debit notes by number, purchase order, or customer name. Max 100 characters. Useful for quick searches across multiple fields.
-   **sort\_debit\_notes\_by\_column** (`string`, optional) Sort debit notes by a specific column. Allowed values: customer\_name, debit\_note\_number, date, due\_date, total, balance, created\_time.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number to retrieve from paginated results. Default is 1. Use with `per_page` to navigate extensive debit note data efficiently.
-   **records\_per\_page** (`integer`, optional) Specify the number of records to retrieve per page, up to a maximum of 200. The default value is 200. This helps manage data transfer efficiency.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomerDebitNote



Update an existing customer debit note.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Organization ID for the request within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **debit\_note\_unique\_identifier** (`string`, optional) Unique identifier for the debit note to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore automatic debit note number generation, requiring manual input of the debit note number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCustomerDebitNote



Retrieve the details of a customer debit note from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Organization ID for the request. This ID is required to specify the organization from which to retrieve the debit note.
-   **debit\_note\_unique\_id** (`string`, required) Unique identifier for the specific debit note to retrieve details.
-   **response\_format** (`string`, optional) Format of the debit note details. Options are json, pdf, or html. Default is json.
-   **print\_pdf** (`boolean`, optional) If true, print the exported PDF version of the debit note; otherwise, do not print.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCustomerDebitNote



Delete an existing customer debit note in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization within Zoho Books. Required to specify which organization’s data to access or modify.
-   **debit\_note\_unique\_id** (`string`, required) Unique identifier for the debit note to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCustomerPayment



Create a new customer payment in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This is necessary to associate the payment with the correct organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCustomerPayments



List all payments made by your customers.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization. Required to specify which organization’s payments to list.
-   **search\_customer\_name** (`string`, optional) Filter payments by customer name using ‘startswith’ or ‘contains’ variants. Max length: 100 characters.
-   **search\_by\_reference\_number** (`string`, optional) Search payments by reference number. Supports ‘startswith’ and ‘contains’ variants. Max-length 100.
-   **payment\_date** (`string`, optional) Specify the date of the customer payment in YYYY-MM-DD format to filter results.
-   **payment\_amount\_filter** (`number`, optional) Filter payments by amount using variants: less\_than, less\_equals, greater\_than, or greater\_equals.
-   **search\_by\_customer\_notes** (`string`, optional) Search payments using customer notes, supporting ‘startswith’ and ‘contains’ variants.
-   **payment\_mode\_filter** (`string`, optional) Filter payments by specifying the payment mode. Use ‘startswith’ or ‘contains’ for partial matching.
-   **filter\_payments\_by\_mode** (`string`, optional) Filter payments by the payment mode. Accepted values include: All, Check, Cash, BankTransfer, Paypal, CreditCard, GoogleCheckout, Credit, Authorizenet, BankRemittance, Payflowpro, Stripe, TwoCheckout, Braintree, Others.
-   **sort\_column** (`string`, optional) Specify the column to sort the payments by. Common options include date, amount, or customer name.
-   **search\_term\_for\_payments** (`string`, optional) Search payments by reference number, customer name, or payment description. Maximum length is 100 characters.
-   **customer\_id** (`string`, optional) The unique identifier for the customer involved in the payment. Use this to target specific customer transactions.
-   **page\_number\_to\_fetch** (`integer`, optional) The page number of payment records to be retrieved. Defaults to 1.
-   **records\_per\_page** (`integer`, optional) Number of records to be fetched per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.BulkDeleteCustomerPayments



Delete multiple customer payments efficiently.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier string for the organization in Zoho Books.
-   **payment\_ids\_to\_delete** (`string`, required) Comma-separated list of payment IDs to be deleted in the bulk operation.
-   **perform\_bulk\_delete** (`boolean`, required) Set to true to perform the bulk delete operation for customer payments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePaymentByCustomField



Update or upsert a customer payment using a unique custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization whose payment is being updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) API name of the unique custom field used to identify the payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value of the custom field used to identify or create a payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_payment\_if\_not\_found** (`boolean`, optional) Set to true to create a new payment when no matching unique custom field value is found. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomerPaymentInfo



Update an existing payment information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the payment update is requested. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **payment\_unique\_identifier** (`string`, optional) The unique identifier for the payment to be updated. Use this to specify which payment you want to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCustomerPaymentDetails



Retrieve details of a specific customer payment.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the payment details are requested.
-   **payment\_identifier** (`string`, required) The unique identifier of the payment to retrieve details for.
-   **response\_format** (`string`, optional) Format of the response. Allowed values: ‘json’ or ‘pdf’. Default is ‘json’.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCustomerPayment



Delete an existing payment for a customer.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose payment is being deleted.
-   **payment\_identifier** (`string`, required) Unique identifier for the payment to be deleted. Required to specify which payment record should be removed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCustomerPaymentRefunds



Retrieve refunds for a specified customer payment.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization. Required to specify which organization’s data to access.
-   **customer\_payment\_identifier** (`string`, required) Unique identifier of the customer payment to retrieve associated refunds.
-   **page\_number** (`integer`, optional) Specify the page number to fetch. Defaults to 1 if not provided.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Defaults to 200 if not specified.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RefundExcessPayment



Refund the excess amount paid by a customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization to process the refund under. Ensure this matches the ID in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_payment\_identifier** (`string`, optional) Unique identifier for the customer’s payment to be refunded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomerPaymentCustomFields



Update custom fields in existing customer payments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization to which the customer payment belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_payment\_identifier** (`string`, optional) The unique identifier for the customer payment you wish to update custom fields for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCustomerPaymentRefundDetails



Obtain details of a specific customer payment refund.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization. This is required to specify which organization’s data to access.
-   **customer\_payment\_unique\_id** (`string`, required) Unique identifier of the customer payment to retrieve refund details.
-   **refund\_identifier** (`string`, required) Unique identifier of the refund for the specified customer payment.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePaymentRefund



Update details of a customer payment refund.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required to access the organization’s data. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_payment\_identifier** (`string`, optional) Unique identifier of the customer payment to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **refund\_identifier** (`string`, optional) Unique identifier for the refund transaction to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteCustomerPaymentRefund



Delete a refund for an existing customer payment.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the refund deletion is requested.
-   **customer\_payment\_identifier** (`string`, required) The unique identifier for the customer payment associated with the refund to be deleted.
-   **refund\_identifier** (`string`, required) Unique identifier of the refund to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCustomerEstimate



Create an estimate for a customer using Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the estimate is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **send\_estimate\_to\_contact** (`boolean`, optional) Set to true to send the estimate to the contact person(s) associated with it, false to skip sending. Only used when mode is ‘execute’.
-   **ignore\_automatic\_estimate\_number\_generation** (`boolean`, optional) Set to true to bypass automatic estimate number generation. This requires specifying an estimate number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListEstimates



Retrieve a list of all estimates with pagination.

**Parameters**

-   **organization\_id** (`string`, required) Specifies the ID of the organization to filter the estimates.
-   **estimate\_number\_filter** (`string`, optional) Specify an estimate number or use variants like ‘startswith’ or ‘contains’ for partial matching to filter estimates.
-   **reference\_number\_filter** (`string`, optional) Filter or search estimates by their reference number. Supports partial matches using ‘startswith’ and ‘contains’.
-   **customer\_name** (`string`, optional) Search estimates by customer’s name with optional variants for partial matches, such as ‘startswith’ and ‘contains’.
-   **total\_filter** (`number`, optional) Specify a condition to search estimates by their total amount. Use variants like ‘less\_than’, ‘less\_equals’, ‘greater\_than’, and ‘greater\_equals’ for range queries.
-   **filter\_by\_customer\_id** (`string`, optional) Filter or search estimates using the unique customer ID. Use the `customer_id` provided by the Contacts API for the same organization to retrieve estimates linked to a specific customer.
-   **filter\_by\_item\_id** (`string`, optional) Filter or search estimates by the unique item ID. Use the item\_id returned by the Items API for the same organization to find estimates including a specific product or service.
-   **item\_name\_filter** (`string`, optional) Search estimates by item name. Supports variants like ‘item\_name\_startswith’ and ‘item\_name\_contains’ for partial matches.
-   **search\_by\_item\_description** (`string`, optional) Search estimates by item description. Use variants ‘item\_description\_startswith’ and ‘item\_description\_contains’ for pattern matching.
-   **search\_by\_custom\_field** (`string`, optional) Search estimates by a custom field, supporting variants like ‘startswith’ or ‘contains’ for partial matches. Useful for identifying estimates linked to specific custom data.
-   **expiry\_date** (`string`, optional) Specify the expiration date of the estimates to filter the results. Use the format YYYY-MM-DD.
-   **estimate\_date\_filter** (`string`, optional) Search estimates by date using variants like ‘date\_start’, ‘date\_end’, ‘date\_before’, or ‘date\_after’.
-   **estimate\_status\_filter** (`string`, optional) Filter estimates by status. Allowed values: draft, sent, invoiced, accepted, declined, expired.
-   **filter\_estimates\_by\_status** (`string`, optional) Specify the status to filter estimates. Allowed values: Status.All, Status.Sent, Status.Draft, Status.Invoiced, Status.Accepted, Status.Declined, Status.Expired.
-   **keyword\_search** (`string`, optional) Keyword search across estimate number, reference number, or customer name to quickly find matching estimates.
-   **sort\_estimates\_by\_column** (`string`, optional) Specify the column to sort estimates by. Options: customer\_name, estimate\_number, date, total, created\_time.
-   **deal\_potential\_id** (`integer`, optional) Potential ID of a Deal in CRM. Use this to filter estimates linked to specific deals.
-   **page\_number** (`integer`, optional) Specify the page number to fetch. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateWithCustomField



Update or create an estimate using a custom field value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Provide the ID of the organization for which the estimate is being updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the custom field used to uniquely identify and update an estimate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value of the custom field used to identify and update the estimate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_estimate\_if\_not\_found** (`boolean`, optional) Set to true to create a new estimate if no existing record matches the custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimate



Update an existing estimate in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization whose estimate needs updating. It should be a unique identifier in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_unique\_id** (`string`, optional) Unique identifier for the estimate you want to update in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore auto generation of estimate numbers and manually specify the estimate number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveEstimateDetails



Retrieve the details of a specific estimate.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. Required to retrieve estimate details.
-   **estimate\_id** (`string`, required) Unique identifier of the specific estimate to retrieve details for.
-   **response\_format** (`string`, optional) Specify the format for the estimate details: json, pdf, or html. Default is json.
-   **print\_pdf** (`boolean`, optional) Set to true to print the exported PDF of the estimate.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteEstimate



Delete an existing estimate in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization where the estimate will be deleted.
-   **estimate\_id** (`string`, required) Unique identifier for the estimate to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateCustomFields



Update custom fields in a specific estimate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization whose estimate custom fields are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier for the estimate to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkEstimateAsSent



Mark a draft estimate as sent.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required to identify which organization’s estimate to mark as sent.
-   **estimate\_identifier** (`string`, required) The unique identifier for the estimate to be marked as sent.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AcceptEstimate



Mark a sent estimate as accepted if the customer has accepted it.

**Parameters**

-   **organization\_id** (`string`, required) ID for the organization related to the estimate acceptance.
-   **estimate\_identifier** (`string`, required) Unique identifier of the estimate to be marked as accepted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeclineEstimate



Marks a sent estimate as declined if rejected by customer.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which the estimate is being declined.
-   **estimate\_identifier** (`string`, required) Unique identifier of the estimate to mark as declined.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitEstimateForApproval



Submit an estimate for approval.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books that the estimate belongs to.
-   **estimate\_identifier** (`string`, required) Unique identifier of the estimate to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveEstimate



Approve an estimate in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books whose estimate is being approved. This should be the unique identifier associated with the organization.
-   **estimate\_identifier** (`string`, required) Unique identifier for the estimate to be approved in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendEstimateEmail



Send an email estimate to a customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization. This ID is required to send an estimate email. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier of the estimate to be emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **email\_attachments** (`string`, optional) Files to be attached to the email estimate. Provide file paths or URLs. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetEstimateEmailContent



Retrieve the email content for a specific estimate.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which you want to retrieve the estimate email content.
-   **email\_template\_id** (`string`, required) Optional. Specify a template ID to retrieve the email content based on a specific template. If not provided, defaults to the customer’s associated or default template.
-   **estimate\_id** (`string`, required) Unique identifier for the estimate to retrieve its email content.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendEstimatesEmail



Send multiple estimates to customers via email.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **estimate\_ids\_to\_email** (`string`, required) Comma-separated string of up to 10 estimate IDs to send via email.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportEstimatesAsPdf



Export up to 25 estimates as a single PDF document.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Required to specify which organization’s estimates are to be exported.
-   **estimate\_ids** (`string`, required) Comma-separated list of estimate IDs to include in the PDF. Maximum of 25 IDs allowed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportAndPrintEstimates



Export and print estimates as a PDF file.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose estimates are to be exported and printed.
-   **estimate\_ids\_to\_export** (`string`, required) Comma-separated list of estimate IDs to export and print. Maximum of 25 IDs allowed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateBillingAddress



Updates the billing address for a specific estimate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books. Required to specify the organization whose estimate billing address is to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier of the estimate to update the billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateShippingAddress



Updates the shipping address for an existing estimate in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books whose estimate’s shipping address is to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier of the estimate to update its shipping address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetEstimateTemplates



Retrieve all estimate PDF templates.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to fetch estimate templates.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateTemplate



Update the PDF template for an estimate.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization for which the estimate template is being updated.
-   **estimate\_identifier** (`string`, required) Provide the unique identifier for the specific estimate you want to update.
-   **estimate\_template\_identifier** (`string`, required) Unique identifier for the estimate template to update in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetEstimateComments



Get the complete history and comments of an estimate.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization whose estimate comments are needed.
-   **estimate\_identifier** (`string`, required) Unique identifier for the estimate to retrieve its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddEstimateComment



Add a comment for a specific estimate in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization within Zoho Books. It is required to specify which organization’s estimate is being commented on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier for the specific estimate to comment on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateEstimateComment



Update an existing comment on an estimate.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The ID representing the organization. Required to update the comment in the specified organization’s estimate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **estimate\_identifier** (`string`, optional) Unique identifier of the estimate to update the comment for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_unique\_identifier** (`string`, optional) The unique identifier of the comment to be updated on an estimate. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteEstimateComment



Delete an estimate comment.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization where the estimate comment is located.
-   **estimate\_unique\_id** (`string`, required) The unique identifier for the estimate, required to specify which estimate’s comment to delete.
-   **comment\_unique\_identifier** (`string`, required) Unique identifier of the comment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateExpense



Create a billable or non-billable expense record.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the expense is being recorded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **expense\_receipt\_file** (`string`, optional) File path or URL for the expense receipt. Accepted formats: gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, docx. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListExpenses



Retrieve a list of expenses with pagination.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization whose expenses are being queried.
-   **search\_by\_description** (`string`, optional) Search expenses by description, supports ‘description\_startswith’ and ‘description\_contains’. Max-length is 100 characters.
-   **search\_by\_reference\_number** (`string`, optional) Search expenses by part or complete reference number using ‘startswith’ or ‘contains’. Max-length is 100 characters.
-   **filter\_by\_date** (`string`, optional) Search expenses by expense date. Use variants: date\_start, date\_end, date\_before, or date\_after. Format \[yyyy-mm-dd\].
-   **expense\_status** (`string`, optional) Search expenses by status. Allowed values: unbilled, invoiced, reimbursed, non-billable, billable.
-   **amount\_filter** (`number`, optional) Search expenses by amount using the variants: less\_than, less\_equals, greater\_than, or greater\_equals.
-   **search\_expense\_account\_name** (`string`, optional) Search expenses by account name. Use ‘startswith:’ or ‘contains:’. Max length is 100 characters.
-   **customer\_name\_filter** (`string`, optional) Filter expenses by customer name. Supports ‘startswith’ and ‘contains’ variants. Max length is 100 characters.
-   **vendor\_name\_filter** (`string`, optional) Filter expenses by vendor name using ‘vendor\_name\_startswith’ or ‘vendor\_name\_contains’.
-   **expense\_account\_customer\_id** (`string`, optional) The ID of the expense account for the customer. Use this to filter expenses specific to a customer’s account.
-   **vendor\_id** (`string`, optional) ID of the vendor associated with the expense.
-   **recurring\_expense\_id** (`string`, optional) The ID used to search for expenses associated with a recurring expense.
-   **paid\_through\_account\_id** (`string`, optional) The ID of the account through which the expense was paid.
-   **search\_expenses\_text** (`string`, optional) Search expenses by account name, description, customer name, or vendor name. Maximum length is 100 characters.
-   **sort\_expenses\_by** (`string`, optional) Sort expenses by the specified column. Allowed values: date, account\_name, total, bcy\_total, reference\_number, customer\_name, created\_time.
-   **expense\_status\_filter** (`string`, optional) Filter expenses by status. Allowed values: ‘Status.All’, ‘Status.Billable’, ‘Status.Nonbillable’, ‘Status.Reimbursed’, ‘Status.Invoiced’, ‘Status.Unbilled’.
-   **page\_number** (`integer`, optional) Page number to fetch, with the default starting at 1.
-   **records\_per\_page** (`integer`, optional) Number of expense records to fetch per page. Defaults to 200 if not specified.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateExpenseWithCustomField



Update or create an expense using custom field values.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the expense update is intended. It is required to identify the target organization in the API. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_api\_name** (`string`, optional) API name of the unique custom field used to identify the expense. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value for the custom field used to update or create an expense. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_upsert\_new\_expense** (`boolean`, optional) Set to true to create a new expense if no matching unique custom field value is found. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateExistingExpense



Update an existing expense in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization. Required to identify which organization’s expense is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **expense\_identifier** (`string`, optional) The unique identifier for the expense to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **expense\_receipt\_file** (`string`, optional) File path of the expense receipt to attach. Allowed extensions are gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, and docx. Ensure the file is accessible and in an accepted format. Only used when mode is ‘execute’.
-   **delete\_receipt** (`boolean`, optional) Set to true to remove the attached receipt from the expense. Use false to keep it. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetExpenseDetails



Retrieve details of a specific expense by ID.

**Parameters**

-   **organization\_identifier** (`string`, required) String representing the ID of the organization for which the expense details are requested.
-   **expense\_identifier** (`string`, required) Unique identifier for the expense to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteExpenseEntry



Delete an existing expense entry in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization within Zoho Books.
-   **expense\_identifier** (`string`, required) Unique identifier of the expense to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetExpenseComments



Retrieve comments and history for a specific expense.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books required to fetch the expense comments.
-   **expense\_unique\_id** (`string`, required) Unique identifier for the expense to retrieve its comments and history in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListCompanyEmployees



Retrieve a paginated list of all employees.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose employees are being listed. This should be provided as a string.
-   **page\_number** (`integer`, optional) The page number to fetch. Default is 1 for the first page.
-   **records\_per\_page** (`integer`, optional) Specify the number of employee records to retrieve per page, with a default of 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateEmployeeForExpense



Create an employee for an expense record in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books where the employee will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchEmployeeDetails



Retrieve detailed information about an employee.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. This ID is necessary to specify which organization’s employee details are being requested.
-   **employee\_unique\_id** (`string`, required) The unique identifier for the employee whose details are to be fetched in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteEmployeeRecord



Remove an employee from the records in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to uniquely identify it for employee deletion.
-   **employee\_identifier** (`string`, required) The unique identifier for the employee to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveExpenseReceipt



Retrieve the receipt attached to an expense.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books. Required to retrieve the expense receipt.
-   **expense\_identifier** (`string`, required) Unique identifier for the expense to retrieve its receipt. Required for locating the specific expense in Zoho Books.
-   **get\_receipt\_thumbnail** (`boolean`, optional) Set to true to get a thumbnail of the receipt; false returns the full receipt.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachExpenseReceipt



Attach a receipt to a specified expense.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **expense\_id** (`string`, required) Unique identifier for the expense to which the receipt will be attached.
-   **expense\_receipt\_file** (`string`, optional) The file to attach as an expense receipt. Supported formats: gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, docx.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteExpenseReceipt



Deletes the receipt attached to an expense.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which the expense receipt is to be deleted. Ensure it’s accurate to target the correct entity.
-   **expense\_id** (`string`, required) Unique identifier for the expense whose receipt is to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateFixedAsset



Create a fixed asset in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books for which the fixed asset is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetFixedAssetsList



Retrieve a list of fixed assets from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which to list fixed assets.
-   **filter\_fixed\_asset\_status** (`string`, optional) Filter the fixed asset list by status. Valid inputs: Status.All, Status.Active, Status.Cancel, Status.FullyDepreciated, Status.WriteOff, Status.Sold, Status.Draft.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort the fixed asset list. Choose from: asset\_name, asset\_number, asset\_cost, created\_time, current\_asset\_value.
-   **sort\_order** (`string`, optional) Sort the fixed asset list in ascending or descending order. Use ‘A’ for ascending and ‘D’ for descending.
-   **page\_number** (`integer`, optional) The page number to fetch from the fixed asset list. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of fixed asset records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateFixedAssetInfo



Update fixed asset details in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization whose fixed asset you wish to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **fixed\_asset\_identifier** (`string`, optional) Unique identifier for the specific fixed asset to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetFixedAssetDetails



Retrieve details of a fixed asset using its ID.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization for which you want to retrieve the asset details.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier for the fixed asset to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteFixedAsset



Delete a specified fixed asset.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization from which the fixed asset will be deleted. Ensure this ID corresponds to the correct organization.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier of the fixed asset to be deleted. This ID is required to specify which asset to remove.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchAssetHistory



Fetch the detailed history of a specific fixed asset.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose asset history is being requested.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier for the fixed asset. Required to fetch its detailed history.
-   **page\_number** (`integer`, optional) Page number to retrieve, with a default value of 1.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Defaults to 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetAssetDepreciationSummary



Displays detailed future depreciation rates for a fixed asset.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization for which the asset’s future depreciation rates are to be retrieved.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier for the fixed asset to fetch its future depreciation rates.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateFixedAsset



Activate a fixed asset to begin depreciation calculation.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization. This is required to identify which organization’s asset to activate.
-   **fixed\_asset\_id** (`string`, required) Unique identifier of the fixed asset to activate for depreciation calculation.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CancelFixedAsset



Cancel a fixed asset in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Required to specify which organization’s fixed asset to cancel.
-   **fixed\_asset\_id** (`string`, required) Unique identifier for the fixed asset to be canceled.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkFixedAssetAsDraft



Set a fixed asset status to draft in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the fixed asset status will be changed.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier for the fixed asset in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.WriteOffFixedAsset



Remove a fixed asset from the records.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to specify which organization’s asset is to be written off. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **fixed\_asset\_identifier** (`string`, optional) Unique identifier of the fixed asset to be written off in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SellFixedAsset



Initiate the sale of a specified fixed asset.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **fixed\_asset\_identifier** (`string`, optional) Unique identifier of the fixed asset to be sold. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddFixedAssetComment



Add a comment to a fixed asset in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. This is required to add a comment to the fixed asset. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **fixed\_asset\_identifier** (`string`, optional) Unique identifier for the fixed asset to add a comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteAssetComment



Delete a comment from a fixed asset in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization to specify which organization’s asset comment you want to delete.
-   **fixed\_asset\_identifier** (`string`, required) Unique identifier of the fixed asset to delete a comment from.
-   **comment\_id** (`string`, required) Unique identifier of the comment to be deleted from the fixed asset.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateFixedAssetType



Create a fixed asset type in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which to create the fixed asset type. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetFixedAssetTypeList



Retrieve a list of fixed asset types.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization to retrieve asset types for.
-   **page\_number\_to\_fetch** (`integer`, optional) The page number to retrieve for the list of fixed asset types. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateFixedAssetType



Update a fixed asset type with new information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **fixed\_asset\_type\_identifier** (`string`, optional) Unique identifier for the fixed asset type to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteFixedAssetType



Deletes a specified fixed asset type from the system.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization within Zoho Books.
-   **fixed\_asset\_type\_identifier** (`string`, required) Unique identifier for the fixed asset type to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ImportCustomerFromCrm



Import a customer from Zoho CRM to Zoho Books using CRM account ID.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization within Zoho Books.
-   **crm\_account\_id** (`string`, required) Unique identifier of the Zoho CRM account to import the customer from.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CrmToBooksContactImport



Import a customer from Zoho CRM to Zoho Books using CRM contact ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization within Zoho Books.
-   **zoho\_crm\_contact\_id** (`string`, required) Unique identifier for the Zoho CRM contact to import into Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ImportVendorFromCrm



Import a vendor from Zoho CRM to Zoho Books using CRM vendor ID.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books for which the vendor is being imported. This ID is used to specify the target organization in Zoho Books.
-   **zoho\_crm\_vendor\_id** (`string`, required) Unique identifier of the Zoho CRM vendor to import.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ImportCrmProductToZohoBooks



Import a product from Zoho CRM to Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books. This is required to import products from Zoho CRM.
-   **crm\_product\_id** (`string`, required) Unique identifier of the Zoho CRM product to be imported into Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateCustomerInvoice



Create an invoice for your customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the invoice is created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **send\_invoice\_to\_contacts** (`boolean`, optional) Boolean to determine if the invoice is sent to the contact persons. Use ‘true’ to send, ‘false’ otherwise. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore auto invoice number generation, requiring manual input. Only used when mode is ‘execute’.
-   **enable\_quick\_create\_mode** (`boolean`, optional) Enable quick create mode for streamlined invoice creation with minimal required fields. Set to true for activation. Only used when mode is ‘execute’.
-   **enable\_batch\_payments** (`boolean`, optional) Enable batch payment processing for the invoice. True means the invoice is included in batch operations. Requires ‘is\_quick\_create’ to be true. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceList



Retrieve and organize a list of invoices from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which invoices are being queried. This ID is crucial for accessing the correct set of invoices within Zoho Books.
-   **search\_by\_invoice\_number** (`string`, optional) Search for invoices using their unique invoice number. Supports ‘startswith’ and ‘contains’ variants. Max length: 100 characters.
-   **search\_invoice\_by\_item\_name** (`string`, optional) Filters invoices by product or service name in line items. Supports ‘item\_name\_startswith’ and ‘item\_name\_contains’. Max length: 100 characters.
-   **search\_by\_item\_id** (`string`, optional) Search invoices by item ID. Use the unique identifier of a product or service to filter invoices that include specific line items.
-   **item\_description\_filter** (`string`, optional) Filter invoices by item description using keywords. Supports ‘startswith’ and ‘contains’ variants. Max 100 characters.
-   **search\_reference\_number** (`string`, optional) Search invoices by reference number, such as purchase order or project codes, to find invoices associated with specific projects or transactions.
-   **search\_by\_customer\_name** (`string`, optional) Search for invoices using the customer’s name, with a maximum length of 100 characters, to generate customer-specific reports or find all invoices for a customer.
-   **recurring\_invoice\_id** (`string`, optional) ID of the recurring invoice from which the invoice is created. Use to filter invoices tied to specific recurring billing cycles.
-   **customer\_email\_filter** (`string`, optional) Filter invoices by the customer’s email address. Maximum length is 100 characters. Ideal for finding specific customer invoices or customer segment analysis.
-   **search\_by\_total\_amount** (`string`, optional) Search and filter invoices based on the final total amount, including taxes, discounts, and adjustments. Useful for finding invoices within specific price ranges or identifying high-value transactions.
-   **search\_by\_outstanding\_balance** (`string`, optional) Filter invoices by outstanding balance to find overdue invoices, track receivables, or generate aging reports.
-   **search\_by\_custom\_field** (`string`, optional) Search invoices using custom fields. Supports ‘custom\_field\_startswith’ and ‘custom\_field\_contains’ for partial matching.
-   **invoice\_date\_filter** (`string`, optional) Filter invoices by invoice date using yyyy-mm-dd format. Supports variants like date\_start, date\_end, date\_before, and date\_after to find invoices within specific date ranges.
-   **invoice\_due\_date\_filter** (`string`, optional) Filter invoices by due date using yyyy-mm-dd format. Supports start, end, before, and after variants for flexible searching.
-   **filter\_by\_creation\_date** (`string`, optional) Filter invoices by creation date with yyyy-mm-dd format. Supports variants: start, end, before, and after.
-   **filter\_by\_last\_modified\_time** (`string`, optional) Filters invoices modified after a specific timestamp in YYYY-MM-DDTHH:MM:SS-UTC format. Useful for identifying recently updated invoices.
-   **invoice\_status** (`string`, optional) Filter invoices by their current status (e.g., sent, draft, overdue, etc.).
-   **search\_by\_customer\_id** (`string`, optional) Filters invoices using the unique customer ID. Use the ID from the Contacts API to find all invoices for a specific customer.
-   **filter\_invoices\_by\_criteria** (`string`, optional) Filter invoices by status (e.g., Status.Sent, Status.Paid) or payment expected date using Date.PaymentExpectedDate.
-   **general\_search\_text** (`string`, optional) General search for invoices by invoice number, purchase order, or customer name. Accepts up to 100 characters.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort invoices by. Options: customer\_name, invoice\_number, date, due\_date, total, balance, created\_time.
-   **search\_by\_crm\_potential\_id** (`integer`, optional) Find invoices linked to a specific CRM deal or opportunity using its potential ID from Zoho CRM.
-   **response\_format\_type** (`integer`, optional) Specifies the desired response format: 0 for all invoices, 1 for all invoices with counts and totals, 2 for count only, 3 for count and totals, 4 for invoices and totals.
-   **page\_number** (`integer`, optional) Page number to fetch from paginated results. Default is 1. Use with ‘per\_page’ for navigating large data sets.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200, maximum is 200. Use to control result size for performance optimization.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoiceByCustomField



Update or create an invoice using a custom field value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. This is required to specify which organization’s invoice should be updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to locate the invoice to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_value** (`string`, optional) The unique value of the custom field used to find or create the invoice. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_invoice\_if\_not\_found** (`boolean`, optional) Set to true to create a new invoice if the unique custom field value is not found in existing invoices. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoice



Update details of an existing invoice in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization to which the invoice belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_id** (`string`, optional) Unique identifier of the invoice to be updated. Ensure this ID corresponds to an existing invoice. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_invoice\_number\_generation** (`boolean`, optional) Set to true to ignore automatic invoice number generation, requiring manual entry of the invoice number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceDetails



Retrieve details of a specific invoice by ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the invoice details are requested.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice. Used to specify which invoice details to retrieve.
-   **format\_type** (`string`, optional) Specify the format for invoice details: json, pdf, or html. Default is json.
-   **print\_pdf** (`boolean`, optional) Boolean value indicating whether to print the exported PDF.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoiceInZohoBooks



Delete an existing invoice in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the invoice is to be deleted in Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkInvoiceAsSent



Mark a draft invoice as sent.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier of the organization for which the invoice will be marked as sent.
-   **invoice\_unique\_identifier** (`string`, required) Unique identifier of the invoice to be marked as sent.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.VoidInvoiceStatus



Mark an invoice as void in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required to specify which organization the invoice belongs to.
-   **invoice\_unique\_identifier** (`string`, required) Unique identifier for the invoice to be marked as void.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkInvoiceAsDraft



Mark a voided invoice as draft in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to be marked as draft.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendInvoicesEmail



Send up to 10 invoices by email to customers.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The organization ID for which invoices will be emailed. Required for sending emails. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comma\_separated\_invoice\_ids** (`string`, optional) Comma separated list of invoice IDs to be emailed. Maximum 10 IDs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateInvoiceFromSalesOrder



Create an invoice from a confirmed sales order.

**Parameters**

-   **sales\_order\_id** (`string`, required) The unique identifier of the confirmed sales order to create an invoice for.
-   **organization\_id** (`string`, required) ID of the organization for which the invoice is being created. This must be a valid string ID.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AssociateInvoiceWithSalesOrder



Link existing invoices to sales orders for tracking.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required for linking invoices with sales orders. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitInvoiceForApproval



Submit an invoice for approval in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **invoice\_unique\_id** (`string`, required) The unique identifier for the invoice to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveInvoice



Approve a specified invoice for processing.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization for which the invoice is to be approved.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to approve.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceEmailContent



Retrieve the email content for a specific invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization. Required to retrieve invoice email content for the specified organization.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to retrieve its email content.
-   **email\_template\_id** (`string`, optional) Optional. Specify a template ID to get the email content based on a specific template. Defaults to customer-associated or default template if not provided.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendInvoiceEmail



Email an invoice to a customer with optional content customization.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization to which the invoice is linked. This ID is required to specify which organization’s invoice is being emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_identifier** (`string`, optional) Unique string identifier for the specific invoice to be emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_email\_attachments** (`string`, optional) A comma-separated list of file paths to attach to the email. Provide file paths if additional files need to be included with the invoice email. Only used when mode is ‘execute’.
-   **send\_customer\_statement** (`boolean`, optional) Set to ‘True’ to send the customer statement PDF with the email. Only used when mode is ‘execute’.
-   **send\_invoice\_attachment** (`boolean`, optional) Set to true to attach the invoice with the email; false to exclude it. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemindCustomerInvoicePayment



Remind customers of unpaid invoices by email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. It specifies which organization’s invoice reminders to manage. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_identifier** (`string`, optional) Unique identifier of the invoice to send a payment reminder for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **email\_attachments** (`string`, optional) Comma-separated list of file URLs to attach to the reminder email. Only used when mode is ‘execute’.
-   **include\_customer\_statement\_pdf** (`boolean`, optional) Set to true to include a customer statement PDF with the email reminder. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetPaymentReminderEmailContent



Fetch the email content of a payment reminder for an invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID for the organization within Zoho Books for which the payment reminder email content is being fetched.
-   **invoice\_identifier** (`string`, required) Unique identifier for the specific invoice to fetch the reminder email content.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendInvoiceReminders



Send email reminders for unpaid invoices.

**Parameters**

-   **organization\_identifier** (`string`, required) Provide the ID of the organization for which the invoice reminders are to be sent.
-   **invoice\_ids** (`string`, required) List of invoice IDs to send reminders for. Only for open or overdue invoices, up to 10 at once.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportInvoicesAsPdf



Export up to 25 invoices as a single PDF file.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization for which invoices are being exported.
-   **invoice\_ids** (`string`, required) Comma-separated list of invoice IDs to export as a PDF. Maximum of 25 IDs allowed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportAndPrintInvoices



Export and print multiple invoices as PDFs.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s invoices to print.
-   **invoice\_identifiers** (`string`, required) A comma-separated string of up to 25 invoice IDs to export and print as PDFs.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DisableInvoicePaymentReminder



Disable automated payment reminders for an invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s invoice reminders are being disabled.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to disable payment reminders.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateInvoiceReminder



Enable automated payment reminders for invoices.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the invoice payment reminder is being activated.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice for which payment reminders are to be activated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.WriteOffInvoiceBalance



Write off the balance amount of an invoice in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **invoice\_identifier** (`string`, required) The unique identifier for the invoice to be written off.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CancelWriteOffInvoice



Cancel the write-off amount of an invoice in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books whose invoice write-off is to be canceled.
-   **invoice\_unique\_identifier** (`string`, required) The unique identifier for the invoice whose write-off is to be canceled.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ModifyInvoiceAddress



Update the billing address for a specific invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique string ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_identifier** (`string`, optional) Unique identifier of the invoice to update the billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoiceShippingAddress



Update the shipping address of a specific invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books. Required to specify which organization’s invoice will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_unique\_identifier** (`string`, optional) Unique identifier of the invoice to update the shipping address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListInvoiceTemplates



Fetch all invoice PDF templates from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to fetch invoice templates for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoiceTemplate



Update the PDF template for a specific invoice.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization for which the invoice template is being updated.
-   **invoice\_identifier** (`string`, required) Unique identifier for the invoice to update the PDF template.
-   **invoice\_template\_id** (`string`, required) Unique identifier for the invoice template to be updated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoicePayments



Retrieve a list of payments for a specific invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to retrieve invoice payments for.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to retrieve its payment details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceCreditsApplied



Retrieve the credits applied to a specific invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to retrieve credits applied to an invoice.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice for which credits are applied.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApplyCreditsToInvoice



Apply customer credits to an invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to identify where credits are applied. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_unique\_identifier** (`string`, optional) Unique identifier of the invoice to which credits will be applied. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoicePayment



Delete a payment made to an invoice in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books to which the payment belongs. This is required to identify the specific organization for deleting the invoice payment.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to delete the payment from.
-   **invoice\_payment\_identifier** (`string`, required) Unique identifier of the invoice payment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemoveInvoiceCredit



Remove a specific credit applied to an invoice.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization from which the credit is being removed.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to remove a credit from.
-   **credit\_note\_invoice\_id** (`string`, required) Unique identifier of the credit note invoice to be removed from the invoice.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceAttachment



Fetch attachment file from a specified invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to retrieve the invoice attachment for.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to fetch the attachment from.
-   **get\_thumbnail** (`boolean`, optional) Set to true to get the thumbnail of the invoice attachment.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachInvoiceFile



Attach a file to a specified invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization for which the invoice attachment is being added. This is required to identify the specific organization within Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier for the invoice to attach the file to.
-   **file\_to\_attach** (`string`, optional) The file to be attached. Allowed extensions: gif, png, jpeg, jpg, bmp, pdf.
-   **send\_attachment\_in\_email** (`boolean`, optional) Set to True to send the attachment with the invoice when emailed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SetInvoiceAttachmentPreference



Set the email attachment preference for an invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier for the specific invoice to update attachment preference.
-   **send\_attachment\_with\_email** (`boolean`, required) Set to true to send the attachment with the invoice when emailed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoiceAttachment



Delete the file attached to an invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the invoice attachment will be deleted. This is required to authenticate and identify the specific organization on Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to delete the attachment from. Must match the invoice’s ID in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveInvoiceDocument



Retrieve a document attached to a specific invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to retrieve the document from.
-   **invoice\_id** (`string`, required) The unique identifier for the invoice to which the document is attached. Required to retrieve the document.
-   **invoice\_document\_id** (`string`, required) Unique identifier for the specific document attached to the invoice. Required to retrieve the exact document.
-   **response\_format** (`string`, optional) Specify the desired format for the response, such as json, pdf, or html.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoiceDocument



Delete a document attached to an invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. This is required to specify which organization’s invoice document is to be deleted.
-   **invoice\_id** (`string`, required) The unique identifier of the invoice from which the document will be deleted. This ID is required and must be a valid invoice in the system.
-   **invoice\_document\_id** (`string`, required) The unique ID of the document to be deleted from the invoice.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoiceExpenseReceipt



Delete attached expense receipts from an invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization from which the expense receipt will be deleted.
-   **expense\_identifier** (`string`, required) Unique identifier of the expense to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoiceCustomFields



Update custom fields in an existing invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization to which the invoice belongs. This is required to identify the correct organization context for the invoice update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_identifier** (`string`, optional) Unique identifier of the invoice to update custom fields. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetInvoiceComments



Get comments and history of an invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the invoice comments and history are being retrieved. Must be a unique string identifier.
-   **invoice\_identifier** (`string`, required) Unique identifier for the specific invoice to retrieve comments and history.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddInvoiceComment



Add a comment to a specific invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the invoice belongs. It must be a valid and existing organization ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_identifier** (`string`, optional) Unique identifier of the invoice to add a comment to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateInvoiceComment



Update an existing comment on an invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) ID of the organization for which the invoice comment needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_unique\_id** (`string`, optional) Unique identifier for the invoice to update its comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_id** (`string`, optional) Unique identifier of the comment to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteInvoiceComment



Delete a specific comment from an invoice.

**Parameters**

-   **organization\_id** (`string`, required) Identifier for the organization in Zoho Books.
-   **invoice\_identifier** (`string`, required) Unique identifier of the invoice to delete the comment from.
-   **comment\_unique\_identifier** (`string`, required) The unique identifier for the comment to be deleted from the invoice.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GenerateInvoicePaymentLink



Generate a payment link for an invoice with expiry.

**Parameters**

-   **organization\_identifier** (`string`, required) Specify the organization’s unique ID.
-   **invoice\_transaction\_id** (`string`, required) The unique ID of the transaction or invoice for which the payment link is generated.
-   **transaction\_type** (`string`, required) Specifies the type of transaction, typically ‘Invoice’.
-   **link\_type** (`string`, required) Specifies whether the payment link is Private or Public.
-   **payment\_link\_expiry\_date** (`string`, required) The date when the payment link should expire. Use format: yyyy-MM-dd.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateNewZohoItem



Create a new item in Zoho Books inventory.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListActiveInventoryItems



Retrieve a paginated list of all active inventory items.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to fetch items from.
-   **item\_name\_search** (`string`, optional) Search for items by name using prefixes ‘name\_startswith’ or ‘name\_contains’. Maximum length is 100 characters.
-   **description\_filter** (`string`, optional) Search items by description. Use keywords or phrases up to 100 characters. Prefix with ‘description\_startswith’ or ‘description\_contains’ for specific filtering.
-   **search\_by\_rate\_criteria** (`string`, optional) Specify rate conditions to filter items. Use format like ‘rate\_less\_than:100’.
-   **search\_by\_tax\_id** (`string`, optional) Search for items using the tax ID as a filter.
-   **tax\_name\_filter** (`string`, optional) Filter items by their tax name.
-   **tax\_exemption\_identifier** (`string`, optional) ID for the tax exemption. Required if is\_taxable is false.
-   **associated\_account\_id** (`string`, optional) ID of the account to associate the item with.
-   **filter\_items\_by\_status** (`string`, optional) Filter items by status. Allowed values are ‘Status.All’, ‘Status.Active’, and ‘Status.Inactive’.
-   **search\_items\_by\_text** (`string`, optional) Search for items by name or description, up to 100 characters.
-   **sort\_items\_by** (`string`, optional) Specify the attribute to sort items by. Allowed values: ‘name’, ‘rate’, ‘tax\_name’.
-   **sat\_item\_key\_code** (`string`, optional) SAT Item key code used to filter items. Provide a valid string key code for lookup.
-   **sat\_unit\_code** (`string`, optional) SAT Unit code for specific inventory items. Used to search or filter items based on their unit code.
-   **page\_number\_to\_fetch** (`integer`, optional) The page number of active items to retrieve, with a default of 1 if unspecified.
-   **records\_per\_page** (`integer`, optional) Specify the number of records to fetch per page. Default is 200.
-   **is\_item\_taxable** (`boolean`, optional) Boolean indicating if the item is taxable. True means the item is taxable.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateItemViaCustomField



Update or create an item using a unique custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This ID is used to specify which organization’s data you are trying to access or modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used for identifying the item. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value of the custom field used to identify or create an item in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_item\_if\_not\_found** (`boolean`, optional) Set to true to create a new item if no item matches the unique custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateZohoItemDetails



Update the details of an item in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization in Zoho Books for which the item details are to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **item\_identifier** (`string`, optional) Unique identifier of the item to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveItemDetails



Retrieve details of a specific item in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose item details are being retrieved.
-   **item\_unique\_identifier** (`string`, required) Unique identifier for the item to retrieve details from Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteItemInZohoBooks



Delete an item from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books from which you wish to delete the item.
-   **item\_identifier** (`string`, required) Unique identifier of the item to be deleted from Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateItemCustomFields



Updates custom fields in an existing item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization associated with the item. This is required to specify which organization’s item custom fields should be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **item\_identifier** (`string`, optional) Provide the unique identifier for the item to update its custom fields. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateInactiveItem



Activate an inactive item in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for your organization in Zoho Books. Required to activate an item.
-   **item\_identifier** (`string`, required) Unique identifier of the item to be activated in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkItemInactive



Mark an item as inactive in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Required for specifying which organization’s item to mark as inactive.
-   **item\_identifier** (`string`, required) Unique identifier of the item to be marked inactive.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateJournalEntry



Create a journal entry in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetJournalList



Retrieve a list of accounting journals.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve journals for.
-   **journal\_entry\_number** (`string`, optional) Search journals by journal entry number using exact match or variants like ‘entry\_number\_startswith’ and ‘entry\_number\_contains’.
-   **search\_by\_reference\_number** (`string`, optional) Search journals by reference number. Use ‘startswith:’ or ‘contains:’ for filtering options.
-   **journal\_date\_search** (`string`, optional) Specify date criteria to search journals. Use date\_start, date\_end, date\_before, or date\_after.
-   **search\_journal\_notes** (`string`, optional) Search journals by their associated notes. Options: ‘startswith’ or ‘contains’.
-   **search\_by\_last\_modified\_time** (`string`, optional) Search for journals using the last modified time as a filter criterion. Provide a valid timestamp to filter entries updated after that time.
-   **journal\_total\_filter** (`number`, optional) Filter journals based on total amount using keys like total\_less\_than or total\_greater\_equals.
-   **search\_by\_customer\_id** (`integer`, optional) Use a specific Customer ID to search for journals in Zoho Books.
-   **vendor\_id** (`integer`, optional) Specify the Vendor ID to search journals associated with that vendor.
-   **filter\_journals\_by\_date** (`string`, optional) Specify the time period to filter journals by date. Options: JournalDate.All, JournalDate.Today, JournalDate.ThisWeek, JournalDate.ThisMonth, JournalDate.ThisQuarter, JournalDate.ThisYear.
-   **sorting\_column\_for\_journals** (`string`, optional) Specify the field to sort journals by. Options: ‘journal\_date’, ‘entry\_number’, ‘reference\_number’, ‘total’.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number of the journal list to retrieve. Default value is 1.
-   **records\_per\_page** (`integer`, optional) Number of journal records to be fetched per page. Default value is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateJournalInZohoBooks



Updates a journal entry in Zoho Books with specified details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. Required for identifying which organization’s journal entry to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **journal\_identifier** (`string`, optional) The unique identifier for the journal entry to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetJournalDetails



Retrieve the details of a specific journal entry in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books required to retrieve journal details.
-   **journal\_unique\_id** (`string`, required) The unique identifier for the journal to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteJournalEntry



Delete a specific journal entry by ID.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization associated with the journal to be deleted.
-   **journal\_entry\_id** (`string`, required) The unique identifier for the journal entry to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.PublishDraftJournal



Mark a draft journal as published in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books. Required to identify the organization where the journal resides.
-   **journal\_identifier** (`string`, required) Unique identifier of the journal to be marked as published.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachFileToJournal



Attach a file to a Zoho Books journal entry.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization where the file will be attached. This is used to specify the target organization in Zoho Books.
-   **journal\_unique\_identifier** (`string`, required) Provide the unique identifier for the specific journal entry to which the file will be attached.
-   **attachment\_file\_path** (`string`, optional) The path to the file that will be attached to the journal in Zoho Books.
-   **document\_to\_attach** (`string`, optional) The document or file to be attached to the journal entry in Zoho Books.
-   **total\_number\_of\_files** (`integer`, optional) Specify the total number of files to be attached to the journal. Ensure this matches the actual number of attachments.
-   **document\_identifiers** (`string`, optional) A string of document IDs that need to be attached. These IDs should be associated with the documents intended for attachment.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddJournalComment



Add a comment to a journal entry in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books where the comment is to be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **journal\_unique\_id** (`string`, optional) The unique identifier for the journal entry to which the comment will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteJournalComment



Delete a journal comment in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s journal comment should be deleted.
-   **journal\_unique\_id** (`string`, required) Unique identifier of the journal for which the comment will be deleted.
-   **comment\_id** (`string`, required) Unique identifier of the comment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EnableOrganizationLocations



Enable locations for an organization in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which to enable location tracking.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateZohoBookLocation



Create a new location in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the location is being created in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListInventoryLocations



Retrieve all available locations from Zoho Inventory.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateLocationInZohoBooks



Update location details in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization in Zoho Books. It is required to identify which organization’s location is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **location\_identifier** (`string`, optional) Unique identifier of the location to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteLocation



Delete a location from the system.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to which the location belongs.
-   **location\_id** (`string`, required) The unique identifier of the location to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateLocation



Marks a location as active.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to which the location belongs.
-   **location\_identifier** (`string`, required) Unique identifier for the location to be marked as active.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkLocationInactive



Marks a specific location as inactive in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books to mark the location as inactive.
-   **location\_identifier** (`string`, required) Unique identifier of the location to be marked as inactive in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SetPrimaryLocation



Marks a specified location as primary in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which to set the primary location in Zoho Books.
-   **location\_identifier** (`string`, required) Unique identifier of the location to be marked as primary.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateOpeningBalance



Creates an opening balance for accounts.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the opening balance is being created. This ID is required to specify the target organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateOpeningBalance



Update the existing opening balance information.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required for updating the opening balance information. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetOpeningBalance



Retrieves the opening balance for accounts.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to retrieve the opening balance for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteOpeningBalance



Delete the entered opening balance in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose opening balance is to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateOrganizationInZohoBooks



Create a new organization in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization to be created in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListOrganizations



Retrieve the list of organizations from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to list details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateOrganizationDetails



Update an organization’s details in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier of the organization to update in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **organization\_identifier** (`string`, optional) The unique string identifier for the organization to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetOrganizationDetails



Retrieve details of an organization from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization in Zoho Books. Used to retrieve specific organization details.
-   **org\_id** (`string`, required) Unique identifier for the specific organization.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateProject



Create a new project in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization in Zoho Books. Required for project creation. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListProjects



Retrieve a list of all projects with pagination.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which to list projects.
-   **filter\_projects\_by\_status** (`string`, optional) Filter projects by status. Use Status.All, Status.Active, or Status.Inactive.
-   **search\_by\_customer\_id** (`string`, optional) Search projects using the customer’s ID to filter results.
-   **sort\_projects\_by** (`string`, optional) Sort projects by project name, customer name, rate, or created time.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Defaults to 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateProjectWithCustomField



Update or create projects using a unique custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) A string representing the organization’s ID required to update or create a project using the custom field. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to identify the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value for the custom field used to identify or create a project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_project\_if\_not\_found** (`boolean`, optional) Set to true to create a new project if no existing project matches the unique custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateProjectDetails



Update details of a project in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization within Zoho Books, required to identify the organization whose project is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_unique\_identifier** (`string`, optional) Unique identifier of the project to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetProjectDetails



Retrieve detailed information of a specific project by ID.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to retrieve project details.
-   **project\_unique\_identifier** (`string`, required) Unique identifier for the project to retrieve detailed information.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteProject



Deletes an existing project in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books. Required to identify the organization from which the project will be deleted.
-   **project\_id** (`string`, required) Unique identifier of the project to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateProject



Activate a project in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in which the project is to be activated.
-   **project\_identifier** (`string`, required) Unique identifier for the project to activate in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeactivateProject



Deactivate a project in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books. Required for identifying the organization for the project update.
-   **project\_id** (`string`, required) The unique identifier of the project to be marked as inactive.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CloneProject



Clone an existing project in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_unique\_identifier** (`string`, optional) Unique string identifier of the project to be cloned. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AssignUsersToProject



Assign users to a specific project in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique ID of the organization in Zoho Books for which users are being assigned to a project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) The unique identifier for the project to which users will be assigned. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListProjectUsers



Get a list of users associated with a project.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID representing the organization in Zoho Books. Required to access project users.
-   **project\_identifier** (`string`, required) Unique identifier for the project to retrieve associated users.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.InviteUserToProject



Invite a user to a project in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books where the project is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_unique\_identifier** (`string`, optional) Unique identifier of the project in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateProjectUserDetails



Update user details in a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to update the user’s project details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Unique identifier for the project in Zoho Books. Required to specify which project’s user details are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_identifier** (`string`, optional) Unique identifier for the user to be updated within the project. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetProjectUserDetails



Fetch details of a user within a project in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization in Zoho Books. This is required to fetch the user details associated with the specified project.
-   **project\_identifier** (`string`, required) The unique identifier for the project in Zoho Books to fetch user details from.
-   **user\_identifier** (`string`, required) Unique identifier of the user within the project. Required to fetch user-specific details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemoveUserFromProject



Remove a user from a specific project in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization within Zoho Books.
-   **project\_identifier** (`string`, required) The unique identifier for the project from which the user will be removed.
-   **user\_identifier** (`string`, required) Unique identifier of the user to be removed from the project.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.PostProjectComment



Post a comment to a specified project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization for which the comment is being posted. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_unique\_identifier** (`string`, optional) Unique identifier for the project in Zoho Books. Required to specify the target project for adding a comment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetProjectComments



Retrieve comments for a specified project.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization to fetch project comments for.
-   **project\_identifier** (`string`, required) Unique identifier of the project to fetch comments for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteProjectComment



Delete a specific comment from a project.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the comment is to be deleted.
-   **project\_identifier** (`string`, required) Unique identifier of the project to delete the comment from.
-   **comment\_unique\_identifier** (`string`, required) Unique identifier for the comment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListProjectInvoices



Retrieve invoices for a specific project in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization in Zoho Books. This is required to access the specific organization’s project invoices.
-   **project\_unique\_identifier** (`string`, required) Unique identifier for the specific project to retrieve invoices for.
-   **sort\_invoices\_by** (`string`, optional) Specify the column to sort invoices by. Options are: ‘invoice\_number’, ‘date’, ‘total’, ‘balance’, ‘created\_time’.
-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number to retrieve from the list of invoices. Default is 1.
-   **records\_per\_page** (`integer`, optional) The number of invoice records to fetch per page. Defaults to 200 if not specified.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateVendorPurchaseOrder



Generate a purchase order for a vendor.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books for which the purchase order is being created. Required to specify the target organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **file\_attachment** (`string`, optional) File path or URL to attach. Allowed extensions: gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, docx. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to disable automatic purchase order number generation, requiring a manual number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListPurchaseOrders



Retrieve a list of all purchase orders.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to filter purchase orders.
-   **search\_by\_purchaseorder\_number** (`string`, optional) Search purchase order by number. Supports exact, starts with, and contains variants.
-   **reference\_number\_search** (`string`, optional) Search for a purchase order using the exact or partial reference number. Supports ‘startswith’ and ‘contains’ methods.
-   **creation\_date** (`string`, optional) Creation date for purchase order search in YYYY-MM-DD format.
-   **purchase\_order\_status** (`string`, optional) Filter purchase orders by status. Options: draft, open, billed, cancelled.
-   **search\_by\_item\_description** (`string`, optional) Search purchase orders by item description. Use partial matches or specific description. Includes variants like ‘startswith’ and ‘contains’.
-   **vendor\_name** (`string`, optional) Search purchase orders by vendor name with optional ‘startswith’ or ‘contains’ variants.
-   **total\_amount\_filter** (`number`, optional) Filter purchase orders by total amount. Use options like ‘start’, ‘end’, ‘less\_than’, ‘less\_equals’, ‘greater\_than’, ‘greater\_equals’ to specify the range or comparison.
-   **vendor\_identifier** (`string`, optional) Specify the unique ID of the vendor to filter purchase orders. Useful for grouping POs by a specific vendor.
-   **search\_by\_last\_modified\_time** (`string`, optional) ISO 8601 format (YYYY-MM-DDTHH:MM:SS±HH:MM) to filter POs by last modified time. For finding recently updated POs.
-   **search\_by\_item\_id** (`string`, optional) Search purchase orders using the unique item ID to find POs containing a specific item.
-   **status\_filter** (`string`, optional) Filter purchase orders by status. Use ‘Status.All’, ‘Status.Draft’, ‘Status.Open’, ‘Status.Billed’, or ‘Status.Cancelled’.
-   **search\_purchase\_order\_text** (`string`, optional) Search for purchase orders by number, reference, or vendor name. Allows general searching across multiple fields for quick lookup.
-   **sort\_by\_column** (`string`, optional) Column to sort purchase orders by. Options: vendor\_name, purchaseorder\_number, date, delivery\_date, total, created\_time.
-   **search\_by\_custom\_field** (`string`, optional) Search purchase orders using custom field criteria. Supports ‘startswith’ and ‘contains’ variants.
-   **page\_number** (`integer`, optional) Specify the page number to fetch, with a default value of 1.
-   **records\_per\_page** (`integer`, optional) Specifies the number of purchase orders to retrieve per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePurchaseOrderByCustomField



Update or create a purchase order via custom field value.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. This is required to specify which organization’s purchase order needs to be updated or created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to update or identify the purchase order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) Unique value for the custom field to retrieve and update the purchase order. This should match the specific custom field value used to identify the order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_order\_if\_not\_found** (`boolean`, optional) Set to true to create a new purchase order if no existing order matches the unique custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePurchaseOrder



Update an existing purchase order in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the purchase order is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_identifier** (`string`, optional) Unique identifier for the specific purchase order to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attachment\_file\_path** (`string`, optional) File path of the attachment with extensions: gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, docx. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) If true, ignore automatic purchase order number generation and manually specify the order number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrievePurchaseOrderDetails



Retrieve the details of a purchase order.

**Parameters**

-   **organization\_identifier** (`string`, required) Unique ID of the organization to retrieve purchase order details.
-   **purchase\_order\_id** (`string`, required) Provide the unique identifier of the purchase order to retrieve its details.
-   **response\_format** (`string`, optional) Specifies the format of the purchase order details. Options: json, pdf, html. Default is json.
-   **print\_pdf** (`boolean`, optional) Set to True to print the exported PDF of the purchase order.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeletePurchaseOrder



Delete an existing purchase order in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization within Zoho Books. Required to specify which organization’s purchase order is to be deleted.
-   **purchase\_order\_identifier** (`string`, required) Unique identifier for the purchase order to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateCustomFieldsPurchaseOrder



Update custom field values in purchase orders.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization associated with the purchase order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_id** (`string`, optional) A unique identifier for the purchase order to update custom fields. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.OpenPurchaseOrder



Mark a draft purchase order as open.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books whose purchase order status needs to be changed.
-   **purchase\_order\_identifier** (`string`, required) Unique identifier for the purchase order to be marked as open.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkPurchaseOrderBilled



Mark a purchase order as billed in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. Required to perform actions within the specified organization.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to be marked as billed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CancelPurchaseOrder



Cancel a specific purchase order in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The identifier for the organization in Zoho Books. This ID is required to specify which organization’s purchase order should be cancelled.
-   **purchase\_order\_id** (`string`, required) The unique identifier of the purchase order to be cancelled.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitPurchaseOrder



Submit a purchase order for approval.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization within Zoho Books.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApprovePurchaseOrder



Approve a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization for which to approve the purchase order. This should be a unique string identifier provided by Zoho Books.
-   **purchase\_order\_identifier** (`string`, required) The unique identifier for the purchase order to be approved.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendPurchaseOrderEmail



Send a purchase order email to the vendor.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization. Required to specify which organization the purchase order belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_id** (`string`, optional) Unique identifier of the purchase order to be emailed to the vendor. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **email\_attachments** (`string`, optional) A comma-separated list of file paths or URLs to attach to the email. Only used when mode is ‘execute’.
-   **attachment\_file\_name** (`string`, optional) The name of the file to attach to the email for the purchase order. Only used when mode is ‘execute’.
-   **send\_purchase\_order\_attachment** (`boolean`, optional) Set to true to include the purchase order as an attachment with the email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetPurchaseOrderEmailContent



Retrieves the email content of a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization to retrieve the purchase order email content for.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to retrieve its email content.
-   **email\_template\_id** (`string`, optional) Get the email content based on a specific email template. Defaults to customer-associated or default template if not provided.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePurchaseOrderBillingAddress



Update the billing address for a specific purchase order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization to update the billing address in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_identifier** (`string`, optional) Unique identifier for the specific purchase order to update the billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetPurchaseOrderTemplates



Retrieve all purchase order PDF templates from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for retrieving purchase order templates.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrievePurchaseOrderAttachment



Retrieve the file attached to a specific purchase order.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID representing the organization. Required to specify which organization’s purchase order to access.
-   **purchase\_order\_id** (`string`, required) The unique identifier of the purchase order to retrieve the attachment for.
-   **get\_thumbnail** (`boolean`, optional) Set to true to get the thumbnail of the attachment, or false to retrieve the full file.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachFileToPurchaseOrder



Attach a file to a specified purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **purchase\_order\_id** (`string`, required) The unique identifier of the purchase order to which the file will be attached.
-   **file\_attachment** (`string`, optional) The file to attach to the purchase order. Must be one of the following formats: gif, png, jpeg, jpg, bmp, pdf, xls, xlsx, doc, or docx.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePurchaseOrderEmailAttachment



Update email attachment preference for a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the purchase order email attachment preference is being updated.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to update the email attachment preference for.
-   **include\_attachment\_with\_email** (`boolean`, required) Boolean to determine if the attachment should be sent with the purchase order email. Set to true to include the attachment, or false to exclude it.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeletePurchaseOrderAttachment



Deletes the attachment from a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books. This is required to specify which organization’s records to access or modify.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to delete the attachment from.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetPurchaseOrderComments



Retrieve comments and history of a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization to retrieve purchase order comments for. Required to specify which organization’s data to access.
-   **purchase\_order\_id** (`string`, required) Unique identifier for the specific purchase order to retrieve comments and history.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddPurchaseOrderComment



Add a comment to a purchase order in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This ID is required to specify which organization’s purchase order is being commented on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_identifier** (`string`, optional) Unique identifier for the purchase order in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdatePurchaseOrderComment



Update an existing comment on a purchase order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID representing the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **purchase\_order\_id** (`string`, optional) The unique identifier for the purchase order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_identifier** (`string`, optional) Unique identifier of the comment to be updated in the purchase order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeletePurchaseOrderComment



Delete a comment from a purchase order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. Provide this to specify which organization’s purchase order comment you wish to delete.
-   **purchase\_order\_id** (`string`, required) Unique identifier of the purchase order to delete the comment from.
-   **comment\_unique\_identifier** (`string`, required) Unique identifier of the comment to be deleted. Required to specify which comment to remove from a purchase order.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RejectPurchaseOrder



Reject a specific purchase order in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) A unique identifier for the organization in Zoho Books.
-   **purchase\_order\_id** (`string`, required) The ID of the purchase order to be rejected in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateRecurringBill



Create a recurring bill in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books for which the recurring bill will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringBillCustomField



Update or create a recurring bill using a unique custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization associated with the recurring bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_unique\_identifier\_key** (`string`, optional) The API name of the unique custom field used to identify the recurring bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) Unique value of the custom field used to identify the recurring bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_creation\_if\_missing** (`boolean`, optional) Set to true to create a new recurring bill if the unique custom field value is not found. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringBill



Update details of a recurring bill in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This ID is required to specify the organization whose recurring bill is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_bill\_identifier** (`string`, optional) Unique identifier for the recurring bill to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringBillDetails



Retrieve details of a recurring bill from Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books.
-   **recurring\_bill\_unique\_id** (`string`, required) Unique identifier for the recurring bill in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRecurringBill



Delete an existing recurring bill in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization in Zoho Books to delete a recurring bill from.
-   **recurring\_bill\_identifier** (`string`, required) Unique identifier of the recurring bill to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.StopRecurringBill



Stop an active recurring bill in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID representing the organization in Zoho Books.
-   **recurring\_bill\_identifier** (`string`, required) Unique identifier for the recurring bill to be stopped.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ResumeRecurringBill



Resume a stopped recurring bill in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID for the organization in Zoho Books.
-   **recurring\_bill\_identifier** (`string`, required) Provide the unique identifier of the recurring bill to resume it in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringBillHistory



Get history and comments of a recurring bill.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which you want to get the recurring bill history.
-   **recurring\_bill\_identifier** (`string`, required) Unique identifier for the specific recurring bill. Required to fetch its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateRecurringExpense



Create a recurring expense in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. This ID is necessary to specify which organization’s records to create the recurring expense under. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListRecurringExpenses



Retrieve all recurring expenses from your records.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization whose recurring expenses need to be listed.
-   **recurring\_expense\_name\_filter** (`string`, optional) Filter recurring expenses by name using either ‘startswith’ or ‘contains’. Maximum length is 100 characters.
-   **search\_by\_last\_created\_date** (`string`, optional) Filter recurring expenses based on last generated expense date. Use formats: `last_created_date_start`, `last_created_date_end`, `last_created_date_before`, `last_created_date_after` with date \[yyyy-mm-dd\].
-   **filter\_by\_next\_expense\_date** (`string`, optional) Filter recurring expenses by dates related to the next expected expense. Options include ‘next\_expense\_date\_start’, ‘next\_expense\_date\_end’, ‘next\_expense\_date\_before’, and ‘next\_expense\_date\_after’. Format is ‘yyyy-mm-dd’.
-   **expense\_status** (`string`, optional) Specify the status of expenses to search for. Allowed values are ‘active’, ‘stopped’, and ‘expired’.
-   **account\_id\_for\_expense** (`string`, optional) Specify the unique identifier for the expense account to filter expenses associated with it.
-   **filter\_by\_account\_name** (`string`, optional) Search expenses by account name with options for exact match or partial match using ‘startswith’ and ‘contains’. Max-length is 100 characters.
-   **amount\_filter** (`number`, optional) Specify a filter for expense amounts, such as ‘amount\_less\_than’, ‘amount\_less\_equals’, ‘amount\_greater\_than’, or ‘amount\_greater\_than’.
-   **search\_by\_customer\_name** (`string`, optional) Search recurring expenses by customer name. Use variants ‘customer\_name\_startswith’ or ‘customer\_name\_contains’. Max 100 characters.
-   **search\_by\_customer\_id** (`string`, optional) Specify the customer ID to search expenses associated with that customer.
-   **paid\_through\_account\_id** (`string`, optional) ID of the account through which the expense was paid. Used to filter expenses.
-   **expense\_status\_filter** (`string`, optional) Filter recurring expenses by their status. Use ‘Status.All’, ‘Status.Active’, ‘Status.Expired’, or ‘Status.Stopped’.
-   **search\_expenses\_by\_text** (`string`, optional) Specify text to search expenses by account name, description, customer name, or vendor name. Maximum length is 100 characters.
-   **sort\_expenses\_by\_column** (`string`, optional) Specify the column to sort expenses by. Allowed values: next\_expense\_date, account\_name, total, last\_created\_date, recurrence\_name, customer\_name, created\_time.
-   **page\_number\_to\_fetch** (`integer`, optional) The page number of records to retrieve, starting from 1. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify how many records to retrieve per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringExpense



Update or create a recurring expense using a custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization whose recurring expense is to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) Unique CustomField API Name to identify the recurring expense. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) Unique value of the CustomField used to identify the recurring expense. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_recurring\_if\_not\_found** (`boolean`, optional) Set to true to create a new recurring expense if the unique custom field value is not found. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ModifyRecurringExpense



Update a recurring expense in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Provide the ID of the organization for which the recurring expense needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_expense\_identifier** (`string`, optional) Unique identifier for the recurring expense to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringExpenseDetails



Get details of a specific recurring expense in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization to retrieve its specific recurring expense details from Zoho Books.
-   **recurring\_expense\_id** (`string`, required) Unique identifier for the recurring expense to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRecurringExpense



Delete an existing recurring expense in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **recurring\_expense\_id** (`string`, required) The unique identifier for the recurring expense to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.StopRecurringExpense



Stop an active recurring expense in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books for which the recurring expense will be stopped.
-   **recurring\_expense\_identifier** (`string`, required) Unique identifier for the recurring expense to be stopped.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ResumeRecurringExpense



Resumes a stopped recurring expense cycle.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **recurring\_expense\_id** (`string`, required) The unique identifier for the recurring expense to be resumed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListChildExpenses



Retrieve child expenses from a recurring expense.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to list child expenses for.
-   **recurring\_expense\_identifier** (`string`, required) Unique identifier for the recurring expense to retrieve child expenses.
-   **sort\_expenses\_by** (`string`, optional) Specify the field to sort expenses. Valid options: next\_expense\_date, account\_name, total, last\_created\_date, recurrence\_name, customer\_name, created\_time.
-   **fetch\_page\_number** (`integer`, optional) Specify the page number to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify the number of expense records to retrieve per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringExpenseHistory



Get history and comments of a recurring expense.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the recurring expense history is requested.
-   **recurring\_expense\_id** (`string`, required) Unique identifier for the specific recurring expense to retrieve history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateRecurringInvoice



Create a new recurring invoice in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the recurring invoice is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListRecurringInvoices



Retrieve details of all recurring invoices.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which you want to list the recurring invoices. Required for accessing specific organization’s data.
-   **recurrence\_unique\_name** (`string`, optional) Unique name for the recurring profile, provided by the user. Max-length is 100 characters.
-   **search\_by\_item\_name** (`string`, optional) Search recurring invoices by item name, using ‘item\_name\_startswith’ or ‘profileitemname\_contains’ variants.
-   **item\_description\_filter** (`string`, optional) Search for recurring invoices by item description using ‘startswith’ or ‘contains’ criteria.
-   **customer\_name** (`string`, optional) Name of the customer for whom the recurring invoice is raised. Use this to filter invoices by customer.
-   **line\_item\_id** (`string`, optional) Specify the line item ID for filtering recurring invoices.
-   **item\_id** (`string`, optional) Unique identifier for the item associated with the recurring invoice.
-   **tax\_identifier** (`string`, optional) ID of the tax or tax group associated with the recurring invoice.
-   **invoice\_note** (`string`, optional) A short note for the recurring invoice, providing additional details or context.
-   **recurring\_invoice\_start\_date** (`string`, optional) The date on which the recurring invoice starts. Format: YYYY-MM-DD.
-   **recurring\_invoice\_end\_date** (`string`, optional) The date when the recurring invoice expires, formatted as YYYY-MM-DD.
-   **customer\_id** (`string`, optional) The ID of the customer for whom the recurring invoice is raised. Use this to filter invoices specific to a customer.
-   **recurring\_invoice\_status** (`string`, optional) Status of the recurring invoice: ‘active’, ‘stopped’, or ‘expired’.
-   **filter\_recurring\_invoice\_status** (`string`, optional) Filter recurring invoices by status or payment expected date. Allowed values: Status.All, Status.Active, Status.Stopped, Status.Expired.
-   **search\_text** (`string`, optional) Search invoices by invoice number, purchase order, or customer name. Maximum length is 100 characters.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort the recurring invoices by. Leave empty for no sorting.
-   **page\_number** (`integer`, optional) The page number to fetch, with a default value of 1.
-   **records\_per\_page** (`integer`, optional) Number of records to retrieve per page, with a default of 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringInvoiceCustomField



Update or create a recurring invoice using a custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. This ID is required to update or create a recurring invoice using the custom field. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The unique API name of the custom field used to identify which recurring invoice to update or create. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value for the custom field used to identify and update the recurring invoice. This should be a unique string associated with a custom field configured to reject duplicates. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **enable\_upsert** (`boolean`, optional) Set to true to create a new invoice if no existing invoice matches the unique identifier. Set to false to update only without creating a new invoice. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringInvoice



Update details of a recurring invoice in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization in Zoho Books. Required for updating a recurring invoice. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_invoice\_id** (`string`, optional) Unique identifier of the recurring invoice to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringInvoiceDetails



Retrieve details of a specific recurring invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to access organization-specific data.
-   **recurring\_invoice\_identifier** (`string`, required) Unique identifier for the recurring invoice to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRecurringInvoice



Delete an existing recurring invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization to which the recurring invoice belongs. Required for identifying the correct organization.
-   **recurring\_invoice\_id** (`string`, required) Unique identifier for the recurring invoice to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.StopRecurringInvoice



Stop an active recurring invoice in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the recurring invoice is to be stopped. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_invoice\_id** (`string`, optional) The unique identifier for the recurring invoice to be stopped. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ResumeRecurringInvoice



Resumes a stopped recurring invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization whose invoice needs to be resumed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_invoice\_id** (`string`, optional) Unique identifier of the recurring invoice to be resumed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRecurringInvoiceTemplate



Update the PDF template for a recurring invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization. This ID is used to specify which organization’s recurring invoice template will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **recurring\_invoice\_identifier** (`string`, optional) Unique identifier of the recurring invoice to update the PDF template for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **invoice\_template\_id** (`string`, optional) Unique identifier of the recurring invoice template to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRecurringInvoiceHistory



Get the complete history and comments of a recurring invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization. Required to access invoice history.
-   **recurring\_invoice\_id** (`string`, required) Unique identifier for the specific recurring invoice to retrieve its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateRetainerInvoice



Create a retainer invoice for a customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the retainer invoice is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore automatic invoice number generation and manually input the invoice number. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListRetainerInvoices



List all retainer invoices with pagination.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization within Zoho Books.
-   **sort\_by\_column** (`string`, optional) Specifies the column to sort retainer invoices by. Allowed values: ‘customer\_name’, ‘retainer\_invoice\_number’, ‘date’, ‘due\_date’, ‘total’, ‘balance’, ‘created\_time’.
-   **filter\_invoices\_by\_status\_or\_date** (`string`, optional) Filter invoices by status or payment expected date. Valid values: Status.All, Status.Sent, Status.Draft, Status.OverDue, Status.Paid, Status.Void, Status.Unpaid, Status.PartiallyPaid, Status.Viewed, Date.PaymentExpectedDate.
-   **sorting\_order** (`string`, optional) The order for sorting retainer invoices. Typically ‘asc’ for ascending or ‘desc’ for descending.
-   **page\_number** (`integer`, optional) Specifies the page number for pagination when listing retainer invoices.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200.
-   **print\_pdf** (`boolean`, optional) Set to true to print the exported PDF of retainer invoices.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ModifyInvoice



Update an existing invoice in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization within Zoho Books to which the retainer invoice belongs. This is required to ensure the update is applied to the correct entity. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_id** (`string`, optional) Unique identifier of the retainer invoice to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRetainerInvoiceDetails



Retrieve details of a specific retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization to retrieve the retainer invoice for.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to retrieve details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRetainerInvoice



Delete an existing retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose retainer invoice you want to delete.
-   **retainer\_invoice\_identifier** (`string`, required) Unique identifier of the retainer invoice to delete. Required for specifying the invoice to be removed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkInvoiceSent



Marks a draft retainer invoice as sent.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. This ID is necessary to specify which organization’s invoice should be marked as sent.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to be marked as sent.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ModifyRetainerInvoiceTemplate



Update the PDF template for a retainer invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) The ID of the organization to update the retainer invoice template for. It should be a string representing the organization’s unique identifier in Zoho Books.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier for the retainer invoice to update the PDF template.
-   **retainer\_invoice\_template\_id** (`string`, required) Unique identifier of the retainer invoice template.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.VoidRetainerInvoice



Mark a retainer invoice as void.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization required to identify which organization’s invoice to void.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier for the retainer invoice to be marked as void.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkRetainerInvoiceAsDraft



Mark a voided retainer invoice as draft.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to be marked as draft.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitRetainerInvoice



Submit a retainer invoice for approval in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books to which the retainer invoice belongs.
-   **retainer\_invoice\_unique\_id** (`string`, required) Unique identifier of the retainer invoice for submission.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveRetainerInvoice



Approve a retainer invoice in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the retainer invoice is being approved.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to approve.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EmailRetainerInvoiceToCustomer



Send a retainer invoice to a customer via email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_id** (`string`, optional) The unique identifier of the retainer invoice to be emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **email\_attachments** (`string`, optional) List of file paths or URLs for files to attach to the email. Only used when mode is ‘execute’.
-   **send\_customer\_statement** (`boolean`, optional) Set to true to send the customer statement PDF with the email. Only used when mode is ‘execute’.
-   **attach\_invoice\_to\_email** (`boolean`, optional) Attach the retainer invoice to the email if true. Accepts a boolean value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveRetainerInvoiceEmailContent



Retrieve the email content of a retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization. Required to access retainer invoice emails.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice. Used to fetch the specific email content.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateBillingAddressRetainerInvoice



Update billing address for a retainer invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to specify which organization’s invoice needs updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_id** (`string`, optional) Unique identifier of the retainer invoice to update the billing address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRetainerInvoiceTemplates



Retrieve all retainer invoice PDF templates.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to retrieve retainer invoice templates from.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRetainerInvoiceAttachment



Retrieve the file attached to a retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose invoice attachment you want to retrieve.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice for which the attachment is to be retrieved.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachFileToInvoice



Attach a file to an invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to which the invoice belongs. Required to specify the correct entity for file attachment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_identifier** (`string`, optional) Unique identifier of the retainer invoice to which the file will be attached. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRetainerInvoiceAttachment



Delete a file attached to a retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books whose invoice attachment is to be deleted.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to specify which invoice’s attachment should be deleted.
-   **document\_id** (`string`, required) Unique identifier of the retainer invoice document to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetRetainerInvoiceHistory



Get the history and comments of a retainer invoice.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to fetch its retainer invoice history.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to look up its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddRetainerInvoiceComment



Add a comment to a specific retainer invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique ID string of the organization in Zoho Books to add a comment to a retainer invoice. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_id** (`string`, optional) A unique identifier for the retainer invoice you want to comment on. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteRetainerInvoiceComment



Remove a specific comment from a retainer invoice.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization within Zoho Books for which the comment is to be deleted.
-   **retainer\_invoice\_id** (`string`, required) Unique identifier of the retainer invoice to find the specific invoice for comment deletion.
-   **comment\_identifier** (`string`, required) Unique identifier of the comment to be deleted from the retainer invoice.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateRetainerInvoiceComment



Update a comment on a retainer invoice.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization to which the retainer invoice belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **retainer\_invoice\_id** (`string`, optional) Unique identifier of the retainer invoice to update the comment for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_identifier** (`string`, optional) The unique identifier of the comment to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateSalesOrder



Create a sales order for a customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization for which the sales order is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **total\_number\_of\_files** (`integer`, optional) Specify the total number of files to be attached to the sales order. Only used when mode is ‘execute’.
-   **document\_attachment** (`string`, optional) A document to be attached to the sales order. Provide as a string containing the document details or content. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore auto sales order number generation, requiring manual sales order number entry. Only used when mode is ‘execute’.
-   **can\_send\_via\_email** (`boolean`, optional) Set to true if the file can be sent via email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListSalesOrders



Retrieve a list of all sales orders.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which sales orders are to be listed.
-   **sort\_column** (`string`, optional) Column field to sort sales order results. Options: customer\_name, salesorder\_number, shipment\_date, last\_modified\_time, reference\_number, total, date, created\_time.
-   **cross\_field\_search\_text** (`string`, optional) A general search term for matching text across fields like sales order number, reference number, and customer name for quick identification.
-   **filter\_sales\_order\_by\_status** (`string`, optional) Filter sales orders by status. Options: All, Open, Draft, OverDue, PartiallyInvoiced, Invoiced, Void, Closed.
-   **filter\_by\_sales\_order\_number** (`string`, optional) Filter sales orders by sales order number with operators: startswith, not\_in, in, or contains. Max length: 100 characters.
-   **filter\_by\_item\_name** (`string`, optional) Filter sales orders by line item name. Use matching operators like startswith, not\_in, in, and contains. Max length: 100 characters.
-   **filter\_by\_item\_id** (`string`, optional) Filter sales orders by a specific line item identifier to retrieve orders containing a particular product or service.
-   **filter\_by\_item\_description** (`string`, optional) Filter sales orders by line item description. Supports variants like startswith, not\_in, in, and contains. Max length: 100 characters.
-   **filter\_by\_reference\_number** (`string`, optional) Filter sales orders by external reference number using operators like `startswith`, `not_in`, `in`, and `contains`.
-   **customer\_name\_filter** (`string`, optional) Filter sales orders by customer name with operators like startswith, not\_in, in, and contains. Max length: 100 characters.
-   **filter\_by\_total** (`number`, optional) Specify range operators to filter sales orders by total. Use total\_start, total\_end, total\_less\_than, total\_greater\_than, etc.
-   **creation\_date\_filter** (`string`, optional) Filter sales orders by creation date using operators like `date_start`, `date_end`, `date_before`, `date_after`. Format: `yyyy-mm-dd`.
-   **shipment\_date\_filter** (`string`, optional) Specify the shipment date filter for sales orders. Use variants such as ‘shipment\_date\_start’, ‘shipment\_date\_end’, ‘shipment\_date\_before’, and ‘shipment\_date\_after’ in ‘yyyy-mm-dd’ format.
-   **sales\_order\_status** (`string`, optional) Filter sales orders by their status. Allowed values: draft, open, invoiced, partially\_invoiced, void, and overdue.
-   **filter\_by\_customer\_id** (`string`, optional) Filter sales orders by specific customer ID. Retrieves orders associated with a customer for CRM and reporting.
-   **sales\_representative\_id** (`string`, optional) Filter sales orders by specific sales representative ID for tracking and reporting purposes.
-   **sales\_order\_ids** (`string`, optional) Comma-separated list of sales order IDs to filter results. Maximum length is 200 characters.
-   **last\_modified\_time** (`string`, optional) Specify the last modified time of the sales order to filter results. Use the format ‘yyyy-mm-dd’.
-   **response\_format** (`string`, optional) Specifies the format for sales order details. Must be one of: json, csv, xml, xls, xlsx, pdf, jhtml, or html. Default is json.
-   **custom\_view\_id** (`string`, optional) ID of the custom view to filter sales orders based on predefined criteria.
-   **deal\_crm\_potential\_id** (`integer`, optional) Potential ID of a Deal in CRM. Used to filter sales orders associated with a specific deal.
-   **page\_number** (`integer`, optional) Specify the page number for retrieving paginated sales order results. Default is 1 for the first page.
-   **max\_sales\_orders\_per\_page** (`integer`, optional) Specify the maximum number of sales order records to return per page. Default is 200 for optimal performance and memory usage.
-   **enable\_printing** (`boolean`, optional) Enable printing of the exported PDF. Use when ‘accept’ is set to ‘pdf’ and ‘salesorder\_ids’ includes values.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderWithCustomField



Update or create a sales order using a custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to identify the sales order to update or create. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **unique\_custom\_field\_value** (`string`, optional) The unique value of the custom field used to retrieve and update a specific sales order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_creation\_if\_not\_found** (`boolean`, optional) Set to true to create a new sales order if the unique custom field value is not found. Complete details are required for creation. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderInZohoBooks



Update details of an existing sales order in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to which the sales order belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Unique identifier of the sales order to update in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **total\_number\_of\_files** (`integer`, optional) Specify the total number of files to be attached to the sales order update. Only used when mode is ‘execute’.
-   **attach\_document** (`string`, optional) A document to be attached to the sales order. Provide the file path or URL as a string. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to TRUE to ignore auto-generation of the sales order number. This requires manually entering the number. Only used when mode is ‘execute’.
-   **allow\_email\_sending** (`boolean`, optional) Determine if the updated sales order can be sent via email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesOrderDetails



Retrieve details of a specific sales order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. This ID is used to specify the organization within Zoho Books whose sales order details need to be retrieved.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order required to retrieve its details.
-   **output\_format** (`string`, optional) Specifies the format in which to receive the sales order details. Options include: json, csv, xml, xls, xlsx, pdf, jhtml, and html. Default is json.
-   **print\_pdf** (`boolean`, optional) Set to true to print the exported PDF of the sales order, otherwise false.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteSalesOrder



Delete an existing sales order.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization for which the sales order will be deleted.
-   **sales\_order\_id** (`string`, required) Unique identifier for the sales order to be deleted. Ensure it is not invoiced.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderCustomFields



Update custom fields in existing sales orders efficiently.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization associated with the sales order. This is required to identify which organization’s sales order needs updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Unique identifier for the sales order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.OpenSalesOrder



Mark a draft sales order as open in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization where the sales order is to be marked as open.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to mark as open in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkSalesOrderAsVoid



Mark a sales order as void in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Unique identifier for the specific sales order to be marked as void. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderSubStatus



Update the sub status of a sales order in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books. This ID is required to specify which organization’s sales order needs an update.
-   **sales\_order\_id** (`string`, required) Unique identifier for the specific sales order to update.
-   **sales\_order\_status\_code** (`string`, required) The unique code representing the new status for a sales order. This is required to update the status in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EmailSalesOrderToCustomer



Email a sales order to a customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization for which the sales order is being emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Provide the unique identifier of the sales order to be emailed to the customer. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_identifier** (`string`, optional) Unique identifier of the sales order to be emailed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_attachments** (`string`, optional) A list of file paths or URLs for attachments to include with the sales order email. Only used when mode is ‘execute’.
-   **file\_name** (`string`, optional) Specify the name of the file to be attached to the email. Only used when mode is ‘execute’.
-   **include\_sales\_order\_attachment** (`boolean`, optional) Specify true to include the sales order attachment in the email, or false to exclude it. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesOrderEmailContent



Retrieve email content for a specific sales order.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books for which the sales order email content is required.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to retrieve its email content.
-   **email\_template\_id** (`string`, optional) Optional. ID of the email template for retrieving specific email content. If not provided, defaults will be used.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitSalesOrderForApproval



Submit a sales order for approval in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books where the sales order is submitted.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveSalesOrder



Approve a specified sales order in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization in Zoho Books required for approving a sales order.
-   **sales\_order\_id** (`string`, required) The unique identifier for the sales order to be approved.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportSalesOrdersPdf



Export sales orders as a single PDF document.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose sales orders will be exported as a PDF. This ID is required to access and retrieve the sales order data from Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ExportPrintSalesOrders



Export and print sales orders as PDFs.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose sales orders you want to export and print as PDFs.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderBillingAddress



Updates the billing address for a specific sales order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization associated with the sales order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_identifier** (`string`, optional) Unique identifier of the sales order to update the billing address for. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateShippingAddressSalesOrder



Update the shipping address for a specific sales order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The ID of the organization in Zoho Books to update the shipping address for the sales order. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_identifier** (`string`, optional) Unique identifier of the sales order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesOrderTemplates



Retrieve all sales order PDF templates from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) A string representing the ID of the organization. Required to specify which organization’s sales order templates to retrieve.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderTemplate



Update the PDF template for a sales order.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization associated with the sales order.
-   **sales\_order\_id** (`string`, required) Unique identifier for the sales order to be updated with a new PDF template.
-   **sales\_order\_template\_id** (`string`, required) Unique identifier of the sales order template to update.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesOrderAttachment



Retrieve the file attached to a specific sales order.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to retrieve the attachment for.
-   **require\_preview\_of\_sales\_order** (`boolean`, optional) Specify whether a preview of the Sales Order is required. Use True for preview, False for no preview.
-   **require\_inline\_response** (`boolean`, optional) Set to true if an inline response is needed, displaying directly in the browser.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AttachFileToSalesOrder



Attach a file to a specific sales order in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Unique identifier for the organization in Zoho Books.
-   **sales\_order\_identifier** (`string`, required) Unique identifier of the sales order to which the file will be attached.
-   **file\_to\_attach** (`string`, optional) Path or identifier of the file to be attached to the sales order.
-   **document\_file\_path** (`string`, optional) Path to the document file that needs to be attached to the sales order.
-   **number\_of\_files** (`integer`, optional) Specify the total number of files to be attached to the sales order.
-   **document\_identifiers** (`string`, optional) A string representing the IDs of the documents to attach. Comma-separated for multiple IDs.
-   **allow\_sending\_file\_in\_mail** (`boolean`, optional) Boolean indicating if the file can be sent in mail. True allows sending.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SetSalesOrderAttachmentPreference



Sets attachment preference for sales order emails.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which you want to update the attachment preference.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to update.
-   **allow\_attachment\_in\_email** (`boolean`, required) Indicate if the file can be sent in the email. Set to true to allow, false to prevent.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteSalesOrderAttachment



Delete an attached file from a sales order in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose sales order attachment is to be deleted.
-   **sales\_order\_id** (`string`, required) Unique identifier for the sales order from which the attachment will be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesOrderComments



Retrieve the history and comments of a sales order.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which to retrieve sales order comments.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to retrieve comments and history for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddSalesOrderComment



Add a comment to a sales order in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Unique identifier of the sales order to which the comment will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesOrderComment



Update an existing comment on a sales order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_order\_id** (`string`, optional) Unique identifier of the sales order to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **comment\_id** (`string`, optional) Unique identifier of the comment associated with the sales order that needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteSalesOrderComment



Delete a comment from a sales order in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization. This ID is required to specify which organization’s sales order comment needs to be deleted.
-   **sales\_order\_id** (`string`, required) Unique identifier of the sales order to delete the comment from.
-   **comment\_identifier** (`string`, required) Unique identifier of the comment to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateSalesReceipt



Create a sales receipt for immediate payment transactions.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization needed to create the sales receipt. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to ignore automatic sales receipt number generation, requiring manual entry of the receipt number. Only used when mode is ‘execute’.
-   **send\_receipt\_via\_email** (`boolean`, optional) Set to true to send the sales receipt to the customer via email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListSalesReceipts



Retrieve a list of all sales receipts.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to list sales receipts.
-   **search\_receipt\_by\_number** (`string`, optional) Search for receipts using their unique number. Supports ‘startswith’ and ‘contains’ filters. Max length: 100 characters.
-   **search\_by\_item\_name** (`string`, optional) Search sales receipts by item name using ‘startswith’ or ‘contains’ variants. Maximum length is 100 characters.
-   **sort\_by\_column** (`string`, optional) Specify the column to sort sales receipts by. Options: customer\_name, receipt\_number, date, total, created\_time.
-   **filter\_sales\_receipts\_by\_status** (`string`, optional) Filter sales receipts based on their status. Options include date ranges like ‘ThisWeek’, and statuses like ‘Status.Draft’.
-   **customer\_identifier** (`string`, optional) Filter sales receipts by specific customer identifier. Provide the unique ID of the customer to retrieve their sales receipts.
-   **date\_filter** (`string`, optional) Filter sales receipts by date using variants like date\_start, date\_end, date\_before, and date\_after. Use yyyy-mm-dd format.
-   **total\_filter\_options** (`number`, optional) Filter sales receipts using range operators like total\_start, total\_end, total\_less\_than, and total\_greater\_than. Expects a number specifying the total amount.
-   **page\_number** (`integer`, optional) Specify the page number for retrieving paginated sales receipt results. Defaults to 1.
-   **max\_records\_per\_page** (`integer`, optional) Specify the maximum number of sales receipt records to return per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateSalesReceipt



Update an existing sales receipt in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization in Zoho Books. It is required to specify which organization’s sales receipt needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **sales\_receipt\_identifier** (`string`, optional) Unique identifier for the sales receipt to be updated. This is required to specify which receipt to modify. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetSalesReceiptDetails



Retrieve the details of a sales receipt.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization for which the sales receipt is being retrieved.
-   **sales\_receipt\_id** (`string`, required) The unique identifier for the sales receipt to be retrieved. Required for fetching the specific sales receipt details.
-   **output\_format** (`string`, optional) Specifies the format in which to retrieve the sales receipt details. Options are ‘json’, ‘pdf’, or ‘html’. Default is ‘json’.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteSalesReceipt



Delete an existing sales receipt in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **sales\_receipt\_id** (`string`, required) The unique identifier for the sales receipt to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.EmailSalesReceiptToCustomer



Email a sales receipt to the customer.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **sales\_receipt\_identifier** (`string`, optional) The unique identifier of the sales receipt to be emailed to the customer. It must be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **attach\_pdf** (`boolean`, optional) Set to true to send the sales receipt PDF with the email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddProjectTask



Add a task to a specific project.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization for which the task is being added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Unique identifier of the project in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetProjectTasks



Retrieve a list of tasks for a specified project.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. This is required to specify which organization’s project tasks to retrieve.
-   **project\_unique\_id** (`string`, required) Unique identifier for the project to fetch tasks.
-   **fetch\_page\_number** (`integer`, optional) The page number of results to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify the number of task records to fetch per page. Defaults to 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateProjectTask



Update the details of a project task.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books to identify the context for the task update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **project\_identifier** (`string`, optional) Unique identifier of the project in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **task\_identifier** (`string`, optional) Unique identifier of the task to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaskDetails



Retrieve detailed information about a specific task in a project.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **project\_id** (`string`, required) Unique identifier of the project.
-   **task\_unique\_identifier** (`string`, required) The unique identifier for the task to retrieve details for from Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteProjectTask



Remove a task from a specific project in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique ID of the organization to which the task belongs.
-   **project\_identifier** (`string`, required) Unique identifier for the project from which a task will be deleted.
-   **task\_identifier** (`string`, required) Unique identifier of the task to be deleted in the project.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateAssociatedTax



Create and associate a tax with an item.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization in Zoho Books where the tax will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListTaxes



Retrieve a list of simple and compound taxes.

**Parameters**

-   **organization\_id** (`string`, required) Unique ID of the organization to list taxes for.
-   **page\_number** (`integer`, optional) Page number of the tax list to retrieve. Defaults to 1 if not specified.
-   **records\_per\_page** (`integer`, optional) The number of tax records to retrieve per page. Defaults to 200 if not specified.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateTaxDetails



Update the details of a specified tax.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier for the organization that owns the tax to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tax\_identifier** (`string`, optional) Unique identifier of the tax to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaxDetails



Retrieve the details of a specific tax.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to retrieve tax details from.
-   **tax\_identifier** (`string`, required) Unique identifier for retrieving specific tax details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTax



Delete a simple or compound tax in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization within Zoho Books. This is required to specify which organization’s tax entry to delete.
-   **tax\_identifier** (`string`, required) Unique identifier of the tax to be deleted in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RetrieveTaxGroupDetails



Retrieve details of a specific tax group.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization in Zoho Books to get the tax group details for.
-   **tax\_group\_identifier** (`string`, required) Unique identifier for the tax group in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateTaxGroupDetails



Update details of a specific tax group in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique ID of the organization in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tax\_group\_identifier** (`string`, optional) Unique identifier of the tax group to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTaxGroup



Delete a tax group if not associated with transactions.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **tax\_group\_identifier** (`string`, required) Unique identifier of the tax group to be deleted. Ensure it’s not associated with active transactions to proceed.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateTaxGroup



Create a tax group with multiple associated taxes.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization within Zoho Books. This is required to create a tax group. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateTaxAuthority



Create a tax authority in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the tax authority is to be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaxAuthorities



Retrieve the list of tax authorities.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which to retrieve tax authorities.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateTaxAuthorityDetails



Update details of a tax authority.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization for which the tax authority details need to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tax\_authority\_identifier** (`string`, optional) Unique identifier of the tax authority to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaxAuthorityDetails



Retrieve details of a specific tax authority.

**Parameters**

-   **organization\_id** (`string`, required) Provide the ID of the organization to retrieve tax authority details.
-   **tax\_authority\_unique\_id** (`string`, required) Unique identifier of the tax authority to retrieve details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTaxAuthority



Delete a specific tax authority.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to identify which one the tax authority belongs to.
-   **tax\_authority\_identifier** (`string`, required) The unique identifier for the tax authority to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateTaxExemption



Create a tax exemption in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books for which the tax exemption is being created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaxExemptionsList



Retrieve a list of tax exemptions from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose tax exemptions are being requested.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateTaxExemptionDetails



Update the details of a tax exemption.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier of the organization for which the tax exemption needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **tax\_exemption\_identifier** (`string`, optional) Unique identifier for the tax exemption to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTaxExemptionDetails



Retrieve the details of a tax exemption using its ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to access the organization’s tax exemption details.
-   **tax\_exemption\_identifier** (`string`, required) The unique identifier for the tax exemption to retrieve details for.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTaxExemption



Delete a specific tax exemption from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books.
-   **tax\_exemption\_identifier** (`string`, required) Unique identifier of the tax exemption to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.LogTimeEntries



Log time entries in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books. Required for logging time entries. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListTimeEntries



Retrieve all time entries with pagination.

**Parameters**

-   **organization\_identifier** (`string`, required) The unique identifier for the organization. Required to retrieve time entries specific to this organization.
-   **start\_date\_for\_time\_entries** (`string`, optional) Date from which the time entries should start being fetched. Expected format is YYYY-MM-DD.
-   **end\_date\_for\_time\_entries** (`string`, optional) The end date for fetching logged time entries in YYYY-MM-DD format.
-   **filter\_time\_entries\_by** (`string`, optional) Filter time entries by date or status. Use values like Date.Today, Date.ThisMonth, Status.Unbilled, etc.
-   **project\_id** (`string`, optional) Search for time entries by specifying the project ID.
-   **search\_time\_entries\_by\_user\_id** (`string`, optional) Search and filter time entries based on a specific user’s ID. Provide the ID as a string.
-   **sort\_time\_entries\_by** (`string`, optional) Sort time entries by project name, task name, user name, log date, timer start time, or customer name.
-   **page\_number\_to\_fetch** (`integer`, optional) Page number to retrieve time entries from, starting at 1 by default.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Defaults to 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteTimeEntries



Delete time tracking entries from projects.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization to identify which entity’s time entries will be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateTimeEntry



Updates an existing logged time entry.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization to which the time entry belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **time\_entry\_identifier** (`string`, optional) Unique identifier of the existing time entry to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetTimeEntryDetails



Retrieve details of a specific time entry.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization for which the time entry details are requested.
-   **time\_entry\_identifier** (`string`, required) Unique identifier of the time entry to retrieve details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteLoggedTimeEntry



Delete a specific logged time entry.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization from which the time entry will be deleted.
-   **time\_entry\_identifier** (`string`, required) Unique identifier for the logged time entry to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.StartTimeTracking



Initiate time tracking for a specific entry.

**Parameters**

-   **organization\_identifier** (`string`, required) ID of the organization for which the time tracking is to be started.
-   **time\_entry\_identifier** (`string`, required) Unique identifier for the specific time entry to be tracked.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.StopTimeTracking



Stop the timer for a time entry.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization where the time entry is being stopped. This ID is required to specify which organization’s time tracking should be affected.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCurrentRunningTimer



Retrieve the current running timer for a user.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization whose running timer is being retrieved.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateOrganizationUser



Create a user for your organization in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization in Zoho Books where the user will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetOrganizationUsers



Retrieve the list of all users in the organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve its users. Provide a valid organization ID as a string.
-   **user\_status\_filter** (`string`, optional) Filter users based on their status. Options: Status.All, Status.Active, Status.Inactive, Status.Invited, Status.Deleted.
-   **sort\_users\_by\_column** (`string`, optional) Specify the attribute to sort users by. Allowed values are name, email, user\_role, and status.
-   **page\_number** (`integer`, optional) Page number to be retrieved, with default being 1. Specify to navigate through pages.
-   **records\_per\_page** (`integer`, optional) Number of user records to retrieve per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateUserDetails



Update user details in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization whose user’s details are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **user\_identifier** (`string`, optional) Unique identifier of the user to be updated in Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetUserDetails



Retrieve detailed information about a specific user in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books. This is required to specify the organization context for API calls.
-   **user\_unique\_identifier** (`string`, required) A unique string that identifies the user in Zoho Books.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemoveUserFromOrganization



Delete a user from the organization.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization from which the user will be deleted.
-   **user\_unique\_identifier** (`string`, required) Unique identifier of the user to be deleted from the organization.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetCurrentUserDetails



Retrieve details of the current user from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books to retrieve the current user details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendInvitationEmail



Send an invitation email to a user in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization in Zoho Books required to send the invitation.
-   **user\_unique\_identifier** (`string`, required) Unique identifier of the user to whom the invitation email will be sent.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ActivateInactiveUser



Mark an inactive user as active.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the user will be reactivated. Ensure it matches the organization’s records.
-   **user\_identifier** (`string`, required) Unique identifier for the user to be activated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeactivateUserAccount



Deactivate a user’s account in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization within Zoho Books to which the user belongs.
-   **user\_unique\_identifier** (`string`, required) Provide the unique identifier of the user to be deactivated.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateVendorCredit



Create vendor credit for returns or adjustments.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the vendor credit is being created. Must be a valid organization ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bill\_id** (`string`, optional) Identifier of the bill associated with the vendor credit. Required for linking the credit to a specific transaction. Only used when mode is ‘execute’.
-   **ignore\_auto\_number\_generation** (`boolean`, optional) Set to true to bypass auto number generation. A vendor credit number becomes mandatory when enabled. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListVendorCredits



Retrieve and filter vendor credits from Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization in Zoho Books.
-   **vendor\_credit\_number\_filter** (`string`, optional) Filter vendor credits by specific vendor credit number. Supports partial matching with options like ‘startswith’ and ‘contains’.
-   **filter\_by\_creation\_date** (`string`, optional) Filter vendor credits by creation date using yyyy-mm-dd format. Supports date\_start, date\_end, date\_before, and date\_after for range filtering.
-   **vendor\_credit\_status** (`string`, optional) Filter vendor credits by their current status. Allowed values: ‘open’, ‘closed’, ‘void’, or ‘draft’.
-   **total\_amount\_filter** (`string`, optional) Filter vendor credits by total amount. Use variants: total\_start, total\_end, total\_less\_than, total\_less\_equals, total\_greater\_than, total\_greater\_equals.
-   **reference\_number\_filter** (`string`, optional) Filter vendor credits by their reference number, supporting ‘startswith’ and ‘contains’ for partial matches.
-   **filter\_by\_vendor\_name** (`string`, optional) Filter vendor credits by vendor name, supporting partial matches with ‘startswith’ and ‘contains’.
-   **filter\_by\_item\_name** (`string`, optional) Filter vendor credits by item name. Use ‘startswith:’ or ‘contains:’ as prefixes for partial matching.
-   **item\_description\_filter** (`string`, optional) Filter vendor credits by item description. Supports partial matching with ‘startswith’ and ‘contains’.
-   **filter\_by\_notes\_content** (`string`, optional) Filter vendor credits by notes content. Use partial matching with variants: notes\_startswith or notes\_contains.
-   **filter\_by\_custom\_field** (`string`, optional) Filter vendor credits by custom field values. Use ‘custom\_field\_startswith’ or ‘custom\_field\_contains’ for partial matching.
-   **filter\_by\_last\_modified\_time** (`string`, optional) Filter vendor credits by last modified time using ISO 8601 format (yyyy-mm-ddThh:mm:ss-hh:mm).
-   **filter\_by\_customer\_id** (`integer`, optional) Filter vendor credits by a specific customer ID to find credits associated with that customer. Retrieve customer IDs from the contacts API.
-   **filter\_by\_line\_item\_id** (`integer`, optional) Filter vendor credits by a specific line item ID to find credits containing the item.
-   **filter\_by\_item\_id** (`integer`, optional) Filter vendor credits by a specific item ID. Use this to find vendor credits containing the item. Retrieve item IDs from the items API.
-   **filter\_by\_tax\_id** (`integer`, optional) Filter vendor credits by specific tax ID to find credits with that tax applied. Tax IDs are retrieved from the taxes API.
-   **filter\_by\_status** (`string`, optional) Filter vendor credits by status using predefined values: Status.All, Status.Open, Status.Draft, Status.Closed, Status.Void.
-   **search\_text** (`string`, optional) Enter text to search vendor credits by credit number, vendor name, and reference number.
-   **sort\_by\_column** (`string`, optional) Specify which column to sort vendor credits by. Options: vendor\_name, vendor\_credit\_number, balance, total, date, created\_time, last\_modified\_time, reference\_number.
-   **pagination\_page\_number** (`integer`, optional) Specify the page number to retrieve results from for pagination. Default is 1.
-   **pagination\_records\_per\_page** (`integer`, optional) Specify the number of vendor credit records to return per page. The default value is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateVendorCredit



Update an existing vendor credit in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique identifier of the organization in Zoho Books. Required to update vendor credit. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_id** (`string`, optional) The unique identifier for the vendor credit to be updated. This string is required to locate the specific credit. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetVendorCreditDetails



Retrieve details of a specific vendor credit.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization whose vendor credit details are being requested.
-   **vendor\_credit\_id** (`string`, required) Unique identifier for the vendor credit to retrieve details.
-   **output\_format** (`string`, optional) Specify the format for vendor credit details. Options: json, xml, csv, xls, pdf, html, jhtml. Default is html.
-   **export\_vendor\_credit\_pdf** (`boolean`, optional) Set to true to export the vendor credit as a PDF with default print options. Accepts ‘true’, ‘false’, ‘on’, ‘off’.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteVendorCredit



Delete a vendor credit by its ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to specify which organization’s vendor credit to delete.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier of the vendor credit to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.OpenVendorCreditStatus



Change a vendor credit status to open in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books whose vendor credit status needs to be marked as open.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier for the vendor credit to be marked as open.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.MarkVendorCreditVoid



Mark an existing vendor credit as void in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) Provide the unique ID of the organization in Zoho Books.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier for the vendor credit to be marked as void.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SubmitVendorCreditForApproval



Submit a vendor credit for approval.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization where the vendor credit is submitted for approval.
-   **vendor\_credit\_unique\_id** (`string`, required) Unique identifier of the vendor credit to be submitted for approval.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApproveVendorCredit



Approve a vendor credit in Zoho Books.

**Parameters**

-   **organization\_identifier** (`string`, required) The ID of the organization in Zoho Books. This uniquely identifies the organization for which the vendor credit approval will be processed.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier for the vendor credit to be approved.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListBillsWithVendorCredit



List bills with applied vendor credit from a vendor credit ID.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization to fetch applicable bills for vendor credit.
-   **vendor\_credit\_id** (`string`, required) Unique identifier for the vendor credit to list the applied bills.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ApplyVendorCreditToBill



Apply vendor credit to an existing bill in Zoho Books.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization where the vendor credit will be applied. Required for identification within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_identifier** (`string`, optional) Unique identifier for the vendor credit to be applied to a bill. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RemoveVendorBillCredit



Delete credits applied to a vendor bill.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the vendor credit bill is to be deleted.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier of the vendor credit to be deleted. Required for bill credit removal.
-   **vendor\_credit\_bill\_identifier** (`string`, required) Unique identifier of the vendor credit bill to delete the applied credits.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RefundVendorCredit



Process a refund for vendor credit.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The ID of the organization for which the vendor credit refund is being processed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_identifier** (`string`, optional) Unique identifier for the vendor credit that needs to be refunded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListVendorCreditRefunds



Retrieve all refunds for a specified vendor credit.

**Parameters**

-   **organization\_identifier** (`string`, required) Unique string ID of the organization for which refunds are to be listed.
-   **vendor\_credit\_id** (`string`, required) The unique identifier for a specific vendor credit whose refunds are to be listed.
-   **page\_number** (`integer`, optional) Page number for pagination, specifying which set of results to retrieve. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify the number of refunds to return per page for pagination. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateVendorCreditRefund



Update a refunded vendor credit transaction.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Unique identifier for the organization. This is needed to specify which organization the vendor credit refund update applies to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_identifier** (`string`, optional) Unique identifier of the vendor credit to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_refund\_identifier** (`string`, optional) Unique identifier for the vendor credit refund transaction that needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetVendorCreditRefund



Retrieve a refund for a specific vendor credit.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the vendor credit belongs.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier for the vendor credit to retrieve the refund details.
-   **vendor\_credit\_refund\_id** (`string`, required) Unique identifier of the vendor credit refund for the specific transaction. Required to retrieve refund details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteVendorCreditRefund



Delete a vendor credit refund in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the vendor credit refund belongs.
-   **vendor\_credit\_identifier** (`string`, required) Unique identifier for the vendor credit, required to delete the refund.
-   **vendor\_credit\_refund\_id** (`string`, required) Unique identifier for the specific vendor credit refund you wish to delete.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchVendorCreditRefunds



Retrieve a paginated list of vendor credit refunds.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization for which to list vendor credit refunds.
-   **search\_vendor\_credits\_by\_customer\_id** (`integer`, optional) Search for vendor credits linked to a specific customer using their ID.
-   **vendor\_credit\_last\_modified\_time** (`string`, optional) Search vendor credits using the last modified time as a filter. This expects a date-time string, typically in ISO 8601 format, to narrow down results by when they were last modified.
-   **sort\_vendor\_credits\_by\_column** (`string`, optional) Specify the column to sort vendor credits by. Allowed values: vendor\_name, vendor\_credit\_number, balance, total, date, created\_time, last\_modified\_time, reference\_number.
-   **pagination\_page\_number** (`integer`, optional) Specify the page number of results to retrieve for pagination. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of vendor credits to return per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.AddVendorCreditComment



Add a comment to an existing vendor credit.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization. Required to specify which organization the vendor credit belongs to. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_credit\_identifier** (`string`, optional) Unique identifier for the vendor credit to which the comment will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetVendorCreditComments



Retrieve history and comments for a vendor credit.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization. This ID is required to access the vendor credit comments.
-   **vendor\_credit\_identifier** (`string`, required) The unique identifier for the specific vendor credit to retrieve its history and comments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteVendorCreditComment



Delete a vendor credit comment in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization in Zoho Books.
-   **vendor\_credit\_id** (`string`, required) Unique identifier of the vendor credit to specify which comment to delete.
-   **comment\_id** (`string`, required) Unique identifier of the vendor credit comment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.CreateVendorPayment



Create and apply a payment to a vendor’s bill.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID of the organization to which the vendor payment belongs. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListVendorPayments



Fetch all payments made to vendors.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier of the organization whose vendor payments you want to list.
-   **vendor\_name\_query** (`string`, optional) Search payments by vendor name using parameters like startswith or contains.
-   **search\_by\_reference\_number** (`string`, optional) Search payments using the reference number. Supports variants: ‘startswith’ and ‘contains’.
-   **payment\_number\_search** (`string`, optional) Search payments using the payment number with options for exact match, starts with, or contains.
-   **payment\_date\_filter** (`string`, optional) Specify the date for payment filtering. Use variants like ‘date\_start’, ‘date\_end’, ‘date\_before’, and ‘date\_after’.
-   **payment\_amount\_filter** (`number`, optional) Filter payments by amount paid to the vendor. Use variants: ‘less\_than’, ‘less\_equals’, ‘greater\_than’, ‘greater\_equals’ to specify the condition.
-   **search\_by\_payment\_mode** (`string`, optional) Search payments by payment mode using variants like ‘startswith’ or ‘contains’.
-   **search\_with\_payment\_notes** (`string`, optional) Search payments using notes with options like startswith or contains.
-   **vendor\_id** (`string`, optional) The unique ID of the vendor, used to search payments by vendor ID.
-   **last\_modified\_time\_filter** (`string`, optional) Filter vendor payments by their last modified time. Use a date-time string in ISO 8601 format.
-   **search\_payments\_by\_bill\_id** (`string`, optional) Search payments using the specific Bill ID associated with the transaction.
-   **search\_by\_description** (`string`, optional) Search payments by description. Use ‘description\_startswith’ or ‘description\_contains’ variants for specific matches.
-   **filter\_payment\_mode** (`string`, optional) Filter payments by payment mode. Options include All, Check, Cash, BankTransfer, Paypal, CreditCard, GoogleCheckout, Credit, Authorizenet, BankRemittance, Payflowpro, and Others.
-   **search\_text** (`string`, optional) Search for payments using reference number, vendor name, or payment description.
-   **sort\_payments\_by** (`string`, optional) Sort payments by column. Options: vendor\_name, date, reference\_number, amount, balance.
-   **page\_number\_to\_fetch** (`integer`, optional) Specify the page number of results to fetch. Default is 1.
-   **records\_per\_page** (`integer`, optional) Specify the number of records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateVendorPaymentWithCustomId



Update or create a vendor payment using a unique custom field.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization within Zoho Books. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_api\_name** (`string`, optional) The API name of the unique custom field used to identify the vendor payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **custom\_field\_unique\_value** (`string`, optional) The unique value of the custom field used to identify or create a vendor payment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **create\_new\_record\_if\_not\_exists** (`boolean`, optional) Set to true to create a new vendor payment if no existing record matches the unique custom field value. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteMultipleVendorPayments



Delete multiple vendor payments in one action.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization from which the vendor payments are to be deleted.
-   **vendor\_payment\_ids** (`string`, required) Comma-separated list of vendor payment IDs to delete.
-   **bulk\_delete** (`boolean`, required) Set to true to perform bulk deletion of vendor payments.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateVendorPayment



Update or modify an existing vendor payment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) Provide the specific ID of the organization for which the vendor payment is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **payment\_identifier** (`string`, optional) The unique identifier of the vendor payment to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.FetchVendorPaymentDetails



Retrieve details of a vendor payment by payment ID.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization to retrieve the vendor payment details.
-   **payment\_identifier** (`string`, required) Unique identifier for the payment to retrieve its details.
-   **include\_tax\_information** (`boolean`, optional) Set to true to fetch tax information for the vendor payment.
-   **fetch\_statement\_line\_info** (`boolean`, optional) Set to true to fetch statement line information for the vendor payment.
-   **print\_payment** (`boolean`, optional) Specify true to print the Vendor Payment details.
-   **is\_bill\_payment\_id** (`boolean`, optional) True if the ID is for a Bill Payment, false for a Vendor Payment.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteVendorPayment



Delete an existing vendor payment in Zoho Books.

**Parameters**

-   **organization\_id** (`string`, required) The unique ID of the organization for which the vendor payment is to be deleted. This is required to identify the correct organization within Zoho Books.
-   **vendor\_payment\_id** (`string`, required) Unique identifier of the vendor payment to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.ListVendorPaymentRefunds



List all refunds for a vendor payment.

**Parameters**

-   **organization\_id** (`string`, required) ID of the organization in Zoho Books to list the refunds for. This should be a unique identifier as specified by Zoho Books.
-   **payment\_identifier** (`string`, required) Unique identifier of the vendor payment to fetch refunds for.
-   **page\_number** (`integer`, optional) Page number to be fetched, starting from 1. Default is 1.
-   **records\_per\_page** (`integer`, optional) Number of records to fetch per page. Default is 200.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.RefundVendorOverpayment



Refund excess amount paid to a vendor.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_identifier** (`string`, optional) The unique ID representing the organization. Required to refund vendor overpayment. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_payment\_id** (`string`, optional) Unique identifier for the vendor payment to be refunded. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetVendorPaymentRefundDetails



Retrieve details of a specific vendor payment refund.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization whose vendor payment refund details are requested.
-   **payment\_identifier** (`string`, required) Unique identifier for the payment associated with the vendor refund.
-   **vendor\_payment\_refund\_id** (`string`, required) Unique identifier for the vendor payment refund to retrieve its details.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.UpdateVendorPaymentRefund



Update the refunded transaction for a vendor payment.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) The unique identifier for the organization associated with the refund transaction. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **payment\_identifier** (`string`, optional) Unique identifier of the payment. Required to specify which payment is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_payment\_refund\_id** (`string`, optional) Unique identifier of the vendor payment refund required for updating the transaction. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.DeleteVendorPaymentRefund



Delete a refund from an existing vendor payment.

**Parameters**

-   **organization\_id** (`string`, required) The ID of the organization to which the vendor payment refund belongs.
-   **payment\_identifier** (`string`, required) Unique identifier of the payment to be deleted.
-   **vendor\_payment\_refund\_id** (`string`, required) Unique identifier of the vendor payment refund to be deleted.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.SendVendorPaymentEmail



Send a payment receipt email to a vendor.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **organization\_id** (`string`, optional) ID of the organization for which the vendor payment email is being sent. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **vendor\_payment\_id** (`string`, optional) Unique identifier for the vendor payment. Used to retrieve and send the corresponding payment receipt via email. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **email\_attachments** (`string`, optional) List of file paths or URLs to attach to the email. Only used when mode is ‘execute’.
-   **attached\_file\_name** (`string`, optional) Specify the name of the file to be attached to the email. Only used when mode is ‘execute’.
-   **send\_vendor\_payment\_attachment** (`boolean`, optional) Set to true to include the vendor payment attachment in the email. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## ZohoBooksApi.GetVendorPaymentEmailContent



Retrieve email content for a vendor payment receipt.

**Parameters**

-   **organization\_id** (`string`, required) The unique identifier for the organization. Required to retrieve the vendor payment email content.
-   **vendor\_payment\_id** (`string`, required) Unique identifier for the vendor payment to retrieve email content.

**Secrets**

This tool requires the following secrets: `ZOHO_SERVER_URL` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Reference

Below is a reference of enumerations used by some of the tools in the ZohoBooksApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Secrets

This MCP Server requires the `ZOHO_SERVER_URL` secret to be configured. Learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md).

### Getting your Zoho Server URL

The Zoho Server URL is the base URL for your Zoho account’s data center. Zoho operates in multiple data centers around the world, and you must use the correct URL for your account.

Your Zoho Server URL depends on which data center your account is registered in:

Data Center

Server URL

US

`https://books.zoho.com`

EU

`https://books.zoho.eu`

India

`https://books.zoho.in`

Australia

`https://books.zoho.com.au`

China

`https://books.zoho.com.cn`

To determine which data center your account uses:

1.  Log in to your Zoho Books account
2.  Look at the URL in your browser’s address bar
3.  The domain (`.com`, `.eu`, `.in`, `.com.au`, or `.com.cn`) indicates your data center

For example, if you access Zoho Books at `https://books.zoho.eu`, your server URL is `https://books.zoho.eu`.

The server URL is used as the base for all API requests. For example, when retrieving invoices, the full URL would be constructed as:

PLAINTEXT

```
{zoho_server_url}/api/v3/invoices?organization_id=...
```

Which would become `https://books.zoho.com/api/v3/invoices?organization_id=...` for US accounts.

## Auth

The ZohoBooksApi MCP Server uses the Auth Provider with id `arcade-zoho` to connect to users’ Zoho Books accounts. In order to use the MCP Server, you will need to configure the `arcade-zoho` auth provider.

Learn how to configure the Zoho auth provider in the [Zoho auth provider documentation](/references/auth-providers/zoho.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_zoho_books_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[StripeApi](/en/resources/integrations/payments/stripe_api.md)
[Google Finance](/en/resources/integrations/search/google_finance.md)
