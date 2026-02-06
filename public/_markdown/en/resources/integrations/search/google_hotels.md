---
title: "Google Hotels"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Google Hotels

# Google Hotels

Arcade OptimizedBYOCPro

**Description:** Empower your agents to search for hotels using Arcade.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-hotels)](https://pypi.org/project/arcade_google-hotels/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-hotels)](https://pypi.org/project/arcade_google-hotels/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-hotels)](https://pypi.org/project/arcade_google-hotels/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-hotels)](https://pypi.org/project/arcade_google-hotels/)

The Arcade Google Hotels MCP Sever lets you search for hotels with ease. Use this tool to build intelligent agents and applications that search for hotels worldwide.

## Available Tools

Tool Name

Description

GoogleHotels.SearchHotels

Retrieve hotel search results using the Google Hotels API.

## GoogleHotels.SearchHotels

Retrieve hotel search results using the Google Hotels API.

**Parameters**

-   **`location`** _(string, required)_: Location to search for hotels, e.g., a city name, a state, etc.
-   **`check_in_date`** _(string, required)_: Check-in date in YYYY-MM-DD format.
-   **`check_out_date`** _(string, required)_: Check-out date in YYYY-MM-DD format.
-   **`query`** _(string, optional)_: Anything that would be used in a regular Google Hotels search.
-   **`currency`** _(string, optional)_: Currency code for prices. Defaults to ‘USD’.
-   **`min_price`** _(int, optional)_: Minimum price per night. Defaults to no minimum.
-   **`max_price`** _(int, optional)_: Maximum price per night. Defaults to no maximum.
-   **`num_adults`** _(int, optional)_: Number of adults per room. Defaults to 2.
-   **`num_children`** _(int, optional)_: Number of children per room. Defaults to 0.
-   **`sort_by`** _(enum ([GoogleHotelsSortBy](#googlehotelssortby)
    ), optional)_: The sorting order of the results. Defaults to RELEVANCE.
-   **`num_results`** _(int, optional)_: Maximum number of results to return. Defaults to 5. Max 20.



## Auth

The Arcade Google Hotels MCP Sever uses the [SerpAPI](https://serpapi.com/)  to search for hotels from Google Hotels.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.

## Reference

## GoogleHotelsSortBy

Defines the sorting options for hotel search results.

-   **`RELEVANCE`**: Sort by the most relevant results.
-   **`LOWEST_PRICE`**: Sort by the lowest price available.
-   **`HIGHEST_RATING`**: Sort by the highest customer ratings.
-   **`MOST_REVIEWED`**: Sort by the most reviewed hotels.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_hotels ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Google Flights](/en/resources/integrations/search/google_flights.md)
[Google Jobs](/en/resources/integrations/search/google_jobs.md)
