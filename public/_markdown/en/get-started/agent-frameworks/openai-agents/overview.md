---
title: "Arcade with OpenAI Agents overview"
description: "Comprehensive guide to using Arcade with the OpenAI Agents library"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
OpenAI AgentsOverview

# Arcade with OpenAI Agents

Arcade provides seamless integration with the [OpenAI Agents Library](https://github.com/openai/openai-python)  and [OpenAI Agents JS](https://openai.github.io/openai-agents-js/) , allowing you to enhance your AI  with powerful  including Gmail, LinkedIn, GitHub, and many more. This integration is available through the `agents-arcade` package for Python and our [JavaScript client library](https://github.com/ArcadeAI/arcade-js) .

## Installation

Install the necessary packages to get started:

### Python

```bash
pip install agents-arcade arcadepy
```

### JavaScript

```bash
npm install @openai/agents @arcadeai/arcadejs
```

Make sure you have your  key ready. [Get an API key](/get-started/setup/api-keys.md) if you don’t already have one.

## Key features

-   **Easy integration** with the OpenAI  framework
-   **Access to all Arcade  Servers** including Google, GitHub, LinkedIn, X, and more
-   **Create custom ** with the Arcade Tool SDK
-   **Manage  authentication** for  that require it
-   **Asynchronous support** compatible with OpenAI’s  framework

## Basic usage

Here’s a simple example of using Arcade tools with OpenAI :

### Python

```python
from agents import Agent, Runner
from arcadepy import AsyncArcade
from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError

async def main():
    # Initialize the Arcade client
    client = AsyncArcade()

    # Get tools from the "gmail" MCP Server
    tools = await get_arcade_tools(client, toolkits=["gmail"])

    # Create an agent with Gmail tools
    google_agent = Agent(
        name="Gmail agent",
        instructions="You are a helpful assistant that can assist with Gmail API calls.",
        model="gpt-4o-mini",
        tools=tools,
    )

    try:
        # Run the agent with a unique user_id for authorization
        result = await Runner.run(
            starting_agent=google_agent,
            input="What are my latest emails?",
            context={"user_id": "{arcade_user_id}"},
        )
        print("Final output:\n\n", result.final_output)
    except AuthorizationError as e:
        print("Please Login to Google:", e)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

### JavaScript

Check out the complete working example in our [GitHub repository](https://github.com/ArcadeAI/arcade-ai/tree/main/examples/openai-agents-ts/src/index.ts) .

```javascript
import Arcade from "@arcadeai/arcadejs";
import { executeOrAuthorizeZodTool, toZod } from "@arcadeai/arcadejs/lib";
import { Agent, run, tool } from "@openai/agents";

// 1) Initialize Arcade client
const client = new Arcade();

// 2) Fetch Gmail MCP Server from Arcade and prepare tools for OpenAI Agents
const googleToolkit = await client.tools.list({ toolkit: "gmail", limit: 30 });
const tools = toZod({
  tools: googleToolkit.items,
  client,
  userId: "<YOUR_SYSTEM_USER_ID>", // Replace this with your application's user ID (e.g. email address, UUID, etc.)
  executeFactory: executeOrAuthorizeZodTool,
}).map(tool);

// 3) Create a new agent with the Gmail MCP Server
const googleAgent = new Agent({
  name: "Gmail agent",
  instructions:
    "You are a helpful assistant that can assist with Google API calls.",
  model: "gpt-4o-mini",
  tools,
});

// 4) Run the agent
const result = await run(googleAgent, "What are my latest emails?");

// 5) Print the result
console.log(result.finalOutput);
```

## Handling authorization

### Python

When a user needs to authorize access to a tool (like Google or GitHub), the  will raise an `AuthorizationError` with a URL for the  to visit:

```python
try:
    # Run agent code
    # ...
except AuthorizationError as e:
    # Display the authorization URL to the user
    print(f"Please visit this URL to authorize: {e}")
```

### JavaScript

When a user needs to authorize access to a tool (like Google or GitHub), the  will show a message like this:

```bash
[Authorize Gmail Access](https://accounts.google.com/o/oauth2/v2/auth?access_type=offline...)
Once you have authorized access, I can retrieve your latest emails.
```

After visiting the URL and authorizing access, the user can run the  again with the same `user_id`, and it will work without requiring re-authorization.

## Available MCP Servers

Arcade provides a variety of  Servers you can use with your :

-   **Google Suite**: Gmail, Calendar, Drive, Docs
-   **Social Media**: LinkedIn, X
-   **Development**: GitHub
-   **Web**: Web search, content extraction
-   **And more**: Weather, financial data, etc.

For a full list of available  Servers, visit the [Arcade MCP Servers](/resources/integrations.md) documentation.

## Next steps

Ready to start building with Arcade and OpenAI ? Check out these guides:

-   [Using Arcade tools](/get-started/agent-frameworks/openai-agents/use-arcade-tools.md)
     - Learn the basics of using Arcade tools with OpenAI
-   [Managing user authorization](/get-started/agent-frameworks/openai-agents/user-auth-interrupts.md)
     - Handle  authorization efficiently
-   [Creating custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     - Build your own tools with the Arcade  SDK

Enjoy exploring Arcade and building powerful AI-enabled applications!

Last updated on January 5, 2026

[Mastra](/en/get-started/agent-frameworks/mastra.md)
[Setup Arcade with OpenAI Agents SDK](/en/get-started/agent-frameworks/openai-agents/use-arcade-with-openai-agents.md)
