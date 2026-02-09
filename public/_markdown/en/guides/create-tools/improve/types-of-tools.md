---
title: "Types of Tools"
description: "Learn about Optimized and Unoptimized tools"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
Improve an existing toolkitTypes of Tools

# Types of Tools

Arcade offers two types of :

-
-

The distinction is merely a matter of how Arcade designs them. Both types of  can be used seamlessly in the same way. No difference exists in their interfaces, the way they are called, or how you interact with them through the Arcade [Dashboard](https://api.arcade.dev/dashboard/)  or the Arcade [SDK clients](/references.md).

Before we understand the two types, let’s first understand the background for why we need to differentiate between them.

## Why LLMs perform poorly when calling HTTP APIs

Traditionally, the HTTP APIs offered by upstream services such as GitHub, Google, Slack, etc., were designed to be consumed by human software engineers. When we expose such interfaces for LLMs to call as , they usually do not perform very well.

One of the main reasons is that the data model of the HTTP API rarely matches the data model of an AI-powered chat interface.

For instance, consider the following  prompt:

> “Send a DM to John asking about a  update”

The data model mismatches are:

Dimension

Chat interface

Slack HTTP API

Action

Send message to a **_person_**

Send message to a **_channel_**

Argument

`username = "John"`

`channel_id = ???`

In order to bridge the gap in the data models, the LLM has to make multiple API calls:

1.  Retrieve the current ’s Slack ID
2.  Browse the list of  to find John’s ID
3.  Open a DM (direct message) channel between the  and John, and get this channel’s ID
4.  Send the message to the channel

Even the most powerful LLMs usually perform poorly when they need to reason such complex workflows on the fly, not to mention the increased cost and risk of hallucinations. As a result, AI  and chatbots that rely on HTTP APIs often end up being unreliable.

## Optimized tools

Arcade’s Optimized  Servers are designed to match the typical data models expected in AI-powered chat interfaces and are subject to evaluation suites to ensure LLMs can safely use them.

Following the example above, our Slack  Server offers the [`Slack.SendMessage`](/resources/integrations/social/slack.md#slacksendmessage) , which accepts a `username` as argument, matching exactly both the action and argument value expected to be present in the LLM  window.

When a user says “Send a DM to John asking about a  update”, the LLM can directly call the `Slack.SendMessage`  with the `username` argument, and the tool will take care of the rest.

 dramatically improve the speed, reliability and cost-effectiveness of AI  and chatbots.

Since they require careful design and evaluation, Optimized tools take time and effort to build. Arcade understands that your Agent or chatbot project might need capabilities not yet covered by Arcade’s Optimized  Servers. For this reason, Arcade also offers low-level Unoptimized  (formerly known as Starter MCP Servers).

## Unoptimized tools

To provide your Agent or chatbot with more freedom to interact with upstream services, we offer Unoptimized  Servers.

 are heavily influenced by the original API design. Each  mirrors one HTTP endpoint.

Although we redesign the tool name and argument descriptions to make them more suitable for LLMs,   are still not optimized for LLM usage. Also, they are not subject to evaluation suites like . For those reasons, we recommend thoroughly evaluating each Unoptimized tool with your  or chatbots before using it in production.

When an Optimized tool covers your Agent’s needs, we recommend using it instead of an Unoptimized one. Use   as a complement. Carefully engineer your prompts to ensure your  can call them safely.

Last updated on February 9, 2026

[Comparative evaluations](/en/guides/create-tools/evaluate-tools/comparative-evaluations.md)
[Overview](/en/guides/create-tools/error-handling.md)
