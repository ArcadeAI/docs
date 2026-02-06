---
title: "E2B"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
Developer ToolsE2B

# E2B

Arcade OptimizedBYOCPro

**Description:** Enable agents to run code in a sandboxed environment.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_e2b)](https://pypi.org/project/arcade_e2b/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_e2b)](https://pypi.org/project/arcade_e2b/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_e2b)](https://pypi.org/project/arcade_e2b/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_e2b)](https://pypi.org/project/arcade_e2b/)

The Arcade E2B MCP Server provides a pre-built set of tools for running code in a sandboxed environment. These tools make it easy to build agents and AI apps that can:

-   Run code in a sandboxed environment
-   Create a static matplotlib chart

## Available Tools

These tools are currently available in the Arcade E2B MCP Sever.

Tool Name

Description

E2b.RunCode

Run code in a sandboxed environment.

E2b.CreateStaticMatplotlibChart

Create a static matplotlib chart.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## E2b.RunCode



Run code in a sandbox and return the output.

**Auth:**

-   **Environment Variables Required:**
    -   `E2B_API_KEY`: Your API key for authentication.

**Parameters**

-   **`code`** _(string, required)_ The code to run.
-   **`language`** _(string, optional)_ The language of the code. Valid values are ‘python’, ‘js’, ‘r’, ‘java’, ‘bash’. Defaults to ‘python’.

* * *

## E2b.CreateStaticMatplotlibChart



Run the provided Python code to generate a static matplotlib chart. The resulting chart is returned as a base64 encoded image.

**Auth:**

-   **Environment Variables Required:**
    -   `E2B_API_KEY`: Your API key for authentication.

**Parameters**

-   **`code`** _(string, required)_ The Python code to run.

## Auth

The Arcade E2B MCP Sever uses [E2B](https://e2b.dev/)  to run code in a sandboxed environment.

**Global Environment Variables:**

-   `E2B_API_KEY`: Your [E2B](https://e2b.dev/)
      API key.

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade-e2b ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 6, 2026

[Twitch](/en/resources/integrations/entertainment/twitch.md)
[Figma](/en/resources/integrations/development/figma.md)
