---
title: "Google Jobs"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Google Jobs

# Google Jobs

Arcade OptimizedBYOCPro

**Description:** Enable agents to search for job openings with Google Jobs.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-jobs)](https://pypi.org/project/arcade_google-jobs/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-jobs)](https://pypi.org/project/arcade_google-jobs/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-jobs)](https://pypi.org/project/arcade_google-jobs/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-jobs)](https://pypi.org/project/arcade_google-jobs/)

The Arcade Google Jobs MCP Server provides a pre-built set of tools for interacting with Google Jobs. These tools make it easy to build agents and AI apps that can:

-   Search for job openings with Google Jobs.

## Available Tools

Tool Name

Description

GoogleJobs.SearchJobs

Search for job openings with Google Jobs.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## GoogleJobs.SearchJobs



Search for job openings with Google Jobs.

**Parameters**

-   **`query`** _(string, required)_ Search query. Provide a job title, company name, and/or any keywords in general representing what kind of jobs the user is looking for.
-   **`location`** _(string, optional, Defaults to `None`)_ Location to search for jobs. E.g. ‘United States’ or ‘New York, NY’. Defaults to None.
-   **`language`** _(string, optional, Defaults to ‘en’ English)_ 2-character language code to use in the Google Jobs search.
-   **`limit`** _(int, optional, Defaults to 10)_ Maximum number of results to retrieve. Defaults to 10 (max supported by the API).
-   **`next_page_token`** _(string, optional, Defaults to `None`)_ Next page token to paginate results. Defaults to None (start from the first page).

## Auth

The Arcade Google Jobs MCP Sever uses the [SerpAPI](https://serpapi.com/)  to get job data from Google Jobs.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

        Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.


## Default parameters

Language is configurable through environment variables. When set, they will be used as default for Google Jobs tools.

Providing a different value as `language` argument in a tool call will override the default value.

**Language**

The language code is a 2-character code that determines the language in which the API will search and return news articles. There are two environment variables:

-   `ARCADE_GOOGLE_LANGUAGE`: a default value for all Google search tools. If not set, defaults to ‘en’ (English).
-   `ARCADE_GOOGLE_JOBS_LANGUAGE`: a default value for the jobs search tools. If not set, defaults to `ARCADE_GOOGLE_LANGUAGE`.

A list of supported language codes can be found [here](#languagecodes).

## LanguageCodes

-   **`ar`**: Arabic
-   **`bn`**: Bengali
-   **`da`**: Danish
-   **`de`**: German
-   **`el`**: Greek
-   **`en`**: English
-   **`es`**: Spanish
-   **`fi`**: Finnish
-   **`fr`**: French
-   **`hi`**: Hindi
-   **`hu`**: Hungarian
-   **`id`**: Indonesian
-   **`it`**: Italian
-   **`ja`**: Japanese
-   **`ko`**: Korean
-   **`ms`**: Malay
-   **`nl`**: Dutch
-   **`no`**: Norwegian
-   **`pcm`**: Nigerian Pidgin
-   **`pl`**: Polish
-   **`pt`**: Portuguese
-   **`pt-br`**: Portuguese (Brazil)
-   **`pt-pt`**: Portuguese (Portugal)
-   **`ru`**: Russian
-   **`sv`**: Swedish
-   **`tl`**: Filipino
-   **`tr`**: Turkish
-   **`uk`**: Ukrainian
-   **`zh`**: Chinese
-   **`zh-cn`**: Chinese (Simplified)
-   **`zh-tw`**: Chinese (Traditional)

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_jobs ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Google Hotels](/en/resources/integrations/search/google_hotels.md)
[Google Maps](/en/resources/integrations/search/google_maps.md)
