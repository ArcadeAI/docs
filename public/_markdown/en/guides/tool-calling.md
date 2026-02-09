---
title: "Overview"
description: "Overview of language model tool calling and how to use tools with Arcade"
---
Call toolsOverview

# What are tools?

Language models excel at text generation but struggle with tasks like calculations, data retrieval, or interacting with external systems. To make an analogy, these models have impressive _brains_ or reasoning capabilities, but lack the _hands_ to interact with the digital world.

To solve this, many AI models support  calling (sometimes referred to as ‘function calling’).

## The use case for tool-calling

Say a colleague shares a document with you on Google Drive, and you’d like an LLM to help you analyze it.

You could go to your Drive/Docs, open the document, copy its contents, and paste it into your chat. But what if the LLM could do this for you? The Arcade Google Docs  Server provides a [`SearchAndRetrieveDocuments`](/resources/integrations/productivity/google-docs.md#googledocssearchandretrievedocuments) . By calling it, the LLM can find and read the document without you having to do anything.

After analyzing the document, you decide that a meeting is needed with your colleague. You can ask the LLM to schedule a meeting and it will use the [Google Calendar MCP Server](/resources/integrations/productivity/google-calendar.md) to do it without you needing to leave the chat.

Or you could ask the LLM to send a summary of the analysis to your colleague by email and it would use the [Gmail MCP Server](/resources/integrations/productivity/gmail.md) for that.

## Possibilities for Application and AI Agent developers

\-calling combines the reasoning power of LLMs with virtually any action available through APIs or code execution.

With the Arcade SDKs, it is easy to build applications and AI  that can leverage \-calling in order to provide an LLM-powered experience to  in a secure and privacy-forward way.

## How tool calling works

AI models that support  calling can determine when and how to use specific tools to fulfill a ’s request. The developer decides which tools to make available to the model, whether existing tools or tools they’ve built themselves.

In the example above, when the  asks: “_help me analyze the ‘ XYZ’ Google document shared by John_”, the LLM can use its reasoning capabilities to:

1.  Recognize that it needs to access external data;
2.  Evaluate that the `GoogleDocs.SearchAndRetrieveDocuments`  is the best way to get that data;
3.  Call the  with the appropriate parameters;
4.  Read the document content and use it to answer the ’s questions.

## The authorization problem

One challenge to make all that happen is authorization. How do you give the LLM permission to access someone’s Google Docs and Gmail in a secure and convenient way?

Arcade solves this problem by providing a standardized [interface for authorization](/get-started/about-arcade.md), as well as pre-built  for [popular services](/references/auth-providers.md) such as Google, Dropbox, GitHub, Notion, and many more.

Our SDK also [allows you to integrate](/references/auth-providers/oauth2.md) LLMs with any OAuth 2.0-compliant API.

## Tool Augmented Generation (TAG)

Similar to Retrieval Augmented Generation (RAG),  calling allows the AI to use external data to answer questions. Unlike RAG, tool calling is more flexible and allows the AI to use tools that are much more diverse than text or vector search alone.

The following is a diagram of how tool calling is used to provide  to a language model similar to RAG.

![Tool calling diagram 1](/images/tool-call-diagrams/tool-call-1.png)

First, a language model is given a user’s request. The model then determines if it needs to use a  to fulfill the request. If so, the model selects the appropriate tool from the tools listed in the request.

The model then predicts the parameters of that  and passes these parameters back to the client application.

![Tool calling diagram 2](/images/tool-call-diagrams/tool-call-2.png)

Now that the  has been executed, the model can use the output to generate a response.

![Tool calling diagram 3](/images/tool-call-diagrams/tool-call-3.png)

This process shows the general outline of the  Augmented Generation (TAG) process at a high level.

### Next steps

-   Explore the [MCP Servers](/resources/integrations.md)
     available on Arcade
-   Build your own [custom MCP Server](/guides/create-tools/tool-basics/build-mcp-server.md)


Last updated on February 7, 2026

[Create via AI Assistant](/en/guides/mcp-gateways/create-via-ai.md)
[Handling errors](/en/guides/tool-calling/error-handling.md)
