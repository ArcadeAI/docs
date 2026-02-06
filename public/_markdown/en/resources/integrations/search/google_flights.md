---
title: "Google Flights"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Google Flights

# Google Flights

Arcade OptimizedBYOCPro

**Description:** Empower your agents to search for flights using Arcade.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-flights)](https://pypi.org/project/arcade_google-flights/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-flights)](https://pypi.org/project/arcade_google-flights/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-flights)](https://pypi.org/project/arcade_google-flights/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-flights)](https://pypi.org/project/arcade_google-flights/)

The Arcade Google Flights MCP Sever lets you search for flights with ease. Use these tools to build intelligent agents and applications that:

-   Search for one-way flights.

## Available Tools

Tool Name

Description

GoogleFlights.SearchOneWayFlights

Retrieve one-way flight search results using Google Flights.

## GoogleFlights.SearchOneWayFlights

Retrieve flight search results for a one-way flight using Google Flights.

**Parameters**

-   **`departure_airport_code`** _(string, required)_: The departure airport code. An uppercase 3-letter code.
-   **`arrival_airport_code`** _(string, required)_: The arrival airport code. An uppercase 3-letter code.
-   **`outbound_date`** _(string, required)_: Flight departure date in YYYY-MM-DD format.
-   **`currency_code`** _(string, optional)_: Currency of the returned prices. Defaults to ‘USD’.
-   **`travel_class`** _(enum ([GoogleFlightsTravelClass](#googleflightstravelclass)
    ), optional)_: Travel class of the flight. Defaults to ‘ECONOMY’.
-   **`num_adults`** _(int, optional)_: Number of adult passengers. Defaults to 1.
-   **`num_children`** _(int, optional)_: Number of child passengers. Defaults to 0.
-   **`max_stops`** _(enum ([GoogleFlightsMaxStops](#googleflightsmaxstops)
    ), optional)_: Maximum number of stops (layovers) for the flight. Defaults to any number of stops.
-   **`sort_by`** _(enum ([GoogleFlightsSortBy](#googleflightssortby)
    ), optional)_: The sorting order of the results. Defaults to TOP\_FLIGHTS.



## Auth

The Arcade Google Flights MCP Sever uses the [SerpAPI](https://serpapi.com/)  to search for flights from Google Flights.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.

* * *

## Reference

## GoogleFlightsMaxStops

Defines the maximum number of stops for flights.

-   **`ANY`**: Any number of stops is allowed.
-   **`NONSTOP`**: Only nonstop flights are allowed.
-   **`ONE`**: Only flights with one stop are allowed.
-   **`TWO`**: Only flights with two stops are allowed.

## GoogleFlightsSortBy

Defines the sorting options for flight search results.

-   **`TOP_FLIGHTS`**: Sort by the best available flights.
-   **`PRICE`**: Sort by the lowest price.
-   **`DEPARTURE_TIME`**: Sort by the earliest departure time.
-   **`ARRIVAL_TIME`**: Sort by the earliest arrival time.
-   **`DURATION`**: Sort by the shortest flight duration.
-   **`EMISSIONS`**: Sort by the lowest carbon emissions.

## GoogleFlightsTravelClass

Defines the travel class options for flights.

-   **`ECONOMY`**: Economy class.
-   **`PREMIUM_ECONOMY`**: Premium economy class.
-   **`BUSINESS`**: Business class.
-   **`FIRST`**: First class.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_flights ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Google Finance](/en/resources/integrations/search/google_finance.md)
[Google Hotels](/en/resources/integrations/search/google_hotels.md)
