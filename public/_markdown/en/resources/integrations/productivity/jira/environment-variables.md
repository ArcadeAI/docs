---
title: "Jira Environment Variables"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Productivity & Docs](/en/resources/integrations/productivity/asana.md)
[Jira](/en/resources/integrations/productivity/jira.md)
Environment Variables

# Jira Environment Variables

### `JIRA_MAX_CONCURRENT_REQUESTS`

Arcade uses asynchronous calls to request Jira API endpoints. In some tools, multiple concurrent HTTP requests may be made to speed up execution. This environment variable controls the maximum number of concurrent requests to Jira API in any tool execution.

The value must be a numeric string with an integer greater than or equal to 1.

**Default:** `3`

### `JIRA_API_REQUEST_TIMEOUT`

Controls the maximum number of seconds to wait for a response from the Jira API. This is also applied, in some cases, as a global max timeout for multiple requests that are made in a single tool execution. For instance, when a tool needs to paginate results from a given endpoint, this timeout may apply to the entire pagination process in total, not only to the individual requests.

The value must be a numeric string with an integer greater than or equal to 1.

**Default:** `30`

### `JIRA_CACHE_MAX_ITEMS`

The caching strategy does not involve caching Jira API responses that go into tool output, but only internal values.

The Arcade Jira MCP Server will cache some values that are repeatedly used in tool execution to enable better performance. This environment variable controls the maximum number of items to hold in each cache.

The value must be a numeric string with an integer greater than or equal to 1.

**Default:** `5000`

Last updated on February 7, 2026

[Reference](/en/resources/integrations/productivity/jira/reference.md)
[Linear](/en/resources/integrations/productivity/linear.md)
