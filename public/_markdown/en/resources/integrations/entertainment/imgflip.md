---
title: "Imgflip"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
EntertainmentImgflip

# Imgflip

Arcade OptimizedBYOCPro

**Description:** Enable agents to create memes with Imgflip.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_imgflip)](https://pypi.org/project/arcade_imgflip/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_imgflip)](https://pypi.org/project/arcade_imgflip/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_imgflip)](https://pypi.org/project/arcade_imgflip/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_imgflip)](https://pypi.org/project/arcade_imgflip/)

The Arcade Imgflip MCP Server provides a pre-built set of tools for interacting with Imgflip. These tools make it easy to build agents and AI apps that can:

-   Create memes
-   Search for memes
-   Get popular meme templates

## Available Tools

These tools are currently available in the Arcade Imgflip MCP Sever.

Tool Name

Description

Imgflip.SearchMemes

Search for meme templates by query (Premium feature)

Imgflip.GetPopularMemes

Get popular meme templates from Imgflip

Imgflip.CreateMeme

Create a custom meme using an Imgflip template

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## Imgflip.SearchMemes



Search for meme templates by query (Premium feature)

This tool searches through Imgflip’s database of over 1 million meme templates to find ones that match your search query. This is a Premium feature that requires a paid Imgflip subscription.

**Parameters**

-   `query` _(string, required)_ Search query to find meme templates. Be specific for better results.
-   `include_nsfw` _(boolean, optional)_ Include not-safe-for-work memes in search results. Defaults to False.
-   `limit` _(integer, optional)_ Maximum number of meme templates to return. Defaults to 20.

* * *

## Imgflip.GetPopularMemes



Get popular meme templates from Imgflip

This tool retrieves a list of popular meme templates that can be used to create custom memes. These templates are ordered by popularity based on how many times they’ve been captioned.

**Parameters**

-   `limit` _(integer, optional)_ Maximum number of meme templates to return. Defaults to 20.

* * *

## Imgflip.CreateMeme



Create a custom meme using an Imgflip template

This tool creates a custom meme by adding your text to an existing meme template. You can specify top and bottom text, choose fonts, and control text sizing.

**Parameters**

-   `template_id` _(string, required)_ The meme template ID to use for creation. You can get this from get\_popular\_memes.
-   `top_text` _(string, optional)_ Text to display at the top of the meme. Leave empty if not needed.
-   `bottom_text` _(string, optional)_ Text to display at the bottom of the meme. Leave empty if not needed.
-   `font` _(Font, optional)_ Font family to use for the text. Defaults to IMPACT.
-   `max_font_size` _(integer, optional)_ Maximum font size for the text. Defaults to 50.
-   `no_watermark` _(boolean, optional)_ Remove the Imgflip watermark (Premium feature). Defaults to False.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_imgflip ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 10, 2026

[Zoom](/en/resources/integrations/social-communication/zoom.md)
[Spotify](/en/resources/integrations/entertainment/spotify.md)
