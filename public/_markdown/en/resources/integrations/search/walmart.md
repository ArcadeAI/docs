---
title: "Walmart Search"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Walmart

# Walmart Search

Arcade OptimizedBYOCPro

**Description:** Enable agents to search for products with Walmart.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_walmart)](https://pypi.org/project/arcade_walmart/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_walmart)](https://pypi.org/project/arcade_walmart/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_walmart)](https://pypi.org/project/arcade_walmart/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_walmart)](https://pypi.org/project/arcade_walmart/)

The Arcade Walmart Search MCP Server provides a pre-built set of tools for interacting with Walmart. These tools make it easy to build agents and AI apps that can:

-   Search for products listed on Walmart stores;
-   Get details about a product.

## Available Tools

Tool Name

Description

Walmart.SearchProducts

Search for products listed on Walmart stores.

Walmart.GetProductDetails

Get details about a product listed on Walmart.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Walmart.SearchProducts



Search for products listed on Walmart stores.

**Parameters**

-   **keywords** _(string, required)_ Keywords to search for. E.g. ‘apple iphone’ or ‘samsung galaxy’
-   **sort\_by** _(enum [WalmartSortBy](#walmartsortby)
    , optional, Defaults to `WalmartSortBy.RELEVANCE`)_ Sort the results by the specified criteria. Defaults to `WalmartSortBy.RELEVANCE`.
-   **min\_price** _(float, optional, Defaults to `None`)_ Minimum price to filter the results.
-   **max\_price** _(float, optional, Defaults to `None`)_ Maximum price to filter the results.
-   **next\_day\_delivery** _(bool, optional, Defaults to `False`)_ Whether to filter the results by next day delivery. Defaults to False (returns all products, regardless of delivery status).
-   **page** _(int, optional, Defaults to `1`)_ Page number to fetch. Defaults to 1 (first page of results). The maximum page value is 100.

## Walmart.GetProductDetails



Get details about a product listed on Walmart.

**Parameters**

-   **item\_id** _(string, required)_ Item ID. E.g. ‘414600577’. This can be retrieved from the search results of the `SearchWalmartProducts` tool.

## Auth

The Arcade Walmart Search MCP Sever uses the [SerpAPI](https://serpapi.com/)  to get product information from Walmart.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

        Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.


* * *

## Reference

## WalmartSortBy

-   **`RELEVANCE`**: `'relevance_according_to_keywords_searched'` - Sort by relevance.
-   **`PRICE_LOW_TO_HIGH`**: `'lowest_price_first'` - Sort by price from low to high.
-   **`PRICE_HIGH_TO_LOW`**: `'highest_price_first'` - Sort by price from high to low.
-   **`BEST_SELLING`**: `'best_selling_products_first'` - Sort by best selling.
-   **`RATING_HIGH`**: `'highest_rating_first'` - Sort by rating from high to low.
-   **`NEW_ARRIVALS`**: `'new_arrivals_first'` - Sort by new arrivals.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_walmart ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Google Shopping](/en/resources/integrations/search/google_shopping.md)
[YouTube](/en/resources/integrations/search/youtube.md)
