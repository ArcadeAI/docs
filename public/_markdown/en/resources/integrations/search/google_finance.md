---
title: "Google Finance"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
Search ToolsGoogle Finance

# Google Finance

Arcade OptimizedBYOCPro

**Description:** Empower your agents to retrieve stock data using Arcade.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-finance)](https://pypi.org/project/arcade_google-finance/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-finance)](https://pypi.org/project/arcade_google-finance/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-finance)](https://pypi.org/project/arcade_google-finance/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-finance)](https://pypi.org/project/arcade_google-finance/)

The Arcade Google Finance MCP Sever lets you fetch real-time and historical stock data with ease. Use these tools to build intelligent agents and applications that fetch:

-   Stock summary data.
-   Historical stock data.

## Available Tools

Tool Name

Description

GoogleFinance.GetStockSummary

Retrieve current price and recent price movement of a stock.

GoogleFinance.GetStockHistoricalData

Fetch historical stock price and volume data for a specified time window.

If you need an action that’s not listed here, please [contact us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## GoogleFinance.GetStockSummary

Retrieve summary information for a given stock using the Google Finance API via SerpAPI. This tool returns the current price and price change from the most recent trading day.

**Parameters**

-   **`ticker_symbol`** _(string, required)_: The stock ticker, e.g., ‘GOOG’.
-   **`exchange_identifier`** _(string, required)_: The market identifier, e.g., ‘NASDAQ’.



## GoogleFinance.GetStockHistoricalData

Fetch historical data for a given stock over a defined time window. This tool returns the stock’s price and volume data along with key events when available.

**Parameters**

-   **`ticker_symbol`** _(string, required)_: The stock ticker, e.g., ‘GOOG’.
-   **`exchange_identifier`** _(string, required)_: The market identifier, e.g., ‘NASDAQ’ or ‘NYSE’.
-   **`window`** _(enum ([GoogleFinanceWindow](#googlefinancewindow)
    ), optional, defaults to ONE\_MONTH)_: Time window for the graph data.



## Auth

The Arcade Google Finance MCP Sever uses the [SerpAPI](https://serpapi.com/)  to get stock data from Google Finance.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

        Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.


* * *

## Reference

## GoogleFinanceWindow

Defines the time window for fetching stock data from Google Finance.

-   **`ONE_DAY`**: Represents a 1-day time window.
-   **`FIVE_DAYS`**: Represents a 5-day time window.
-   **`ONE_MONTH`**: Represents a 1-month time window.
-   **`SIX_MONTHS`**: Represents a 6-month time window.
-   **`YEAR_TO_DATE`**: Represents the time from the start of the year to the current date.
-   **`ONE_YEAR`**: Represents a 1-year time window.
-   **`FIVE_YEARS`**: Represents a 5-year time window.
-   **`MAX`**: Represents the maximum available time window.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_finance ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[ZohoBooksApi](/en/resources/integrations/payments/zoho-books-api.md)
[Google Flights](/en/resources/integrations/search/google_flights.md)
