---
title: "Changelog"
description: "What&#x27;s new at Arcade.dev"
---
Changelog

# Changelog

_Here’s what’s new at Arcade.dev!_

## 2026-02-20

Contextual Access for  Executions is Live! Learn more [here](/guides/contextual-access.md)

**Arcade  Servers**

-   `[feature - 🚀]` Add Tool Metadata for  Servers
-   `[feature - 🚀]` Add Attio  Server
-   `[documentation - 📝]` Arcade  Server documentation now includes per- scope documentation and tool to help build needed OAuth Provide scopes

**Platform and Engine**

-   `[feature - 🚀]` Audit logs clear filters button
-   `[maintenance - 🔧]` Cleanup and DI improvements

**Misc**

-   `[documentation - 📝]` Update Salesforce  docs with new External Client App (\[docs PR #761\])
-   `[documentation - 📝]` OpenAI  tutorial rewrite (\[docs PR #743\])
-   `[documentation - 📝]` Consolidate Google ADK tutorials and add TypeScript setup (\[docs PR #746\])
-   `[documentation - 📝]` Fixing the links in the framework overview (\[docs PR #772\])

## 2026-02-06

**Arcade  Servers**

-   `[maintenance - 🔧]` Fix Google Docs Edit  to work with documents that have multiple tabs
-   `[maintenance - 🔧]` Improve LLM Instructions for Google Drive file picker

**Platform and Engine**

-   `[feature - 🚀]` Batch  Reconcile
-   `[feature - 🚀]` Improve gateway error message
-   `[maintenance - 🔧]` Hide OAuth UI when server is already authorized (Dashboard)
-   `[feature - 🚀]` Added grouped overview for toolkits (Dashboard)

**Misc**

-   `[documentation - 📝]` Editorial improvements for Windows environment setup page
-   `[documentation - 📝]` Add clean markdown generation for LLM-friendly page content
-   `[documentation - 📝]` Public data storage information
-   `[documentation - 📝]` Rename `Starter tools` to `Unoptimized tools`
-   `[documentation - 📝]` Add documentation for remote  servers

## 2026-01-23

**Arcade  Servers**

-   `[feature - 🚀]` Launched `https://ctl.arcade.dev/mcp` - Arcade’s Gateway Assistant. Connect your LLM to help build  Gateways and  for any  use case. Learn more about it [here](/guides/mcp-gateways/create-via-ai.md)
    !

**Platform and Engine**

-   `[maintenance - 🔧]` Fixed a race condition in `arcade deploy`

**Misc**

-   `[documentation - 📝]` Updated OpenAI  guide in Python
-   `[documentation - 📝]` Fixed \-frameworks page displaying as raw code
-   `[documentation - 📝]` Quickstart now walks through setting up a `uv`
-   `[documentation - 📝]` Added connecting arcade  to your llm page
-   `[documentation - 📝]` Added Copilot Studio docs

## 2026-01-16

**Arcade  Servers**

-   `[feature - 🚀]` [`arcade-mcp`](https://github.com/ArcadeAI/arcade-mcp)
     Support Ed25519 Algorithm
-   `[bugfix - 🐛]` [`arcade-mcp`](https://github.com/ArcadeAI/arcade-mcp)
     Fix dateutil dependency issue
-   `[bugfix - 🐛]` [`arcade-mcp`](https://github.com/ArcadeAI/arcade-mcp)
     Fix PostHog dependency issue

**Platform and Engine**

-   `[bugfix - 🐛]` fix: Allow long custom verifier URLs
-   `[feature - 🚀]` Add Dashboard support for expiring

## 2026-01-09

We’ve dramatically revamped our documentation to focus on making it easier to get started with Arcade. Update your links and let us know what you think [here](/resources/contact-us.md)!

 Gateways now support OAuth! Learn more about it [here](/guides/mcp-gateways.md)!

**Arcade  Servers**

-   `[feature - 🚀]` Add support for Arcade Evals on  Servers
-   `[maintenance - 🔧]` Replace fcntl with cross-platform portalocker to fix Windows/Powershell errors

**Platform and Engine**

-   `[feature - 🚀]` Optional image URL and hex color for organizations and
-   `[feature - 🚀]` Support for listing members and invited users for
-   `[maintenance - 🔧]` Allows the same secret in multiple
-   `[feature - 🚀]` OAuth for Gateways

**Toolkits**

-   `[feature - 🚀]` \[PagerDuty\] Optimized Toolkit
-   `[feature - 🚀]` \[Pylon\] Starter Toolkit
-   `[feature - 🚀]` \[Google contacts\] phone numbers support
-   `[feature - 🚀]` \[Gmail\] Improved performance and conversion to  App
-   `[feature - 🚀]` \[Google Sheets\] Bug fix and  App update
-   `[maintenance - 🔧]` `arcade-mcp` Fix typing by using typing\_extensions

## 2025-12-12

**Arcade  Servers**

-   `[feature - 🚀]` OAuth authentication for `arcade-mcp` servers. Learn more about it \[here\](/guides/security/secure-your-\-server!
-   `[maintenance - 🔧]` Ability to run multiple uvicorn workers
-   `[maintenance - 🔧]` Include type annotations for `arcade_mcp_server`

**Arcade CLI**

-   `[feature - 🚀]` Support multiple orgs &  in Arcade’s CLI. Learn more about it [here](/references/arcade-cli.md)
    !

**Platform and Engine**

-   `[bugfix - 🐛]` Idempotent  invite acceptance

**Toolkits**

-   `[feature - 🚀]` Support phone numbers in Google contacts
-   `[feature - 🚀]` Support downloading and uploading files to Google Drive
-   `[feature - 🚀]` Figma Optimized Toolkit
-   `[bugfix - 🐛]` Fix bugs with bad data types in Jira and Confluence
-   `[maintenance - 🔧]` Gmail list  enforce page-size limits

## 2025-12-05

[A medium-severity security vulnerability](https://github.com/ArcadeAI/arcade-mcp/security/advisories/GHSA-g2jx-37x6-6438)  has been identified and fixed in the Arcade . Please upgrade to version 1.9.1 or higher of `arcade-mcp-server` to fix this issue.

As of December 1, 2025, we have migrated the  servers deployed via `arcade deploy` to our own managed infrastructure. Please ensure you have the latest version of the arcade CLI installed and that you are using the latest version of the `arcade-mcp-server` package.

**Arcade  Servers**

-   `[feature - 🚀]` Add tools for project management, pull request, and projects to the Github  Server
-   `[feature - 🚀]` Add Optimized Linear toolkit
-   `[feature - 🚀]` Add Optimized Ashby toolkit
-   `[feature - 🚀]` Shorten Jira  names exceeding Cursor limit
-   `[feature - 🚀]` Host both the latest and previous major version of optimized Arcade toolkits for backwards compatibility

**Arcade **

-   `[feature - 🚀]` Add startup warnings for missing secrets
-   `[bugfix - 🐛]` Handle client disconnect for large payloads
-   `[bugfix - 🐛]` Only serve worker endpoints if `ARCADE_WORKER_SECRET` environment variable is set
-   `[maintenance - 🔧]` Increase Worker Termination Grace Period

**Arcade CLI**

-   `[feature - 🚀]` CLI config and WhoAmI endpoints

**Platform and Engine**

-   `[feature - 🚀]` New users can be invited to projects by email, regardless of whether they have an  on Arcade, or already belong to your organization.
-   `[maintenance - 🔧]` Allows users to update organization and  names\\

## 2025-11-21

** Servers**

-   `[feature - 🚀]` Updated Github  Sever to support , issues, and pull requests

**Platform and Engine**

-   `[feature - 🚀]` Invite users to  by email

## 2025-11-14

** Servers**

-   `[feature - 🚀]` Customer.io Starter  Servers added
-   `[feature - 🚀]` Intercom Starter  Server added

**Arcade **

-   `[maintenance - 🔧]` Do not require entrypoint for `arcade configure` for HTTP server

**Platform and Engine**

-   `[maintenance - 🔧]` Update `arcade deploy` command to support  Servers built with `arcade-mcp`
-   `[maintenance - 🔧]` Improve performance of  execution with large collections of tools

## 2025-11-07

**Toolkits**

-   `[feature - 🚀]` AddedMailchimp market toolkit
-   `[feature - 🚀]` Enhanced Hubspot Marketing & CRM toolkit

** Servers**

-   `[maintenance - 🔧]` Better Handling of \-specific `Context` usage for managed servers
-   `[maintenance - 🔧]` Set server version for `@app.tool` and `MCPApp.add_tool`
-   `[maintenance - 🔧]` Better errors in UI and CLI if `arcade deploy` fails t **Platform and Engine**
-   `[feature - 🚀]` Optional customization of OAuth request header format for upstrem  Servers
-   `[bugfix - 🐛]` Fix  token refresh
-   `[maintenance - 🔧]` Add log viewing for managed  Servers

**Misc**

-   `[documentation - 📝]` Fix site search

## 2025-10-31

**Toolkits**

-   `[feature - 🚀]` Added new HubSpot Marketing & CRM starter
-   `[feature - 🚀]` Added Exa.ai Starter  Server
-   `[feature - 🚀]` Added Asana starter toolkit
-   `[feature - 🚀]` Added Github starter toolkit
-   `[feature - 🚀]` Added Pylon Starter Toolkit
-   `[feature - 🚀]` Added Posthog Starter Toolkit
-   `[feature - 🚀]` Added Clickup Starter Toolkit

**CLI and TDK**

-   `[feature - 🚀]` `arcade deploy` CLI Command

**Platform and Engine**

-   `[feature - 🚀]` Add non-root  to platform image for improved security

**Misc**

-   `[documentation - 📝]` Fix  reference examples

## 2025-10-24

**Toolkits**

-   `[feature - 🚀]` \[Toolkits/Ticktick\] Added Ticktick Starter Toolkit
-   `[feature - 🚀]` \[Toolkits/Weaviate\] Added Weaviate Starter Toolkit
-   `[feature - 🚀]` \[Toolkits/Vercel\] Added Vercel Starter Toolkit
-   `[feature - 🚀]` \[Toolkits/Datadog\] Added Datadog Starter Toolkit
-   `[feature - 🚀]` \[Toolkits/Freshservice\] New Freshservice   with complex objects handling

**Platform and Engine**

-   `[feature - 🚀]` Dashboard: Add redirect\_uri to  Servers
-   `[feature - 🚀]` Dashboard: Add OAuth fields to  Servers

## 2025-10-17

We’ve updated our documentation to be more clear, consistent, and easier to navigate. This includes updated quickstarts, guides, and reference information. [Let us know what you think](/resources/contact-us.md)!

This week we released `arcade-mcp`, the best way to build  Servers. `arcade-mcp` supersedes the Arcade TDK. Learn more about it [here](/get-started/quickstarts/mcp-server-quickstart.md)! Detailed reference information for `arcade-mcp` is available [here](/references/mcp/python.md).

This week  Gateways are now generally available!  allow you to federate the tools from multiple  into a single collection for easier management, control, and access. Learn more about them \[here\](/guides/create-/mcp-gateways!

This week projects are now generally available! Projects are a new way to organize your  Servers, , and secrets for easier management, control, and access.

**Toolkits**

-   `[feature - 🚀]` `arcade-mcp` is now generally available! Learn more about it [here](/get-started/quickstarts/mcp-server-quickstart.md)
    !
-   `[feature - 🚀]` \[Toolkits/BrightData\] Added BrightData Toolkit
-   `[feature - 🚀]` \[Toolkits/Figma\] Added Figma Starter  Server
-   `[feature - 🚀]` \[Toolkits/Freshservice\] Added Freshservice Starter  Server
-   `[feature - 🚀]` \[Toolkits/Cursor Agents\] Added Cursor Agents Starter  Server
-   `[feature - 🚀]` \[Toolkits/AirTable\] Added AirTable starter  Server
-   `[feature - 🚀]` \[Toolkits/Miro\] Added Miro Starter  Server
-   `[feature - 🚀]` \[Toolkits/PagerDuty\] Added PagerDuty Starter  Server
-   `[feature - 🚀]` `arcade deploy` for  Servers built with `arcade-mcp`

**Platform and Engine**

-   `[feature - 🚀]` Dashboard: Allow OAuth on  Servers
-   `[feature - 🚀]`  Gateways are now generally available! Learn more about them \[here\](/guides/create-/mcp-gateways!
-   `[feature - 🚀]`  are now generally available.
-   `[maintenance - 🔧]` Support remote  servers which require DCR (dynamic client registration).

**Misc**

-   `[documentation - 📝]` Updated documentation to be more clear, consistent, and easier to navigate. This includes updated quickstarts, guides, and reference information.
-   `[documentation - 📝]` `llms.txt` is now kept up to date and simplified. We’ve also added a new section to the docs for [agentic development](/get-started/setup/connect-arcade-docs.md)
    .

## 2025-10-10

**Toolkits**

-   `[feature - 🚀]` \[Toolkits/Trello\] Added Trello
-   `[feature - 🚀]` \[Toolkits/Calendly\] Added Calendly starter toolkit
-   `[feature - 🚀]` \[Toolkits/SquareUp\] Added SquareUp toolkit
-   `[feature - 🚀]` \[Toolkits/Xero\] Xero API Starter  server

** Servers**

-   `[feature - 🚀]` Added reference area to `arcade-mcp` docs ([PR #488](https://github.com/ArcadeAI/docs/pull/488)
     )

**Platform and Engine**

-   `[feature - 🚀]` \[Engine/OAuth\] Adding SquareUp OAuth

**Platform and Engine**

-   `[bugfix - 🔧]` Dashboard: Hide edit and delete button text in mobile

## 2025-10-03

**Toolkits**

-   `[feature - 🚀]` Box.com Starter  Server released ([docs](/resources/integrations/productivity/boxapi.md)
    )
-   `[feature - 🚀]` Stripe Starter  Server released ([docs](/resources/integrations/payments/stripeapi.md)
    )

**Misc**

-   `[documentation - 📝]` Add FAQ explaining personal vs

## 2025-09-26

**Toolkits**

-   `[feature - 🚀]` Introduce [Unoptimized tools](/guides/create-tools/improve/types-of-tools.md)
    , a new type of  that mirrors the original HTTP API design of the upstream service.
-   `[feature - 🚀]` Release Slack started  Server which contains support for most of the Slack API.
-   `[feature - 🚀]` Include advanced error handling in the following  Servers: Google, Microsoft, Slack, and Asana. Learn more about handling  errors [here](/guides/create-tools/error-handling/useful-tool-errors.md)
    .
-   `[bugfix - 🐛]` \[ Servers/MS Teams\] Fix get\_chat\_metadata by chat’s
-   `[feature - 🚀]` \[ Servers/confluence\] Adding WhoAmI  for Confluence

**CLI and TDK**

-   `[bugfix - 🐛]` Fix reference in `arcade docs` Python example template to USER\_ID instead of TOOL\_NAME

**Misc**

-   `[documentation - 📝]` Documents API wrapper vs LLM-native  Servers; includes Slack API wrapper  docs

## 2025-09-19

**Toolkits**

-   `[feature - 🚀]` \[Toolkits/ClickUp\] Removing no content additional messages in Evals
-   `[feature - 🚀]` \[Toolkits/MongoDB\] Add analytics MongoDB  Server ([PR #548](https://github.com/ArcadeAI/arcade-ai/pull/548)
     )
-   `[feature - 🚀]` \[ Servers/HubSpot\] Adding HubSpot  enhancements ([PR #441](https://github.com/ArcadeAI/docs/pull/441)
     )

**CLI and TDK**

-   `[maintenance - 🔧]` Update Mastra example  Server

**Misc**

-   `[documentation - 📝]` Term consistency ([PR #445](https://github.com/ArcadeAI/docs/pull/445)
     )
-   `[documentation - 📝]` Update  Error Handling ([PR #438](https://github.com/ArcadeAI/docs/pull/438)
     )
-   `[maintenance - 🔧]` Update Mastra example docs to better match the example repo ([PR #444](https://github.com/ArcadeAI/docs/pull/444)
     )

## 2025-09-12

**CLI and TDK**

-   `[feature - 🚀]` Added support for multiple types of errors from , and updated client libraries to aid in disambiguating rate-limiting and other forms of upstream errors ([Docs](https://github.com/ArcadeAI/docs/pull/438/files)
     ). Added in v1.10.0 in `aracde-js`, v1.8.0 in `aracde-py`, and v0.1.0-alpha.6 in `aracde-go`.
-   `[maintenance - 🔧]`Update langchain version for Arcade integrations

**Toolkits**

-   `[feature - 🚀]` Google Calendar improvements to video call scheduling ([Docs](https://github.com/ArcadeAI/docs/pull/436)
     )
-   `[feature - 🚀]` \[ Servers/Jira\] Added `WhoAmI` tool to Jira, Google, Clickup, Slack, and Zendesk  ([Docs](https://github.com/ArcadeAI/docs/pull/426)
     )

**Platform and Engine**

-   `[bugfix - 🐛]` Engine: Fix rate limiting algorithm
-   `[feature - 🚀]` Engine: Improve  Error Handling

**Misc**

-   `[documentation - 📝]` Add a FAQ for requesting over-scoped permissions for Google Drive and similar  ([docs PR #440](https://github.com/ArcadeAI/docs/pull/440)
     )

## 2025-09-05

**Toolkits**

-   `[feature - 🚀]` Imgflip  Server:  for memes ([docs PR #424](https://github.com/ArcadeAI/docs/pull/424)
     )
-   `[feature - 🚀]` Edit Google Document  ([docs PR #427](https://github.com/ArcadeAI/docs/pull/427)
     )
-   `[bugfix - 🐛]` \[Toolkits/clickup\] fix fuzzy match search

**Platform and Engine**

-   `[maintenance - 🔧]` Engine: updated stainless to generate SDK specs
-   `[feature - 🚀]` Dashboard: New sidebar and user-verification page & prepare for \-based resources

**CLI and TDK**

-   `[maintenance - 🔧]` upgraded langchain\_arcade ([PR #546](https://github.com/ArcadeAI/arcade-ai/pull/546)
     )

**Misc**

-   `[documentation - 📝]` Adding ClickUp documentation ([PR #413](https://github.com/ArcadeAI/docs/pull/413)
     )
-   `[documentation - 📝]` updated instructions on GH OAuth customization ([PR #425](https://github.com/ArcadeAI/docs/pull/425)
     )

## 2025-08-29

**Toolkits**

-   `[feature - 🚀]` Re-add GoogleNews  Server

**Platform and Engine**

-   `[feature - 🚀]` Dashboard: Update  Server and  selection UI in playground
-   `[feature - 🚀]` Dashboard: Add  Servers and OAuth providers from the design system
-   `[feature - 🚀]` Dashboard: Add optional request parameters when adding OAuth providers

**CLI and TDK**

-   `[feature - 🚀]` Improve Typedict and Basemodel support ([PR #523](https://github.com/ArcadeAI/arcade-ai/pull/523)
     )

**Misc**

-   `[documentation - 📝]` Add ClickUp  documentation ([PR #404](https://github.com/ArcadeAI/docs/pull/404)
     )
-   `[documentation - 📝]` Fix glossary: change ‘Authentication Scope’ to ‘’ ([PR #419](https://github.com/ArcadeAI/docs/pull/419)
     )
-   `[documentation - 📝]` Added missing parameter to the usage example templates ([PR #537](https://github.com/ArcadeAI/arcade-ai/pull/537)
     )

## 2025-08-22

This week we released a new pricing model for Arcade which will be better for hobbyists and enterprises alike. Learn more here: [https://blog.arcade.dev/pricing-updates](https://blog.arcade.dev/pricing-updates) 

**Toolkits**

-   `[feature - 🚀]` \[X (Twitter)\] Reply to Tweet ([PR #415](https://github.com/ArcadeAI/docs/pull/415)
     )
-   `[feature - 🚀]` \[Jira Toolkit\] Add “Add To Sprint” and “Remove from Sprint”  ([PR #412](https://github.com/ArcadeAI/docs/pull/412)
     )
-   `[bugfix - 🐛]` \[Google Drive, Docs, Sheets, Slides Toolkits\] Remove file picker url from  response

**Platform and Engine**

-   `[feature - 🚀]` Arcade Cloud: New pricing model
-   `[feature - 🚀]` Authenticate communication between Engine and Coordinator via key exchange
-   `[feature - 🚀]` Engine: Add additional redis cert check options

## 2025-08-15

This week we enforced a new requirement for all OAuth providers: they must have a unique callback URL. This is a minor security change, but does require you to update your OAuth configuration. This can be updated from the dashboard.

**Toolkits**

-   `[feature - 🚀]` Sharepoint Toolkit added ([docs](/resources/integrations/productivity/sharepoint.md)
    )
-   `[feature - 🚀]` Google Slides Toolkit added
-   `[feature - 🚀]` Commenting on Google Docs added
-   `[bugfix - 🐛]` Improvements in Microsoft Teams message search  for better agentic experience. Fix bug when no messages match the search query.
-   `[bugfix - 🐛]` Fix bugs in Google Workspace search

**Platform and Engine**

-   `[feature - 🚀]` Custom OAuth providers now require a unique callback URL
-   `[bugfix - 🐛]` Engine: Resolve dynamic provider IDs when checking auth status
-   `[bugfix - 🐛]` Engine: Refresh token when checking the status of a completed request

**Misc**

-   `[documentation - 📝]` Document Microsoft scopes required by Arcade  Servers ([PR #409](https://github.com/ArcadeAI/docs/pull/409)
     )
-   `[documentation - 📝]` Microsoft SharePoint  Server documentation ([PR #400](https://github.com/ArcadeAI/docs/pull/400)
     )

## 2025-08-08

**Toolkits**

-   `[feature - 🚀]` Clickhouse Toolkit ([PR #527](https://github.com/ArcadeAI/arcade-ai/pull/527)
     )
-   `[feature - 🚀]` Add search to Google Drive
-   `[bugfix - 🐛]` Fix and docstring improvement in MS Teams  Server

**Platform and Engine**

-   `[feature - 🚀]` Add support for GPT-5 models
-   `[feature - 🚀]` Per-app redirect URI info

## 2025-08-01

**Toolkits**

-   `[feature - 🚀]` Microsoft Teams  Server added
-   `[feature - 🚀]` Jira Toolkit: Add List Sprints & Boards
-   `[feature - 🚀]` Google Sheets  Server: Add pagination to GetSpreadsheet
-   `[bugfix - 🐛]` Jira  Server: Return UI URL for items again
-   `[feature - 🚀]` Salesforce  Server: Configure subdomain & max concurrency through secrets
-   `[feature - 🚀]` Confluence  Server supports Atlassian multi-cloud

**CLI and TDK**

-   `[bugfix - 🐛]` Fixes for the CLI docs generator ([PR #524](https://github.com/ArcadeAI/arcade-ai/pull/524)
     )
-   `[feature - 🚀]` CLI: Rename auto-docs command to ‘docs’ and other improvements ([PR #518](https://github.com/ArcadeAI/arcade-ai/pull/518)
     )

## 2025-07-25

Most Arcade  Servers have been removed from the `github.com/ArcadeAI/arcade-ai` repository, and transitioned to closed-source. Toolkit source code remains available upon request for our paying customers. This enables us to iterate more quickly and provide a better experience for our customers. The previously open-sourced  are still available in the public repository’s git history.

**Toolkits**

-   `[feature - 🚀]` Support for multiple Atlassian Clouds in the Jira Toolkit ([PR #506](https://github.com/ArcadeAI/arcade-ai/pull/506)
     )

**CLI and TDK**

-   `[bugfix - 🐛]` Fix `arcade worker list` endpoints ([PR #504](https://github.com/ArcadeAI/arcade-ai/pull/504)
     )
-   `[feature - 🚀]` Support  Output in ValueSchema of ToolDefinition ([PR #487](https://github.com/ArcadeAI/arcade-ai/pull/487)
     )

**Platform and Engine**

-   `[feature - 🚀]` Self-service plan selection for Arcade Cloud and payment is now available.
-   `[bugfix - 🐛]` Dashboard: Userinfo config must respect response\_map property
-   `[feature - 🚀]` Dashboard: Add  Types in Metrics

**Misc**

-   `[documentation - 📝]` Update OAuth docs with user\_info\_request.response\_map ([PR #360](https://github.com/ArcadeAI/docs/pull/360)
     )
-   `[documentation - 📝]` Update Zendesk Custom OAuth ([PR #359](https://github.com/ArcadeAI/docs/pull/359)
     )
-   `[documentation - 📝]` Add code samples & screenshots to  verification doc ([PR #363](https://github.com/ArcadeAI/docs/pull/363)
     )

## 2025-07-18

Version 2.0.0 of the  was released this week. Upgrading to version 2.0.0 is recommended for all self-hosted developers, and includes an important security fix for [secure OAuth flows](/guides/user-facing-agents/secure-auth-production.md). After upgrading, all  will default to using the Arcade user verifier. If desired, you can then implement a custom user verifier in your application/ and make the switch via the Arcade Dashboard.

Self-hosed Arcade developers cannot be grandfathered into the old (insecure) behavior of skipping  verification once the Engine is upgraded to version 2.0.0 or higher.

**Frameworks**

**Toolkits**

-   `[feature - 🚀]` Add Linear Toolkit ([PR #465](https://github.com/ArcadeAI/arcade-ai/pull/465)
     )
-   `[feature - 🚀]` Add Zendesk Toolkit ([PR #458](https://github.com/ArcadeAI/arcade-ai/pull/458)
     )
-   `[bugfix - 🐛]` Fix bug in Slack  processing ([PR #488](https://github.com/ArcadeAI/arcade-ai/pull/488)
     )
-   `[bugfix - 🐛]` fix URL expansion in Twitter ([PR #500](https://github.com/ArcadeAI/arcade-ai/pull/500)
     )

**CLI and TDK**

-   `[feature - 🚀]` Toolkit docs generator command for Arcade CLI ([PR #414](https://github.com/ArcadeAI/arcade-ai/pull/414)
     )
-   `[feature - 🚀]` custom `callback_host` for arcade login ([PR #481](https://github.com/ArcadeAI/arcade-ai/pull/481)
     )

**Platform and Engine**

-   `[feature - 🚀]` Dashboard: Add filter for user id and providers in Connected
-   `[feature - 🚀]` Add new endpoint for upcoming scheduled subs
-   `[bugfix - 🐛]` Engine OAuth hardening: secure defaults, config updates, validation, additional API flags, and route for  confirmation
-   `[feature - 🚀]` Dashboard: UI for security settings
-   `[bugfix - 🐛]` Engine: Correctly handle nils in  responses
-   `[bugfix - 🐛]` Platform: Improved success & error pages for OAuth

**Misc**

-   `[documentation - 📝]` replaced creating  Server video with full tutorial ([PR #349](https://github.com/ArcadeAI/docs/pull/349)
     )
-   `[documentation - 📝]` Add secure/brand auth in production doc ([PR #341](https://github.com/ArcadeAI/docs/pull/341)
     )

## 2025-07-11

**Frameworks**

**Toolkits**

-   `[feature - 🚀]` Split previously combined Google, Microsoft, and other Toolkits into separate  Servers to aid in retrieval and maintenance ([PR #438](https://github.com/ArcadeAI/arcade-ai/pull/438)
     )
-   `[feature - 🚀]` Slack Toolkit: Major refactor and improvements ([PR #453](https://github.com/ArcadeAI/arcade-ai/pull/453)
     )

**CLI and TDK**

-   `[feature - 🚀]` `--debug` flag added for CLI commands ([PR #454](https://github.com/ArcadeAI/arcade-ai/pull/454)
     )

**Platform and Engine**

-   `[bugfix - 🐛]` Fix token refresh bug

**Misc**

-   `[documentation - 📝]` Document the OAuth scopes required by the Slack  Server ([PR #344](https://github.com/ArcadeAI/docs/pull/344)
     )

## 2025-07-04

**Toolkits**

-   `[bugfix - 🐛]` patching  Server template generator for outside the main repo
-   `[bugfix - 🐛]` Filter out unneeded files/directories before deploying workers ([PR #464](https://github.com/ArcadeAI/arcade-ai/pull/464)
     )

**Platform and Engine**

-   `[feature - 🚀]` Concurrent auth requests for the same user and same scopes use the same authentication flow and URLs. This means that your users only have to authenticate once if the  chooses to use multiple  at once with the same scopes.
-   `[bugfix - 🐛]` Fix secret deletion

**Cloud**

-   `[bugfix - 🐛]` Update cross-origin-opener-policy header to allow Google Drive File Picker popup

**Platform and Engine**

-   `[feature - 🚀]` Dashboard: Allow editing the description of a secret
-   `[feature - 🚀]` Dashboard: Preserve  when resetting parameters

## 2025-06-28

**Toolkits**

-   `[bugfix - 🐛]` Jira  Server: deduplicate cloud data in Atlassian’s available-resources response ([PR #456](https://github.com/ArcadeAI/arcade-ai/pull/456)
     )

## 2025-06-20

**Frameworks**

-   `[feature - 🚀]` Support for OpenAI  SDK in Typescript ([docs](/get-started/agent-frameworks/openai-agents/overview.md)
    )

**Toolkits**

-   `[feature - 🚀]` Jira  Server released ([docs](/resources/integrations/productivity/jira.md)
    )

**CLI and TDK**

-   `[feature - 🚀]` V2.0 of Python  Development Kit (TDK)
-   `[feature - 🚀]` Admin API client support
    -   Requires v1.6.0 of `arcade-py`, or v1.8.0 of `arcade-js`, or v0.1.0-alpha.4 of `arcade-go`

**Platform and Engine**

-   `[feature - 🚀]` Admin APIs released for managing users, secrets, and  ([API References](https://reference.arcade.dev/api-reference#tag/admin)
     )
-   `[bugfix - 🐛]` Unauthenticated  servers can be called anonymously
-   `[feature - 🚀]` End- credentials and auth status can be fetched in batches ([docs](/guides/tool-calling/custom-apps/check-auth-status.md)
    )

**Misc**

-   `[feature - 🚀]` Launched Github Discussions for product feedback and support ([link](https://github.com/ArcadeAI/arcade-ai/discussions)
     )
-   `[feature - 🚀]` Launched status.arcade.dev for monitoring platform status ([link](https://status.arcade.dev)
     )

Last updated on February 12, 2026

[Overview](/en/references.md)
[API](/en/references/api.md)
