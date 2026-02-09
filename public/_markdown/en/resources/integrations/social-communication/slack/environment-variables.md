---
title: "Environment Variables"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
[Slack](/en/resources/integrations/social-communication/slack.md)
Environment Variables

# Environment Variables

### `SLACK_MAX_CONCURRENT_REQUESTS`

Arcade uses asynchronous calls to request Slack API endpoints. In some tools, multiple concurrent HTTP requests may be issued to speed up execution. This environment variable controls the maximum number of concurrent requests to Slack API in any tool execution.

The value must be a numeric string with an integer greater than or equal to 1.

**Default:** `3`

### `MAX_PAGINATION_SIZE_LIMIT`

This environment variable controls the maximum number of items requested in a single call to a Slack API endpoint. Some of the Slack tools allow the tool caller to request a larger number of items per tool call, but the tool will paginate the results internally while respecting the `MAX_PAGINATION_SIZE_LIMIT`.

**Default:** `200` (Slack supports, but discourages a limit larger than 200)

### `MAX_PAGINATION_TIMEOUT_SECONDS`

Controls the maximum number of seconds any given Slack tool should wait while paginating responses from the Slack API.

**Default:** `30` (expressed in seconds)

Last updated on February 7, 2026

[Slack](/en/resources/integrations/social-communication/slack.md)
[Reference](/en/resources/integrations/social-communication/slack/reference.md)
