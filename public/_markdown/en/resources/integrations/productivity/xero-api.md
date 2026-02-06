---
title: "XeroApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
XeroApi

# XeroApi

Arcade Unoptimized

**Description:** Tools that enable LLMs to interact directly with the Xero API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_xero_api)](https://pypi.org/project/arcade_xero_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_xero_api)](https://pypi.org/project/arcade_xero_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_xero_api)](https://pypi.org/project/arcade_xero_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_xero_api)](https://pypi.org/project/arcade_xero_api/)

XeroApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The XeroApi MCP Server provides a comprehensive set of tools for interacting with Xero accounting data. These tools let agents and apps:

-   Access and manage core accounting entities: accounts, invoices, credit notes, payments, bank transactions/transfers, journals, manual journals, prepayments, overpayments, and reconciliations.
-   Work with contacts, contact groups, purchase orders, quotes, items, budgets, and repeating invoices.
-   Retrieve, download, and manage attachments across accounts, contacts, invoices, bank transactions, journals, purchase orders, quotes, receipts, and more (by ID or filename).
-   Create and retrieve history/audit records for payments, invoices, payments/batch payments, bank transactions/transfers, purchase orders, quotes, receipts, items, journals, and repeating invoices.
-   Run and fetch financial and management reports: balance sheet, profit & loss, trial balance, budget summary, bank summary, aged receivables/payables, executive summary, and custom reports.
-   Manage organizational settings: organisation details, tenants/connections, CIS settings, currencies, tax rates, tracking categories/options, and branding themes.
-   Create or delete resources where supported (e.g., accounts, inventory items, tracking categories/options, linked transactions, allocations, tenant connections) and perform setup actions such as setting financial setup (chart of accounts and conversion).
-   Retrieve lists of users, contacts, payment services, batch payments, and a wide range of Xero entities for integration, reporting, reconciliation, and automation tasks.

## Available Tools

Tool Name

Description

XeroApi.RetrieveFullChartOfAccounts

Retrieves the full chart of accounts from Xero.

XeroApi.RetrieveAccountDetails

Retrieve chart of accounts using a unique account ID.

XeroApi.DeleteAccount

Delete a chart of accounts in Xero.

XeroApi.RetrieveAccountAttachments

Retrieve attachments for a specified account.

XeroApi.RetrieveAccountAttachment

Retrieve a specific account attachment by ID.

XeroApi.RetrieveAccountAttachmentByFilename

Retrieve an attachment for a specific account by filename.

XeroApi.RetrieveBatchPayments

Retrieve batch payments for invoices.

XeroApi.GetBatchPaymentDetails

Retrieve details of a specific batch payment by ID.

XeroApi.RetrieveBatchPaymentHistory

Retrieve the history of a specific batch payment.

XeroApi.CreateBatchPaymentHistoryRecord

Creates a history record for a batch payment.

XeroApi.RetrieveBankTransactions

Retrieve spent or received money transactions from Xero.

XeroApi.RetrieveBankTransaction

Retrieve bank transaction details by ID.

XeroApi.RetrieveBankTransactionAttachments

Retrieve attachments from a specific bank transaction.

XeroApi.RetrieveBankTransactionAttachment

Retrieve a specific attachment from a bank transaction.

XeroApi.GetBankTransactionAttachment

Retrieve an attachment from a bank transaction by filename.

XeroApi.GetBankTransactionHistory

Retrieve history of a specific bank transaction by ID.

XeroApi.CreateBankTransactionHistory

Creates a record in the bank transaction history.

XeroApi.RetrieveBankTransfers

Retrieve all bank transfers from Xero.

XeroApi.RetrieveBankTransfer

Retrieve details of a specific bank transfer using its ID.

XeroApi.RetrieveBankTransferAttachments

Retrieve attachments from a specific bank transfer in Xero.

XeroApi.FetchBankTransferAttachment

Fetch a specific bank transfer attachment by ID.

XeroApi.RetrieveBankTransferAttachment

Retrieve a bank transfer attachment by file name.

XeroApi.GetBankTransferHistory

Retrieve specific bank transfer history by ID.

XeroApi.CreateBankTransferHistory

Create a history record for a bank transfer.

XeroApi.GetBrandingThemes

Retrieve all branding themes from Xero.

XeroApi.RetrieveBrandingTheme

Retrieve details of a specific branding theme.

XeroApi.GetPaymentServicesForBrandingTheme

Retrieve payment services for a specific branding theme.

XeroApi.RetrieveBudgets

Retrieve a list of budgets from Xero.

XeroApi.RetrieveBudgetDetails

Retrieve detailed information about a budget including lines.

XeroApi.FetchAllXeroContacts

Retrieve all contacts from a Xero organization.

XeroApi.GetXeroContactByNumber

Retrieve a contact from Xero by contact number.

XeroApi.RetrieveXeroContact

Retrieve specific contact information from Xero.

XeroApi.GetContactAttachments

Retrieve attachments for a Xero contact.

XeroApi.RetrieveContactAttachment

Retrieve a specific contact attachment by ID.

XeroApi.GetContactAttachment

Retrieve a contact's attachment by file name.

XeroApi.GetContactCisSettings

Retrieve CIS settings for a Xero contact.

XeroApi.GetContactHistory

Retrieve history records for a specific contact.

XeroApi.AddContactHistoryRecord

Create a new history record for a contact in Xero.

XeroApi.RetrieveContactGroups

Retrieve contact group IDs and names from Xero.

XeroApi.RetrieveContactGroup

Retrieve a specific contact group by ID.

XeroApi.RemoveContactsFromGroup

Removes all contacts from a specified contact group in Xero.

XeroApi.RemoveContactFromGroup

Delete a specific contact from a contact group.

XeroApi.GetCreditNotes

Retrieve credit notes from the Xero service.

XeroApi.RetrieveCreditNote

Retrieve a credit note using its unique ID.

XeroApi.GetCreditNoteAttachments

Fetch attachments for a specific credit note from Xero.

XeroApi.GetCreditNoteAttachment

Retrieve specific attachment from a credit note by ID.

XeroApi.RetrieveCreditNoteAttachment

Retrieve a specific credit note attachment by file name.

XeroApi.GetCreditNotePdf

Retrieve a credit note as a PDF file.

XeroApi.DeleteCreditNoteAllocation

Remove an allocation from a specific credit note.

XeroApi.GetCreditNoteHistory

Retrieve history records of a specific credit note.

XeroApi.FetchCreditNoteHistory

Retrieve the history of a specific credit note.

XeroApi.GetXeroCurrencies

Retrieve currencies from your Xero organization.

XeroApi.RetrieveExpenseClaims

Fetches expense claims from Xero.

XeroApi.RetrieveExpenseClaim

Retrieve details of a specific expense claim by ID.

XeroApi.RetrieveExpenseClaimHistory

Retrieve the history of a specific expense claim.

XeroApi.AddExpenseClaimHistory

Creates a history record for an expense claim.

XeroApi.RetrieveInvoices

Retrieve sales invoices or purchase bills from Xero.

XeroApi.GetInvoiceDetails

Retrieve a specific invoice using its unique ID.

XeroApi.RetrieveInvoicePdf

Retrieve an invoice or purchase bill as a PDF.

XeroApi.RetrieveInvoiceAttachments

Retrieve attachments for a specific invoice or bill.

XeroApi.RetrieveInvoiceAttachmentById

Retrieve a specific invoice attachment by ID.

XeroApi.GetInvoiceAttachment

Retrieve an attachment from an invoice by filename.

XeroApi.RetrieveOnlineInvoiceUrl

Retrieve a URL for viewing an online invoice.

XeroApi.RetrieveInvoiceHistory

Retrieve history of a specific invoice.

XeroApi.CreateInvoiceHistory

Create a history record for a specific invoice.

XeroApi.GetInvoiceReminderSettings

Retrieve invoice reminder settings from Xero.

XeroApi.GetItems

Retrieve items from Xero.

XeroApi.RetrieveXeroItem

Retrieve a specific item from Xero using its ID.

XeroApi.DeleteInventoryItem

Delete a specific item from inventory.

XeroApi.GetItemHistory

Retrieve history for a specific item from Xero.

XeroApi.CreateItemHistory

Creates a history record for a specific item in Xero.

XeroApi.GetFinancialJournals

Retrieve financial journal entries from Xero.

XeroApi.RetrieveSpecificJournal

Retrieve a specific journal using its unique ID.

XeroApi.RetrieveJournalByNumber

Retrieve a specific journal by its unique number.

XeroApi.RetrieveLinkedTransactions

Retrieve linked transactions from Xero.

XeroApi.GetLinkedTransaction

Retrieve specific linked transaction details by ID.

XeroApi.DeleteLinkedTransaction

Delete a specific linked transaction.

XeroApi.RetrieveManualJournals

Retrieve manual journals from Xero.

XeroApi.RetrieveManualJournal

Retrieve details of a specific manual journal.

XeroApi.RetrieveJournalAttachments

Retrieve attachments for a specific manual journal.

XeroApi.RetrieveJournalAttachment

Retrieve a specific attachment from a manual journal using its ID.

XeroApi.GetJournalAttachmentByFilename

Retrieve a manual journal attachment by file name.

XeroApi.GetManualJournalHistory

Retrieve history for a specific manual journal.

XeroApi.CreateJournalHistoryRecord

Creates a history record for a specific manual journal.

XeroApi.GetXeroOrganisationDetails

Retrieves Xero organisation details.

XeroApi.RetrieveXeroOrganisationActions

Retrieve key actions allowed in Xero organisation.

XeroApi.GetCisSettings

Retrieve CIS settings for a Xero organisation.

XeroApi.RetrieveOverpayments

Retrieve overpayments from the accounting system.

XeroApi.RetrieveSpecificOverpayment

Retrieve details of a specific overpayment by ID.

XeroApi.DeleteOverpaymentAllocation

Delete an allocation from an overpayment in Xero.

XeroApi.GetOverpaymentHistory

Retrieve history records for a specific overpayment in Xero.

XeroApi.RecordOverpaymentHistory

Creates a history record for a specific overpayment.

XeroApi.FetchInvoicePayments

Retrieve payments for invoices and credit notes in Xero.

XeroApi.RetrieveInvoicePayment

Retrieve specific payment details using a payment ID.

XeroApi.RetrievePaymentHistory

Retrieve the history records of a specific payment.

XeroApi.CreatePaymentHistoryRecord

Create a history record for a specific payment.

XeroApi.RetrievePaymentServices

Retrieve available payment services from Xero.

XeroApi.RetrievePrepayments

Retrieve prepayment details from Xero.

XeroApi.GetPrepaymentDetails

Retrieve details of a specified prepayment from Xero.

XeroApi.DeletePrepaymentAllocation

Delete an allocation from a prepayment in Xero.

XeroApi.GetPrepaymentHistory

Retrieve history for a specific prepayment.

XeroApi.CreatePrepaymentHistory

Creates a history record for a specific prepayment.

XeroApi.RetrievePurchaseOrders

Retrieve purchase orders from Xero.

XeroApi.GetPurchaseOrderPdf

Retrieve a purchase order as a PDF using its ID.

XeroApi.RetrievePurchaseOrder

Retrieve details of a specific purchase order by ID.

XeroApi.RetrievePurchaseOrderByNumber

Fetches a purchase order using its unique number.

XeroApi.RetrievePurchaseOrderHistory

Retrieve the history of a specific purchase order.

XeroApi.CreatePurchaseOrderHistory

Create a history record for a purchase order.

XeroApi.RetrievePurchaseOrderAttachments

Retrieve attachments for a specific purchase order.

XeroApi.FetchPurchaseOrderAttachment

Retrieve a specific attachment from a purchase order.

XeroApi.RetrievePoAttachmentByFilename

Retrieve a purchase order attachment by filename.

XeroApi.RetrieveSalesQuotes

Retrieve sales quotes from Xero.

XeroApi.RetrieveQuote

Retrieve details of a specific quote by ID.

XeroApi.RetrieveQuoteHistory

Retrieves history records of a specific quote.

XeroApi.AddQuoteHistory

Creates a history record for a specific quote.

XeroApi.RetrieveQuotePdf

Retrieve a specific quote as a PDF file using the quote ID.

XeroApi.RetrieveQuoteAttachments

Retrieve attachments for a specific quote in Xero.

XeroApi.GetQuoteAttachment

Retrieve a specific attachment from a quote by ID.

XeroApi.RetrieveQuoteAttachmentByFilename

Retrieve an attachment from a quote using filename.

XeroApi.GetDraftExpenseReceipts

Retrieve draft expense claim receipts from Xero.

XeroApi.RetrieveDraftExpenseClaimReceipt

Retrieve a draft expense claim receipt using its ID.

XeroApi.GetReceiptAttachments

Retrieve attachments for a specific expense claim receipt.

XeroApi.RetrieveReceiptAttachment

Retrieve a specific attachment from an expense receipt.

XeroApi.GetExpenseReceiptAttachment

Retrieve an attachment from a receipt by file name.

XeroApi.RetrieveReceiptHistory

Retrieve detailed history for a specific receipt.

XeroApi.RecordReceiptHistory

Creates a history record for a specific receipt.

XeroApi.GetRepeatingInvoices

Retrieve repeating invoices from Xero.

XeroApi.GetRepeatingInvoice

Retrieve a specific repeating invoice using its unique ID.

XeroApi.RetrieveRepeatingInvoiceAttachments

Retrieve attachments from a specified repeating invoice.

XeroApi.RetrieveRepeatingInvoiceAttachmentById

Retrieve a specific attachment from a repeating invoice.

XeroApi.RetrieveRepeatingInvoiceAttachment

Retrieve a repeating invoice attachment by file name.

XeroApi.GetRepeatingInvoiceHistory

Retrieve history record for a specific repeating invoice.

XeroApi.CreateRepeatingInvoiceHistory

Creates a history record for a repeating invoice.

XeroApi.Retrieve1099Reports

Retrieves 1099 tax reports.

XeroApi.GetAgedPayablesReportByContact

Retrieve aged payables report by contact.

XeroApi.GetAgedReceivablesReportByContact

Retrieve aged receivables report by contact.

XeroApi.GetBalanceSheetReport

Retrieve the balance sheet report from Xero.

XeroApi.GetBankSummaryReport

Retrieve bank summary reports from Xero.

XeroApi.RetrieveSpecificReport

Retrieve a specific report using a ReportID.

XeroApi.GetBudgetSummaryReport

Retrieves the budget summary report from Xero.

XeroApi.RetrieveExecutiveSummaryReport

Retrieve an executive summary report for financial insights.

XeroApi.RetrieveUniqueReportsList

Retrieve a list of unique reports from Xero.

XeroApi.GetProfitAndLossReport

Retrieve profit and loss report from Xero.

XeroApi.GetTrialBalanceReport

Fetches the trial balance report from Xero.

XeroApi.SetFinancialSetup

Sets up the financial chart of accounts and conversion details.

XeroApi.RetrieveTaxRates

Retrieve tax rates from Xero.

XeroApi.GetTaxRateByTaxType

Retrieve a specific tax rate using a TaxType code.

XeroApi.GetTrackingCategories

Retrieve tracking categories and options from Xero.

XeroApi.GetTrackingCategory

Retrieve tracking category details using its unique ID.

XeroApi.RemoveTrackingCategory

Deletes a specific tracking category from Xero.

XeroApi.DeleteTrackingOption

Deletes a specific tracking category option in Xero.

XeroApi.RetrieveXeroUsers

Retrieve users from the Xero platform.

XeroApi.RetrieveSpecificUser

Retrieve details of a specific user from Xero.

XeroApi.GetConnectedTenants

Fetch active Tenants connections from Xero organization.

XeroApi.DeleteTenantConnection

Delete a specified Xero connection using its ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## XeroApi.RetrieveFullChartOfAccounts



Retrieves the full chart of accounts from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Unique identifier for the Xero tenant to retrieve its accounts.
-   **filter\_by\_attribute** (`string`, optional) Filter accounts by specific attributes or conditions using string syntax.
-   **order\_by\_element** (`string`, optional) Specify a field to order the returned accounts (e.g., ‘Name’ or ‘AccountType’).
-   **only\_modified\_since\_timestamp** (`string`, optional) Specify a timestamp to return only records created or modified since that time. The timestamp should be in ISO 8601 format.

## XeroApi.RetrieveAccountDetails



Retrieve chart of accounts using a unique account ID.

**Parameters**

-   **account\_id** (`string`, required) Unique identifier for the Account object to retrieve specific account details.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant to retrieve the account details from.

## XeroApi.DeleteAccount



Delete a chart of accounts in Xero.

**Parameters**

-   **account\_id** (`string`, required) The unique identifier for the Account object to be deleted.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s account to delete.

## XeroApi.RetrieveAccountAttachments



Retrieve attachments for a specified account.

**Parameters**

-   **account\_id** (`string`, required) Unique identifier for the account object to retrieve attachments from.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant, used to specify which tenant’s data to access.

## XeroApi.RetrieveAccountAttachment



Retrieve a specific account attachment by ID.

**Parameters**

-   **account\_unique\_identifier** (`string`, required) Unique identifier for the Account object to retrieve the attachment from.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment you want to retrieve from an account. This ID is necessary to specify the exact attachment you need.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s account attachment you want to retrieve.
-   **mime\_type\_of\_attachment** (`string`, required) The MIME type of the attachment file, such as image/jpg or application/pdf.

## XeroApi.RetrieveAccountAttachmentByFilename



Retrieve an attachment for a specific account by filename.

**Parameters**

-   **account\_id** (`string`, required) Unique identifier for the Account object in Xero.
-   **attachment\_file\_name** (`string`, required) The name of the attachment to retrieve for a specific account.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the Tenant. Required to access the specific tenant’s attachments.
-   **mime\_type\_of\_attachment** (`string`, required) The MIME type of the attachment file to retrieve, such as image/jpg or application/pdf.

## XeroApi.RetrieveBatchPayments



Retrieve batch payments for invoices.

**Parameters**

-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant required to access its specific batch payment data.
-   **filter\_by\_element** (`string`, optional) Apply a filter to the batch payments using any specified element.
-   **order\_by\_element** (`string`, optional) Specify the element to sort the batch payments by. The value should be a string representing the element.
-   **modified\_since\_timestamp** (`string`, optional) Timestamp to filter records modified or created since then. Format: ISO 8601 date and time.

## XeroApi.GetBatchPaymentDetails



Retrieve details of a specific batch payment by ID.

**Parameters**

-   **batch\_payment\_id** (`string`, required) Unique identifier for the batch payment to retrieve details.
-   **xero\_tenant\_id** (`string`, required) The unique Xero identifier for the tenant, necessary for accessing tenant-specific data.

## XeroApi.RetrieveBatchPaymentHistory



Retrieve the history of a specific batch payment.

**Parameters**

-   **batch\_payment\_id** (`string`, required) Unique identifier for the batch payment to retrieve its history.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. Required to access specific tenant data.

## XeroApi.CreateBatchPaymentHistoryRecord



Creates a history record for a batch payment.

**Parameters**

-   **batch\_payment\_id** (`string`, required) Unique identifier for the specific batch payment in Xero.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for Tenant. This is required to specify which tenant’s batch payment history is being recorded.
-   **idempotency\_key** (`string`, optional) A unique string to prevent duplicate processing. Maximum 128 characters.

## XeroApi.RetrieveBankTransactions



Retrieve spent or received money transactions from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant, required to specify which account to access.
-   **filter\_by\_element** (`string`, optional) Specify criteria to filter transactions by any element. Use valid filter expressions based on transaction fields.
-   **order\_transactions\_by** (`string`, optional) Specify the element by which to order the transactions, such as date or amount.
-   **transaction\_page\_number** (`integer`, optional) Specifies which page of up to 100 bank transactions to retrieve.
-   **use\_four\_decimal\_places** (`integer`, optional) Indicate if unit amounts should use four decimal places (e.g., 4).
-   **records\_per\_page** (`integer`, optional) Specify the number of records to retrieve per page. This controls the pagination size.
-   **modified\_since\_timestamp** (`string`, optional) Return records created or modified since this UTC timestamp (ISO 8601 format).

## XeroApi.RetrieveBankTransaction



Retrieve bank transaction details by ID.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) Unique identifier for a specific bank transaction in Xero.
-   **xero\_tenant\_id** (`string`, required) The Xero identifier for the tenant (organization). Required to access the specific tenant’s data.
-   **use\_four\_decimal\_places** (`integer`, optional) Option to use four decimal places for unit amounts. Specify ‘4’ to enable.

## XeroApi.RetrieveBankTransactionAttachments



Retrieve attachments from a specific bank transaction.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) Xero generated unique identifier for a bank transaction, used to retrieve corresponding attachments.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant, required to access specific tenant data.

## XeroApi.RetrieveBankTransactionAttachment



Retrieve a specific attachment from a bank transaction.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) Xero generated unique identifier for a bank transaction.
-   **attachment\_id** (`string`, required) Unique identifier for the Attachment object.
-   **xero\_tenant\_identifier** (`string`, required) Xero unique identifier for the Tenant. This is required to specify which organization data is to be accessed.
-   **attachment\_mime\_type** (`string`, required) The mime type of the attachment file to retrieve, such as image/jpeg or application/pdf.

## XeroApi.GetBankTransactionAttachment



Retrieve an attachment from a bank transaction by filename.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) Xero generated unique identifier for a bank transaction. Required to retrieve the correct attachment.
-   **attachment\_filename** (`string`, required) Name of the attachment to retrieve from the bank transaction.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant associated with the bank transaction.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file to retrieve, such as image/jpg or application/pdf.

## XeroApi.GetBankTransactionHistory



Retrieve history of a specific bank transaction by ID.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) The unique identifier for a bank transaction generated by Xero. Use this ID to retrieve specific transaction history.
-   **tenant\_identifier** (`string`, required) Xero unique identifier for the tenant. Required to access tenant-specific data.

## XeroApi.CreateBankTransactionHistory



Creates a record in the bank transaction history.

**Parameters**

-   **bank\_transaction\_id** (`string`, required) Xero-generated unique identifier for the bank transaction to create a history record.
-   **tenant\_id** (`string`, required) Xero identifier for the tenant. This is required to specify which Xero account the transaction history will be associated with.
-   **idempotency\_key** (`string`, optional) A unique key to prevent duplicate processing. Maximum 128 characters.

## XeroApi.RetrieveBankTransfers



Retrieve all bank transfers from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) A unique string identifier for the Xero tenant to retrieve bank transfers from.
-   **filter\_bank\_transfers** (`string`, optional) String to filter bank transfer records by a specific element, such as status or date range.
-   **order\_by\_element** (`string`, optional) Specify the field to order the bank transfer records by. Use the field names available in the Xero bank transfer dataset.
-   **modified\_since\_timestamp** (`string`, optional) Filter records to only include those created or modified since this timestamp. Use ISO 8601 format (e.g., ‘2023-10-01T00:00:00Z’).

## XeroApi.RetrieveBankTransfer



Retrieve details of a specific bank transfer using its ID.

**Parameters**

-   **bank\_transfer\_id** (`string`, required) The unique identifier for a bank transfer generated by Xero.
-   **tenant\_id** (`string`, required) Xero identifier for the tenant. This is required to specify which tenant’s data to access.

## XeroApi.RetrieveBankTransferAttachments



Retrieve attachments from a specific bank transfer in Xero.

**Parameters**

-   **bank\_transfer\_id** (`string`, required) Xero-generated unique identifier for a bank transfer. Required to retrieve associated attachments.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for your tenant. This ID specifies which tenant the bank transfer belongs to.

## XeroApi.FetchBankTransferAttachment



Fetch a specific bank transfer attachment by ID.

**Parameters**

-   **bank\_transfer\_unique\_id** (`string`, required) Xero-generated unique identifier for a bank transfer. It is required to locate the specific transfer for the attachment.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object that you want to retrieve from a specific bank transfer.
-   **tenant\_identifier** (`string`, required) The Xero identifier for the tenant you want to access.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment to retrieve, e.g., image/jpg, application/pdf.

## XeroApi.RetrieveBankTransferAttachment



Retrieve a bank transfer attachment by file name.

**Parameters**

-   **bank\_transfer\_id** (`string`, required) Xero-generated unique identifier for a bank transfer. Required to specify which bank transfer’s attachment is being retrieved.
-   **attachment\_file\_name** (`string`, required) The name of the attachment file to retrieve from the bank transfer.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant associated with the bank transfer.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file, such as ‘image/jpg’ or ‘application/pdf’.

## XeroApi.GetBankTransferHistory



Retrieve specific bank transfer history by ID.

**Parameters**

-   **bank\_transfer\_id** (`string`, required) Unique identifier for the Xero bank transfer needed to retrieve its history.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s bank transfer history to retrieve.

## XeroApi.CreateBankTransferHistory



Create a history record for a bank transfer.

**Parameters**

-   **bank\_transfer\_id** (`string`, required) Xero generated unique identifier for the specific bank transfer to create a history record for.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. Required to specify which tenant’s data to access.
-   **idempotency\_key** (`string`, optional) A unique string to safely retry requests without risk of duplication, limited to 128 characters.

## XeroApi.GetBrandingThemes



Retrieve all branding themes from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant to retrieve branding themes.

## XeroApi.RetrieveBrandingTheme



Retrieve details of a specific branding theme.

**Parameters**

-   **branding\_theme\_id** (`string`, required) Unique identifier for a branding theme to retrieve its details.
-   **tenant\_identifier** (`string`, required) The Xero identifier for the Tenant. This is required to specify which tenant’s branding theme to retrieve.

## XeroApi.GetPaymentServicesForBrandingTheme



Retrieve payment services for a specific branding theme.

**Parameters**

-   **branding\_theme\_id** (`string`, required) Unique identifier for a Branding Theme to retrieve associated payment services.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. This unique ID is required to specify which tenant’s data is being accessed.

## XeroApi.RetrieveBudgets



Retrieve a list of budgets from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required for accessing specific tenant data.
-   **filter\_by\_budget\_id** (`string`, optional) Filter to retrieve a specific budget by its BudgetID.
-   **filter\_start\_date** (`string`, optional) The start date to filter budgets until. Expected format is YYYY-MM-DD.
-   **filter\_by\_end\_date** (`string`, optional) Specify the end date to filter the budgets. Use the format YYYY-MM-DD.

## XeroApi.RetrieveBudgetDetails



Retrieve detailed information about a budget including lines.

**Parameters**

-   **budget\_identifier** (`string`, required) Unique identifier for budgets. Required to retrieve specific budget details including budget lines.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant to specify which tenant’s budget to retrieve.
-   **filter\_end\_date** (`string`, optional) Specifies the end date to filter the budget data. Use the format YYYY-MM-DD.
-   **filter\_start\_date** (`string`, optional) The start date from which to filter the budget details. Format must be YYYY-MM-DD.

## XeroApi.FetchAllXeroContacts



Retrieve all contacts from a Xero organization.

**Parameters**

-   **tenant\_identifier** (`string`, required) A unique string to identify the tenant in Xero.
-   **filter\_by\_element** (`string`, optional) Specify conditions to filter contacts by any element within their data fields.
-   **sort\_order** (`string`, optional) Specifies the sorting order for contacts based on a specified element, such as name or date.
-   **contact\_ids** (`array[string]`, optional) Comma-separated list of ContactIDs to retrieve specific contacts. Use this to filter the contacts returned by their unique IDs in a single call.
-   **pagination\_page\_number** (`integer`, optional) The specific page number to retrieve when fetching contacts. Each page returns up to 100 contacts.
-   **search\_term** (`string`, optional) A case-insensitive search term for filtering contacts by Name, FirstName, LastName, ContactNumber, or EmailAddress.
-   **records\_per\_page** (`integer`, optional) Number of contact records to retrieve per page.
-   **modified\_since\_timestamp** (`string`, optional) Retrieve only records created or modified after the specified timestamp. Use ISO 8601 format for the timestamp.
-   **include\_archived\_contacts** (`boolean`, optional) Set to true to include contacts with a status of ARCHIVED in the response. False will exclude them.
-   **retrieve\_summary\_only\_contacts** (`boolean`, optional) Set to true to retrieve only lightweight contact fields, excluding computation-heavy data for faster API responses.

## XeroApi.GetXeroContactByNumber



Retrieve a contact from Xero by contact number.

**Parameters**

-   **contact\_number** (`string`, required) The unique contact number to identify a Xero contact; max length 50 characters.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant. It is required to specify which organization’s data to retrieve.

## XeroApi.RetrieveXeroContact



Retrieve specific contact information from Xero.

**Parameters**

-   **contact\_id** (`string`, required) Provide the unique identifier for the contact to retrieve their information from Xero.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the tenant in Xero, required to retrieve contact details.

## XeroApi.GetContactAttachments



Retrieve attachments for a Xero contact.

**Parameters**

-   **contact\_id** (`string`, required) Unique identifier for a contact in Xero.
-   **xero\_tenant\_identifier** (`string`, required) The unique Xero tenant identifier for the organisation.

## XeroApi.RetrieveContactAttachment



Retrieve a specific contact attachment by ID.

**Parameters**

-   **contact\_id** (`string`, required) Unique identifier for a Contact in Xero to retrieve a specific attachment.
-   **attachment\_id** (`string`, required) Unique identifier for the Attachment object from a contact in Xero.
-   **tenant\_identifier** (`string`, required) The unique identifier for the tenant in Xero to access specific data connected to a tenant account.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file (e.g., image/jpeg, application/pdf).

## XeroApi.GetContactAttachment



Retrieve a contact’s attachment by file name.

**Parameters**

-   **contact\_identifier** (`string`, required) Unique identifier for a contact in Xero to retrieve its specific attachment.
-   **attachment\_file\_name** (`string`, required) Specify the name of the attachment to retrieve from the contact.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. This is required to specify which tenant’s data should be accessed.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file, such as image/jpg or application/pdf.

## XeroApi.GetContactCisSettings



Retrieve CIS settings for a Xero contact.

**Parameters**

-   **contact\_identifier** (`string`, required) Unique identifier for a specific contact in Xero.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required for accessing the correct organization within Xero.

## XeroApi.GetContactHistory



Retrieve history records for a specific contact.

**Parameters**

-   **contact\_id** (`string`, required) Unique identifier for a contact to retrieve their history records.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required to access specific tenant data.

## XeroApi.AddContactHistoryRecord



Create a new history record for a contact in Xero.

**Parameters**

-   **contact\_unique\_identifier** (`string`, required) Unique identifier for a Contact in Xero. Required to specify which contact the history record is for.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s contact history to update.
-   **idempotency\_key** (`string`, optional) A unique string up to 128 characters to safely retry requests without duplicate processing.

## XeroApi.RetrieveContactGroups



Retrieve contact group IDs and names from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to access the correct tenant’s contact groups.
-   **filter\_criteria** (`string`, optional) A string to filter contact groups based on specified criteria, using any element.
-   **order\_by** (`string`, optional) Specify the criteria to order the contact groups by. It can be any element to sort the results accordingly.

## XeroApi.RetrieveContactGroup



Retrieve a specific contact group by ID.

**Parameters**

-   **contact\_group\_id** (`string`, required) Unique identifier for a Contact Group in Xero. Use this to retrieve specific group details.
-   **xero\_tenant\_id** (`string`, required) Identifier for the Xero tenant needed to access specific tenant data.

## XeroApi.RemoveContactsFromGroup



Removes all contacts from a specified contact group in Xero.

**Parameters**

-   **contact\_group\_id** (`string`, required) Unique identifier for the contact group to remove contacts from.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the specific tenant required to access its data.

## XeroApi.RemoveContactFromGroup



Delete a specific contact from a contact group.

**Parameters**

-   **contact\_group\_id** (`string`, required) Unique identifier for a contact group to specify which group the contact should be removed from.
-   **contact\_identifier** (`string`, required) Unique identifier for a contact to be removed from the group.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required for specifying the target tenant in requests.

## XeroApi.GetCreditNotes



Retrieve credit notes from the Xero service.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant. Required to specify which tenant’s credit notes to retrieve.
-   **filter\_by\_element** (`string`, optional) A string to filter credit notes by specific criteria using any element.
-   **sort\_credit\_notes** (`string`, optional) Specifies the order to retrieve credit notes, e.g., by date or amount.
-   **page\_number** (`integer`, optional) The page number to retrieve. Each page returns up to 100 credit notes with line items.
-   **unit\_decimal\_places** (`integer`, optional) Specify the number of decimal places for unit amounts. For example, use 4 for four decimal places.
-   **number\_of\_records\_per\_page** (`integer`, optional) Defines the number of credit notes to retrieve per page from the Xero service. This helps control the size of each result set.
-   **modified\_since\_timestamp** (`string`, optional) Only retrieve records created or modified after this timestamp (in ISO 8601 format).

## XeroApi.RetrieveCreditNote



Retrieve a credit note using its unique ID.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for the credit note to retrieve details from Xero.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant associated with the credit note. It is required to specify which tenant’s data to access.
-   **use\_four\_decimal\_places** (`integer`, optional) Specify if four decimal places should be used for unit amounts. Default is false.

## XeroApi.GetCreditNoteAttachments



Fetch attachments for a specific credit note from Xero.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for a specific Credit Note in Xero to fetch attachments.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s data to access.

## XeroApi.GetCreditNoteAttachment



Retrieve specific attachment from a credit note by ID.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for the credit note you want to retrieve an attachment from.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object to be retrieved.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. It’s required to specify which organization to access.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file to retrieve, such as image/jpg or application/pdf.

## XeroApi.RetrieveCreditNoteAttachment



Retrieve a specific credit note attachment by file name.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for a Credit Note. Use this ID to specify which credit note’s attachment you want to retrieve.
-   **attachment\_file\_name** (`string`, required) The name of the attachment to be retrieved from the credit note (e.g., invoice.pdf).
-   **xero\_tenant\_identifier** (`string`, required) Unique identifier for the Xero Tenant. Required to specify which tenant’s data to access.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file to retrieve, such as ‘image/jpg’ or ‘application/pdf’.

## XeroApi.GetCreditNotePdf



Retrieve a credit note as a PDF file.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for the credit note to retrieve as a PDF.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant to retrieve the specific credit note PDF.

## XeroApi.DeleteCreditNoteAllocation



Remove an allocation from a specific credit note.

**Parameters**

-   **credit\_note\_unique\_id** (`string`, required) Unique identifier for a specific credit note to delete the allocation from.
-   **allocation\_id** (`string`, required) Unique identifier for the Allocation object needing deletion from a credit note.
-   **xero\_tenant\_id** (`string`, required) Unique Xero identifier for the Tenant. Required to specify which tenant’s data is being accessed.

## XeroApi.GetCreditNoteHistory



Retrieve history records of a specific credit note.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for a specific credit note. Required to retrieve its history records.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. Required to access tenant-specific data.

## XeroApi.FetchCreditNoteHistory



Retrieve the history of a specific credit note.

**Parameters**

-   **credit\_note\_id** (`string`, required) Unique identifier for the credit note whose history you want to retrieve.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s credit note history to retrieve.
-   **idempotency\_key** (`string`, optional) String to safely retry requests without creating duplicates. Max 128 characters.

## XeroApi.GetXeroCurrencies



Retrieve currencies from your Xero organization.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to access organization-specific data.
-   **filter\_criteria** (`string`, optional) A string to filter the currencies based on specific criteria, such as currency code or name.
-   **order\_by** (`string`, optional) Specify the element to order the currencies by. Accepts a string corresponding to an element in the currency data.

## XeroApi.RetrieveExpenseClaims



Fetches expense claims from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant required to specify which organization’s data to retrieve.
-   **filter\_by\_element** (`string`, optional) Apply a filter based on specific elements in the expense claims.
-   **order\_by** (`string`, optional) Specify the element by which to order the expense claims, such as date or amount.
-   **modified\_since\_timestamp** (`string`, optional) Retrieve records created or modified since this timestamp in ISO 8601 format (e.g., ‘2023-10-04T00:00:00Z’).

## XeroApi.RetrieveExpenseClaim



Retrieve details of a specific expense claim by ID.

**Parameters**

-   **expense\_claim\_id** (`string`, required) Unique identifier for an expense claim to retrieve its details.
-   **xero\_tenant\_id** (`string`, required) Xero tenant identifier for the specific business or organization you are retrieving the expense claim from.

## XeroApi.RetrieveExpenseClaimHistory



Retrieve the history of a specific expense claim.

**Parameters**

-   **expense\_claim\_id** (`string`, required) Unique identifier for retrieving the specific expense claim history.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant. This is required to specify which tenant’s data to access.

## XeroApi.AddExpenseClaimHistory



Creates a history record for an expense claim.

**Parameters**

-   **expense\_claim\_id** (`string`, required) Unique identifier for the specific expense claim to add a history record.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. This is required to specify which tenant the expense claim history record is associated with.
-   **idempotency\_key** (`string`, optional) A unique string (max 128 characters) to safely retry requests without duplicating processing.

## XeroApi.RetrieveInvoices



Retrieve sales invoices or purchase bills from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Unique identifier for a Xero tenant to retrieve invoices specific to that tenant.
-   **filter\_by\_condition** (`string`, optional) Filter using a condition expression defined on any element, similar to a SQL WHERE clause.
-   **order\_by** (`string`, optional) Specify the criteria for ordering invoices, such as date or amount.
-   **invoice\_ids** (`array[string]`, optional) Comma-separated list of Invoice IDs to filter results.
-   **filter\_by\_invoice\_numbers** (`array[string]`, optional) Filter results by providing a list of invoice numbers. Each item should be a string representing one invoice number.
-   **filter\_contact\_ids** (`array[string]`, optional) Comma-separated list of ContactIDs to filter invoices.
-   **filter\_by\_statuses** (`array[string]`, optional) Filter invoices by a list of statuses for improved response times. Use explicit parameters instead of OR conditions.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve. Up to 100 invoices per page can be returned.
-   **unit\_decimal\_places** (`integer`, optional) Specify the number of decimal places for unit amounts, e.g., 4 for four decimal places.
-   **records\_per\_page** (`integer`, optional) Specify the number of invoice records to retrieve per page.
-   **search\_term** (`string`, optional) A case-insensitive search parameter for fields like InvoiceNumber and Reference.
-   **modified\_since\_timestamp** (`string`, optional) Return only records created or modified since this timestamp. Use the format ‘YYYY-MM-DDTHH:MM:SS’.
-   **include\_archived\_invoices** (`boolean`, optional) Set to true to include invoices with a status of ARCHIVED in the response.
-   **filter\_by\_created\_by\_my\_app** (`boolean`, optional) Set to true to retrieve only invoices created by your app.
-   **retrieve\_summary\_only** (`boolean`, optional) Set to true to retrieve a smaller, lightweight version of the response for quicker API calls, excluding computation-heavy fields.

## XeroApi.GetInvoiceDetails



Retrieve a specific invoice using its unique ID.

**Parameters**

-   **invoice\_identifier** (`string`, required) Unique identifier for the invoice to be retrieved.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. Used to specify which tenant’s invoice is retrieved.
-   **unit\_decimal\_places** (`integer`, optional) Specify the number of decimal places to use for unit amounts, e.g., 4 for four decimal places.

## XeroApi.RetrieveInvoicePdf



Retrieve an invoice or purchase bill as a PDF.

**Parameters**

-   **invoice\_id** (`string`, required) Unique identifier for the invoice to retrieve as a PDF from Xero.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. This is required to specify the account from which to retrieve the invoice PDF.

## XeroApi.RetrieveInvoiceAttachments



Retrieve attachments for a specific invoice or bill.

**Parameters**

-   **invoice\_id** (`string`, required) Unique identifier for the invoice to retrieve attachments from.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant that owns the invoice.

## XeroApi.RetrieveInvoiceAttachmentById



Retrieve a specific invoice attachment by ID.

**Parameters**

-   **invoice\_id** (`string`, required) The unique identifier for the invoice to retrieve the attachment from.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object in Xero.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify the tenant from which the attachment is being retrieved.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file, e.g., image/jpg or application/pdf.

## XeroApi.GetInvoiceAttachment



Retrieve an attachment from an invoice by filename.

**Parameters**

-   **invoice\_id** (`string`, required) Unique identifier for the invoice from which to retrieve the attachment.
-   **attachment\_file\_name** (`string`, required) Specify the exact name of the attachment to retrieve from the invoice or purchase bill.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant to specify which organization’s data to access.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file being retrieved, such as image/jpg or application/pdf.

## XeroApi.RetrieveOnlineInvoiceUrl



Retrieve a URL for viewing an online invoice.

**Parameters**

-   **invoice\_identifier** (`string`, required) Unique identifier for the invoice to retrieve its online URL.
-   **xero\_tenant\_id** (`string`, required) Xero tenant identifier needed to retrieve the correct online invoice.

## XeroApi.RetrieveInvoiceHistory



Retrieve history of a specific invoice.

**Parameters**

-   **invoice\_id** (`string`, required) Unique identifier for the invoice to retrieve its history.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. This is required to specify which tenant’s data to access.

## XeroApi.CreateInvoiceHistory



Create a history record for a specific invoice.

**Parameters**

-   **invoice\_id** (`string`, required) Unique identifier for the invoice. This is required to create a history record for the specified invoice in Xero.
-   **tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required for specifying which tenant the invoice history belongs to.
-   **idempotency\_key** (`string`, optional) A string up to 128 characters to safely retry requests without duplicate processing.

## XeroApi.GetInvoiceReminderSettings



Retrieve invoice reminder settings from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. This is required to access specific tenant data.

## XeroApi.GetItems



Retrieve items from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. Required to specify which tenant’s data to retrieve.
-   **filter\_criteria** (`string`, optional) Filter items by specific criteria using any element such as field names or conditions.
-   **order\_by\_element** (`string`, optional) Specify the sorting order of items by any element, such as name or price.
-   **unit\_decimal\_places** (`integer`, optional) Defines the number of decimal places for unit amounts, e.g., 4 for four decimal places.
-   **modified\_since\_timestamp** (`string`, optional) Fetch records created or modified since the provided timestamp (e.g., ‘2023-01-01T00:00:00Z’).

## XeroApi.RetrieveXeroItem



Retrieve a specific item from Xero using its ID.

**Parameters**

-   **item\_identifier** (`string`, required) The unique identifier for the item in Xero. This is required to retrieve specific item details.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. This is required to specify which tenant’s data should be accessed.
-   **use\_unit\_decimal\_places** (`integer`, optional) Specify the number of unit decimal places to use, e.g., 4 for four decimal places in unit amounts.

## XeroApi.DeleteInventoryItem



Delete a specific item from inventory.

**Parameters**

-   **item\_id** (`string`, required) Unique identifier for the item to be deleted.
-   **tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant to specify which tenant’s data to access.

## XeroApi.GetItemHistory



Retrieve history for a specific item from Xero.

**Parameters**

-   **item\_id** (`string`, required) Unique identifier for the item whose history you want to retrieve in Xero.
-   **xero\_tenant\_id** (`string`, required) Provide the unique Xero identifier associated with the Tenant to access its data.

## XeroApi.CreateItemHistory



Creates a history record for a specific item in Xero.

**Parameters**

-   **item\_id** (`string`, required) Unique identifier for the item to create a history record for in Xero.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant, required to specify which tenant’s item history is being updated.
-   **idempotency\_key** (`string`, optional) A unique key to ensure request retrying without duplication, max 128 characters.

## XeroApi.GetFinancialJournals



Retrieve financial journal entries from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required to specify which tenant’s journals are retrieved.
-   **journal\_number\_offset** (`integer`, optional) Specify the journal number offset. Journals with a number greater than this will be returned.
-   **modified\_since\_timestamp** (`string`, optional) Return records created or modified since this timestamp. Use a string format like ‘YYYY-MM-DDTHH:MM:SSZ’.
-   **retrieve\_cash\_basis\_journals** (`boolean`, optional) Set to true to retrieve journals on a cash basis. Defaults to false for accrual basis.

## XeroApi.RetrieveSpecificJournal



Retrieve a specific journal using its unique ID.

**Parameters**

-   **journal\_id** (`string`, required) Unique identifier for the journal to be retrieved.
-   **xero\_tenant\_identifier** (`string`, required) A unique identifier for the Xero tenant. Required to specify which tenant’s journal should be accessed.

## XeroApi.RetrieveJournalByNumber



Retrieve a specific journal by its unique number.

**Parameters**

-   **journal\_number** (`integer`, required) The unique number identifying the journal entry to retrieve.
-   **tenant\_identifier** (`string`, required) The unique identifier for a Xero tenant to specify the context for the journal retrieval.

## XeroApi.RetrieveLinkedTransactions



Retrieve linked transactions from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The Xero identifier for a specific tenant. Required for identifying the tenant whose linked transactions are being retrieved.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve in paginated results, starting from 1.
-   **linked\_transaction\_id** (`string`, optional) The Xero identifier for a Linked Transaction to retrieve specific billable expenses.
-   **source\_transaction\_id** (`string`, optional) Filter by SourceTransactionID to get linked transactions from a specific ACCPAY invoice.
-   **filter\_by\_contact\_id** (`string`, optional) Filter results by the customer’s ContactID to get linked transactions for a specific customer.
-   **filter\_by\_status** (`string`, optional) Filter linked transactions by status when combined with ContactID. Retrieves transactions associated with a customer based on this status.
-   **filter\_by\_target\_transaction\_id** (`string`, optional) Filter linked transactions by TargetTransactionID to get those allocated to a specific ACCREC invoice.

## XeroApi.GetLinkedTransaction



Retrieve specific linked transaction details by ID.

**Parameters**

-   **linked\_transaction\_id** (`string`, required) Unique identifier for the linked transaction to be retrieved.
-   **tenant\_id** (`string`, required) Xero tenant identifier for accessing the correct organization.

## XeroApi.DeleteLinkedTransaction



Delete a specific linked transaction.

**Parameters**

-   **linked\_transaction\_id** (`string`, required) Unique identifier for the linked transaction to be deleted.
-   **xero\_tenant\_identifier** (`string`, required) Provide the unique Xero identifier for the tenant to specify the context of the deletion.

## XeroApi.RetrieveManualJournals



Retrieve manual journals from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the Tenant to retrieve manual journals from.
-   **filter\_criteria** (`string`, optional) Filter manual journals based on specified criteria, such as date or amount.
-   **order\_by\_element** (`string`, optional) Specify the element to order the results by. Use field names like date, amount, etc.
-   **page\_number** (`integer`, optional) The page number to retrieve, e.g., page=1. Returns up to 100 manual journals per call.
-   **records\_per\_page** (`integer`, optional) Specify the number of manual journal records to retrieve per page.
-   **modified\_since\_timestamp** (`string`, optional) Retrieve records created or modified since this timestamp (ISO 8601 format).

## XeroApi.RetrieveManualJournal



Retrieve details of a specific manual journal.

**Parameters**

-   **manual\_journal\_id** (`string`, required) Unique identifier for the manual journal you want to retrieve.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. Required to access tenant-specific data.

## XeroApi.RetrieveJournalAttachments



Retrieve attachments for a specific manual journal.

**Parameters**

-   **manual\_journal\_id** (`string`, required) The unique identifier for a specific manual journal to retrieve its attachments.
-   **tenant\_id** (`string`, required) The unique Xero identifier for the tenant to access the manual journal attachments.

## XeroApi.RetrieveJournalAttachment



Retrieve a specific attachment from a manual journal using its ID.

**Parameters**

-   **manual\_journal\_id** (`string`, required) Unique identifier for the manual journal from which to retrieve the attachment.
-   **attachment\_id** (`string`, required) Provide the unique identifier for the attachment object to retrieve it from a manual journal.
-   **xero\_tenant\_id** (`string`, required) The unique Xero identifier for the tenant. Required to specify which tenant’s data to access.
-   **attachment\_mime\_type** (`string`, required) Specify the mime type of the attachment (e.g., image/jpg, application/pdf) to retrieve.

## XeroApi.GetJournalAttachmentByFilename



Retrieve a manual journal attachment by file name.

**Parameters**

-   **manual\_journal\_id** (`string`, required) Unique identifier for the manual journal. Required to retrieve the specific attachment.
-   **attachment\_file\_name** (`string`, required) The name of the attachment file to retrieve from the manual journal.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant, used to specify the particular organization’s data to access.
-   **attachment\_file\_mime\_type** (`string`, required) The MIME type of the attachment file, such as image/jpeg or application/pdf.

## XeroApi.GetManualJournalHistory



Retrieve history for a specific manual journal.

**Parameters**

-   **manual\_journal\_id** (`string`, required) Unique identifier for the manual journal. Used to retrieve its historical details from Xero.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for a specific tenant. This is required to identify which tenant’s data to retrieve.

## XeroApi.CreateJournalHistoryRecord



Creates a history record for a specific manual journal.

**Parameters**

-   **manual\_journal\_id** (`string`, required) Unique identifier for a specific manual journal in Xero.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant is required to specify which tenant’s manual journal is being updated.
-   **idempotency\_key** (`string`, optional) A unique string, up to 128 characters, to safely retry requests without duplicate processing.

## XeroApi.GetXeroOrganisationDetails



Retrieves Xero organisation details.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. This ID is required to specify which organisation’s details to retrieve.

## XeroApi.RetrieveXeroOrganisationActions



Retrieve key actions allowed in Xero organisation.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant to specify which organisation’s actions to retrieve.

## XeroApi.GetCisSettings



Retrieve CIS settings for a Xero organisation.

**Parameters**

-   **organisation\_id** (`string`, required) The unique Xero identifier for the organisation to retrieve CIS settings for.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s CIS settings to retrieve.

## XeroApi.RetrieveOverpayments



Retrieve overpayments from the accounting system.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant to retrieve overpayments for.
-   **filter\_criteria** (`string`, optional) Filter overpayments by a specific element or condition. Use syntax like “Property=value” for filtering.
-   **order\_by\_element** (`string`, optional) Specify the element by which to order the retrieved overpayments. Accepts any valid field.
-   **page\_number** (`integer`, optional) The page number for retrieving overpayments. Up to 100 overpayments will be returned per page.
-   **unit\_decimal\_places** (`integer`, optional) The number of decimal places to use for unit amounts. Accepts up to four decimals.
-   **records\_per\_page** (`integer`, optional) Specify the number of records to retrieve per page. Determines the page size for the results.
-   **records\_modified\_since** (`string`, optional) Return records created or modified after the specified timestamp in ISO 8601 format.

## XeroApi.RetrieveSpecificOverpayment



Retrieve details of a specific overpayment by ID.

**Parameters**

-   **overpayment\_id** (`string`, required) Unique identifier for the overpayment to be retrieved. This ID is required to fetch the specific details of the overpayment from Xero.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant. Required to specify which organization’s data to access.

## XeroApi.DeleteOverpaymentAllocation



Delete an allocation from an overpayment in Xero.

**Parameters**

-   **overpayment\_id** (`string`, required) Unique identifier for a specific overpayment in Xero.
-   **allocation\_id** (`string`, required) Unique identifier for the Allocation object to be deleted.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s data to access.

## XeroApi.GetOverpaymentHistory



Retrieve history records for a specific overpayment in Xero.

**Parameters**

-   **overpayment\_id** (`string`, required) Unique identifier for a specific overpayment in Xero.
-   **xero\_tenant\_id** (`string`, required) Unique identifier for the tenant in Xero. Used to specify which tenant’s data to access.

## XeroApi.RecordOverpaymentHistory



Creates a history record for a specific overpayment.

**Parameters**

-   **overpayment\_id** (`string`, required) Unique identifier for an overpayment that you want to create a history record for.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. Required to specify which tenant to apply the overpayment history record to.
-   **idempotency\_key** (`string`, optional) A unique string (max 128 characters) for safely retrying requests without duplicate processing.

## XeroApi.FetchInvoicePayments



Retrieve payments for invoices and credit notes in Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. This is required to access the specific tenant’s data.
-   **filter\_condition** (`string`, optional) Specify the filter condition for retrieving payments, based on any element.
-   **order\_by** (`string`, optional) Specify the order of payments by any element, such as date or amount.
-   **page\_number** (`integer`, optional) The page number to retrieve, starting from 1. Up to 100 payments are returned per page.
-   **records\_per\_page** (`integer`, optional) Specify the number of records to retrieve per page, up to a maximum of 100.
-   **modified\_since\_timestamp** (`string`, optional) Only records created or modified since this timestamp will be retrieved. Use ISO 8601 format (e.g., ‘YYYY-MM-DDTHH:MM:SSZ’).

## XeroApi.RetrieveInvoicePayment



Retrieve specific payment details using a payment ID.

**Parameters**

-   **payment\_id** (`string`, required) Unique identifier for the payment, used to retrieve specific payment details in Xero.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant. This is required to specify which organization’s data to access.

## XeroApi.RetrievePaymentHistory



Retrieve the history records of a specific payment.

**Parameters**

-   **payment\_identifier** (`string`, required) Unique identifier for a specific payment to retrieve its history.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant. Used to specify which tenant’s data to access.

## XeroApi.CreatePaymentHistoryRecord



Create a history record for a specific payment.

**Parameters**

-   **payment\_identifier** (`string`, required) Unique identifier for a specific payment in Xero.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant. This is required to specify which tenant’s data the action applies to.
-   **idempotency\_key** (`string`, optional) A unique key to safely retry requests and prevent duplicate processing. Maximum 128 characters.

## XeroApi.RetrievePaymentServices



Retrieve available payment services from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Unique identifier for the Xero tenant. Required to retrieve specific payment services for the tenant.

## XeroApi.RetrievePrepayments



Retrieve prepayment details from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) The unique Xero identifier for the Tenant. Required for specifying which account’s prepayments to retrieve.
-   **filter\_condition** (`string`, optional) Provide a filter condition to specify which prepayments to retrieve.
-   **order\_criteria** (`string`, optional) Specifies the order of elements. Use field names for custom sorting, such as ‘Date ASC’ or ‘Amount DESC’.
-   **page\_number** (`integer`, optional) Specify the page number to retrieve, up to 100 prepayments per page.
-   **unit\_decimal\_places** (`integer`, optional) Specify the number of decimal places (e.g., 4) for unit amounts. Use for precise calculations.
-   **records\_per\_page** (`integer`, optional) The number of prepayment records to retrieve per page. This controls how many results are returned in a single call.
-   **modified\_since\_timestamp** (`string`, optional) Only return records created or modified since the specified timestamp (e.g., ‘2023-10-01T00:00:00Z’).

## XeroApi.GetPrepaymentDetails



Retrieve details of a specified prepayment from Xero.

**Parameters**

-   **prepayment\_id** (`string`, required) The unique identifier for the prepayment you want to retrieve.
-   **xero\_tenant\_id** (`string`, required) The unique Xero identifier for the tenant. Required to retrieve specific prepayment data.

## XeroApi.DeletePrepaymentAllocation



Delete an allocation from a prepayment in Xero.

**Parameters**

-   **prepayment\_id** (`string`, required) Unique identifier for a PrePayment. Required to specify which prepayment the allocation will be deleted from.
-   **allocation\_id** (`string`, required) Unique identifier for the Allocation object to be deleted from a prepayment.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant in which the prepayment allocation deletion will occur.

## XeroApi.GetPrepaymentHistory



Retrieve history for a specific prepayment.

**Parameters**

-   **prepayment\_id** (`string`, required) Unique identifier for the prepayment to retrieve its history.
-   **xero\_tenant\_id** (`string`, required) Unique identifier for the Xero tenant, required to access its data.

## XeroApi.CreatePrepaymentHistory



Creates a history record for a specific prepayment.

**Parameters**

-   **prepayment\_id** (`string`, required) Unique identifier for the specific PrePayment to create a history record for.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. This is required to specify which tenant’s data the prepayment history applies to.
-   **idempotency\_key** (`string`, optional) A unique string to safely retry requests without duplicate processing, up to 128 characters.

## XeroApi.RetrievePurchaseOrders



Retrieve purchase orders from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Unique identifier for the Xero tenant to access specific organization’s data.
-   **filter\_by\_status** (`string`, optional) Filter purchase orders by status. Accepted values are: ‘DRAFT’, ‘SUBMITTED’, ‘AUTHORISED’, ‘BILLED’, ‘DELETED’.
-   **filter\_by\_start\_date** (`string`, optional) Specify the start date for filtering purchase orders. Use format ‘YYYY-MM-DD’.
-   **filter\_by\_end\_date** (`string`, optional) Filter purchase orders by end date (format: YYYY-MM-DD).
-   **order\_by\_element** (`string`, optional) Specifies the element by which to sort the purchase orders, such as date or status. Accepts any valid field name.
-   **page\_number** (`integer`, optional) Specifies the page of results to retrieve. Increment to access subsequent pages of purchase orders.
-   **records\_per\_page** (`integer`, optional) Specify the number of purchase order records to retrieve per page.
-   **modified\_since\_timestamp** (`string`, optional) Timestamp to filter records created or modified since this time. Use ISO 8601 format (e.g., ‘2023-01-01T00:00:00Z’).

## XeroApi.GetPurchaseOrderPdf



Retrieve a purchase order as a PDF using its ID.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for a purchase order to retrieve it as a PDF.
-   **tenant\_identifier** (`string`, required) The Xero identifier for the Tenant. Required to specify which tenant’s data to access.

## XeroApi.RetrievePurchaseOrder



Retrieve details of a specific purchase order by ID.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for a purchase order. Required to retrieve specific purchase order details.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant. This is required to specify which tenant’s purchase order to retrieve.

## XeroApi.RetrievePurchaseOrderByNumber



Fetches a purchase order using its unique number.

**Parameters**

-   **purchase\_order\_number** (`string`, required) Unique identifier for the purchase order to be fetched.
-   **xero\_tenant\_id** (`string`, required) Unique identifier for the Xero tenant. Required to specify the account from which to retrieve the purchase order.

## XeroApi.RetrievePurchaseOrderHistory



Retrieve the history of a specific purchase order.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for the purchase order to retrieve its history.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant, required to specify which organization data belongs to.

## XeroApi.CreatePurchaseOrderHistory



Create a history record for a purchase order.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for a Purchase Order. Pass the specific ID for which a history record will be created.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required for API requests.
-   **idempotency\_key** (`string`, optional) A unique key to safely retry requests without duplicate processing; 128 character max.

## XeroApi.RetrievePurchaseOrderAttachments



Retrieve attachments for a specific purchase order.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for a purchase order to retrieve its attachments.
-   **xero\_tenant\_id** (`string`, required) The unique Xero identifier for the tenant linked to the purchase order. Required to authenticate and access tenant-specific data.

## XeroApi.FetchPurchaseOrderAttachment



Retrieve a specific attachment from a purchase order.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for a Purchase Order to retrieve a specific attachment.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object to be retrieved.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. This is required to specify which organization the request is for.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file to retrieve, e.g., image/jpg, application/pdf.

## XeroApi.RetrievePoAttachmentByFilename



Retrieve a purchase order attachment by filename.

**Parameters**

-   **purchase\_order\_id** (`string`, required) Unique identifier for the purchase order you want to retrieve the attachment from.
-   **attachment\_file\_name** (`string`, required) Name of the attachment file to be retrieved from the purchase order.
-   **xero\_tenant\_identifier** (`string`, required) Xero unique identifier for the tenant organization. Required to specify which organization’s data to retrieve.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file to retrieve, e.g., image/jpg or application/pdf.

## XeroApi.RetrieveSalesQuotes



Retrieve sales quotes from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Xero tenant identifier for accessing the specific account’s data.
-   **filter\_start\_date** (`string`, optional) Filter quotes issued after a specified date in YYYY-MM-DD format.
-   **filter\_date\_to** (`string`, optional) Filter for sales quotes before a specified date in YYYY-MM-DD format.
-   **expiry\_date\_after** (`string`, optional) Filter to retrieve quotes expiring after the specified date. Format: YYYY-MM-DD.
-   **filter\_expiry\_date\_before** (`string`, optional) Filter for quotes expiring before a specified date (YYYY-MM-DD).
-   **contact\_id** (`string`, optional) Filter the sales quotes by specifying the contact ID to which they belong.
-   **quote\_status** (`string`, optional) Filter quotes by their status (e.g., DRAFT, SENT).
-   **page\_number** (`integer`, optional) The page number to retrieve, allowing pagination through quotes. Each page returns up to 100 quotes.
-   **order\_by\_element** (`string`, optional) Specify the element to order the sales quotes by.
-   **quote\_number\_filter** (`string`, optional) Filter sales quotes by specifying the quote number (e.g., QU-0001).
-   **modified\_since\_timestamp** (`string`, optional) Retrieve records created or modified after this timestamp.

## XeroApi.RetrieveQuote



Retrieve details of a specific quote by ID.

**Parameters**

-   **quote\_id** (`string`, required) Unique identifier for a quote to retrieve its details.
-   **xero\_tenant\_id** (`string`, required) Provide the Xero identifier for the tenant to specify the account context.

## XeroApi.RetrieveQuoteHistory



Retrieves history records of a specific quote.

**Parameters**

-   **quote\_id** (`string`, required) Unique identifier for the quote to retrieve its history records.
-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant. Required to specify which tenant’s quote history to retrieve.

## XeroApi.AddQuoteHistory



Creates a history record for a specific quote.

**Parameters**

-   **quote\_identifier** (`string`, required) Unique identifier for a quote to which the history will be added.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the tenant. Required for specifying the tenant within the Xero system.
-   **idempotency\_key** (`string`, optional) Unique key to safely retry requests and avoid duplicate processing (max 128 characters).

## XeroApi.RetrieveQuotePdf



Retrieve a specific quote as a PDF file using the quote ID.

**Parameters**

-   **quote\_id** (`string`, required) A unique identifier for the quote to retrieve as a PDF.
-   **tenant\_identifier** (`string`, required) The unique Xero tenant identifier required to access the specific quote.

## XeroApi.RetrieveQuoteAttachments



Retrieve attachments for a specific quote in Xero.

**Parameters**

-   **quote\_id** (`string`, required) Unique identifier for a quote in Xero to retrieve its attachments.
-   **tenant\_identifier** (`string`, required) The unique Xero tenant identifier required to retrieve the quote attachments.

## XeroApi.GetQuoteAttachment



Retrieve a specific attachment from a quote by ID.

**Parameters**

-   **quote\_id** (`string`, required) Unique identifier for a quote. Used to specify which quote the attachment belongs to.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object you wish to retrieve.
-   **xero\_tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant required to access the attachment.
-   **attachment\_content\_type** (`string`, required) The MIME type of the attachment file to retrieve, such as image/jpeg or application/pdf.

## XeroApi.RetrieveQuoteAttachmentByFilename



Retrieve an attachment from a quote using filename.

**Parameters**

-   **quote\_identifier** (`string`, required) Unique identifier for a Quote. Use this to specify which quote’s attachment you want to retrieve.
-   **attachment\_filename** (`string`, required) Name of the attachment file to retrieve from the quote.
-   **xero\_tenant\_identifier** (`string`, required) Xero tenant’s unique identifier. Required to specify which tenant’s data to access.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file (e.g., image/jpg, application/pdf).

## XeroApi.GetDraftExpenseReceipts



Retrieve draft expense claim receipts from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. Used to specify which tenant’s data to retrieve.
-   **filter\_condition** (`string`, optional) A string to filter draft expense receipts based on specified criteria.
-   **order\_receipts\_by** (`string`, optional) Specify the attribute by which to order the receipts. For example, by date or amount.
-   **unit\_decimal\_places** (`integer`, optional) Specifies the number of decimal places for unit amounts. For example, set to 4 for four decimal places.
-   **modified\_since\_timestamp** (`string`, optional) A timestamp to filter records updated or created since this date. Format should be in ISO 8601, e.g., ‘2023-10-10T00:00:00Z’.

## XeroApi.RetrieveDraftExpenseClaimReceipt



Retrieve a draft expense claim receipt using its ID.

**Parameters**

-   **receipt\_id** (`string`, required) The unique identifier for the draft expense claim receipt to retrieve.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required to specify which organization’s data is being accessed.
-   **use\_four\_decimal\_places** (`integer`, optional) Set to true to use four decimal places for unit amounts, false for standard.

## XeroApi.GetReceiptAttachments



Retrieve attachments for a specific expense claim receipt.

**Parameters**

-   **receipt\_id** (`string`, required) Unique identifier for the expense claim receipt to retrieve attachments.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant. Required to access tenant-specific data.

## XeroApi.RetrieveReceiptAttachment



Retrieve a specific attachment from an expense receipt.

**Parameters**

-   **receipt\_id** (`string`, required) Unique identifier for a receipt used to retrieve its attachment.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object you want to retrieve.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s data to access.
-   **attachment\_mime\_type** (`string`, required) Specify the MIME type of the attachment, e.g., ‘image/jpg’ or ‘application/pdf’.

## XeroApi.GetExpenseReceiptAttachment



Retrieve an attachment from a receipt by file name.

**Parameters**

-   **receipt\_id** (`string`, required) The unique identifier for a specific expense receipt. This is used to locate the correct receipt attachment.
-   **attachment\_file\_name** (`string`, required) The name of the attachment to retrieve from the expense claim receipt.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify the organization context in Xero from which to retrieve the attachment.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file, such as image/jpg or application/pdf, that you are retrieving from the receipt.

## XeroApi.RetrieveReceiptHistory



Retrieve detailed history for a specific receipt.

**Parameters**

-   **receipt\_id** (`string`, required) Unique identifier for the receipt to retrieve its history.
-   **tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant associated with the receipt.

## XeroApi.RecordReceiptHistory



Creates a history record for a specific receipt.

**Parameters**

-   **receipt\_id** (`string`, required) Unique identifier for a receipt used to create a history record.
-   **tenant\_identifier** (`string`, required) Xero tenant identifier required for creating the receipt history.
-   **idempotency\_key** (`string`, optional) String up to 128 characters to safely retry requests without risk of duplication.

## XeroApi.GetRepeatingInvoices



Retrieve repeating invoices from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique identifier for the tenant in Xero. Required to retrieve specific tenant data.
-   **filter\_by\_element** (`string`, optional) Filter invoices using a specific element condition. Use Xero’s query language for filtering expressions.
-   **order\_by\_element** (`string`, optional) Specify the element to order the repeating invoices by. It accepts a string indicating the element to sort by.

## XeroApi.GetRepeatingInvoice



Retrieve a specific repeating invoice using its unique ID.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for the specific repeating invoice to retrieve.
-   **tenant\_id** (`string`, required) Xero tenant identifier required to access a specific tenant’s data.

## XeroApi.RetrieveRepeatingInvoiceAttachments



Retrieve attachments from a specified repeating invoice.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for a repeating invoice in Xero. Needed to retrieve the corresponding attachments.
-   **xero\_tenant\_identifier** (`string`, required) A unique identifier for the Xero tenant. Required to access specific tenant data.

## XeroApi.RetrieveRepeatingInvoiceAttachmentById



Retrieve a specific attachment from a repeating invoice.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for a Repeating Invoice in Xero system.
-   **attachment\_id** (`string`, required) Unique identifier for the attachment object you want to retrieve from the repeating invoice.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant needed to retrieve the repeating invoice attachment.
-   **attachment\_mime\_type** (`string`, required) The MIME type of the attachment file, such as image/jpg or application/pdf.

## XeroApi.RetrieveRepeatingInvoiceAttachment



Retrieve a repeating invoice attachment by file name.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for a specific repeating invoice. This is necessary to locate the invoice attachment.
-   **attachment\_file\_name** (`string`, required) The name of the attachment file you wish to retrieve from the repeating invoice.
-   **xero\_tenant\_identifier** (`string`, required) Xero tenant ID needed to identify the specific organization in Xero.
-   **attachment\_mime\_type** (`string`, required) Specify the MIME type of the attachment file to retrieve, such as image/jpg or application/pdf.

## XeroApi.GetRepeatingInvoiceHistory



Retrieve history record for a specific repeating invoice.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for the specific repeating invoice to retrieve history for.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant associated with the repeating invoice.

## XeroApi.CreateRepeatingInvoiceHistory



Creates a history record for a repeating invoice.

**Parameters**

-   **repeating\_invoice\_id** (`string`, required) Unique identifier for a Repeating Invoice to create a history record.
-   **tenant\_identifier** (`string`, required) Xero identifier for the tenant, required for accessing specific tenant data.
-   **idempotency\_key** (`string`, optional) A unique string, max 128 characters, to safely retry requests without duplication.

## XeroApi.Retrieve1099Reports



Retrieves 1099 tax reports.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) The unique identifier for the tenant in Xero. Required to access the specific tenant’s 1099 report data.
-   **report\_year** (`string`, optional) The year for which the 1099 report should be retrieved, in YYYY format.

## XeroApi.GetAgedPayablesReportByContact



Retrieve aged payables report by contact.

**Parameters**

-   **contact\_identifier** (`string`, required) Unique identifier for the contact to retrieve the aged payables report.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Required to specify which tenant’s data is being accessed.
-   **report\_date** (`string`, optional) The specific date for the Aged Payables By Contact report in YYYY-MM-DD format.
-   **report\_from\_date** (`string`, optional) Specify the start date for filtering the report, in YYYY-MM-DD format (e.g. 2021-02-01).
-   **report\_end\_date** (`string`, optional) Filter the report by specifying the end date, formatted as YYYY-MM-DD (e.g., 2021-02-28).

## XeroApi.GetAgedReceivablesReportByContact



Retrieve aged receivables report by contact.

**Parameters**

-   **contact\_identifier** (`string`, required) Unique identifier for a Contact to retrieve their aged receivables report.
-   **tenant\_identifier** (`string`, required) Unique Xero identifier for the Tenant. Required to specify which tenant’s data to retrieve.
-   **report\_date** (`string`, optional) The specific date for which the aged receivables report by contact is generated.
-   **start\_date\_filter** (`string`, optional) Filter the report starting from this date (YYYY-MM-DD).
-   **filter\_by\_to\_date** (`string`, optional) Specify the end date for filtering the aged receivables report, e.g., ‘2021-02-28’.

## XeroApi.GetBalanceSheetReport



Retrieve the balance sheet report from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Used to specify which organization’s data to retrieve in Xero.
-   **report\_date** (`string`, optional) The specific date for which to retrieve the Balance Sheet report. Format as YYYY-MM-DD.
-   **number\_of\_periods** (`integer`, optional) The number of periods to include in the Balance Sheet report.
-   **comparison\_timeframe** (`string`, optional) The period size for comparison, e.g., MONTH, QUARTER, or YEAR.
-   **balance\_sheet\_tracking\_option\_id\_1** (`string`, optional) The first tracking option ID for generating the Balance Sheet report in Xero.
-   **tracking\_option\_id\_2** (`string`, optional) The tracking option ID for secondary categorization in the Balance Sheet report. This allows for filtering or segmentation based on a second tracking category within Xero.
-   **use\_standard\_layout** (`boolean`, optional) Set to true to use the standard layout for the Balance Sheet report in Xero.
-   **return\_cash\_basis** (`boolean`, optional) Set to True to return the Balance Sheet report using a cash basis.

## XeroApi.GetBankSummaryReport



Retrieve bank summary reports from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) Unique identifier for the Xero tenant. Required for accessing the relevant account data.
-   **start\_date\_filter** (`string`, optional) Filter the report by the starting date, formatted as YYYY-MM-DD. For example, 2021-02-01.
-   **end\_date\_filter** (`string`, optional) Filter the report by the end date, formatted as YYYY-MM-DD, e.g., 2021-02-28.

## XeroApi.RetrieveSpecificReport



Retrieve a specific report using a ReportID.

**Parameters**

-   **report\_id** (`string`, required) Unique identifier for a specific report to be retrieved.
-   **xero\_tenant\_id** (`string`, required) Xero identifier for the Tenant. This is required to specify which tenant’s data is being accessed.

## XeroApi.GetBudgetSummaryReport



Retrieves the budget summary report from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) The unique Xero identifier for the tenant, required for authentication and data retrieval.
-   **report\_date** (`string`, optional) The specific date for the budget summary report in YYYY-MM-DD format, e.g., 2018-03-31.
-   **number\_of\_periods\_to\_compare** (`integer`, optional) The number of periods for comparison, must be an integer between 1 and 12.
-   **comparison\_timeframe** (`integer`, optional) Specify the period size for comparison: 1 for month, 3 for quarter, or 12 for year.

## XeroApi.RetrieveExecutiveSummaryReport



Retrieve an executive summary report for financial insights.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) The Xero identifier for the tenant. Required to specify which tenant’s data should be retrieved.
-   **report\_date** (`string`, optional) The date for the Bank Summary report in the format YYYY-MM-DD (e.g., 2018-03-31).

## XeroApi.RetrieveUniqueReportsList



Retrieve a list of unique reports from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) The unique identifier for the Xero tenant to retrieve reports for.

## XeroApi.GetProfitAndLossReport



Retrieve profit and loss report from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The Xero identifier for the tenant. Required to specify which tenant’s data to access.
-   **from\_date** (`string`, optional) Filter the report by the starting date in YYYY-MM-DD format, e.g., 2021-02-01.
-   **end\_date** (`string`, optional) Filter by the end date of the report in YYYY-MM-DD format, e.g., 2021-02-28.
-   **number\_of\_comparison\_periods** (`integer`, optional) The number of periods to compare, must be an integer between 1 and 12.
-   **comparison\_timeframe** (`string`, optional) The period size to compare to for the report. Options are MONTH, QUARTER, or YEAR.
-   **tracking\_category\_id** (`string`, optional) The first tracking category ID for the Profit and Loss report filter. Expect a string representing the tracking category identifier.
-   **secondary\_tracking\_category\_id** (`string`, optional) The ID of the second tracking category for the Profit and Loss report.
-   **tracking\_option\_1\_id** (`string`, optional) The identifier for the first tracking option in the Profit and Loss report.
-   **tracking\_option\_id\_2** (`string`, optional) The second tracking option identifier for filtering the Profit and Loss report.
-   **return\_standard\_layout** (`boolean`, optional) Set to true to return the Profit and Loss report in the standard layout.
-   **return\_cash\_basis\_only** (`boolean`, optional) Specify true to return the Profit and Loss report on a cash only basis.

## XeroApi.GetTrialBalanceReport



Fetches the trial balance report from Xero.

**Parameters**

-   **tenant\_identifier** (`string`, required) The unique identifier for the Xero tenant to retrieve the trial balance report for.
-   **report\_date** (`string`, optional) The specific date for the Trial Balance report in YYYY-MM-DD format.
-   **return\_cash\_basis\_only** (`boolean`, optional) Set to true to return the trial balance report on a cash-only basis, false for accrual.

## XeroApi.SetFinancialSetup



Sets up the financial chart of accounts and conversion details.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Xero tenant ID required to identify the specific tenant for the request.
-   **financial\_setup\_details** (`json`, required) JSON object containing accounts, conversion balances, and a conversion date for setting up the financial chart in Xero.
-   **idempotency\_key** (`string`, optional) A unique string up to 128 characters to safely retry requests without duplicating processing.

## XeroApi.RetrieveTaxRates



Retrieve tax rates from Xero.

**Parameters**

-   **xero\_tenant\_id** (`string`, required) A unique identifier for the Xero tenant. This is required to access tenant-specific data.
-   **filter\_by\_element** (`string`, optional) Apply a filter to the tax rates by specifying an element condition (e.g. ‘Status==“ACTIVE”’).
-   **order\_by\_element** (`string`, optional) Specify the element to order the tax rates by. Provide any valid field or attribute name.

## XeroApi.GetTaxRateByTaxType



Retrieve a specific tax rate using a TaxType code.

**Parameters**

-   **tax\_type\_code** (`string`, required) A valid TaxType code used to retrieve the specific tax rate.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s data is being accessed.

## XeroApi.GetTrackingCategories



Retrieve tracking categories and options from Xero.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Unique identifier for the Xero tenant. Required to specify the tenant from which tracking categories should be retrieved.
-   **filter\_conditions** (`string`, optional) String to filter tracking categories by specific conditions.
-   **order\_by\_element** (`string`, optional) Specify the element to order the tracking categories and options by.
-   **include\_archived\_categories** (`boolean`, optional) Set to true to include categories and options with a status of ARCHIVED in the response.

## XeroApi.GetTrackingCategory



Retrieve tracking category details using its unique ID.

**Parameters**

-   **tracking\_category\_id** (`string`, required) Unique identifier for the tracking category to retrieve details for.
-   **xero\_tenant\_id** (`string`, required) A string representing the Xero identifier for the tenant. Required to access tenant-specific data.

## XeroApi.RemoveTrackingCategory



Deletes a specific tracking category from Xero.

**Parameters**

-   **tracking\_category\_id** (`string`, required) Unique identifier for the tracking category to be deleted in Xero.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the tenant. Required to specify which tenant’s tracking category to delete.

## XeroApi.DeleteTrackingOption



Deletes a specific tracking category option in Xero.

**Parameters**

-   **tracking\_category\_id** (`string`, required) Unique identifier for the tracking category to specify which category the option will be deleted from.
-   **tracking\_option\_id** (`string`, required) Unique identifier for a tracking option to be deleted in Xero.
-   **xero\_tenant\_id** (`string`, required) The unique identifier for a Xero tenant. This specifies which tenant’s data will be affected.

## XeroApi.RetrieveXeroUsers



Retrieve users from the Xero platform.

**Parameters**

-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the specific tenant. This is required to specify the tenant for which users are to be retrieved.
-   **filter\_by\_criteria** (`string`, optional) A string to filter users based on specific criteria in Xero.
-   **order\_by\_element** (`string`, optional) Specify the element to order the retrieved users by, such as name or date.
-   **modified\_since\_timestamp** (`string`, optional) Return only records created or modified since this timestamp, formatted as an ISO 8601 string.

## XeroApi.RetrieveSpecificUser



Retrieve details of a specific user from Xero.

**Parameters**

-   **user\_identifier** (`string`, required) Unique identifier for a User in Xero system.
-   **xero\_tenant\_identifier** (`string`, required) Xero identifier for the Tenant. Use this to specify which tenant the user belongs to.

## XeroApi.GetConnectedTenants



Fetch active Tenants connections from Xero organization.

**Parameters**

-   **filter\_auth\_event\_id** (`string`, optional) A string used to filter the results by a specific authEventId, narrowing down the connections returned.

## XeroApi.DeleteTenantConnection



Delete a specified Xero connection using its ID.

**Parameters**

-   **tenant\_connection\_id** (`string`, required) Unique identifier for the Xero connection to be deleted.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_xero_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[TrelloApi](/en/resources/integrations/productivity/trello-api.md)
[Discord](/en/resources/integrations/social-communication/discord.md)
