---
title: "MailchimpMarketingApi"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
Mailchimp Marketing API

# MailchimpMarketingApi

**Description:** Tools that enable LLMs to interact directly with the Mailchimp Marketing API.

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_mailchimp_marketing_api)](https://pypi.org/project/arcade_mailchimp_marketing_api/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_mailchimp_marketing_api)](https://pypi.org/project/arcade_mailchimp_marketing_api/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_mailchimp_marketing_api)](https://pypi.org/project/arcade_mailchimp_marketing_api/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_mailchimp_marketing_api)](https://pypi.org/project/arcade_mailchimp_marketing_api/)

MailchimpMarketingApi is a [Unoptimized MCP Server](/guides/create-tools/improve/types-of-tools.md#unoptimized-tools)
: each tool mirrors one HTTP endpoint and offers LLMs a way to interact with the low-level API.



Differently from [Optimized MCP Servers](/guides/create-tools/improve/types-of-tools.md#optimized-tools)
, Unoptimized tools are heavily influenced by the original API design, which is not usually optimized for LLM usage. For this reason, we recommend thoroughly evaluating the tools with your Agents or chatbots before using it in production. [Read more](/guides/create-tools/improve/types-of-tools.md) about Optimized vs Unoptimized tools.

The Mailchimp Marketing API MCP Server offers a comprehensive suite of tools for managing and optimizing email marketing campaigns. Users can leverage these tools to:

## Available Tools

Tool Name

Description

MailchimpMarketingApi.GetMailchimpApiResources

Retrieve all available Mailchimp API resource links.

MailchimpMarketingApi.GetChimpChatterActivity

Retrieve the latest Chimp Chatter activity for your account.

MailchimpMarketingApi.GetMailchimpAccountExports

Retrieve a list of account exports in Mailchimp.

MailchimpMarketingApi.CreateMailchimpAccountExport

Create a new account export in your Mailchimp account.

MailchimpMarketingApi.GetAccountExportInfo

Get information about a specific account export.

MailchimpMarketingApi.GetAudienceContacts

Retrieve all audience information from the account.

MailchimpMarketingApi.GetAudienceInfo

Retrieve information about a specific audience.

MailchimpMarketingApi.RetrieveAudienceContactList

Retrieve contacts for a specific marketing audience.

MailchimpMarketingApi.CreateAudienceContact

Create a new omni-channel contact for an audience.

MailchimpMarketingApi.RetrieveAudienceContact

Retrieve a specific omni-channel contact in an audience.

MailchimpMarketingApi.UpdateContactInformation

Update information for an existing contact.

MailchimpMarketingApi.ArchiveContactMailchimp

Archives a contact in a Mailchimp audience.

MailchimpMarketingApi.ForgetContact

Forget a contact in the audience list.

MailchimpMarketingApi.GetConnectedApps

Retrieve registered connected applications for an account.

MailchimpMarketingApi.GetAuthorizedAppInfo

Retrieve details of a specific authorized application.

MailchimpMarketingApi.GetClassicAutomationsSummary

Fetch a summary of an account's classic automations.

MailchimpMarketingApi.CreateMailchimpAutomation

Create a new classic automation in Mailchimp.

MailchimpMarketingApi.GetAutomationSummary

Retrieve details of a specific classic automation workflow.

MailchimpMarketingApi.PauseAutomationEmails

Pause emails in a specific automation workflow.

MailchimpMarketingApi.StartMailchimpAutomationEmails

Start all emails in a Mailchimp automation workflow.

MailchimpMarketingApi.ArchiveMailchimpAutomation

Permanently archive a Mailchimp automation.

MailchimpMarketingApi.GetAutomationEmailsSummary

Get a summary of emails in an automation workflow.

MailchimpMarketingApi.GetAutomationEmailInfo

Retrieve details of a specific classic automation email.

MailchimpMarketingApi.RemoveClassicAutomationEmail

Removes a specified classic automation workflow email.

MailchimpMarketingApi.UpdateAutomationEmailSettings

Update settings for a classic automation workflow email.

MailchimpMarketingApi.GetAutomationEmailQueueInfo

Retrieve details of a classic automation email queue in Mailchimp.

MailchimpMarketingApi.AddSubscriberToWorkflow

Add a subscriber to an automation workflow.

MailchimpMarketingApi.GetAutomationSubscriberInfo

Get details of a subscriber in an automation email queue.

MailchimpMarketingApi.PauseAutomatedEmail

Pause an automated email in a Mailchimp workflow.

MailchimpMarketingApi.StartAutomatedEmail

Initiate an automated email in Mailchimp.

MailchimpMarketingApi.GetRemovedAutomationSubscribers

Get details on subscribers removed from automation workflows.

MailchimpMarketingApi.RemoveSubscriberFromWorkflow

Remove a subscriber from a Mailchimp automation workflow.

MailchimpMarketingApi.GetRemovedSubscriberInfo

Retrieve details about a removed subscriber from automation.

MailchimpMarketingApi.GetBatchSummaries

Retrieve a summary of batch requests from Mailchimp.

MailchimpMarketingApi.StartBatchProcessing

Initiate a batch operations request in Mailchimp.

MailchimpMarketingApi.GetBatchStatus

Retrieve the status of a Mailchimp batch request.

MailchimpMarketingApi.CancelBatchRequest

Cancels a running batch request to stop its execution.

MailchimpMarketingApi.GetAllBatchWebhooks

Retrieve all configured webhooks for batches.

MailchimpMarketingApi.ConfigureWebhookOnBatchComplete

Configure a webhook for batch processing completion alerts.

MailchimpMarketingApi.GetBatchWebhookInfo

Retrieve details of a specific batch webhook on Mailchimp.

MailchimpMarketingApi.UpdateBatchWebhook

Update a batch webhook on Mailchimp.

MailchimpMarketingApi.RemoveBatchWebhook

Remove a batch webhook to stop sending webhooks to a URL.

MailchimpMarketingApi.GetMailchimpTemplateFolders

Retrieve all template folders from Mailchimp.

MailchimpMarketingApi.CreateTemplateFolder

Create a new template folder in Mailchimp.

MailchimpMarketingApi.GetTemplateFolderInfo

Retrieve details of a specific template folder.

MailchimpMarketingApi.UpdateTemplateFolder

Update a specific folder for organizing templates.

MailchimpMarketingApi.DeleteTemplateFolder

Delete a specific template folder in Mailchimp.

MailchimpMarketingApi.GetCampaignFolders

Retrieve all folders used to organize campaigns.

MailchimpMarketingApi.CreateCampaignFolder

Create a new campaign folder in Mailchimp.

MailchimpMarketingApi.GetCampaignFolderInfo

Get details about a specific campaign folder.

MailchimpMarketingApi.UpdateCampaignFolder

Update a specific folder used to organize campaigns.

MailchimpMarketingApi.DeleteCampaignFolder

Delete a specific campaign folder in Mailchimp.

MailchimpMarketingApi.GetAllMarketingCampaigns

Fetches all marketing campaigns from an account.

MailchimpMarketingApi.CreateMailchimpCampaign

Create a new Mailchimp campaign quickly.

MailchimpMarketingApi.GetCampaignDetails

Retrieve details of a specific marketing campaign.

MailchimpMarketingApi.UpdateCampaignSettings

Update campaign settings in Mailchimp.

MailchimpMarketingApi.DeleteMailchimpCampaign

Delete a specific Mailchimp campaign.

MailchimpMarketingApi.CancelCampaignSend

Cancel a sent campaign before all recipients receive it.

MailchimpMarketingApi.ReplicateCampaignMailchimp

Replicate a saved or sent Mailchimp campaign.

MailchimpMarketingApi.SendMailchimpCampaign

Send a Mailchimp campaign immediately or as scheduled.

MailchimpMarketingApi.ScheduleCampaignDelivery

Schedule a Mailchimp campaign for delivery.

MailchimpMarketingApi.UnscheduleCampaign

Unschedule a scheduled Mailchimp campaign.

MailchimpMarketingApi.SendTestEmailCampaign

Send a test email for a specific campaign.

MailchimpMarketingApi.PauseRssCampaign

Pause an RSS-Driven campaign.

MailchimpMarketingApi.ResumeRssDrivenCampaign

Resume an RSS-Driven campaign in Mailchimp.

MailchimpMarketingApi.ResendCampaignToSegments

Resend a campaign to specific segments.

MailchimpMarketingApi.GetCampaignContent

Retrieve the HTML and plain-text content for a Mailchimp campaign.

MailchimpMarketingApi.SetCampaignContent

Set the content for a campaign in Mailchimp.

MailchimpMarketingApi.GetMailchimpCampaignFeedback

Retrieve feedback comments for a Mailchimp campaign.

MailchimpMarketingApi.AddCampaignFeedback

Add feedback to a specific Mailchimp campaign.

MailchimpMarketingApi.GetCampaignFeedbackMessage

Retrieve a specific feedback message from a campaign.

MailchimpMarketingApi.UpdateCampaignFeedback

Update specific feedback for a Mailchimp campaign.

MailchimpMarketingApi.RemoveCampaignFeedback

Remove a specific feedback message from a campaign.

MailchimpMarketingApi.ReviewCampaignSendChecklist

Review the send checklist for a Mailchimp campaign.

MailchimpMarketingApi.GetConnectedSites

Retrieve all connected sites from a Mailchimp account.

MailchimpMarketingApi.CreateMailchimpConnectedSite

Create a new Mailchimp connected site.

MailchimpMarketingApi.GetConnectedSiteInfo

Retrieve details of a specific connected site.

MailchimpMarketingApi.RemoveMailchimpConnectedSite

Remove a connected site from your Mailchimp account.

MailchimpMarketingApi.VerifyScriptInstallation

Verify if the Mailchimp connected site script is installed.

MailchimpMarketingApi.TriggerAutomationStep

Trigger a step in a Mailchimp automation flow.

MailchimpMarketingApi.GetFileManagerFiles

Retrieve images and files from the Mailchimp File Manager.

MailchimpMarketingApi.UploadFileToFileManager

Upload a new file or image to the File Manager.

MailchimpMarketingApi.GetFileManagerFileInfo

Retrieve information about a specific file from Mailchimp's File Manager.

MailchimpMarketingApi.UpdateFileManagerFile

Update a file in the Mailchimp File Manager.

MailchimpMarketingApi.DeleteFileManagerFile

Remove a specific file from Mailchimp's File Manager.

MailchimpMarketingApi.ListFileManagerFolders

Retrieve a list of folders from the File Manager.

MailchimpMarketingApi.CreateNewFileManagerFolder

Create a new folder in Mailchimp's File Manager.

MailchimpMarketingApi.GetFileManagerFolderInfo

Retrieve details of a specific folder from File Manager.

MailchimpMarketingApi.UpdateFileManagerFolder

Update a specific File Manager folder in Mailchimp.

MailchimpMarketingApi.DeleteFileManagerFolder

Delete a specific folder in the File Manager.

MailchimpMarketingApi.GetFolderFiles

Retrieve files and images from a specific folder.

MailchimpMarketingApi.RetrieveMailchimpLists

Retrieve information about all Mailchimp lists.

MailchimpMarketingApi.CreateMailchimpList

Create a new list in your Mailchimp account.

MailchimpMarketingApi.GetMailchimpListInfo

Retrieve details of a specific list in Mailchimp.

MailchimpMarketingApi.UpdateMailchimpListSettings

Update settings for a specific Mailchimp list.

MailchimpMarketingApi.DeleteMailchimpList

Delete a list from your Mailchimp account.

MailchimpMarketingApi.ManageMailchimpListMembers

Batch subscribe or unsubscribe members in a Mailchimp list.

MailchimpMarketingApi.GetAbuseReportsForList

Retrieve all abuse reports for a specified mailing list.

MailchimpMarketingApi.FetchAbuseReportDetails

Fetch details about a specific abuse report for a mailing list.

MailchimpMarketingApi.GetDailyListActivity

Fetch daily detailed activity stats for a list in Mailchimp.

MailchimpMarketingApi.GetTopEmailClients

Retrieve the top email clients from a specific list.

MailchimpMarketingApi.GetMonthlyListGrowthSummary

Retrieve monthly summary of a list's growth activity.

MailchimpMarketingApi.GetListGrowthSummary

Get a list's growth activity summary for a specific month and year.

MailchimpMarketingApi.GetListInterestCategories

Retrieve interest categories for a specific mailing list.

MailchimpMarketingApi.CreateInterestCategory

Create a new interest category in a Mailchimp list.

MailchimpMarketingApi.GetInterestCategoryInfo

Fetch specific interest category details from a Mailchimp list.

MailchimpMarketingApi.UpdateInterestCategory

Update a specific interest category in Mailchimp.

MailchimpMarketingApi.DeleteInterestCategory

Delete a specific interest category from a list.

MailchimpMarketingApi.GetInterestCategoryInterests

Retrieve interests for a specific category in Mailchimp.

MailchimpMarketingApi.CreateInterestGroup

Create a new interest group for a specific category.

MailchimpMarketingApi.GetInterestGroupNames

Retrieve interest group names for a specific category.

MailchimpMarketingApi.UpdateInterestGroupName

Update group names in a specific interest category.

MailchimpMarketingApi.DeleteInterestFromCategory

Delete an interest from a specific category.

MailchimpMarketingApi.GetListSegmentsInfo

Retrieve details of all segments for a specific list.

MailchimpMarketingApi.CreateMailchimpSegment

Create a new segment in a specific Mailchimp list.

MailchimpMarketingApi.GetSegmentInfo

Retrieve information about a specific Mailchimp segment.

MailchimpMarketingApi.DeleteSpecificSegment

Delete a specific segment from a Mailchimp list.

MailchimpMarketingApi.UpdateMailchimpSegment

Update the details of a specific segment in a Mailchimp list.

MailchimpMarketingApi.UpdateListSegment

Batch update members in a Mailchimp list segment.

MailchimpMarketingApi.GetSegmentMembersInfo

Get information about members in a saved segment.

MailchimpMarketingApi.AddMemberToStaticSegment

Add a member to a Mailchimp static segment.

MailchimpMarketingApi.RemoveMemberFromMailchimpSegment

Remove a member from a Mailchimp static segment.

MailchimpMarketingApi.SearchTagsByName

Search for tags on a list by name.

MailchimpMarketingApi.GetMailchimpListMembers

Retrieve member details from a specific Mailchimp list.

MailchimpMarketingApi.AddMemberToMailchimpList

Add a new member to a Mailchimp list.

MailchimpMarketingApi.GetListMemberInfo

Retrieve details about a specific list member in Mailchimp.

MailchimpMarketingApi.AddOrUpdateListMember

Add or update a member in a Mailchimp list.

MailchimpMarketingApi.UpdateListMemberInfo

Update information for a specific list member in Mailchimp.

MailchimpMarketingApi.ArchiveListMember

Archives a member from a Mailchimp list.

MailchimpMarketingApi.GetMemberActivity

Retrieve recent email activity for a list member.

MailchimpMarketingApi.GetMemberActivityFeed

Fetch a Mailchimp list member's activity details.

MailchimpMarketingApi.RetrieveMemberTags

Fetches tags for a specific mailing list member.

MailchimpMarketingApi.UpdateListMemberTags

Add or remove tags from a Mailchimp list member.

MailchimpMarketingApi.RetrieveContactEvents

Retrieve events for a specific contact in a list.

MailchimpMarketingApi.AddListMemberEvent

Add an event for a list member in Mailchimp.

MailchimpMarketingApi.GetMemberGoalEvents

Retrieve the last 50 goal events for a specific list member.

MailchimpMarketingApi.GetMemberNotes

Retrieve recent notes for a Mailchimp list member.

MailchimpMarketingApi.AddNoteToSubscriber

Add a new note for a specific subscriber in Mailchimp.

MailchimpMarketingApi.GetListMemberNote

Retrieve a specific note for a list member.

MailchimpMarketingApi.UpdateMemberNote

Update a specific note for a list member in Mailchimp.

MailchimpMarketingApi.DeleteMemberNote

Delete a specific note for a list member.

MailchimpMarketingApi.DeleteMemberDataPermanently

Permanently delete a list member's data in Mailchimp.

MailchimpMarketingApi.GetAudienceMergeFields

Get a list of all merge fields for an audience.

MailchimpMarketingApi.AddAudienceMergeField

Add a new merge field to a specific audience.

MailchimpMarketingApi.GetMergeFieldInfo

Retrieve information about a specific merge field.

MailchimpMarketingApi.UpdateMergeField

Update a specific merge field in a list.

MailchimpMarketingApi.DeleteMergeField

Delete a specific merge field from a Mailchimp list.

MailchimpMarketingApi.GetListWebhooksInfo

Get information about all webhooks for a specific list.

MailchimpMarketingApi.CreateMailchimpWebhook

Create a new webhook for a specific Mailchimp list.

MailchimpMarketingApi.GetWebhookInfo

Retrieve details of a specific Mailchimp webhook.

MailchimpMarketingApi.DeleteMailchimpWebhook

Delete a specific webhook from a Mailchimp list.

MailchimpMarketingApi.UpdateWebhookSettings

Update the settings for an existing webhook.

MailchimpMarketingApi.GetListSignupForms

Retrieve signup forms for a Mailchimp list.

MailchimpMarketingApi.CustomizeListSignupForm

Customize a list's default signup form in Mailchimp.

MailchimpMarketingApi.GetListSubscriberLocations

Retrieve subscriber location data by list.

MailchimpMarketingApi.GetListSurveysInfo

Retrieve information about surveys for a specific list.

MailchimpMarketingApi.GetSurveyDetails

Retrieve details about a specific Mailchimp survey.

MailchimpMarketingApi.PublishMailchimpSurvey

Publishes a Mailchimp survey from draft to published status.

MailchimpMarketingApi.UnpublishMailchimpSurvey

Unpublish a survey in Mailchimp Marketing.

MailchimpMarketingApi.CreateSurveyCampaignEmail

Generate a campaign email linking to a survey.

MailchimpMarketingApi.GetAllLandingPages

Retrieve all landing pages from Mailchimp.

MailchimpMarketingApi.CreateMailchimpLandingPage

Create an unpublished Mailchimp landing page.

MailchimpMarketingApi.GetLandingPageInfo

Retrieve information about a specific landing page by ID.

MailchimpMarketingApi.UpdateLandingPage

Update a landing page on Mailchimp.

MailchimpMarketingApi.DeleteLandingPage

Delete a specified landing page.

MailchimpMarketingApi.PublishLandingPage

Publishes a landing page from draft or edited state.

MailchimpMarketingApi.UnpublishLandingPage

Unpublish a draft or published landing page.

MailchimpMarketingApi.GetLandingPageHtml

Retrieve the HTML content of a Mailchimp landing page.

MailchimpMarketingApi.GetCampaignReports

Retrieve detailed campaign reports from Mailchimp.

MailchimpMarketingApi.GetCampaignReportDetails

Retrieve detailed report for a specific sent campaign.

MailchimpMarketingApi.GetCampaignAbuseReports

Get a list of abuse complaints for a specific campaign.

MailchimpMarketingApi.GetCampaignAbuseReportDetails

Retrieve details of an abuse report for a campaign.

MailchimpMarketingApi.GetCampaignAdviceFeedback

Get feedback based on a campaign's performance data.

MailchimpMarketingApi.GetCampaignClickDetails

Get details about link clicks in Mailchimp campaigns.

MailchimpMarketingApi.GetCampaignLinkClickDetails

Get click details for a specific campaign link.

MailchimpMarketingApi.FetchClickDetailsForCampaign

Retrieve details on members who clicked a specific campaign link.

MailchimpMarketingApi.GetSubscriberClickDetails

Retrieve details of a subscriber's link click in a campaign.

MailchimpMarketingApi.GetCampaignOpenDetails

Get details on opened campaign emails by list members.

MailchimpMarketingApi.GetCampaignSubscriberOpenDetails

Retrieve details of a subscriber who opened a campaign.

MailchimpMarketingApi.GetCampaignDomainPerformance

Get top domain performance for an email campaign.

MailchimpMarketingApi.GetCampaignSocialActivity

Get social activity summary for a campaign using EepURL.

MailchimpMarketingApi.RetrieveCampaignSubscriberActivity

Retrieve subscriber activity for a specific campaign.

MailchimpMarketingApi.GetCampaignEmailActivity

Retrieve specific list member's activity in a campaign.

MailchimpMarketingApi.FetchCampaignOpenLocations

Retrieve top open locations for a specific campaign.

MailchimpMarketingApi.GetCampaignRecipients

Retrieve information about campaign recipients.

MailchimpMarketingApi.GetCampaignRecipientInfo

Get information about a specific campaign recipient.

MailchimpMarketingApi.GetCampaignSubReports

Retrieve sub-reports of a specific parent campaign.

MailchimpMarketingApi.GetUnsubscribedCampaignMembers

Get details of members unsubscribed from a specific campaign.

MailchimpMarketingApi.GetUnsubscribedMemberInfo

Retrieve info on an unsubscribed list member from a campaign.

MailchimpMarketingApi.GetCampaignProductActivity

Get breakdown of product activity for a campaign.

MailchimpMarketingApi.GetAvailableTemplates

Retrieve a list of available email templates.

MailchimpMarketingApi.CreateMailchimpTemplate

Create a new Classic template in Mailchimp.

MailchimpMarketingApi.GetMailchimpTemplateInfo

Retrieves detailed information about a specific Mailchimp template.

MailchimpMarketingApi.UpdateEmailTemplate

Update the details of an existing email template.

MailchimpMarketingApi.DeleteEmailTemplate

Delete a specific email template in Mailchimp.

MailchimpMarketingApi.GetTemplateEditableSections

Retrieve editable sections and default content of a template.

MailchimpMarketingApi.GetAccountOrders

Retrieve information about an account's ecommerce orders.

MailchimpMarketingApi.GetEcommerceStoresInfo

Retrieve information about all ecommerce stores in the account.

MailchimpMarketingApi.AddNewEcommerceStore

Add a new e-commerce store to your Mailchimp account.

MailchimpMarketingApi.GetEcommerceStoreInfo

Retrieve detailed information about a specific eCommerce store.

MailchimpMarketingApi.UpdateEcommerceStore

Update an e-commerce store's details.

MailchimpMarketingApi.DeleteEcommerceStore

Delete a store and its associated subresources.

MailchimpMarketingApi.GetStoreCartsInfo

Retrieve information about a store's ecommerce carts.

MailchimpMarketingApi.AddCartToStore

Add a new cart to an ecommerce store.

MailchimpMarketingApi.GetCartInfo

Fetch information about a specific ecommerce cart.

MailchimpMarketingApi.UpdateCart

Update a specific cart in an e-commerce store.

MailchimpMarketingApi.DeleteCart

Deletes a specific cart from an ecommerce store.

MailchimpMarketingApi.GetCartLineItemsInfo

Retrieve information about a cart's line items.

MailchimpMarketingApi.AddLineItemToCart

Add a new line item to an existing shopping cart.

MailchimpMarketingApi.RetrieveCartLineItemInfo

Get information about a specific cart line item.

MailchimpMarketingApi.UpdateCartLineItem

Update a specific cart line item in Mailchimp.

MailchimpMarketingApi.DeleteCartLineItem

Delete a specific cart line item.

MailchimpMarketingApi.GetStoreCustomersInfo

Retrieve information about a store's customers.

MailchimpMarketingApi.AddCustomerToStore

Add a new customer to an ecommerce store.

MailchimpMarketingApi.GetCustomerInfo

Retrieve specific customer information from an eCommerce store.

MailchimpMarketingApi.AddOrUpdateCustomerInStore

Add or update a customer in an eCommerce store.

MailchimpMarketingApi.UpdateCustomerInfo

Update a customer's information in an ecommerce store.

MailchimpMarketingApi.DeleteStoreCustomer

Delete a customer from an ecommerce store.

MailchimpMarketingApi.GetStorePromoRules

Retrieve promo rules for a specified store.

MailchimpMarketingApi.AddStorePromoRule

Add a new promo rule to an e-commerce store on Mailchimp.

MailchimpMarketingApi.GetPromoRuleInfo

Retrieve information about a specific promo rule in an ecommerce store.

MailchimpMarketingApi.UpdatePromoRule

Update a promotional rule in an e-commerce store.

MailchimpMarketingApi.DeletePromoRuleFromStore

Delete a promo rule from a specified ecommerce store.

MailchimpMarketingApi.GetStorePromoCodes

Retrieve information about promo codes for a specific store.

MailchimpMarketingApi.AddPromoCodeToStore

Add a new promo code to an ecommerce store.

MailchimpMarketingApi.GetPromoCodeInfo

Retrieve details of a specific promo code.

MailchimpMarketingApi.UpdatePromoCode

Update details of a specific promo code.

MailchimpMarketingApi.DeleteStorePromoCode

Delete a promo code from an e-commerce store.

MailchimpMarketingApi.GetStoreOrdersInfo

Retrieve information about a store's orders via Mailchimp.

MailchimpMarketingApi.AddOrderToStore

Add a new order to an ecommerce store.

MailchimpMarketingApi.GetSpecificOrderInfo

Retrieve information about a specific order in a store.

MailchimpMarketingApi.UpdateEcommerceOrder

Add or update an order in an ecommerce store.

MailchimpMarketingApi.UpdateOrderMailchimp

Update a specific order in Mailchimp's e-commerce store.

MailchimpMarketingApi.DeleteOrderInEcommerceStore

Delete an order from an eCommerce store.

MailchimpMarketingApi.GetOrderLineItems

Retrieve information about order line items.

MailchimpMarketingApi.AddOrderLineItem

Add a new line item to an existing order.

MailchimpMarketingApi.GetSpecificOrderLineItemInfo

Get details about a specific order line item.

MailchimpMarketingApi.UpdateOrderLineItem

Update a specific order line item.

MailchimpMarketingApi.DeleteOrderLineItem

Delete a specific order line item.

MailchimpMarketingApi.GetStoreProductsInfo

Get information about a store's products from Mailchimp.

MailchimpMarketingApi.AddProductToStore

Add a new product to a Mailchimp store.

MailchimpMarketingApi.GetProductInfo

Get information about a specific product from an ecommerce store.

MailchimpMarketingApi.UpdateProductInfo

Update details of a specific product in a store.

MailchimpMarketingApi.UpdateEcommerceProduct

Update a specific product in an ecommerce store.

MailchimpMarketingApi.DeleteEcommerceProduct

Delete a product from an eCommerce store.

MailchimpMarketingApi.GetProductVariantsInfo

Retrieve information on product variants from a store.

MailchimpMarketingApi.AddProductVariantMailchimp

Add a new variant to an existing product in Mailchimp.

MailchimpMarketingApi.GetProductVariantInfo

Retrieve information on a specific product variant.

MailchimpMarketingApi.UpdateProductVariant

Add or update a product variant in an ecommerce store.

MailchimpMarketingApi.ModifyProductVariant

Update a product variant in an e-commerce store.

MailchimpMarketingApi.DeleteProductVariant

Delete a product variant from an ecommerce store.

MailchimpMarketingApi.GetProductImages

Retrieve information about a product's images.

MailchimpMarketingApi.AddProductImage

Add a new image to a specific product.

MailchimpMarketingApi.GetProductImageInfo

Retrieve details of a specific product image in an eCommerce store.

MailchimpMarketingApi.UpdateProductImageMailchimp

Update a product image in an e-commerce store.

MailchimpMarketingApi.DeleteProductImage

Delete an image from a product in an e-commerce store.

MailchimpMarketingApi.SearchMailchimpCampaigns

Search for email campaigns using query terms.

MailchimpMarketingApi.SearchMailchimpMembers

Search for Mailchimp list members across lists.

MailchimpMarketingApi.CheckMailchimpApiHealth

Checks the health status of the Mailchimp API.

MailchimpMarketingApi.GetFacebookAdsList

Retrieve a list of Facebook ads from Mailchimp.

MailchimpMarketingApi.GetFacebookAdDetails

Retrieve details of a specific Facebook ad campaign.

MailchimpMarketingApi.GetFacebookAdsReports

Get reports of Facebook ads for marketing analysis.

MailchimpMarketingApi.GetFacebookAdReport

Get report details of a Facebook ad campaign.

MailchimpMarketingApi.GetFacebookAdsProductActivity

Retrieve product activity breakdown for a Facebook ads outreach.

MailchimpMarketingApi.GetLandingPageReport

Retrieve the report for a specific landing page.

MailchimpMarketingApi.GetLandingPageReports

Retrieve reports of landing pages from Mailchimp.

MailchimpMarketingApi.GetSurveyReports

Retrieve detailed reports for marketing surveys.

MailchimpMarketingApi.GetSurveyReport

Retrieve report details for a specific survey.

MailchimpMarketingApi.GetSurveyQuestionReports

Retrieve reports for survey questions by survey ID.

MailchimpMarketingApi.GetSurveyQuestionReport

Get report data for a specific survey question.

MailchimpMarketingApi.GetSurveyQuestionAnswers

Retrieve answers for a specific survey question.

MailchimpMarketingApi.GetSurveyResponses

Retrieve responses to a specific survey.

MailchimpMarketingApi.GetSurveyResponse

Retrieve details of a specific survey response.

MailchimpMarketingApi.GetDomainDetails

Retrieve details for a specific verified domain.

MailchimpMarketingApi.DeleteVerifiedDomain

Deletes a verified domain from your Mailchimp account.

MailchimpMarketingApi.VerifySendingDomain

Verify if a domain is authorized for sending emails.

MailchimpMarketingApi.GetVerifiedMailchimpDomains

Retrieve all verified sending domains for a Mailchimp account.

MailchimpMarketingApi.AddVerifiedDomain

Add a verified domain to your Mailchimp account.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## MailchimpMarketingApi.GetMailchimpApiResources



Retrieve all available Mailchimp API resource links.

**Parameters**

-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-object parameters.

## MailchimpMarketingApi.GetChimpChatterActivity



Retrieve the latest Chimp Chatter activity for your account.

**Parameters**

-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of Chimp Chatter records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetMailchimpAccountExports



Retrieve a list of account exports in Mailchimp.

**Parameters**

-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return in the response. Use dot notation for nested fields.
-   **number\_of\_records** (`string`, optional) Specify the number of records to return. Defaults to 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0, used to manage data retrieval position.

## MailchimpMarketingApi.CreateMailchimpAccountExport



Create a new account export in your Mailchimp account.

**Parameters**

-   **include\_export\_stages** (`array[string]`, required) Array of export stages to include in the account export.
-   **export\_starting\_date** (`string`, optional) An ISO 8601 date to limit export to records created after this time. Excludes audiences.

## MailchimpMarketingApi.GetAccountExportInfo



Get information about a specific account export.

**Parameters**

-   **account\_export\_id** (`string`, required) The unique ID for the account export. Required to retrieve specific export details.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.

## MailchimpMarketingApi.GetAudienceContacts



Retrieve all audience information from the account.

**Parameters**

-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) The number of audience records to return, ranging from 1 to 1000. Default is 10.

## MailchimpMarketingApi.GetAudienceInfo



Retrieve information about a specific audience.

**Parameters**

-   **audience\_id** (`string`, required) The unique ID of the audience to retrieve information for.
-   **exclude\_fields\_list** (`string`, optional) A list of fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.RetrieveAudienceContactList



Retrieve contacts for a specific marketing audience.

**Parameters**

-   **audience\_id** (`string`, required) The unique identifier for the specific audience to retrieve contacts. Ensure this ID corresponds to an existing audience.
-   **created\_before\_datetime** (`string`, optional) Restricts the response to contacts created at or before the specified time. Use ISO 8601 format: YYYY-MM-DDTHH:MM:SS+00:00.
-   **created\_since** (`string`, optional) Restrict contacts to those created after this timestamp (exclusive). Use ISO 8601 format: YYYY-MM-DDTHH:MM:SS+00:00.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specifies how many records to return, from 10 to 1000.
-   **pagination\_cursor** (`string`, optional) Paginate through records using a `next_cursor` from a previous request. By default, fetches the first page.
-   **restrict\_by\_update\_date\_before** (`string`, optional) Restricts the response to contacts updated at or before the specified date and time, using ISO 8601 format: YYYY-MM-DDTHH:MM:SS+00:00.
-   **updated\_since** (`string`, optional) Restrict response to contacts updated after this time using ISO 8601 format (exclusive).

## MailchimpMarketingApi.CreateAudienceContact



Create a new omni-channel contact for an audience.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **audience\_unique\_id** (`string`, optional) The unique identifier for the audience in Mailchimp where the contact will be added. This ID is necessary to specify the target audience for the new contact. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **merge\_field\_validation\_mode** (`string`, optional) Choose ‘ignore\_required\_checks’ to skip validation on required merge fields, or ‘strict’ to enforce validation. Defaults to ‘strict’ if not set. Only used when mode is ‘execute’.
-   **data\_processing\_mode** (`string`, optional) Selects the data processing mode: ‘historical’ mode skips automations and webhooks, ‘live’ mode triggers them. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.RetrieveAudienceContact



Retrieve a specific omni-channel contact in an audience.

**Parameters**

-   **audience\_unique\_id** (`string`, required) The unique ID for the audience to retrieve the contact from.
-   **unique\_contact\_identifier** (`string`, required) A unique identifier for the contact, either a Mailchimp contact ID or a channel hash. Format: email:\[md5\_hash\] for emails or sms:\[sha256\_hash\] for phone numbers.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude, using dot notation for sub-objects, when retrieving contact details.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateContactInformation



Update information for an existing contact.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **audience\_id** (`string`, optional) The unique ID for the audience to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **contact\_id** (`string`, optional) The unique ID for the contact to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **merge\_field\_validation\_mode** (`string`, optional) Specifies how merge field validation is handled. Options: `ignore_required_checks` (no error if fields missing), `strict` (errors if required fields not provided). Default is `strict`. Only used when mode is ‘execute’.
-   **data\_processing\_mode** (`string`, optional) Specify `historical` to prevent triggering automations/webhooks, or `live` to trigger them for contact data changes. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.ArchiveContactMailchimp



Archives a contact in a Mailchimp audience.

**Parameters**

-   **audience\_unique\_id** (`string`, required) The unique ID for the Mailchimp audience where the contact will be archived.
-   **contact\_id** (`string`, required) The unique identifier for the contact to archive within the audience in Mailchimp.

## MailchimpMarketingApi.ForgetContact



Forget a contact in the audience list.

**Parameters**

-   **audience\_id** (`string`, required) The unique ID for the audience where the contact should be forgotten.
-   **contact\_id** (`string`, required) The unique ID of the contact to be forgotten from the audience.

## MailchimpMarketingApi.GetConnectedApps



Retrieve registered connected applications for an account.

**Parameters**

-   **exclude\_fields\_from\_response** (`string`, optional) A comma-separated list of fields to exclude from the response, referencing sub-objects with dot notation.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return in the response. Use dot notation for sub-object fields.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetAuthorizedAppInfo



Retrieve details of a specific authorized application.

**Parameters**

-   **authorized\_application\_id** (`string`, required) The unique ID for the connected authorized application to retrieve its information.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude. Use dot notation for sub-object references.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetClassicAutomationsSummary



Fetch a summary of an account’s classic automations.

**Parameters**

-   **automation\_status\_filter** (`string`, optional) Specify the status of automations to filter results (e.g., ‘active’, ‘paused’).
-   **created\_after\_time** (`string`, optional) Specify the time to filter automations created after this date-time. Use ISO 8601 format, e.g., 2015-10-21T15:41:36+00:00.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of automation records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **restrict\_before\_create\_time** (`string`, optional) Restrict the response to automations created before the specified time in ISO 8601 format. Example: 2015-10-21T15:41:36+00:00.
-   **restrict\_to\_automations\_started\_before** (`string`, optional) Restrict the response to automations started before this time using ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **start\_time\_after** (`string`, optional) Restrict the response to automations started after this date and time in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).

## MailchimpMarketingApi.CreateMailchimpAutomation



Create a new classic automation in Mailchimp.

**Parameters**

-   **automation\_workflow\_type** (`string`, required) Specify the type of Automation workflow. Currently, only ‘abandonedCart’ is supported.
-   **automation\_from\_name** (`string`, optional) The ‘from’ name to display in the new automation emails. It should be an easily recognizable name for recipients.
-   **list\_id** (`string`, optional) The unique identifier for the Mailchimp List to target with the automation.
-   **reply\_to\_email\_address** (`string`, optional) The reply-to email address for the automation in Mailchimp.
-   **store\_id** (`string`, optional) The unique identifier for the store in Mailchimp. Required to target specific automation to a store.

## MailchimpMarketingApi.GetAutomationSummary



Retrieve details of a specific classic automation workflow.

**Parameters**

-   **workflow\_id** (`string`, required) The unique ID for the automation workflow to retrieve its summary.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the automation workflow details. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.PauseAutomationEmails



Pause emails in a specific automation workflow.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique identifier for the specific automation workflow to be paused.

## MailchimpMarketingApi.StartMailchimpAutomationEmails



Start all emails in a Mailchimp automation workflow.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Mailchimp automation workflow to be started.

## MailchimpMarketingApi.ArchiveMailchimpAutomation



Permanently archive a Mailchimp automation.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Mailchimp automation workflow to archive. This ID is necessary to specify which automation you want to permanently end.

## MailchimpMarketingApi.GetAutomationEmailsSummary



Get a summary of emails in an automation workflow.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique ID of the automation workflow to retrieve the email summary for.

## MailchimpMarketingApi.GetAutomationEmailInfo



Retrieve details of a specific classic automation email.

**Parameters**

-   **automation\_email\_unique\_id** (`string`, required) The unique identifier for the Automation workflow email in Mailchimp.
-   **automation\_workflow\_id** (`string`, required) The unique ID for the automation workflow.

## MailchimpMarketingApi.RemoveClassicAutomationEmail



Removes a specified classic automation workflow email.

**Parameters**

-   **automation\_workflow\_email\_id** (`string`, required) The unique identifier for the specific automation workflow email to be removed.
-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Automation workflow to target for email removal.

## MailchimpMarketingApi.UpdateAutomationEmailSettings



Update settings for a classic automation workflow email.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **automation\_workflow\_id** (`string`, optional) The unique identifier for the Automation workflow to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **automation\_workflow\_email\_id** (`string`, optional) The unique ID for the Automation workflow email to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetAutomationEmailQueueInfo



Retrieve details of a classic automation email queue in Mailchimp.

**Parameters**

-   **automation\_workflow\_email\_id** (`string`, required) The unique ID for the automation workflow email.
-   **automation\_workflow\_id** (`string`, required) The unique ID for the Automation workflow to obtain the email queue details.

## MailchimpMarketingApi.AddSubscriberToWorkflow



Add a subscriber to an automation workflow.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Automation workflow to which the subscriber will be added.
-   **subscriber\_email\_address** (`string`, required) The email address of the subscriber to add to the automation workflow.
-   **workflow\_email\_id** (`string`, required) The unique ID for the Automation workflow email. Required to identify the specific email in the workflow.

## MailchimpMarketingApi.GetAutomationSubscriberInfo



Get details of a subscriber in an automation email queue.

**Parameters**

-   **automation\_workflow\_email\_id** (`string`, required) The unique ID for the Automation workflow email in Mailchimp.
-   **automation\_workflow\_id** (`string`, required) The unique ID for the Automation workflow in Mailchimp.
-   **subscriber\_email\_md5\_hash** (`string`, required) The MD5 hash of the lowercase version of the subscriber’s email address in the list.

## MailchimpMarketingApi.PauseAutomatedEmail



Pause an automated email in a Mailchimp workflow.

**Parameters**

-   **automation\_workflow\_email\_id** (`string`, required) The unique ID for the automation workflow email to be paused.
-   **automation\_workflow\_id** (`string`, required) The unique ID for the Mailchimp automation workflow to pause.

## MailchimpMarketingApi.StartAutomatedEmail



Initiate an automated email in Mailchimp.

**Parameters**

-   **automation\_email\_id** (`string`, required) The unique ID for the specific email in the automation workflow to be started.
-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Automation workflow in Mailchimp.

## MailchimpMarketingApi.GetRemovedAutomationSubscribers



Get details on subscribers removed from automation workflows.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique ID for identifying the specific automation workflow in Mailchimp.

## MailchimpMarketingApi.RemoveSubscriberFromWorkflow



Remove a subscriber from a Mailchimp automation workflow.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique identifier for the Mailchimp automation workflow.
-   **subscriber\_email\_address** (`string`, required) Email address of the list member to be removed from the workflow.

## MailchimpMarketingApi.GetRemovedSubscriberInfo



Retrieve details about a removed subscriber from automation.

**Parameters**

-   **automation\_workflow\_id** (`string`, required) The unique ID for the Mailchimp automation workflow. It is required to identify from which workflow the subscriber was removed.
-   **subscriber\_hash** (`string`, required) MD5 hash of the lowercase version of the subscriber’s email address to identify the removed member.

## MailchimpMarketingApi.GetBatchSummaries



Retrieve a summary of batch requests from Mailchimp.

**Parameters**

-   **exclude\_fields\_to\_return** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of specific fields to include in the response, using dot notation for sub-objects.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0, used for navigating through large sets of data.
-   **record\_count\_to\_return** (`string`, optional) Specify the number of records to return, from 1 to 1000. Default is 10.

## MailchimpMarketingApi.StartBatchProcessing



Initiate a batch operations request in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetBatchStatus



Retrieve the status of a Mailchimp batch request.

**Parameters**

-   **batch\_operation\_id** (`string`, required) The unique ID for the Mailchimp batch operation to check its status.
-   **excluded\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **return\_fields** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.

## MailchimpMarketingApi.CancelBatchRequest



Cancels a running batch request to stop its execution.

**Parameters**

-   **batch\_request\_id** (`string`, required) The unique identifier for the batch request you want to cancel.

## MailchimpMarketingApi.GetAllBatchWebhooks



Retrieve all configured webhooks for batches.

**Parameters**

-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object references.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) Specify the number of webhook records to return. Default is 10, maximum is 1000.

## MailchimpMarketingApi.ConfigureWebhookOnBatchComplete



Configure a webhook for batch processing completion alerts.

**Parameters**

-   **webhook\_url** (`string`, required) The URL where the webhook payload will be sent upon batch completion. It must be a valid and accessible URL.
-   **webhook\_enabled** (`boolean`, optional) Set to True to enable the webhook to receive requests when batch processing completes.

## MailchimpMarketingApi.GetBatchWebhookInfo



Retrieve details of a specific batch webhook on Mailchimp.

**Parameters**

-   **batch\_webhook\_id** (`string`, required) The unique ID for the batch webhook to retrieve information from Mailchimp.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the batch webhook details. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Specify fields to include in response. Use dot notation for sub-object fields.

## MailchimpMarketingApi.UpdateBatchWebhook



Update a batch webhook on Mailchimp.

**Parameters**

-   **batch\_webhook\_unique\_id** (`string`, required) The unique identifier for the batch webhook to update.
-   **enable\_webhook** (`boolean`, optional) Enable or disable webhook requests (true for enable, false for disable).
-   **webhook\_url** (`string`, optional) A valid URL to send webhook notifications when a batch request completes in Mailchimp.

## MailchimpMarketingApi.RemoveBatchWebhook



Remove a batch webhook to stop sending webhooks to a URL.

**Parameters**

-   **batch\_webhook\_id** (`string`, required) The unique identifier for the batch webhook to remove. Use this ID to specify which webhook should be deleted, stopping any further webhook notifications to the associated URL.

## MailchimpMarketingApi.GetMailchimpTemplateFolders



Retrieve all template folders from Mailchimp.

**Parameters**

-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of template folder records to return, up to a maximum of 1000. The default is 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.CreateTemplateFolder



Create a new template folder in Mailchimp.

**Parameters**

-   **folder\_name** (`string`, required) The desired name for the new template folder in Mailchimp.

## MailchimpMarketingApi.GetTemplateFolderInfo



Retrieve details of a specific template folder.

**Parameters**

-   **template\_folder\_id** (`string`, required) The unique ID for the template folder to retrieve information about.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object fields.
-   **included\_fields** (`string`, optional) A comma-separated list of fields to return for the folder. Use dot notation for sub-objects.

## MailchimpMarketingApi.UpdateTemplateFolder



Update a specific folder for organizing templates.

**Parameters**

-   **folder\_name** (`string`, required) The new name for the template folder. Provide a string value.
-   **template\_folder\_id** (`string`, required) The unique identifier for the template folder to be updated.

## MailchimpMarketingApi.DeleteTemplateFolder



Delete a specific template folder in Mailchimp.

**Parameters**

-   **template\_folder\_id** (`string`, required) The unique ID for the template folder to be deleted. Use this to specify which folder should be removed and have its templates marked as ‘unfiled’.

## MailchimpMarketingApi.GetCampaignFolders



Retrieve all folders used to organize campaigns.

**Parameters**

-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object fields.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of campaign folders to return, between 1 and 1000. Defaults to 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Defaults to 0. Use for fetching subsequent pages.

## MailchimpMarketingApi.CreateCampaignFolder



Create a new campaign folder in Mailchimp.

**Parameters**

-   **folder\_name** (`string`, required) The name to assign to the new campaign folder. It should be a descriptive string that helps identify the folder’s contents.

## MailchimpMarketingApi.GetCampaignFolderInfo



Get details about a specific campaign folder.

**Parameters**

-   **campaign\_folder\_id** (`string`, required) The unique identifier for the campaign folder. Used to specify which folder’s information to retrieve.
-   **exclude\_fields** (`string`, optional) Specify a comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **included\_fields** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.UpdateCampaignFolder



Update a specific folder used to organize campaigns.

**Parameters**

-   **campaign\_folder\_id** (`string`, required) The unique identifier for the campaign folder to be updated.
-   **folder\_name** (`string`, required) The new name to assign to the campaign folder.

## MailchimpMarketingApi.DeleteCampaignFolder



Delete a specific campaign folder in Mailchimp.

**Parameters**

-   **campaign\_folder\_id** (`string`, required) The unique ID for the Mailchimp campaign folder to be deleted.

## MailchimpMarketingApi.GetAllMarketingCampaigns



Fetches all marketing campaigns from an account.

**Parameters**

-   **campaign\_status** (`string`, optional) Filter campaigns by their status (e.g., sent, draft).
-   **campaign\_type** (`string`, optional) Specify the type of campaign to retrieve (e.g., regular, plaintext, absplit).
-   **campaigns\_created\_after** (`string`, optional) Specify the date and time to restrict results to campaigns created after this point. Must be in ISO 8601 format.
-   **created\_before\_date\_time** (`string`, optional) Restrict response to campaigns created before this time using ISO 8601 format.
-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **include\_resend\_shortcut\_eligibility** (`string`, optional) Include this field in the response to determine if campaigns are eligible for Resend Shortcuts.
-   **list\_member\_identifier** (`string`, optional) The MD5 hash of the lowercase version of the list member’s email. Used to retrieve campaigns sent to this member.
-   **list\_unique\_id** (`string`, optional) The unique identifier for the list associated with the campaigns to be retrieved.
-   **number\_of\_records\_to\_return** (`string`, optional) Number of records to return, between 10 and 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **restrict\_to\_campaigns\_sent\_after** (`string`, optional) Restrict the response to campaigns sent after the specified ISO 8601 time.
-   **sent\_before\_time** (`string`, optional) Restricts the response to campaigns sent before the specified time. It should be in ISO 8601 format.
-   **sort\_by\_field** (`string`, optional) Specify the field to sort the campaigns by. Use dot notation for sub-object fields.
-   **sort\_order\_direction** (`string`, optional) Specify the sorting order for the results. Use ‘ASC’ for ascending or ‘DESC’ for descending.
-   **unique\_folder\_id** (`string`, optional) Unique identifier for the folder containing the campaigns.

## MailchimpMarketingApi.CreateMailchimpCampaign



Create a new Mailchimp campaign quickly.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetCampaignDetails



Retrieve details of a specific marketing campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the campaign to retrieve details about.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Specify a comma-separated list of fields to return, using dot notation for sub-object parameters.
-   **include\_resend\_shortcut\_eligibility** (`string`, optional) Include the `resend_shortcut_eligibility` field in the response to check if the campaign is eligible for Campaign Resend Shortcuts.
-   **include\_resend\_shortcut\_usage** (`string`, optional) Include this to receive the `resend_shortcut_usage` field, providing details about campaigns related by a shortcut.

## MailchimpMarketingApi.UpdateCampaignSettings



Update campaign settings in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **campaign\_unique\_id** (`string`, optional) The unique identifier for the campaign to be updated in Mailchimp. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteMailchimpCampaign



Delete a specific Mailchimp campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique ID for the Mailchimp campaign to delete.

## MailchimpMarketingApi.CancelCampaignSend



Cancel a sent campaign before all recipients receive it.

**Parameters**

-   **campaign\_identifier** (`string`, required) The unique identifier for the Mailchimp campaign to be canceled. Used to specify which campaign’s delivery is to be stopped.

## MailchimpMarketingApi.ReplicateCampaignMailchimp



Replicate a saved or sent Mailchimp campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign to be replicated.

## MailchimpMarketingApi.SendMailchimpCampaign



Send a Mailchimp campaign immediately or as scheduled.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign to be sent. This is a string value required to trigger the campaign.

## MailchimpMarketingApi.ScheduleCampaignDelivery



Schedule a Mailchimp campaign for delivery.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign to be scheduled.
-   **schedule\_delivery\_time** (`string`, required) The UTC date and time to schedule the campaign for delivery in ISO 8601 format. Must be on the quarter-hour (:00, :15, :30, :45).
-   **batch\_delivery\_delay** (`integer`, optional) The delay in minutes between batches for campaign delivery.
-   **number\_of\_batches\_for\_campaign** (`integer`, optional) The number of batches for the campaign send. Determines how the campaign delivery is split into batches.
-   **use\_timewarp** (`boolean`, optional) Set to true to use Timewarp for localizing campaign delivery to recipients’ time zones. Cannot be true when using Batch Delivery.

## MailchimpMarketingApi.UnscheduleCampaign



Unschedule a scheduled Mailchimp campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the scheduled campaign to be unscheduled.

## MailchimpMarketingApi.SendTestEmailCampaign



Send a test email for a specific campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique ID for the specific Mailchimp campaign to send the test email for.
-   **test\_email\_addresses** (`array[string]`, required) An array of email addresses to receive the test email.
-   **test\_email\_send\_type** (`string`, required) Specify the type of test email to send: ‘html’ or ‘plaintext’.

## MailchimpMarketingApi.PauseRssCampaign



Pause an RSS-Driven campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the RSS-Driven campaign you want to pause. It should be a string.

## MailchimpMarketingApi.ResumeRssDrivenCampaign



Resume an RSS-Driven campaign in Mailchimp.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the RSS-driven campaign to be resumed.

## MailchimpMarketingApi.ResendCampaignToSegments



Resend a campaign to specific segments.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique ID for identifying the campaign to replicate and resend.
-   **resend\_shortcut\_type** (`string`, optional) Specify the type of segment to resend the campaign to. Options: ‘to\_non\_openers’, ‘to\_new\_subscribers’, ‘to\_non\_clickers’, ‘to\_non\_purchasers’. Default is ‘to\_non\_openers’.

## MailchimpMarketingApi.GetCampaignContent



Retrieve the HTML and plain-text content for a Mailchimp campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the Mailchimp campaign to retrieve content for.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude when retrieving campaign content. Use dot notation for sub-object fields.
-   **included\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation to specify sub-object parameters.

## MailchimpMarketingApi.SetCampaignContent



Set the content for a campaign in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **campaign\_id** (`string`, optional) The unique identifier for the Mailchimp campaign to set the content for. This ID is required to specify which campaign you are updating. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetMailchimpCampaignFeedback



Retrieve feedback comments for a Mailchimp campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the specific Mailchimp campaign from which to retrieve feedback.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude from the feedback data, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of specific fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.AddCampaignFeedback



Add feedback to a specific Mailchimp campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign to which feedback will be added.
-   **feedback\_content** (`string`, required) The content of the feedback to be added to the campaign.
-   **editable\_block\_id** (`integer`, optional) The ID of the editable block the feedback addresses in the campaign.
-   **is\_feedback\_complete** (`boolean`, optional) Indicates whether the feedback is complete. Use ‘true’ if complete and ‘false’ otherwise.

## MailchimpMarketingApi.GetCampaignFeedbackMessage



Retrieve a specific feedback message from a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign to retrieve the specific feedback message.
-   **feedback\_message\_id** (`string`, required) The unique identifier for the feedback message to retrieve from the campaign.
-   **exclude\_fields\_from\_feedback** (`string`, optional) A comma-separated list of fields to exclude from the feedback. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object fields.

## MailchimpMarketingApi.UpdateCampaignFeedback



Update specific feedback for a Mailchimp campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the Mailchimp campaign to be updated.
-   **feedback\_message\_id** (`string`, required) The unique identifier for the specific feedback message to update in the campaign.
-   **editable\_block\_id** (`integer`, optional) The ID of the editable block that the feedback addresses within the campaign.
-   **feedback\_is\_complete** (`boolean`, optional) Indicates if the feedback is marked as complete. Use true for complete and false for incomplete.
-   **feedback\_message** (`string`, optional) The text content of the feedback message to be updated.

## MailchimpMarketingApi.RemoveCampaignFeedback



Remove a specific feedback message from a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) A unique identifier for the campaign from which you want to remove feedback.
-   **feedback\_message\_id** (`string`, required) The unique identifier for the feedback message to be removed from the campaign.

## MailchimpMarketingApi.ReviewCampaignSendChecklist



Review the send checklist for a Mailchimp campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign in Mailchimp.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetConnectedSites



Retrieve all connected sites from a Mailchimp account.

**Parameters**

-   **exclude\_fields\_list** (`string`, optional) A list of fields to exclude, using dot notation for sub-object parameters.
-   **included\_fields** (`string`, optional) A comma-separated list of specific fields to return. Use dot notation for sub-object parameters.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.CreateMailchimpConnectedSite



Create a new Mailchimp connected site.

**Parameters**

-   **connected\_site\_domain** (`string`, required) The domain of the site you want to connect to Mailchimp.
-   **site\_unique\_identifier** (`string`, required) A unique identifier string for the site. This is used to distinguish different connected sites in Mailchimp.

## MailchimpMarketingApi.GetConnectedSiteInfo



Retrieve details of a specific connected site.

**Parameters**

-   **connected\_site\_identifier** (`string`, required) The unique identifier for the connected site to retrieve its information.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Specify a comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.RemoveMailchimpConnectedSite



Remove a connected site from your Mailchimp account.

**Parameters**

-   **site\_identifier** (`string`, required) The unique identifier for the connected site you wish to remove from your Mailchimp account.

## MailchimpMarketingApi.VerifyScriptInstallation



Verify if the Mailchimp connected site script is installed.

**Parameters**

-   **site\_unique\_identifier** (`string`, required) The unique identifier for the Mailchimp connected site to verify script installation.

## MailchimpMarketingApi.TriggerAutomationStep



Trigger a step in a Mailchimp automation flow.

**Parameters**

-   **flow\_id** (`string`, required) The unique identifier for the automation flow to trigger a specific step.
-   **list\_member\_email\_address** (`string`, required) The email address of the list member to trigger the automation step for.
-   **step\_identifier** (`string`, required) The unique identifier for the step in the Mailchimp automation flow.

## MailchimpMarketingApi.GetFileManagerFiles



Retrieve images and files from the Mailchimp File Manager.

**Parameters**

-   **created\_after\_date** (`string`, optional) Files created after this date will be included in the response. Use ISO 8601 format: 2015-10-21T15:41:36+00:00.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated fields to omit from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **file\_created\_by\_user** (`string`, optional) The Mailchimp account user who created the File Manager file.
-   **file\_sort\_field** (`string`, optional) Specify the field to sort the files by, such as ‘name’, ‘date’, etc.
-   **file\_type** (`string`, optional) The file type to filter File Manager files. Expected as a string value.
-   **number\_of\_records\_to\_return** (`string`, optional) Specifies the number of records to return. Default is 10; maximum is 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **restrict\_files\_before\_date** (`string`, optional) Restrict the response to files created before the specified ISO 8601 date.
-   **sort\_order\_direction** (`string`, optional) Sets the order direction for sorting results. Use ‘ASC’ for ascending and ‘DESC’ for descending.

## MailchimpMarketingApi.UploadFileToFileManager



Upload a new file or image to the File Manager.

**Parameters**

-   **file\_content\_base64** (`string`, required) The base64-encoded contents of the file to be uploaded.
-   **file\_name** (`string`, required) The name to be assigned to the uploaded file.
-   **folder\_id** (`integer`, optional) The ID of the folder where the file will be uploaded. This should be an integer.

## MailchimpMarketingApi.GetFileManagerFileInfo



Retrieve information about a specific file from Mailchimp’s File Manager.

**Parameters**

-   **file\_manager\_file\_id** (`string`, required) The unique ID for the File Manager file to retrieve its information.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **return\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation to specify sub-objects.

## MailchimpMarketingApi.UpdateFileManagerFile



Update a file in the Mailchimp File Manager.

**Parameters**

-   **file\_manager\_file\_id** (`string`, required) The unique identifier for the File Manager file to be updated.
-   **file\_name** (`string`, optional) Specify the new name for the file in the File Manager.
-   **folder\_id** (`integer`, optional) The ID of the folder. Set to `0` to remove a file from its current folder.

## MailchimpMarketingApi.DeleteFileManagerFile



Remove a specific file from Mailchimp’s File Manager.

**Parameters**

-   **file\_manager\_file\_id** (`string`, required) The unique identifier for the file to be deleted from Mailchimp’s File Manager.

## MailchimpMarketingApi.ListFileManagerFolders



Retrieve a list of folders from the File Manager.

**Parameters**

-   **created\_after\_date** (`string`, optional) Restrict the response to files created after the specified date in ISO 8601 format.
-   **created\_by\_user** (`string`, optional) The Mailchimp account user who created the File Manager file.
-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of folder records to return, from 1 to 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **restrict\_to\_files\_created\_before** (`string`, optional) Restrict the response to files created before the specified date using ISO 8601 format, e.g., 2015-10-21T15:41:36+00:00.

## MailchimpMarketingApi.CreateNewFileManagerFolder



Create a new folder in Mailchimp’s File Manager.

**Parameters**

-   **folder\_name** (`string`, required) The desired name for the new folder in File Manager.

## MailchimpMarketingApi.GetFileManagerFolderInfo



Retrieve details of a specific folder from File Manager.

**Parameters**

-   **file\_manager\_folder\_id** (`string`, required) The unique identifier for the File Manager folder to retrieve.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated fields to exclude. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of specific fields to return, use dot notation for sub-objects.

## MailchimpMarketingApi.UpdateFileManagerFolder



Update a specific File Manager folder in Mailchimp.

**Parameters**

-   **file\_manager\_folder\_id** (`string`, required) The unique identifier for the File Manager folder to update.
-   **folder\_name** (`string`, required) The new name for the File Manager folder. It should be a string value.

## MailchimpMarketingApi.DeleteFileManagerFolder



Delete a specific folder in the File Manager.

**Parameters**

-   **file\_manager\_folder\_id** (`string`, required) The unique identifier for the folder to be deleted in the File Manager.

## MailchimpMarketingApi.GetFolderFiles



Retrieve files and images from a specific folder.

**Parameters**

-   **file\_manager\_folder\_id** (`string`, required) The unique identifier for the specific File Manager folder to retrieve files from.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object fields.
-   **file\_creator\_user** (`string`, optional) Mailchimp account user who created the File Manager file. Filter results by this user’s contributions.
-   **file\_type** (`string`, optional) Specifies the file type to filter files in the folder. Use to retrieve specific types like ‘image’, ‘document’, etc.
-   **filter\_files\_created\_after** (`string`, optional) Restrict the response to files created after the specified date in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **number\_of\_records** (`string`, optional) Specifies the number of files to retrieve, with a default of 10 and a maximum of 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0. Use this to access pages beyond the first one.
-   **restrict\_files\_before\_date** (`string`, optional) Restrict response to files created before this date using ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **sort\_by\_field** (`string`, optional) Specify the field to sort the files by, such as name or size.
-   **sort\_order\_direction** (`string`, optional) Specify the order direction for sorting results. Typically ‘asc’ for ascending or ‘desc’ for descending order.

## MailchimpMarketingApi.RetrieveMailchimpLists



Retrieve information about all Mailchimp lists.

**Parameters**

-   **created\_after\_date** (`string`, optional) Restrict results to lists created after this date in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **created\_before\_date** (`string`, optional) Restrict response to lists created before the specified date in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **filter\_by\_subscriber\_email** (`string`, optional) Restrict results to lists that include a specific subscriber’s email address.
-   **include\_total\_contacts** (`string`, optional) Set to true to return the total\_contacts field, which includes an approximate count of all contacts in any state.
-   **lists\_after\_last\_campaign\_date** (`string`, optional) Restrict results to lists created after the last campaign send date. Use ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) The number of list records to return. Accepts values between 1 and 1000, with a default of 10.
-   **restrict\_to\_ecommerce\_store\_lists** (`string`, optional) Restrict results to lists containing an active, connected, undeleted ecommerce store. Expected values are ‘true’ or ‘false’.
-   **restrict\_to\_lists\_before\_last\_campaign\_sent** (`string`, optional) Restrict results to lists created before the last campaign send date (ISO 8601 format).
-   **sort\_direction** (`string`, optional) Determines the order direction for the sorted results. Accepts ‘asc’ for ascending and ‘desc’ for descending.
-   **sort\_lists\_by\_field** (`string`, optional) Field by which to sort the list results. Choose from available list fields.

## MailchimpMarketingApi.CreateMailchimpList



Create a new list in your Mailchimp account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetMailchimpListInfo



Retrieve details of a specific list in Mailchimp.

**Parameters**

-   **mailchimp\_list\_id** (`string`, required) The unique ID for the Mailchimp list to retrieve information about.
-   **exclude\_fields\_in\_mailchimp** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects, e.g., ‘stats.member\_count’.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **include\_total\_contacts** (`string`, optional) Set to true to include the approximate count of all contacts in any state (total\_contacts) in the response.

## MailchimpMarketingApi.UpdateMailchimpListSettings



Update settings for a specific Mailchimp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **mailchimp\_list\_id** (`string`, optional) The unique ID of the Mailchimp list to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteMailchimpList



Delete a list from your Mailchimp account.

**Parameters**

-   **list\_id** (`string`, required) The unique ID for the Mailchimp list to be deleted.

## MailchimpMarketingApi.ManageMailchimpListMembers



Batch subscribe or unsubscribe members in a Mailchimp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_id** (`string`, optional) The unique ID for the specific Mailchimp list to manage. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **allow\_incomplete\_merge\_fields** (`string`, optional) Allows member data without required merge fields if set to true. Defaults to false. Only used when mode is ‘execute’.
-   **ignore\_duplicate\_members** (`string`, optional) Set to true to ignore duplicate entries in the batch request, saving the first occurrence. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetAbuseReportsForList



Retrieve all abuse reports for a specified mailing list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the mailing list to retrieve abuse reports for.
-   **exclude\_fields\_from\_result** (`string`, optional) Comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of records to return. Default is 10. Maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **return\_fields** (`string`, optional) Comma-separated list of fields to include in the response. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.FetchAbuseReportDetails



Fetch details about a specific abuse report for a mailing list.

**Parameters**

-   **abuse\_report\_id** (`string`, required) The unique identifier for the specific abuse report to fetch details for.
-   **mailing\_list\_unique\_id** (`string`, required) The unique ID for the mailing list associated with the abuse report.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) Specify the number of records to return, between 1 and 1000. Default is 10.

## MailchimpMarketingApi.GetDailyListActivity



Fetch daily detailed activity stats for a list in Mailchimp.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list to retrieve activity stats.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **include\_fields** (`string`, optional) Comma-separated list of specific fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetTopEmailClients



Retrieve the top email clients from a specific list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the email list to retrieve client data from.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetMonthlyListGrowthSummary



Retrieve monthly summary of a list’s growth activity.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the specific list in Mailchimp. Required for retrieving growth activity.
-   **exclude\_fields\_to\_return** (`string`, optional) A comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) Specify the number of records to return, with a default of 10 and a maximum of 1000.
-   **return\_fields** (`string`, optional) A comma-separated list of specific fields to return. Use dot notation for sub-object parameters.
-   **sort\_order\_direction** (`string`, optional) Determines the sorting order for the results, either ascending or descending.
-   **sort\_results\_by\_field** (`string`, optional) Specify the field by which results should be sorted. Use dot notation for sub-object fields.

## MailchimpMarketingApi.GetListGrowthSummary



Get a list’s growth activity summary for a specific month and year.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the specific list in Mailchimp.
-   **specific\_month\_of\_growth\_history** (`string`, required) Specify the month and year (in ‘YYYY-MM’ format) for retrieving the list’s growth history.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.GetListInterestCategories



Retrieve interest categories for a specific mailing list.

**Parameters**

-   **list\_id** (`string`, required) The unique identifier for the mailing list you want to retrieve interest categories for.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects. Helps reduce the size of the response by omitting unnecessary data.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.
-   **interest\_group\_type** (`string`, optional) Specify the type of interest group to restrict results. Example: ‘checkboxes’, ‘radio\_buttons’.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0. Use to manage pagination flow.
-   **record\_count** (`string`, optional) The number of records to return. Specify a value from 10 to 1000. Defaults to 10 if not provided.

## MailchimpMarketingApi.CreateInterestCategory



Create a new interest category in a Mailchimp list.

**Parameters**

-   **category\_description** (`string`, required) Text description of the interest category. Appears on signup forms, often phrased as a question.
-   **category\_display\_type** (`string`, required) Determines how the interest category appears on signup forms. Options include: ‘checkboxes’, ‘dropdown’, ‘radio’, or ‘hidden’.
-   **list\_unique\_id** (`string`, required) The unique ID identifying the Mailchimp list where the interest category will be created.
-   **category\_display\_order** (`integer`, optional) The numerical order for displaying categories. Lower numbers appear first.

## MailchimpMarketingApi.GetInterestCategoryInfo



Fetch specific interest category details from a Mailchimp list.

**Parameters**

-   **interest\_category\_unique\_id** (`string`, required) The unique ID for the interest category you want to retrieve information about.
-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list you want to retrieve interest category details from.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateInterestCategory



Update a specific interest category in Mailchimp.

**Parameters**

-   **category\_display\_type** (`string`, required) Specifies how the category’s interests are shown on signup forms. Options: ‘checkboxes’, ‘dropdown’, ‘radio’, ‘hidden’.
-   **interest\_category\_id** (`string`, required) The unique ID for the interest category to be updated.
-   **interest\_category\_title** (`string`, required) The text description of this interest category for signup forms, often phrased as a question.
-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list to be updated.
-   **category\_display\_order** (`integer`, optional) The numerical order for displaying the category. Lower numbers appear first.

## MailchimpMarketingApi.DeleteInterestCategory



Delete a specific interest category from a list.

**Parameters**

-   **interest\_category\_id** (`string`, required) The unique ID of the interest category to be deleted from a list.
-   **list\_id** (`string`, required) The unique ID for the Mailchimp list from which you want to delete an interest category.

## MailchimpMarketingApi.GetInterestCategoryInterests



Retrieve interests for a specific category in Mailchimp.

**Parameters**

-   **interest\_category\_unique\_id** (`string`, required) The unique identifier for a specific interest category in a Mailchimp list.
-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list.
-   **excluded\_fields** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation as needed.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, between 10 and 1000. Default is 10.
-   **pagination\_skip\_count** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.CreateInterestGroup



Create a new interest group for a specific category.

**Parameters**

-   **interest\_category\_unique\_id** (`string`, required) The unique ID for the interest category to which the new group belongs.
-   **interest\_group\_name** (`string`, required) The name of the interest group, shown publicly on subscription forms.
-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to which the interest group will be added.
-   **interest\_display\_order** (`integer`, optional) The order in which this interest is displayed relative to others. Use an integer value.

## MailchimpMarketingApi.GetInterestGroupNames



Retrieve interest group names for a specific category.

**Parameters**

-   **interest\_category\_id** (`string`, required) The unique identifier for the interest category in a Mailchimp list.
-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list to retrieve interest group names from.
-   **specific\_interest\_group\_name** (`string`, required) The specific interest or group name to retrieve in the category.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateInterestGroupName



Update group names in a specific interest category.

**Parameters**

-   **interest\_category\_id** (`string`, required) The unique ID for the interest category to be updated.
-   **interest\_group\_name** (`string`, required) The new name for the interest group, displayed publicly on subscription forms.
-   **list\_unique\_id** (`string`, required) The unique ID for the list to be updated.
-   **specific\_interest\_id** (`string`, required) The unique ID for the specific interest group name within the category.
-   **interest\_display\_order** (`integer`, optional) The numerical order in which the interest should appear in a list.

## MailchimpMarketingApi.DeleteInterestFromCategory



Delete an interest from a specific category.

**Parameters**

-   **interest\_category\_id** (`string`, required) The unique ID for the interest category to delete the interest from. This ID is essential to specify the correct category in Mailchimp.
-   **interest\_identifier** (`string`, required) The unique identifier for the specific interest or group name to be deleted.
-   **list\_unique\_id** (`string`, required) The unique ID for the list to be targeted for deleting an interest.

## MailchimpMarketingApi.GetListSegmentsInfo



Retrieve details of all segments for a specific list.

**Parameters**

-   **list\_identifier** (`string`, required) The unique identifier for the mailing list whose segments are to be retrieved.
-   **created\_after\_datetime** (`string`, optional) Restrict results to segments created after the specified time using ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **include\_cleaned\_members** (`string`, optional) Set to ‘true’ to include cleaned (bounced) members in the response. Use this to see members who have been removed due to email issues.
-   **include\_transactional\_members** (`string`, optional) Specify whether to include transactional members in the response. Use ‘true’ or ‘false’.
-   **include\_unsubscribed\_members** (`string`, optional) Set to ‘true’ to include unsubscribed members in the response.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_count** (`string`, optional) The number of records to return. Default: 10. Max: 1000.
-   **restrict\_since\_updated\_time** (`string`, optional) Restrict results to segments updated after this time using ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **restrict\_to\_segments\_created\_before** (`string`, optional) Restrict results to segments created before the specified time. Use ISO 8601 format: 2015-10-21T15:41:36+00:00.
-   **restrict\_to\_segments\_updated\_before** (`string`, optional) Restrict results to segments updated before the specified time using ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **segment\_type** (`string`, optional) Specify the type of segment to filter results. Use known segment types as strings.

## MailchimpMarketingApi.CreateMailchimpSegment



Create a new segment in a specific Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list where the new segment will be created.
-   **segment\_name** (`string`, required) The name of the segment to be created in Mailchimp.
-   **emails\_for\_static\_segment** (`array[string]`, optional) An array of emails for creating a static segment. An empty array means no subscribers. Cannot be used with ‘options’.
-   **segment\_match\_conditions** (`array[json]`, optional) Array of conditions to define how the segment matches subscribers. Refer to the Mailchimp documentation for various condition types.
-   **segment\_match\_type** (`string`, optional) Specifies the match type for the segment conditions. Use ‘any’ to match any condition and ‘all’ to match all conditions.

## MailchimpMarketingApi.GetSegmentInfo



Retrieve information about a specific Mailchimp segment.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to fetch segment information from.
-   **segment\_id** (`string`, required) Provide the unique ID for the segment you want information on.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **include\_cleaned\_members** (`string`, optional) Set to ‘true’ to include cleaned members in the response. Cleaned members are those deleted due to bounce or other delivery issues.
-   **include\_transactional\_members** (`string`, optional) Set to ‘true’ to include transactional members in the response.
-   **include\_unsubscribed\_members** (`string`, optional) Set to ‘true’ to include unsubscribed members in the response.

## MailchimpMarketingApi.DeleteSpecificSegment



Delete a specific segment from a Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to target for segment deletion.
-   **segment\_unique\_id** (`string`, required) The unique identifier for the segment to be deleted. It must match the segment ID in Mailchimp.

## MailchimpMarketingApi.UpdateMailchimpSegment



Update the details of a specific segment in a Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the list to update the segment in. This ID is required to identify the list containing the target segment.
-   **segment\_name** (`string`, required) The new name for the segment to be updated.
-   **segment\_unique\_id** (`string`, required) The unique ID for the segment to update.
-   **segment\_conditions** (`array[json]`, optional) An array of conditions that define the segment criteria. Each condition should be a JSON object specifying the targeting parameters.
-   **segment\_match\_type** (`string`, optional) Determines if any or all conditions must be met for the segment. Allowed values: ‘any’, ‘all’.
-   **static\_email\_list** (`array[string]`, optional) An array of emails for the static segment. Emails not on the list are ignored. An empty array resets the segment, removing all members. Cannot be used with ‘options’.

## MailchimpMarketingApi.UpdateListSegment



Batch update members in a Mailchimp list segment.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list.
-   **segment\_unique\_id** (`string`, required) The unique ID of the segment in the Mailchimp list for member updates.
-   **emails\_to\_add\_to\_segment** (`array[string]`, optional) An array of email addresses to add to the specified static segment. Only existing list emails will be added. Limit of 500.
-   **emails\_to\_remove\_from\_segment** (`array[string]`, optional) An array of up to 500 emails to remove from the static segment. Emails not in the list will be ignored.

## MailchimpMarketingApi.GetSegmentMembersInfo



Get information about members in a saved segment.

**Parameters**

-   **list\_identifier** (`string`, required) The unique ID representing the mailing list from which the segment members will be retrieved. This ID is required to specify the context of the segment.
-   **segment\_unique\_id** (`string`, required) The unique ID for the segment to retrieve members from.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **include\_cleaned\_members** (`string`, optional) Specify ‘true’ to include cleaned (invalid or bounced) members in the response. Otherwise, specify ‘false’.
-   **include\_transactional\_members** (`string`, optional) Set to true to include transactional members in the response.
-   **include\_unsubscribed\_members** (`string`, optional) Specify ‘true’ to include unsubscribed members in the response, ‘false’ to exclude them.
-   **included\_fields** (`string`, optional) Comma-separated list of specific fields to return. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination purposes. Default is 0.
-   **records\_to\_return** (`string`, optional) The number of records to return. Default is 10; maximum is 1000.

## MailchimpMarketingApi.AddMemberToStaticSegment



Add a member to a Mailchimp static segment.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to which the segment belongs.
-   **segment\_id** (`string`, required) The unique ID for the segment to which the member will be added.
-   **subscriber\_email\_address** (`string`, required) The email address of the subscriber to be added to the static segment.

## MailchimpMarketingApi.RemoveMemberFromMailchimpSegment



Remove a member from a Mailchimp static segment.

**Parameters**

-   **email\_md5\_hash** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address.
-   **list\_unique\_id** (`string`, required) The unique ID of the mailing list from which the member will be removed.
-   **segment\_unique\_id** (`string`, required) The unique identifier for the Mailchimp segment from which the member will be removed.

## MailchimpMarketingApi.SearchTagsByName



Search for tags on a list by name.

**Parameters**

-   **list\_id** (`string`, required) The unique identifier for a Mailchimp list. This is essential for specifying which list to search for tags.
-   **tag\_name\_search\_query** (`string`, optional) The prefix to filter tags by name. Returns tags where names start with this query.

## MailchimpMarketingApi.GetMailchimpListMembers



Retrieve member details from a specific Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to retrieve member information from.
-   **changed\_after\_timestamp** (`string`, optional) Restrict results to subscribers whose information changed after the specified timestamp in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **email\_type** (`string`, optional) Specify the type of email format. Typically ‘html’ or ‘text’.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **filter\_by\_interest\_ids** (`string`, optional) Comma-separated list of interest IDs to filter list members. Must be combined with interest\_category\_id and interest\_match.
-   **filter\_by\_since\_last\_campaign** (`string`, optional) Filter subscribers by their status (subscribed/unsubscribed/pending/cleaned) since the last email campaign. Requires member status.
-   **filter\_unsubscribed\_since** (`string`, optional) Filter subscribers who unsubscribed since a specific date. Must use ‘unsubscribed’ status only.
-   **filter\_vip\_members** (`string`, optional) Filter to return only VIP list members. Use `true` for VIPs only, `false` for all members.
-   **interest\_category\_id** (`string`, optional) The unique id for the interest category used to filter Mailchimp list members.
-   **interest\_match\_filter** (`string`, optional) Specify how to match list members by interests. Options: ‘any’, ‘all’, or ‘none’. Must accompany interest\_category\_id and interest\_ids.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, between 10 and 1000, default is 10.
-   **opt\_in\_after\_timestamp** (`string`, optional) Restrict results to subscribers who opted-in after the specified timeframe in ISO 8601 format: 2015-10-21T15:41:36+00:00.
-   **opt\_in\_before\_timestamp** (`string`, optional) Restrict results to subscribers who opted in before the specified timeframe. Use ISO 8601 format.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **restrict\_change\_before\_timeframe** (`string`, optional) Restrict results to subscribers whose information changed before the provided timeframe in ISO 8601 format (e.g., ‘2015-10-21T15:41:36+00:00’).
-   **sort\_field\_for\_members** (`string`, optional) Specifies the field by which to sort the list members.
-   **sort\_order\_direction** (`string`, optional) Determines the order direction for sorted results. Common values are ‘asc’ for ascending and ‘desc’ for descending.
-   **subscriber\_status** (`string`, optional) The status of the subscriber (e.g., subscribed, unsubscribed, cleaned, pending).
-   **unique\_email\_identifier** (`string`, optional) A unique identifier for the email address across all Mailchimp lists. Use this to filter for a specific member.

## MailchimpMarketingApi.AddMemberToMailchimpList



Add a new member to a Mailchimp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_unique\_id** (`string`, optional) The unique ID for the Mailchimp list to which a new member will be added. This ID can be found in the Mailchimp account settings. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bypass\_merge\_field\_validation** (`string`, optional) Set to true to accept member data without required merge fields. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetListMemberInfo



Retrieve details about a specific list member in Mailchimp.

**Parameters**

-   **list\_id** (`string`, required) The unique ID for the Mailchimp list to retrieve the member from.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase list member’s email, or the email address/contact\_id itself.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.AddOrUpdateListMember



Add or update a member in a Mailchimp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **unique\_list\_id** (`string`, optional) The unique ID identifying the Mailchimp list where members are added or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **subscriber\_identifier** (`string`, optional) MD5 hash of the lowercase version of the member’s email address, email address, or contact ID. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **bypass\_merge\_field\_check** (`string`, optional) Set to true to allow member data without required merge fields. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.UpdateListMemberInfo



Update information for a specific list member in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_unique\_id** (`string`, optional) The unique ID for the Mailchimp list. This ID identifies which list to update the member information in. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **member\_identifier** (`string`, optional) The MD5 hash of the lowercase list member’s email, email address, or contact\_id. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **skip\_merge\_validation** (`string`, optional) Set to true to allow member data without merge field values, even if usually required. Defaults to false. Only used when mode is ‘execute’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.ArchiveListMember



Archives a member from a Mailchimp list.

**Parameters**

-   **mailing\_list\_id** (`string`, required) The unique identifier for the specific Mailchimp list to archive a member from.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address, or use the email address/contact\_id directly.

## MailchimpMarketingApi.GetMemberActivity



Retrieve recent email activity for a list member.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list you want to query.
-   **member\_identifier** (`string`, required) MD5 hash of the lowercase email, email address, or contact ID of the list member.
-   **actions\_to\_return** (`string`, optional) Comma-separated list of specific member actions to retrieve, such as opens, clicks, and unsubscribes.
-   **exclude\_fields\_from\_activity** (`string`, optional) A comma-separated list of fields to exclude from the member activity response. Use dot notation for sub-objects.
-   **included\_fields** (`string`, optional) Comma-separated list of specific fields to retrieve for member activity, using dot notation for sub-objects.

## MailchimpMarketingApi.GetMemberActivityFeed



Fetch a Mailchimp list member’s activity details.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list. Required to retrieve the member’s activity data.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address, or the email address itself, or contact\_id.
-   **activity\_type\_filters** (`string`, optional) Comma-separated list of activity types to filter by, such as ‘open’, ‘bounce’, or ‘click’.
-   **exclude\_fields\_from\_response** (`string`, optional) Comma-separated list of fields to exclude from the response, use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of activity records to return. Default is 10, max is 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.RetrieveMemberTags



Fetches tags for a specific mailing list member.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the mailing list. Required to specify which list to retrieve member tags from.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase version of the email, or email address, or contact\_id of the list member.
-   **exclude\_specific\_fields** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **record\_count** (`string`, optional) Specify the number of records to return, between 1 and 1000. Default is 10.

## MailchimpMarketingApi.UpdateListMemberTags



Add or remove tags from a Mailchimp list member.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_unique\_id** (`string`, optional) The unique ID for the Mailchimp list to update tags for a member. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **subscriber\_email\_hash** (`string`, optional) The MD5 hash of the lowercase version of the list member’s email address. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.RetrieveContactEvents



Retrieve events for a specific contact in a list.

**Parameters**

-   **contact\_identifier** (`string`, required) The unique identifier for the list member. This can be the MD5 hash of the lowercase email address, the email address itself, or the contact ID.
-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list from which to retrieve contact events.
-   **exclude\_fields** (`string`, optional) Comma-separated fields to exclude from the response using dot notation for sub-objects.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_to\_return\_count** (`string`, optional) The number of records to return. Default is 10 and maximum is 1000.
-   **return\_field\_list** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.AddListMemberEvent



Add an event for a list member in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_identifier** (`string`, optional) The unique identifier for the Mailchimp list. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **list\_member\_identifier** (`string`, optional) The MD5 hash of the lowercase version of the list member’s email address, or the email address/contact\_id. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetMemberGoalEvents



Retrieve the last 50 goal events for a specific list member.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list. Required for fetching member goal events.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase version of the member’s email, email address, or contact\_id.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated list of specific fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.GetMemberNotes



Retrieve recent notes for a Mailchimp list member.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Mailchimp list to retrieve notes for.
-   **subscriber\_hash** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address. Used to identify the list member.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object parameters.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of member notes to return, between 1 and 1000. Default is 10.
-   **order\_direction** (`string`, optional) Specifies the order direction for sorted note results. Accepts ‘asc’ or ‘desc’.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **sort\_notes\_by\_field** (`string`, optional) Specify the field to sort the notes by, e.g., ‘created\_at’ or ‘updated\_at’.

## MailchimpMarketingApi.AddNoteToSubscriber



Add a new note for a specific subscriber in Mailchimp.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list. This is required to add a note to a subscriber’s profile in the specified list.
-   **subscriber\_email\_hash** (`string`, required) MD5 hash of the lowercase version of the subscriber’s email address.
-   **subscriber\_note\_content** (`string`, optional) The content of the note for a subscriber. It must be limited to 1,000 characters.

## MailchimpMarketingApi.GetListMemberNote



Retrieve a specific note for a list member.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the mailing list to retrieve a member’s note from.
-   **member\_identifier** (`string`, required) The MD5 hash of the lowercase email, the email address itself, or contact ID for a list member.
-   **note\_id** (`string`, required) The unique identifier for the note associated with a list member.
-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateMemberNote



Update a specific note for a list member in Mailchimp.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the mailing list where the note is being updated.
-   **member\_identifier** (`string`, required) The MD5 hash, email address, or contact\_id of the list member.
-   **note\_identifier** (`string`, required) The unique identifier for the note to be updated.
-   **note\_content** (`string`, optional) Content of the note to be updated. Must not exceed 1,000 characters.

## MailchimpMarketingApi.DeleteMemberNote



Delete a specific note for a list member.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the list in which the member’s note is to be deleted.
-   **member\_identifier** (`string`, required) The MD5 hash of the member’s email (in lowercase), the email itself, or contact\_id for identifying list members.
-   **note\_id** (`string`, required) The ID for the specific note you want to delete for a list member.

## MailchimpMarketingApi.DeleteMemberDataPermanently



Permanently delete a list member’s data in Mailchimp.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID of the list from which the member will be deleted. This ID identifies the target list in Mailchimp.
-   **member\_email\_hash** (`string`, required) MD5 hash of the lowercase version of the member’s email address.

## MailchimpMarketingApi.GetAudienceMergeFields



Get a list of all merge fields for an audience.

**Parameters**

-   **audience\_list\_id** (`string`, required) The unique ID for the audience list in Mailchimp.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object fields.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **is\_required\_merge\_field** (`string`, optional) Indicates if the merge field is required. Pass ‘true’ or ‘false’.
-   **merge\_field\_type** (`string`, optional) Specify the type of merge field to retrieve, such as ‘text’, ‘number’, etc.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, between 1 and 1000 (default is 10).
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.AddAudienceMergeField



Add a new merge field to a specific audience.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **audience\_list\_id** (`string`, optional) The unique ID of the Mailchimp audience list to which the merge field will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetMergeFieldInfo



Retrieve information about a specific merge field.

**Parameters**

-   **list\_id** (`string`, required) The unique ID of the Mailchimp list to get merge field information from.
-   **merge\_field\_id** (`string`, required) The unique identifier for the merge field in the list.
-   **exclude\_merge\_fields** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) Specify the fields to return, using comma-separated dot notation for nested fields.

## MailchimpMarketingApi.UpdateMergeField



Update a specific merge field in a list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_id** (`string`, optional) The unique ID for the list to update the merge field in. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **merge\_field\_id** (`string`, optional) The unique ID for the specific merge field to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteMergeField



Delete a specific merge field from a Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list from which to delete the merge field.
-   **merge\_field\_id** (`string`, required) The ID for the merge field to delete from the Mailchimp list.

## MailchimpMarketingApi.GetListWebhooksInfo



Get information about all webhooks for a specific list.

**Parameters**

-   **list\_unique\_identifier** (`string`, required) The unique identifier for the mailing list to retrieve webhook information.

## MailchimpMarketingApi.CreateMailchimpWebhook



Create a new webhook for a specific Mailchimp list.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **mailchimp\_list\_id** (`string`, optional) The unique ID for the Mailchimp list for which the webhook will be created. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetWebhookInfo



Retrieve details of a specific Mailchimp webhook.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the Mailchimp list to retrieve the webhook information.
-   **webhook\_id** (`string`, required) Provide the unique ID of the webhook to retrieve its information.

## MailchimpMarketingApi.DeleteMailchimpWebhook



Delete a specific webhook from a Mailchimp list.

**Parameters**

-   **list\_id** (`string`, required) The unique ID for the Mailchimp list from which the webhook will be deleted. This ID identifies the list containing the target webhook.
-   **webhook\_id** (`string`, required) The unique identifier for the webhook to be deleted from the specified Mailchimp list.

## MailchimpMarketingApi.UpdateWebhookSettings



Update the settings for an existing webhook.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_id** (`string`, optional) The unique identifier for the mailing list associated with the webhook. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **webhook\_identifier** (`string`, optional) The unique identifier for the webhook to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetListSignupForms



Retrieve signup forms for a Mailchimp list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID of the Mailchimp list for retrieving signup forms.

## MailchimpMarketingApi.CustomizeListSignupForm



Customize a list’s default signup form in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **list\_unique\_id** (`string`, optional) The unique ID for the Mailchimp list to customize the signup form. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetListSubscriberLocations



Retrieve subscriber location data by list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique ID for the subscriber list in Mailchimp.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetListSurveysInfo



Retrieve information about surveys for a specific list.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the list to retrieve survey information. This ID is essential for specifying which list’s surveys to access.

## MailchimpMarketingApi.GetSurveyDetails



Retrieve details about a specific Mailchimp survey.

**Parameters**

-   **list\_unique\_id** (`string`, required) The unique identifier for the Mailchimp list associated with the survey.
-   **survey\_id** (`string`, required) The unique ID of the survey to retrieve details for in Mailchimp.

## MailchimpMarketingApi.PublishMailchimpSurvey



Publishes a Mailchimp survey from draft to published status.

**Parameters**

-   **mailchimp\_list\_id** (`string`, required) The unique ID for the Mailchimp list associated with the survey.
-   **survey\_id** (`string`, required) The unique identifier of the survey to be published. Required for specifying which survey to publish.

## MailchimpMarketingApi.UnpublishMailchimpSurvey



Unpublish a survey in Mailchimp Marketing.

**Parameters**

-   **mailchimp\_list\_id** (`string`, required) The unique ID for the Mailchimp list associated with the survey to unpublish.
-   **survey\_id** (`string`, required) Enter the unique ID of the survey to unpublish in Mailchimp.

## MailchimpMarketingApi.CreateSurveyCampaignEmail



Generate a campaign email linking to a survey.

**Parameters**

-   **list\_identifier** (`string`, required) The unique identifier for the email list.
-   **survey\_identifier** (`string`, required) The unique identifier for the survey to link in the campaign email.

## MailchimpMarketingApi.GetAllLandingPages



Retrieve all landing pages from Mailchimp.

**Parameters**

-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for nested fields.
-   **record\_count** (`string`, optional) Specify the number of landing page records to return. Defaults to 10; maximum is 1000.
-   **sort\_by\_field** (`string`, optional) Specify the field by which the landing pages should be sorted.
-   **sort\_direction** (`string`, optional) Specifies the order direction for sorting the results (e.g., ascending or descending).

## MailchimpMarketingApi.CreateMailchimpLandingPage



Create an unpublished Mailchimp landing page.

**Parameters**

-   **enable\_restricted\_data\_processing** (`boolean`, optional) Enable restricted data processing under CCPA for tracking. True ensures compliance with CCPA.
-   **landing\_page\_description** (`string`, optional) Provide a description for the Mailchimp landing page.
-   **landing\_page\_name** (`string`, optional) The name of the landing page to be created.
-   **landing\_page\_template\_id** (`integer`, optional) The integer ID representing the template of the Mailchimp landing page.
-   **landing\_page\_template\_type** (`string`, optional) Specifies the template type for the landing page. Options are ‘signup’ or ‘product’.
-   **landing\_page\_title** (`string`, optional) The title that appears in the browser’s title bar for the landing page.
-   **mailchimp\_list\_id** (`string`, optional) The ID of the Mailchimp list associated with the landing page.
-   **store\_identifier** (`string`, optional) The unique identifier of the store linked to this landing page.
-   **track\_with\_mailchimp** (`boolean`, optional) Set to true to use cookies for tracking unique visitors and calculating conversion rates.
-   **use\_account\_default\_list** (`string`, optional) Set to ‘true’ to use the account’s default list instead of specifying a list\_id for the landing page.

## MailchimpMarketingApi.GetLandingPageInfo



Retrieve information about a specific landing page by ID.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the landing page to retrieve information about.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.UpdateLandingPage



Update a landing page on Mailchimp.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique ID for the landing page to be updated.
-   **enable\_restricted\_data\_processing** (`boolean`, optional) Set to true to enable Google’s restricted data processing in compliance with the CCPA for this landing page.
-   **enable\_tracking\_with\_mailchimp** (`boolean`, optional) Enable cookie tracking to monitor unique visitors and calculate conversion rates. More info: [here](https://mailchimp.com/help/use-track-mailchimp/)
     .
-   **landing\_page\_description** (`string`, optional) Provide a description for the landing page. This text summarizes the page’s purpose and content.
-   **landing\_page\_name** (`string`, optional) The name for the landing page to be updated.
-   **landing\_page\_title** (`string`, optional) The title displayed in the browser’s title bar for the landing page.
-   **list\_id\_for\_landing\_page** (`string`, optional) The ID of the list associated with this landing page.
-   **store\_id** (`string`, optional) The ID of the store associated with this landing page. It must match an existing store in the Mailchimp account.

## MailchimpMarketingApi.DeleteLandingPage



Delete a specified landing page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique ID for the landing page to be deleted.

## MailchimpMarketingApi.PublishLandingPage



Publishes a landing page from draft or edited state.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the landing page to publish.

## MailchimpMarketingApi.UnpublishLandingPage



Unpublish a draft or published landing page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique ID of the landing page to be unpublished. Required for identifying the specific page on Mailchimp.

## MailchimpMarketingApi.GetLandingPageHtml



Retrieve the HTML content of a Mailchimp landing page.

**Parameters**

-   **landing\_page\_id** (`string`, required) The unique identifier for the Mailchimp landing page to retrieve.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for nested objects.

## MailchimpMarketingApi.GetCampaignReports



Retrieve detailed campaign reports from Mailchimp.

**Parameters**

-   **campaign\_type** (`string`, optional) Specify the type of campaign to retrieve reports for. Valid options are dependent on Mailchimp’s supported campaign types.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the report. Use dot notation for sub-objects.
-   **included\_fields** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, ranging from 10 to 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **restrict\_to\_campaigns\_sent\_after** (`string`, optional) Restrict the response to campaigns sent after the specified ISO 8601 date and time.
-   **restrict\_to\_campaigns\_sent\_before** (`string`, optional) Restrict response to campaigns sent before this ISO 8601 time format (e.g., 2015-10-21T15:41:36+00:00).

## MailchimpMarketingApi.GetCampaignReportDetails



Retrieve detailed report for a specific sent campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique ID for the campaign to retrieve its report details.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to be excluded from the response. Use dot notation for sub-object references.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetCampaignAbuseReports



Get a list of abuse complaints for a specific campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the email marketing campaign to fetch abuse complaints.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude in the response using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for nested fields.

## MailchimpMarketingApi.GetCampaignAbuseReportDetails



Retrieve details of an abuse report for a campaign.

**Parameters**

-   **abuse\_report\_id** (`string`, required) The unique identifier for the abuse report. This ID is necessary to retrieve the specific report details.
-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign to fetch the abuse report details.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.

## MailchimpMarketingApi.GetCampaignAdviceFeedback



Get feedback based on a campaign’s performance data.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the campaign to get advice feedback on.
-   **exclude\_fields\_to\_return** (`string`, optional) A comma-separated list of fields to omit in the response. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated fields to include in the response. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetCampaignClickDetails



Get details about link clicks in Mailchimp campaigns.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for a specific Mailchimp campaign. Required to fetch corresponding click details.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of click records to return. The default is 10, and the maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **return\_fields** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-objects.
-   **sort\_by\_field** (`string`, optional) Specify the field to sort click reports by, such as ‘clicks’, ‘unique\_clicks’, or ‘link\_name’.
-   **sort\_direction** (`string`, optional) Determines the order direction for sorted results, such as ascending or descending.

## MailchimpMarketingApi.GetCampaignLinkClickDetails



Get click details for a specific campaign link.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign to fetch link click details.
-   **link\_identifier** (`string`, required) The unique identifier for the link whose click details are to be retrieved in the campaign report.
-   **excluded\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.FetchClickDetailsForCampaign



Retrieve details on members who clicked a specific campaign link.

**Parameters**

-   **campaign\_id** (`string`, required) A unique identifier for the email marketing campaign to retrieve click details.
-   **link\_identifier** (`string`, required) The unique identifier for the specific link in the campaign. This ID is used to retrieve details of list members who clicked the link.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for nested fields.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **record\_count** (`string`, optional) The number of member records to return. Default is 10 and the maximum is 1000.

## MailchimpMarketingApi.GetSubscriberClickDetails



Retrieve details of a subscriber’s link click in a campaign.

**Parameters**

-   **campaign\_id** (`string`, required) The unique identifier for the campaign to get subscriber click details.
-   **link\_identifier** (`string`, required) The unique ID for the link clicked within a campaign. Use to specify which link’s click details to retrieve.
-   **subscriber\_email\_hash** (`string`, required) The MD5 hash of the lowercase version of the subscriber’s email address.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the result, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of specific fields to include in the response. Use dot notation for nested objects.

## MailchimpMarketingApi.GetCampaignOpenDetails



Get details on opened campaign emails by list members.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign. Required to retrieve open details for specific campaign emails.
-   **exclude\_fields\_to\_return** (`string`, optional) Comma-separated fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) The number of records from the collection to skip for pagination. Default is 0.
-   **sort\_by\_field** (`string`, optional) Specify the field by which to sort the open reports. Choose from available fields to determine the order of results.
-   **sort\_order\_direction** (`string`, optional) Specify the order direction for sorted results. Use ‘asc’ for ascending or ‘desc’ for descending.
-   **start\_date\_time\_for\_campaign\_open\_events** (`string`, optional) Restrict results to campaign open events that occur after this date and time in ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).

## MailchimpMarketingApi.GetCampaignSubscriberOpenDetails



Retrieve details of a subscriber who opened a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign to retrieve subscriber open details.
-   **subscriber\_email\_hash** (`string`, required) The MD5 hash of the lowercase version of the subscriber’s email address.
-   **exclude\_fields\_from\_response** (`string`, optional) A comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return for the subscriber’s open details. Use dot notation for sub-object fields.

## MailchimpMarketingApi.GetCampaignDomainPerformance



Get top domain performance for an email campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the email campaign to retrieve domain performance statistics.
-   **exclude\_fields\_from\_report** (`string`, optional) Comma-separated list of fields to exclude from the report, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return in the response. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetCampaignSocialActivity



Get social activity summary for a campaign using EepURL.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique id for the campaign to retrieve its social activity summary.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-object parameters.

## MailchimpMarketingApi.RetrieveCampaignSubscriberActivity



Retrieve subscriber activity for a specific campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for a specific email campaign.
-   **activity\_since\_timestamp** (`string`, optional) Restrict results to email activity events occurring after this timestamp, using ISO 8601 format.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-object fields.
-   **number\_of\_records\_to\_return** (`string`, optional) Specifies how many records to return. The default is 10, with a maximum of 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetCampaignEmailActivity



Retrieve specific list member’s activity in a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign whose member activity is being retrieved.
-   **subscriber\_hash** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address for which you want to retrieve activity.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the response using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **restrict\_activity\_since** (`string`, optional) Restrict results to email activity events occurring after this time (ISO 8601 format).

## MailchimpMarketingApi.FetchCampaignOpenLocations



Retrieve top open locations for a specific campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the specific marketing campaign.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response. Use dot notation for sub-objects.
-   **number\_of\_records** (`string`, optional) Specify the number of location records to return. Default is 10, maximum is 1000.
-   **records\_to\_skip** (`string`, optional) Number of records to skip for pagination purposes. Default is 0.

## MailchimpMarketingApi.GetCampaignRecipients



Retrieve information about campaign recipients.

**Parameters**

-   **campaign\_unique\_identifier** (`string`, required) The unique identifier for the specific campaign whose recipients you want to retrieve.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of recipient records to return, between 1 and 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetCampaignRecipientInfo



Get information about a specific campaign recipient.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique ID for the campaign for which recipient information is requested. It should be in string format and is required to identify the specific campaign.
-   **recipient\_subscriber\_hash** (`string`, required) MD5 hash of the lowercase version of the recipient’s email address.
-   **excluded\_fields** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) Comma-separated fields to include in the response, using dot notation for sub-objects.

## MailchimpMarketingApi.GetCampaignSubReports



Retrieve sub-reports of a specific parent campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique ID of the parent campaign to retrieve sub-reports for.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude. Use dot notation for sub-object parameters.
-   **return\_fields** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.GetUnsubscribedCampaignMembers



Get details of members unsubscribed from a specific campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the marketing campaign to retrieve unsubscribed members information.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return. Default is 10 and maximum is 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination, with a default value of 0.

## MailchimpMarketingApi.GetUnsubscribedMemberInfo



Retrieve info on an unsubscribed list member from a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the Mailchimp campaign.
-   **subscriber\_email\_hash** (`string`, required) The MD5 hash of the lowercase version of the list member’s email address for identification.
-   **exclude\_fields\_list** (`string`, optional) A list of fields to exclude, using dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Specify which fields to return, using a comma-separated list with dot notation for sub-objects.

## MailchimpMarketingApi.GetCampaignProductActivity



Get breakdown of product activity for a campaign.

**Parameters**

-   **campaign\_unique\_id** (`string`, required) The unique identifier for the campaign whose product activity is being retrieved.
-   **exclude\_fields\_from\_response** (`string`, optional) A comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of records to return, between 1 and 1000. Defaults to 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **sort\_results\_by\_field** (`string`, optional) Specify the field by which to sort the product activity results. Use dot notation for sub-object fields.

## MailchimpMarketingApi.GetAvailableTemplates



Retrieve a list of available email templates.

**Parameters**

-   **created\_after\_date** (`string`, optional) Retrieve templates created after a specific date. Use ISO 8601 format (e.g., 2015-10-21T15:41:36+00:00).
-   **exclude\_fields\_list** (`string`, optional) Comma-separated fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **filter\_by\_category** (`string`, optional) Limit the results to templates that match a specific category.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of template records to return (1-1000). Default is 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0. Use for paginated responses.
-   **restrict\_before\_date\_created** (`string`, optional) Restrict the response to templates created before the specified date in ISO 8601 format. For example: 2015-10-21T15:41:36+00:00.
-   **sort\_order\_direction** (`string`, optional) Specify the order direction for sorted results (‘asc’ for ascending, ‘desc’ for descending).
-   **sort\_templates\_by\_field** (`string`, optional) Specify the field to sort templates by. Determines the sorting order of returned templates.
-   **template\_content\_type** (`string`, optional) Filter templates based on content structure. Use ‘template’ for legacy, ‘multichannel’ for new editor, or ‘html’ for code your own.
-   **template\_creator\_user** (`string`, optional) Specify the Mailchimp account user who created the template to filter results.
-   **template\_folder\_id** (`string`, optional) The unique ID for the folder containing templates to retrieve.
-   **template\_type** (`string`, optional) Specify the template type to limit the results. This filters the email templates based on their type.

## MailchimpMarketingApi.CreateMailchimpTemplate



Create a new Classic template in Mailchimp.

**Parameters**

-   **template\_html\_content** (`string`, required) The raw HTML content for the template, supporting Mailchimp Template Language.
-   **template\_name** (`string`, required) The name assigned to the new template. It should be descriptive for easy identification.
-   **template\_folder\_id** (`string`, optional) The ID of the folder where the template will be stored. Ensure the folder exists in the Mailchimp account.

## MailchimpMarketingApi.GetMailchimpTemplateInfo



Retrieves detailed information about a specific Mailchimp template.

**Parameters**

-   **template\_id** (`string`, required) The unique identifier for the Mailchimp template to retrieve information about.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Specify a comma-separated list of fields to include in the response. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.UpdateEmailTemplate



Update the details of an existing email template.

**Parameters**

-   **template\_html\_content** (`string`, required) The raw HTML for the template using Mailchimp’s Template Language.
-   **template\_name** (`string`, required) The name of the email template to update.
-   **template\_unique\_id** (`string`, required) The unique identifier for the email template to be updated.
-   **destination\_folder\_id** (`string`, optional) The ID of the folder where the template is currently located.

## MailchimpMarketingApi.DeleteEmailTemplate



Delete a specific email template in Mailchimp.

**Parameters**

-   **template\_unique\_id** (`string`, required) The unique identifier for the email template to be deleted in Mailchimp.

## MailchimpMarketingApi.GetTemplateEditableSections



Retrieve editable sections and default content of a template.

**Parameters**

-   **template\_unique\_id** (`string`, required) The unique identifier for the Mailchimp template to retrieve editable sections.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to include in the response. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetAccountOrders



Retrieve information about an account’s ecommerce orders.

**Parameters**

-   **exclude\_order\_fields** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **filter\_by\_outreach\_id** (`string`, optional) Return orders associated with the specified outreach\_id.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of order records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **restrict\_to\_campaign\_id** (`string`, optional) Restrict results to orders with a specific campaign ID value.
-   **restrict\_to\_outreach\_orders** (`string`, optional) Restrict results to orders that have an outreach attached, such as an email campaign or Facebook ad.
-   **specific\_customer\_id** (`string`, optional) Restrict results to orders made by a specific customer using their unique customer ID.

## MailchimpMarketingApi.GetEcommerceStoresInfo



Retrieve information about all ecommerce stores in the account.

**Parameters**

-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the response, using dot notation for nested objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return using dot notation for sub-objects.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **records\_to\_return** (`string`, optional) Specify the number of store records to return (10 to 1000).

## MailchimpMarketingApi.AddNewEcommerceStore



Add a new e-commerce store to your Mailchimp account.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetEcommerceStoreInfo



Retrieve detailed information about a specific eCommerce store.

**Parameters**

-   **store\_id** (`string`, required) A unique identifier for the store to retrieve information about.
-   **excluded\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.UpdateEcommerceStore



Update an e-commerce store’s details.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store you want to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteEcommerceStore



Delete a store and its associated subresources.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the store to be deleted.

## MailchimpMarketingApi.GetStoreCartsInfo



Retrieve information about a store’s ecommerce carts.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the store to retrieve cart information.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for nested objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, up to a maximum of 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.AddCartToStore



Add a new cart to an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the ecommerce store where the new cart will be added. This is essential to specify the target store. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetCartInfo



Fetch information about a specific ecommerce cart.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier for the cart in the ecommerce store.
-   **store\_identifier** (`string`, required) The unique identifier for the store. Use this to specify which store’s cart information to retrieve.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude using dot notation for nested objects.
-   **include\_fields** (`string`, optional) Specify a comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateCart



Update a specific cart in an e-commerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_id** (`string`, optional) The unique identifier for the store where the cart is located. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **cart\_identifier** (`string`, optional) The unique identifier for the cart. Used to specify which cart to update in the e-commerce store. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteCart



Deletes a specific cart from an ecommerce store.

**Parameters**

-   **cart\_id** (`string`, required) The ID for the cart to be deleted from the store.
-   **store\_identifier** (`string`, required) The unique identifier for the ecommerce store from which the cart will be deleted.

## MailchimpMarketingApi.GetCartLineItemsInfo



Retrieve information about a cart’s line items.

**Parameters**

-   **cart\_id** (`string`, required) The unique identifier for the cart to retrieve line items for.
-   **store\_identifier** (`string`, required) The unique identifier for the store containing the cart.
-   **exclude\_fields** (`string`, optional) Specify fields to exclude from the response. Use a comma-separated list with dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return in the response. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Defaults to 0.
-   **records\_to\_return** (`string`, optional) The number of cart line items to return, from 1 to 1000. Default is 10.

## MailchimpMarketingApi.AddLineItemToCart



Add a new line item to an existing shopping cart.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier for the cart to which the line item will be added.
-   **cart\_line\_item\_identifier** (`string`, required) A unique identifier for the cart line item.
-   **line\_item\_price** (`number`, required) The monetary price for the line item being added to the cart. Must be a numeric value.
-   **line\_item\_quantity** (`integer`, required) The number of units for the specified product variant in the cart.
-   **product\_id** (`string`, required) A unique identifier for the product to be added to the cart line item.
-   **product\_variant\_id** (`string`, required) A unique identifier for the product variant to be added to the cart. This is necessary to specify which variant of the product is being added.
-   **store\_identifier** (`string`, required) The unique identifier for the store. This is necessary to specify which store’s cart will be updated.

## MailchimpMarketingApi.RetrieveCartLineItemInfo



Get information about a specific cart line item.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier for the cart. Required to retrieve specific cart line item information.
-   **cart\_line\_item\_id** (`string`, required) The ID for the line item in a specific cart. Used to identify which item details to retrieve.
-   **store\_identifier** (`string`, required) Unique identifier for the store. Use this to specify which store’s cart line item you want to retrieve.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return for the cart line item. Use dot notation for sub-objects.

## MailchimpMarketingApi.UpdateCartLineItem



Update a specific cart line item in Mailchimp.

**Parameters**

-   **cart\_id** (`string`, required) The unique identifier for the cart.
-   **cart\_line\_item\_id** (`string`, required) The unique identifier for the line item within the cart to be updated.
-   **store\_identifier** (`string`, required) The unique identifier for the e-commerce store. Essential for specifying which store’s cart line item to update.
-   **cart\_line\_item\_price** (`number`, optional) The price of a cart line item to be updated.
-   **cart\_line\_item\_quantity** (`integer`, optional) The quantity of the cart line item to update.
-   **product\_identifier** (`string`, optional) A unique identifier for the product associated with the cart line item.
-   **product\_variant\_identifier** (`string`, optional) A unique identifier for the product variant associated with the cart line item. Required to specify which variant to update.

## MailchimpMarketingApi.DeleteCartLineItem



Delete a specific cart line item.

**Parameters**

-   **cart\_identifier** (`string`, required) The unique identifier for the cart in the eCommerce store.
-   **line\_item\_id** (`string`, required) ID for the line item in the cart to be deleted.
-   **store\_identifier** (`string`, required) The unique identifier for the store from which the cart line item will be deleted.

## MailchimpMarketingApi.GetStoreCustomersInfo



Retrieve information about a store’s customers.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the e-commerce store to retrieve customer information.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated fields to exclude in the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **filter\_by\_email\_address** (`string`, optional) Restrict the response to customers matching the specified email address.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of customer records to return. Default is 10, maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.AddCustomerToStore



Add a new customer to an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the ecommerce store where the customer will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetCustomerInfo



Retrieve specific customer information from an eCommerce store.

**Parameters**

-   **customer\_id** (`string`, required) The unique identifier for a customer in a specific store. Required to fetch customer details.
-   **store\_id** (`string`, required) The unique identifier for the eCommerce store.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **return\_fields** (`string`, optional) A comma-separated list of fields to return for the customer data. Use dot notation for sub-objects.

## MailchimpMarketingApi.AddOrUpdateCustomerInStore



Add or update a customer in an eCommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the eCommerce store where the customer will be added or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_identifier** (`string`, optional) The unique identifier for the customer in the specified store. This ID is necessary for adding or updating customer details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.UpdateCustomerInfo



Update a customer’s information in an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the ecommerce store where the customer resides. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **customer\_identifier** (`string`, optional) The unique identifier for a customer in a specific store. Required to update customer information. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteStoreCustomer



Delete a customer from an ecommerce store.

**Parameters**

-   **customer\_identifier** (`string`, required) The unique identifier for the customer to be deleted from the store. This ID is used to specify which customer’s records should be removed.
-   **store\_identifier** (`string`, required) The unique identifier for the ecommerce store from which the customer will be deleted.

## MailchimpMarketingApi.GetStorePromoRules



Retrieve promo rules for a specified store.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the store to retrieve promo rules from.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination, with a default value of 0.
-   **records\_to\_return** (`string`, optional) Specify the number of promo rule records to return. Default is 10, maximum is 1000.

## MailchimpMarketingApi.AddStorePromoRule



Add a new promo rule to an e-commerce store on Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_id** (`string`, optional) The unique identifier for the store where the promo rule will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetPromoRuleInfo



Retrieve information about a specific promo rule in an ecommerce store.

**Parameters**

-   **promo\_rule\_id** (`string`, required) The unique identifier for the promo rule in the store. Required to fetch specific rule details.
-   **store\_id** (`string`, required) The unique identifier for the ecommerce store. Required to fetch promo rule details.
-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude from the promo rule data. Use dot notation to reference sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of specific fields to return using dot notation for sub-objects.

## MailchimpMarketingApi.UpdatePromoRule



Update a promotional rule in an e-commerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) Specify the unique identifier of the e-commerce store where the promo rule will be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **promo\_rule\_identifier** (`string`, optional) The unique identifier for the promotional rule within the store. This is required to specify which promo rule to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeletePromoRuleFromStore



Delete a promo rule from a specified ecommerce store.

**Parameters**

-   **promo\_rule\_id** (`string`, required) The unique identifier for the promo rule to be deleted from the store.
-   **store\_id** (`string`, required) The unique identifier for the ecommerce store from which the promo rule will be deleted.

## MailchimpMarketingApi.GetStorePromoCodes



Retrieve information about promo codes for a specific store.

**Parameters**

-   **promo\_rule\_id** (`string`, required) The unique identifier for the promotion rule of a store to fetch promo codes.
-   **store\_identifier** (`string`, required) The unique identifier for the store to get promo codes from. Required to specify which store’s promo codes to retrieve.
-   **exclude\_fields\_list** (`string`, optional) Specify a comma-separated list of fields to exclude from the returned data. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of specific fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of promo code records to return. Default is 10, with a maximum of 1000.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination purposes. Default is 0.

## MailchimpMarketingApi.AddPromoCodeToStore



Add a new promo code to an ecommerce store.

**Parameters**

-   **promo\_code** (`string`, required) The discount code for the promotion. It must be a UTF-8 string, with a maximum length of 50 characters.
-   **promo\_code\_identifier** (`string`, required) A unique identifier for the promo code. Must be UTF-8, max length 50.
-   **promo\_rule\_identifier** (`string`, required) The ID for the promotional rule associated with the store.
-   **promotion\_redemption\_url** (`string`, required) The URL used in the promotion campaign. Must be UTF-8, max length 2000 characters.
-   **store\_identifier** (`string`, required) The unique identifier for the ecommerce store where the promo code will be added.
-   **is\_promo\_code\_enabled** (`boolean`, optional) Specifies if the promo code is enabled. Use true to enable, false to disable.
-   **promo\_code\_usage\_count** (`integer`, optional) Number of times the promo code has been used. This integer value helps track the utilization of the promo code.
-   **promotion\_creation\_datetime** (`string`, optional) The date and time the promotion was created, in ISO 8601 format.
-   **promotion\_updated\_datetime** (`string`, optional) The date and time the promotion was last updated, in ISO 8601 format.

## MailchimpMarketingApi.GetPromoCodeInfo



Retrieve details of a specific promo code.

**Parameters**

-   **promo\_code\_id** (`string`, required) The unique identifier for the promo code associated with a store.
-   **promo\_rule\_id** (`string`, required) The unique identifier for the promo rule of a store. This is required to fetch specific promo code information.
-   **store\_id** (`string`, required) The unique identifier for the store. Required to specify which store’s promo code information to retrieve.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdatePromoCode



Update details of a specific promo code.

**Parameters**

-   **promo\_code\_identifier** (`string`, required) The unique identifier for the promo code of a store.
-   **promo\_rule\_identifier** (`string`, required) The identifier for the promo rule in a store. Used to specify which promotional rule to update.
-   **store\_identifier** (`string`, required) The unique identifier for the eCommerce store in Mailchimp.
-   **discount\_code** (`string`, optional) The discount code for the promo. Must be UTF-8 and up to 50 characters.
-   **is\_promo\_code\_enabled** (`boolean`, optional) Set to true to enable the promo code, or false to disable it.
-   **promo\_code\_usage\_count** (`integer`, optional) Specifies how many times the promo code has been used. Accepts an integer value.
-   **promotion\_created\_at** (`string`, optional) The promotion creation date and time in ISO 8601 format.
-   **promotion\_redemption\_url** (`string`, optional) The URL for the promotion campaign. Must be UTF-8, max 2000 characters.
-   **promotion\_update\_timestamp** (`string`, optional) The timestamp when the promotion was updated, in ISO 8601 format. This indicates the last update time of the promo code details.

## MailchimpMarketingApi.DeleteStorePromoCode



Delete a promo code from an e-commerce store.

**Parameters**

-   **promo\_code\_id** (`string`, required) The ID of the promo code to be deleted from the store.
-   **promo\_rule\_id** (`string`, required) The unique identifier for the promo rule of a store, used to specify which promo rule the code belongs to.
-   **store\_identifier** (`string`, required) The unique identifier for the store from which the promo code will be deleted.

## MailchimpMarketingApi.GetStoreOrdersInfo



Retrieve information about a store’s orders via Mailchimp.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the store whose orders information is to be retrieved.
-   **exclude\_order\_fields** (`string`, optional) Comma-separated list of order fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.
-   **filter\_by\_customer\_id** (`string`, optional) Restrict results to orders made by a specific customer using their unique customer ID.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, between 1 and 1000, with a default of 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **restrict\_to\_campaign\_id** (`string`, optional) Restrict results to orders with the specified `campaign_id`.
-   **restrict\_to\_outreach\_orders** (`string`, optional) Indicate whether to restrict results to orders with an outreach attached, such as an email campaign or Facebook ad. Accepts ‘true’ or ‘false’.
-   **specific\_outreach\_id** (`string`, optional) Restrict results to orders with a specific outreach ID.

## MailchimpMarketingApi.AddOrderToStore



Add a new order to an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store where the order will be added. This should be a string value that accurately corresponds to an existing store in the system. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetSpecificOrderInfo



Retrieve information about a specific order in a store.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier for the order in a store. It is required to retrieve specific order details.
-   **store\_identifier** (`string`, required) The unique identifier for the store. Required to fetch order information.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateEcommerceOrder



Add or update an order in an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store in which the order is being added or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **order\_identifier** (`string`, optional) The unique identifier for the order in the store. Used to specify which order to update or add. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.UpdateOrderMailchimp



Update a specific order in Mailchimp’s e-commerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store in which the order is being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **order\_id** (`string`, optional) The unique identifier for the order in the store that needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteOrderInEcommerceStore



Delete an order from an eCommerce store.

**Parameters**

-   **ecommerce\_store\_id** (`string`, required) The unique identifier for the eCommerce store from which the order will be deleted.
-   **order\_id** (`string`, required) The unique identifier for the order to delete within the store.

## MailchimpMarketingApi.GetOrderLineItems



Retrieve information about order line items.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier for the order within the store. Required to specify which order’s line items to retrieve.
-   **store\_id** (`string`, required) The unique identifier for the store. Used to specify which store’s order line items to retrieve.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of line item records to return, between 1 and 1000. Default is 10.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination, default is 0.

## MailchimpMarketingApi.AddOrderLineItem



Add a new line item to an existing order.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store where the order is placed. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **order\_id** (`string`, optional) The unique identifier for the order in the store, used to specify which order to update. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetSpecificOrderLineItemInfo



Get details about a specific order line item.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier for the order within a store. Required to fetch details of the specific order line item.
-   **order\_line\_item\_id** (`string`, required) The unique identifier for the line item in the order.
-   **store\_identifier** (`string`, required) The unique identifier for the store. This is required to specify which store’s data to retrieve.
-   **exclude\_fields** (`string`, optional) A comma-separated list of specific fields to exclude from the response. Use dot notation for sub-object fields.
-   **return\_fields** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.UpdateOrderLineItem



Update a specific order line item.

**Parameters**

-   **line\_item\_id** (`string`, required) The unique identifier for the line item within an order in a store.
-   **order\_id** (`string`, required) The unique identifier for the order within the store. Required to specify which order is being updated.
-   **store\_identifier** (`string`, required) Unique identifier for the store where the order was placed.
-   **line\_item\_discount\_amount** (`number`, optional) The total discount amount applied to this line item in the order. Provide as a numerical value.
-   **order\_line\_item\_price** (`number`, optional) Specify the updated price for the order line item. This should be a numerical value reflecting the new cost of the item.
-   **order\_line\_item\_quantity** (`integer`, optional) Specify the quantity of the order line item to be updated.
-   **product\_identifier** (`string`, optional) A unique identifier for the product associated with the order line item.
-   **product\_variant\_id** (`string`, optional) A unique identifier for the product variant associated with the order line item. This is required to specify the variant of the product being referenced.

## MailchimpMarketingApi.DeleteOrderLineItem



Delete a specific order line item.

**Parameters**

-   **order\_id** (`string`, required) The unique identifier for the order within a store. This is required to delete a line item from the specified order.
-   **order\_line\_item\_id** (`string`, required) The unique identifier for the line item of an order to be deleted.
-   **store\_id** (`string`, required) Unique identifier for the store from which the order line item will be deleted.

## MailchimpMarketingApi.GetStoreProductsInfo



Get information about a store’s products from Mailchimp.

**Parameters**

-   **store\_identifier** (`string`, required) The unique identifier for the store whose product information is being retrieved.
-   **exclude\_fields\_list** (`string`, optional) Comma-separated list of fields to exclude from the response. Use dot notation for sub-object parameters.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of product records to return, from 1 to 1000. The default value is 10.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **return\_fields\_list** (`string`, optional) A comma-separated list of specific fields to return. Use dot notation for sub-objects.

## MailchimpMarketingApi.AddProductToStore



Add a new product to a Mailchimp store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_id** (`string`, optional) The unique identifier of the store where the product will be added. This is required to specify the target store. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetProductInfo



Get information about a specific product from an ecommerce store.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier for the product within a store. This ID is required to fetch specific product details.
-   **store\_identifier** (`string`, required) The unique identifier for the store from which to retrieve the product information.
-   **fields\_to\_exclude** (`string`, optional) Comma-separated fields to exclude in the response, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateProductInfo



Update details of a specific product in a store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The identifier for the specific store whose product details are being updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_identifier** (`string`, optional) The unique identifier for the product within a store. Required for updating product details. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.UpdateEcommerceProduct



Update a specific product in an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier of the store to update the product in. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_id** (`string`, optional) The unique identifier for the product within a store. This is used to specify which product needs to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteEcommerceProduct



Delete a product from an eCommerce store.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier for the product to delete from a store.
-   **store\_id** (`string`, required) The unique identifier of the eCommerce store from which the product will be deleted.

## MailchimpMarketingApi.GetProductVariantsInfo



Retrieve information on product variants from a store.

**Parameters**

-   **product\_identifier** (`string`, required) The unique identifier for the product within the store.
-   **store\_id** (`string`, required) The unique identifier for the store. Required to fetch product variant data.
-   **exclude\_fields\_list** (`string`, optional) Specify fields to exclude using a comma-separated list. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of product variant records to return, default is 10, max is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.AddProductVariantMailchimp



Add a new variant to an existing product in Mailchimp.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the store where the product variant will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_id** (`string`, optional) The ID for the product within a store to which a new variant will be added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.GetProductVariantInfo



Retrieve information on a specific product variant.

**Parameters**

-   **product\_id** (`string`, required) The ID of the product in the specified store. Required to retrieve variant details.
-   **product\_variant\_id** (`string`, required) The unique identifier for the product variant in the store.
-   **store\_id** (`string`, required) The unique identifier for the store to query the product variant details.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude in the response. Use dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of product variant fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.UpdateProductVariant



Add or update a product variant in an ecommerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) The unique identifier for the ecommerce store. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_identifier** (`string`, optional) The unique identifier for the product in the store. This ID is used to specify which product’s variant is being added or updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_variant\_id** (`string`, optional) The unique identifier for the product variant to be updated or added. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.ModifyProductVariant



Update a product variant in an e-commerce store.

**Parameters**

-   **mode** (`Enum` [ToolMode](#toolmode)
    , required) Operation mode: ‘get\_request\_schema’ returns the OpenAPI spec for the request body, ‘execute’ performs the actual operation
-   **store\_identifier** (`string`, optional) A unique identifier for the store where the product variant will be updated. Must be a string. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_identifier** (`string`, optional) The unique identifier for a product in a store. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **product\_variant\_id** (`string`, optional) The ID for the product variant to be updated. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’.
-   **request\_body** (`string`, optional) Stringified JSON representing the request body. Required when mode is ‘execute’, ignored when mode is ‘get\_request\_schema’

## MailchimpMarketingApi.DeleteProductVariant



Delete a product variant from an ecommerce store.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier for the product within a store to which the variant belongs.
-   **product\_variant\_id** (`string`, required) The identifier for the product variant to be deleted from the store.
-   **store\_identifier** (`string`, required) The unique identifier for the store from which the product variant will be deleted.

## MailchimpMarketingApi.GetProductImages



Retrieve information about a product’s images.

**Parameters**

-   **product\_identifier** (`string`, required) The unique identifier for a product in a specific store. Required to retrieve product image details.
-   **store\_id** (`string`, required) The unique identifier for the e-commerce store.
-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude from the response using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of product image records to return, ranging from 1 to 1000. Defaults to 10 if not provided.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.AddProductImage



Add a new image to a specific product.

**Parameters**

-   **product\_id** (`string`, required) The unique identifier for the product in the store. Required to specify which product the image will be added to.
-   **product\_image\_id** (`string`, required) A unique identifier for the product image to be added.
-   **product\_image\_url** (`string`, required) The URL of the image to be added to the product.
-   **store\_id** (`string`, required) The unique identifier for the store where the product is hosted. Required to specify which store’s catalog you are updating.
-   **product\_variant\_ids** (`array[string]`, optional) List of product variant IDs using the image.

## MailchimpMarketingApi.GetProductImageInfo



Retrieve details of a specific product image in an eCommerce store.

**Parameters**

-   **product\_identifier** (`string`, required) The unique identifier for the product in the store.
-   **product\_image\_id** (`string`, required) The unique identifier for the product image to retrieve details about.
-   **store\_identifier** (`string`, required) The unique identifier of the store. Used to specify the store whose product image information is to be retrieved.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude, using dot notation for sub-object parameters.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object fields.

## MailchimpMarketingApi.UpdateProductImageMailchimp



Update a product image in an e-commerce store.

**Parameters**

-   **product\_identifier** (`string`, required) The unique identifier for a product in the store. Used to specify which product’s image should be updated.
-   **product\_image\_id** (`string`, required) The unique identifier for the product image to update.
-   **store\_id** (`string`, required) The unique identifier for the e-commerce store.
-   **product\_image\_unique\_id** (`string`, optional) A unique identifier for a specific product image to be updated in the store.
-   **product\_image\_url** (`string`, optional) The URL of the product image to be updated.
-   **variant\_ids** (`array[string]`, optional) A list of product variant IDs associated with the image. Each variant ID should be a string.

## MailchimpMarketingApi.DeleteProductImage



Delete an image from a product in an e-commerce store.

**Parameters**

-   **product\_id** (`string`, required) The unique ID for the product in the store from which the image will be deleted.
-   **product\_image\_id** (`string`, required) The unique identifier for the product image to be deleted from the store’s inventory.
-   **store\_identifier** (`string`, required) The unique identifier for the e-commerce store.

## MailchimpMarketingApi.SearchMailchimpCampaigns



Search for email campaigns using query terms.

**Parameters**

-   **search\_query** (`string`, required) The terms used to filter and search Mailchimp campaigns.
-   **exclude\_campaign\_fields** (`string`, optional) Comma-separated list of fields to exclude from the search results. Use dot notation for sub-objects.
-   **included\_fields** (`string`, optional) Specify the fields to return as a comma-separated list. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.SearchMailchimpMembers



Search for Mailchimp list members across lists.

**Parameters**

-   **search\_query** (`string`, required) The search query to filter list members by email, first name, or last name.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list specifying which fields to exclude from results. Use dot notation for sub-object references.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **list\_unique\_id** (`string`, optional) The unique identifier for a Mailchimp list to restrict the search. Use this to specify a particular list.

## MailchimpMarketingApi.CheckMailchimpApiHealth



Checks the health status of the Mailchimp API.

**Parameters**

This tool does not take any parameters.

## MailchimpMarketingApi.GetFacebookAdsList



Retrieve a list of Facebook ads from Mailchimp.

**Parameters**

-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude. Utilize dot notation for sub-object fields.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of specific fields to return in the response. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination, with a default of 0.
-   **records\_count** (`string`, optional) Specify the number of Facebook ad records to return. Default is 10, maximum is 1000.
-   **sort\_by\_field** (`string`, optional) Specify the field by which to sort the Facebook ads.
-   **sort\_direction** (`string`, optional) Specifies the sorting order: ‘asc’ for ascending or ‘desc’ for descending.

## MailchimpMarketingApi.GetFacebookAdDetails



Retrieve details of a specific Facebook ad campaign.

**Parameters**

-   **facebook\_ad\_outreach\_id** (`string`, required) The unique outreach ID of the Facebook ad to retrieve details for.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return; use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetFacebookAdsReports



Get reports of Facebook ads for marketing analysis.

**Parameters**

-   **exclude\_fields** (`string`, optional) A comma-separated list of fields to exclude in the report. Use dot notation for sub-objects if needed.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to return. Use dot notation for sub-object parameters.
-   **pagination\_offset** (`string`, optional) The number of records to skip for pagination. Default is 0.
-   **record\_count** (`string`, optional) Specify the number of Facebook ads records to return. Default is 10, maximum is 1000.
-   **sort\_order\_direction** (`string`, optional) Specifies the order direction for sorting results. Use ‘asc’ for ascending and ‘desc’ for descending.
-   **sorting\_field\_for\_results** (`string`, optional) Specifies the field by which to sort the Facebook ads report results.

## MailchimpMarketingApi.GetFacebookAdReport



Get report details of a Facebook ad campaign.

**Parameters**

-   **outreach\_id** (`string`, required) The unique identifier for the Facebook ad campaign to retrieve the report for.
-   **fields\_to\_exclude** (`string`, optional) List of fields to exclude from the report, using comma-separated values. Use dot notation for sub-object parameters.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetFacebookAdsProductActivity



Retrieve product activity breakdown for a Facebook ads outreach.

**Parameters**

-   **outreach\_id** (`string`, required) The unique identifier for the Facebook ads outreach campaign to retrieve the product activity breakdown.
-   **exclude\_fields** (`string`, optional) Comma-separated list of fields to exclude using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) The number of records to return. Default is 10. Maximum is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination. Default is 0.
-   **sort\_by\_field** (`string`, optional) Specify the field to sort the returned records by, using the field name.

## MailchimpMarketingApi.GetLandingPageReport



Retrieve the report for a specific landing page.

**Parameters**

-   **landing\_page\_outreach\_id** (`string`, required) The outreach ID for the landing page you want to retrieve the report for.
-   **exclude\_report\_fields** (`string`, optional) A comma-separated list of fields to exclude from the landing page report. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return, using dot notation for sub-objects.

## MailchimpMarketingApi.GetLandingPageReports



Retrieve reports of landing pages from Mailchimp.

**Parameters**

-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the report. Use dot notation for sub-objects.
-   **include\_fields** (`string`, optional) A comma-separated list of fields to include in the response, using dot notation for sub-objects.
-   **number\_of\_records\_to\_return** (`string`, optional) Specify the number of records to return, from 1 to 1000. Defaults to 10 if not provided.
-   **records\_to\_skip** (`string`, optional) The number of records to skip for pagination. Default is 0.

## MailchimpMarketingApi.GetSurveyReports



Retrieve detailed reports for marketing surveys.

**Parameters**

-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from survey reports. Use dot notation for sub-object fields.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to return. Use dot notation for sub-objects.
-   **number\_of\_records** (`string`, optional) The number of survey report records to return. Defaults to 10. Max value is 1000.
-   **pagination\_offset** (`string`, optional) Number of records to skip for pagination, default is 0.

## MailchimpMarketingApi.GetSurveyReport



Retrieve report details for a specific survey.

**Parameters**

-   **survey\_id** (`string`, required) The unique ID of the survey to retrieve the report for.
-   **exclude\_fields\_list** (`string`, optional) A comma-separated list of fields to exclude from the survey report. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) A comma-separated list of fields to include in the survey report. Use dot notation for sub-objects.

## MailchimpMarketingApi.GetSurveyQuestionReports



Retrieve reports for survey questions by survey ID.

**Parameters**

-   **survey\_identifier** (`string`, required) The unique identifier for the survey to retrieve question reports.
-   **exclude\_fields\_from\_report** (`string`, optional) A comma-separated list of fields to exclude from the survey report. Use dot notation for nested fields.
-   **include\_fields** (`string`, optional) Comma-separated list of fields to return for survey questions. Use dot notation for sub-object parameters.

## MailchimpMarketingApi.GetSurveyQuestionReport



Get report data for a specific survey question.

**Parameters**

-   **survey\_id** (`string`, required) The unique identifier for the survey. Required to retrieve specific survey question reports.
-   **survey\_question\_id** (`string`, required) The unique ID of the survey question to get the report for.
-   **fields\_to\_exclude** (`string`, optional) A comma-separated list of fields to exclude from the survey question report, using dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return using dot notation for sub-objects.

## MailchimpMarketingApi.GetSurveyQuestionAnswers



Retrieve answers for a specific survey question.

**Parameters**

-   **survey\_identifier** (`string`, required) The unique identifier for the survey whose question answers are being retrieved.
-   **survey\_question\_id** (`string`, required) The unique identifier for the survey question to retrieve answers from.
-   **exclude\_fields** (`string`, optional) Specify fields to exclude from the response using a comma-separated list. Use dot notation for sub-objects.
-   **fields\_to\_return** (`string`, optional) Comma-separated list of fields to return, using dot notation for sub-objects.
-   **filter\_by\_respondent\_familiarity** (`string`, optional) Filter survey responses based on the familiarity level of the respondents. Accepts a string value.

## MailchimpMarketingApi.GetSurveyResponses



Retrieve responses to a specific survey.

**Parameters**

-   **survey\_id** (`string`, required) The unique identifier for the survey to retrieve responses for.
-   **chosen\_answer\_id** (`string`, optional) The ID of the selected answer option to filter survey responses.
-   **exclude\_survey\_fields** (`string`, optional) A comma-separated list of fields to exclude from survey responses. Use dot notation for sub-objects.
-   **filter\_by\_respondent\_familiarity** (`string`, optional) Filter survey responses by respondents’ familiarity level. Provide a familiarity string to narrow down results.
-   **included\_fields** (`string`, optional) A comma-separated list of fields to return in the response. Use dot notation for sub-objects.
-   **question\_id** (`string`, optional) The ID of the question that was answered to filter responses.

## MailchimpMarketingApi.GetSurveyResponse



Retrieve details of a specific survey response.

**Parameters**

-   **survey\_id** (`string`, required) The ID of the survey to retrieve the response from.
-   **survey\_response\_id** (`string`, required) The ID of the specific survey response to retrieve.

## MailchimpMarketingApi.GetDomainDetails



Retrieve details for a specific verified domain.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to retrieve details for. Must be a verified domain on the account.

## MailchimpMarketingApi.DeleteVerifiedDomain



Deletes a verified domain from your Mailchimp account.

**Parameters**

-   **domain\_name** (`string`, required) The domain name to be deleted from your Mailchimp account.

## MailchimpMarketingApi.VerifySendingDomain



Verify if a domain is authorized for sending emails.

**Parameters**

-   **domain\_name\_to\_verify** (`string`, required) The domain name you wish to verify for sending emails through Mailchimp.
-   **verification\_code** (`string`, required) The code sent to the provided email address for domain verification.

## MailchimpMarketingApi.GetVerifiedMailchimpDomains



Retrieve all verified sending domains for a Mailchimp account.

**Parameters**

This tool does not take any parameters.

## MailchimpMarketingApi.AddVerifiedDomain



Add a verified domain to your Mailchimp account.

**Parameters**

-   **verification\_email\_address** (`string`, required) The email address at the domain to verify, which will receive a two-factor challenge for verification.

## Reference

Below is a reference of enumerations used by some of the tools in the MailchimpMarketingApi MCP Server:

### ToolMode

-   **GET\_REQUEST\_SCHEMA**: `get_request_schema`
-   **EXECUTE**: `execute`

## Auth

The MailchimpMarketingApi MCP Server uses the Auth Provider with id `arcade-mailchimp` to connect to users’ MailchimpMarketingApi accounts. In order to use the MCP Server, you will need to configure the `arcade-mailchimp` auth provider.

The Mailchimp OAuth provider enables secure authentication with Mailchimp’s Marketing API using OAuth 2.0. This allows your tools and agents to access user data and perform actions on their behalf. For detailed information on setting up the OAuth provider, including how to register your application with Mailchimp and configure the auth provider in Arcade, see the [Mailchimp Auth Provider documentation](/references/auth-providers/mailchimp.md).

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_mailchimp_marketing_api ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[Linear](/en/resources/integrations/productivity/linear.md)
[Notion](/en/resources/integrations/productivity/notion.md)
