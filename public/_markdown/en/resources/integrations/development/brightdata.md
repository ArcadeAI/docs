---
title: "Brightdata"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Developer Tools](/en/resources/integrations/development/e2b.md)
Brightdata

# Brightdata

CommunityBYOC

**Description:** Search, Crawl and Scrape any site, at scale, without getting blocked

**Author:** Meirk-Brightdata

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_brightdata)](https://pypi.org/project/arcade_brightdata/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_brightdata)](https://pypi.org/project/arcade_brightdata/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_brightdata)](https://pypi.org/project/arcade_brightdata/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_brightdata)](https://pypi.org/project/arcade_brightdata/)

The Brightdata MCP Server provides tools for scraping and extracting web content and structured data at scale. Main capabilities include:

-   Scrape web pages and return cleaned content in Markdown (ScrapeAsMarkdown).
-   Perform advanced web searches across Google, Bing, or Yandex with customizable parameters (SearchEngine).
-   Extract structured feeds from many site types (Amazon, LinkedIn, Instagram, Facebook, YouTube, Zillow, Booking, ZoomInfo, X, etc.), including products, reviews, profiles, posts, comments, listings, and videos (WebDataFeed). Note: do not fabricate links—use the search tool first if needed.

## Available Tools

Tool Name

Description

Brightdata.ScrapeAsMarkdown

Scrape a webpage and return content in Markdown format using Bright Data.

Brightdata.SearchEngine

Search using Google, Bing, or Yandex with advanced parameters using Bright Data.

Brightdata.WebDataFeed

Extract structured data from various websites like LinkedIn, Amazon, Instagram, etc.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Brightdata.ScrapeAsMarkdown



Scrape a webpage and return content in Markdown format using Bright Data.

**Parameters**

-   **url** (`string`, required) URL to scrape

**Secrets**

This tool requires the following secrets: `BRIGHTDATA_API_KEY`, `BRIGHTDATA_ZONE` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Brightdata.SearchEngine



Search using Google, Bing, or Yandex with advanced parameters using Bright Data.

**Parameters**

-   **query** (`string`, required) Search query
-   **engine** (`Enum` [SearchEngine](#SearchEngine)
    , optional) Search engine to use
-   **language** (`string`, optional) Two-letter language code
-   **country\_code** (`string`, optional) Two-letter country code
-   **search\_type** (`Enum` [SearchType](#SearchType)
    , optional) Type of search
-   **start** (`integer`, optional) Results pagination offset
-   **num\_results** (`integer`, optional) Number of results to return. The default is 10
-   **location** (`string`, optional) Location for search results
-   **device** (`Enum` [DeviceType](#DeviceType)
    , optional) Device type
-   **return\_json** (`boolean`, optional) Return JSON instead of Markdown

**Secrets**

This tool requires the following secrets: `BRIGHTDATA_API_KEY`, `BRIGHTDATA_ZONE` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Brightdata.WebDataFeed



Extract structured data from various websites like LinkedIn, Amazon, Instagram, etc.

**Parameters**

-   **source\_type** (`Enum` [SourceType](#SourceType)
    , required) Type of data source
-   **url** (`string`, required) URL of the web resource to extract data from
-   **num\_of\_reviews** (`integer`, optional) Number of reviews to retrieve. Only applicable for facebook\_company\_reviews. Default is None
-   **timeout** (`integer`, optional) Maximum time in seconds to wait for data retrieval
-   **polling\_interval** (`integer`, optional) Time in seconds between polling attempts

**Secrets**

This tool requires the following secrets: `BRIGHTDATA_API_KEY` (learn how to [configure secrets](/guides/create-tools/tool-basics/create-tool-secrets.md))

## Secrets

This tool requires the following secrets:

-   `BRIGHTDATA_API_KEY`
-   `BRIGHTDATA_ZONE`

### Auth

The Arcade Bright Data MCP Server uses [Bright Data](https://brightdata.com/)  to access proxy networks and web scraping infrastructure.

**Global Environment Variables:**

-   `BRIGHTDATA_API_KEY`: Your Bright Data API key. You can generate this from your [Bright Data dashboard](https://brightdata.com/cp/zones)  under Account Settings → API Access.

-   `BRIGHTDATA_ZONE`: Your Bright Data zone name (e.g., `residential_proxy1`). This is the zone identifier you created in your Bright Data dashboard under Proxies & Scraping Infrastructure → Zones.


**How to get your credentials:**

1.  **API Key**: Navigate to your [Bright Data Control Panel](https://brightdata.com/cp)
      → Settings → API Access → Generate API Token
2.  **Zone**: Go to Zones section in your dashboard, find your zone name in the format shown in the zone username: `brd-customer-{customer_id}-zone-{zone_name}`

For more details, see the [Bright Data API Documentation](https://docs.brightdata.com/api-reference) .

## Reference

Below is a reference of enumerations used by some of the tools in the Brightdata MCP Server:

### SearchEngine

-   **GOOGLE**: `google`
-   **BING**: `bing`
-   **YANDEX**: `yandex`

### SearchType

-   **IMAGES**: `images`
-   **SHOPPING**: `shopping`
-   **NEWS**: `news`
-   **JOBS**: `jobs`

### DeviceType

-   **MOBILE**: `mobile`
-   **IOS**: `ios`
-   **IPHONE**: `iphone`
-   **IPAD**: `ipad`
-   **ANDROID**: `android`
-   **ANDROID\_TABLET**: `android_tablet`

### SourceType

-   **AMAZON\_PRODUCT**: `amazon_product`
-   **AMAZON\_PRODUCT\_REVIEWS**: `amazon_product_reviews`
-   **LINKEDIN\_PERSON\_PROFILE**: `linkedin_person_profile`
-   **LINKEDIN\_COMPANY\_PROFILE**: `linkedin_company_profile`
-   **ZOOMINFO\_COMPANY\_PROFILE**: `zoominfo_company_profile`
-   **INSTAGRAM\_PROFILES**: `instagram_profiles`
-   **INSTAGRAM\_POSTS**: `instagram_posts`
-   **INSTAGRAM\_REELS**: `instagram_reels`
-   **INSTAGRAM\_COMMENTS**: `instagram_comments`
-   **FACEBOOK\_POSTS**: `facebook_posts`
-   **FACEBOOK\_MARKETPLACE\_LISTINGS**: `facebook_marketplace_listings`
-   **FACEBOOK\_COMPANY\_REVIEWS**: `facebook_company_reviews`
-   **X\_POSTS**: `x_posts`
-   **ZILLOW\_PROPERTIES\_LISTING**: `zillow_properties_listing`
-   **BOOKING\_HOTEL\_LISTINGS**: `booking_hotel_listings`
-   **YOUTUBE\_VIDEOS**: `youtube_videos`

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_brightdata ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[ArcadeEngineApi](/en/resources/integrations/development/arcade-engine-api.md)
[CursorAgentsApi](/en/resources/integrations/development/cursor-agents-api.md)
