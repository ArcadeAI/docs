---
title: "Google Search"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Google Search

# Google Search

Arcade OptimizedBYOCPro

**Description:** Enable agents to perform Google searches using SerpAPI.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-search)](https://pypi.org/project/arcade_google-search/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-search)](https://pypi.org/project/arcade_google-search/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-search)](https://pypi.org/project/arcade_google-search/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-search)](https://pypi.org/project/arcade_google-search/)

The Arcade Search MCP Server provides a pre-built set of tools for interacting with Google search results. These tools make it easy to build agents and AI apps that can:

-   Search Google and return results.

## Available Tools

Tool Name

Description

GoogleSearch.Search

Search Google and return organic results.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## GoogleSearch.Search



Search Google using SerpAPI and return organic search results.

**Parameters**

-   **`query`** _(string, required)_ The search query.
-   **`n_results`** _(integer, optional, Defaults to 5)_ Number of results to retrieve.

## Auth

The Arcade Google Search MCP Sever uses the [SerpAPI](https://serpapi.com/)  to get get results from a Google search.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

        Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.


## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_search ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Google News](/en/resources/integrations/search/google_news.md)
[Google Shopping](/en/resources/integrations/search/google_shopping.md)
