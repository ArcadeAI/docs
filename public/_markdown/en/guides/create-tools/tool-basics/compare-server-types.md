---
title: "Compare Server Types"
description: "Compare the different types of MCP servers"
---
Create tools[Build a tool](/en/guides/create-tools/tool-basics.md)
Compare MCP server types

# Compare MCP Server Types

Depending on the transport you use and where you want to run your  server, Arcade offers different functionalities and features. Below is a comparison of the different server types and their capabilities.

Transport

Deployment

Tools without requirements

Tools with secrets

Tools with auth (single-user)

Tools with auth (multi-user)

stdio

local

✅

✅

✅

❌

http

local ([unprotected](/resources/glossary.md#unprotected-mcp-servers)
)

✅

❌

❌

❌

http

remote ([unprotected](/resources/glossary.md#unprotected-mcp-servers)
)

✅

❌

❌

❌

http

local ([protected](/resources/glossary.md#protected-mcp-servers)
)

✅

✅

✅

✅

http

remote ([protected](/resources/glossary.md#protected-mcp-servers)
)

✅

✅

✅

✅

http

Arcade Cloud

✅

✅

✅

✅

Last updated on February 6, 2026

[Overview](/en/guides/create-tools/tool-basics.md)
[Build an MCP Server to write custom tools](/en/guides/create-tools/tool-basics/build-mcp-server.md)
