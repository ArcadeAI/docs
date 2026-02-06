---
title: "X (formerly Twitter)"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
X (Twitter)

# X (formerly Twitter)

Arcade Optimized

**Description:** Enable agents to interact with X (formerly Twitter).

**Author:** Arcade

**Auth:** User authorization

[![PyPI Version](https://img.shields.io/pypi/v/arcade_x)](https://pypi.org/project/arcade_x/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_x)](https://pypi.org/project/arcade_x/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_x)](https://pypi.org/project/arcade_x/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_x)](https://pypi.org/project/arcade_x/)

The Arcade X (formerly Twitter) MCP Server provides a pre-built set of tools for interacting with X (formerly Twitter). These tools make it easy to build agents and AI apps that can:

-   Post tweets
-   Reply to tweets
-   Quote tweets
-   Delete tweets
-   Search for tweets by username
-   Search for tweets by keywords
-   Look up a user by username

## Available Tools

Tool Name

Description

X.LookupSingleUserByUsername

Look up a user on X (Twitter) by their username.

X.PostTweet

Post a tweet to X (Twitter).

X.ReplyToTweet

Reply to a tweet on X (Twitter).

X.DeleteTweetById

Delete a tweet on X (Twitter).

X.SearchRecentTweetsByUsername

Search for recent tweets (last 7 days) on X (Twitter) by username.

X.SearchRecentTweetsByKeywords

Search for recent tweets (last 7 days) on X (Twitter) by required keywords and phrases.

X.LookupTweetById

Look up a tweet on X (Twitter) by tweet ID.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## X.LookupSingleUserByUsername



Look up a user on X (Twitter) by their username.

**Parameters**

-   **username** (`string`, required) The username of the X (Twitter) user to look up

## X.PostTweet



Post a tweet to X (Twitter).

**Parameters**

-   **tweet\_text** (`string`, required) The text content of the tweet you want to post
-   **quote\_tweet\_id** (`string`, optional) The ID of the tweet you want to quote. Optional.

## X.ReplyToTweet



Reply to a tweet on X (Twitter).

**Parameters**

-   **tweet\_id** (`string`, required) The ID of the tweet you want to reply to
-   **tweet\_text** (`string`, required) The text content of the tweet you want to post
-   **quote\_tweet\_id** (`string`, optional) The ID of the tweet you want to quote. Optional.

## X.DeleteTweetById



Delete a tweet on X (Twitter).

**Parameters**

-   **tweet\_id** (`string`, required) The ID of the tweet you want to delete

## X.SearchRecentTweetsByUsername



Search for recent tweets (last 7 days) on X (Twitter) by username.

**Parameters**

-   **username** (`string`, required) The username of the X (Twitter) user to look up
-   **max\_results** (`integer`, optional) The maximum number of results to return. Must be in range \[1, 100\] inclusive
-   **next\_token** (`string`, optional) The pagination token starting from which to return results

## X.SearchRecentTweetsByKeywords



Search for recent tweets (last 7 days) on X (Twitter) by required keywords and phrases.

**Parameters**

-   **keywords** (`array[string]`, optional) List of keywords that must be present in the tweet
-   **phrases** (`array[string]`, optional) List of phrases that must be present in the tweet
-   **max\_results** (`integer`, optional) The maximum number of results to return. Must be in range \[1, 100\] inclusive
-   **next\_token** (`string`, optional) The pagination token starting from which to return results

## X.LookupTweetById



Look up a tweet on X (Twitter) by tweet ID.

**Parameters**

-   **tweet\_id** (`string`, required) The ID of the tweet you want to look up

## Auth

The Arcade X MCP Sever uses the [X auth provider](/references/auth-providers/x.md) to connect to users’ X accounts. Please refer to the [X auth provider](/references/auth-providers/x.md) documentation to learn how to configure auth.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_x ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Reference](/en/resources/integrations/social-communication/twilio/reference.md)
[Zoom](/en/resources/integrations/social-communication/zoom.md)
