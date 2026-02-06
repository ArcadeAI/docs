---
title: "LinkedIn"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Social & Communication](/en/resources/integrations/social-communication/discord.md)
LinkedIn

# LinkedIn

Arcade Optimized

**Description:** Enable agents to interact with LinkedIn.

**Author:** Arcade

**Code:** [GitHub](https://github.com/ArcadeAI/arcade-ai/tree/main/resources/integrations/linkedin)

**Auth:** User authorization via the [LinkedIn auth provider](/references/auth-providers/linkedin.md)

[![PyPI Version](https://img.shields.io/pypi/v/arcade_linkedin)](https://pypi.org/project/arcade_linkedin/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_linkedin)](https://pypi.org/project/arcade_linkedin/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_linkedin)](https://pypi.org/project/arcade_linkedin/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_linkedin)](https://pypi.org/project/arcade_linkedin/)

The Arcade LinkedIn MCP Server provides a pre-built set of tools for interacting with LinkedIn. These tools make it easy to build agents and AI apps that can:

-   Create a post

## Available Tools

These tools are currently available in the Arcade LinkedIn MCP Sever.

Tool Name

Description

Linkedin.CreateTextPost

Share a new text post to LinkedIn.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) with the [LinkedIn auth provider](/references/auth-providers/linkedin.md#using-linkedin-auth-in-custom-tools).

## Linkedin.CreateTextPost



Share a new text post to LinkedIn.

**Parameters**

-   **`text`** _(string, required)_ The text content of the post.

* * *

## Auth

The Arcade LinkedIn MCP Sever uses the [LinkedIn auth provider](/references/auth-providers/linkedin.md) to connect to users’ LinkedIn accounts.

With the Arcade Cloud Platform, there’s nothing to configure. Your users will see `Arcade` as the name of the application that’s requesting permission.

With a self-hosted installation of Arcade, you need to [configure the LinkedIn auth provider](/references/auth-providers/linkedin.md#configuring-linkedin-auth) with your own LinkedIn app credentials.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_linkedin ``` Learn more](/guides/deployment-hosting.md)

Last updated on January 5, 2026

[Discord](/en/resources/integrations/social-communication/discord.md)
[Microsoft Teams](/en/resources/integrations/social-communication/microsoft-teams.md)
