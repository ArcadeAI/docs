---
title: "Use Arcade with OpenAI Agents"
description: "Integrate Arcade tools into your OpenAI Agents applications"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[OpenAI Agents](/en/get-started/agent-frameworks/openai-agents/overview.md)
Using Arcade tools

## Use Arcade with OpenAI Agents

In this guide, let’s explore how to integrate Arcade tools into your OpenAI  application. Follow the step-by-step instructions below.

### Prerequisites

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)


### Set up your environment

Install the required packages, and ensure your environment variables are set with your  key:

### Python

```bash
pip install agents-arcade arcadepy
```

### JavaScript

```bash
npm install @openai/agents @arcadeai/arcadejs
```

### Configure API keys

Provide your  key. You can store it in environment variables or directly in your code:

> Need an  key? Visit the [Get an API key](/get-started/setup/api-keys.md) page to create one.

### Python

```python
import os

os.environ["ARCADE_API_KEY"] = "YOUR_ARCADE_API_KEY"
# Or set it directly when initializing the client
```

### JavaScript

```bash
# In your .env file
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
```

### Create and manage Arcade tools

### Python

Use the `get_arcade_tools` function to retrieve tools from specific  Servers:

```python
from arcadepy import AsyncArcade
from agents_arcade import get_arcade_tools

# Initialize the Arcade client
client = AsyncArcade()

# Get all tools from the "Gmail" MCP Server
tools = await get_arcade_tools(client, toolkits=["gmail"])

# You can request multiple MCP Servers at once
tools = await get_arcade_tools(client, toolkits=["gmail", "github", "linkedin"])

# You can request specific tools
tools = await get_arcade_tools(client, tools=["Gmail_ListEmails", "Slack_ListUsers", "Slack_SendDmToUser"])
```

### JavaScript

```javascript
import Arcade from '@arcadeai/arcadejs';
import { executeOrAuthorizeZodTool, toZod } from "@arcadeai/arcadejs/lib";
import { tool } from '@openai/agents';

const client = new Arcade();

// Option 1: Get tools from a single MCP Server
const googleTools = await client.tools.list({ toolkit: "gmail", limit: 30 });
const toolsFromGoogle = googleTools.items;

// Option 2: Get tools from multiple MCP Servers
const [google, github, linkedin] = await Promise.all([
  client.tools.list({ toolkit: "gmail", limit: 30 }),
  client.tools.list({ toolkit: "github", limit: 30 }),
  client.tools.list({ toolkit: "linkedin", limit: 30 })
]);
const toolsFromMultiple = [...google.items, ...github.items, ...linkedin.items];

// Option 3: Get specific tools by name
const specificTools = await Promise.all([
  client.tools.get("Gmail_ListEmails"),
  client.tools.get("Slack_ListUsers"),
  client.tools.get("Slack_SendDmToUser"),
]);

// Convert any of the above to OpenAI Agents format
const convertToAgents = (arcadeTools) => {
  return toZod({
    tools: arcadeTools,
    client,
    userId: "<YOUR_SYSTEM_USER_ID>", // Replace this with your application's user ID (e.g. email address, UUID, etc.)
    executeFactory: executeOrAuthorizeZodTool,
  }).map(tool);
};

// Use with any of the options above
const tools = convertToAgents(toolsFromGoogle); // or toolsFromMultiple or specificTools
```

### Set up the agent with Arcade tools

Create an  and provide it with the Arcade :

### Python

```python
from agents import Agent, Runner

# Create an agent with Gmail tools
google_agent = Agent(
    name="Gmail agent",
    instructions="You are a helpful assistant that can assist with Google API calls.",
    model="gpt-4o-mini",
    tools=tools,
)
```

### JavaScript

```javascript
import { Agent, Runner, tool } from '@openai/agents';

// Create an agent with Arcade tools
const googleAgent = new Agent({
  name: "Gmail agent",
  instructions: "You are a helpful assistant that can assist with Google API calls.",
  model: "gpt-4o-mini",
  tools
});
```

### Run the agent

### Python

Run the , providing a user\_id for  authorization:

```python
try:
    result = await Runner.run(
        starting_agent=google_agent,
        input="What are my latest emails?",
        context={"user_id": "{arcade_user_id}"},
    )
    print("Final output:\n\n", result.final_output)
except AuthorizationError as e:
    print("Please Login to Google:", e)
```

### JavaScript

```javascript
const result = await run(googleAgent, "What are my latest emails?");
```

### Handle authentication

### Python

If a  requires authorization, an `AuthorizationError` will be raised with an authorization URL:

```python
from agents_arcade.errors import AuthorizationError

try:
    # Run agent code from earlier examples
    # ...
except AuthorizationError as e:
    print(f"Please visit this URL to authorize: {e}")
    # The URL contained in the error will take the user to the authorization page
```

### JavaScript

If a tool requires authorization, the  will show a message like this:

```bash
[Authorize Gmail Access](https://accounts.google.com/o/oauth2/v2/auth?access_type=offline...)
Once you have authorized access, I can retrieve your latest emails.
```

### Complete example

Here’s a complete example putting everything together:

### Python

```python
from agents import Agent, Runner
from arcadepy import AsyncArcade

from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError


async def main():
    client = AsyncArcade()
    tools = await get_arcade_tools(client, toolkits=["gmail"])

    google_agent = Agent(
        name="Google agent",
        instructions="You are a helpful assistant that can assist with Google API calls.",
        model="gpt-4o-mini",
        tools=tools,
    )

    try:
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
import Arcade from '@arcadeai/arcadejs';
import { executeOrAuthorizeZodTool, toZod } from "@arcadeai/arcadejs/lib";
import { Agent, run, tool } from '@openai/agents';

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
  instructions: "You are a helpful assistant that can assist with Google API calls.",
  model: "gpt-4o-mini",
  tools
});

// 4) Run the agent
const result = await run(googleAgent, "What are my latest emails?");

// 5) Print the result
console.log(result.finalOutput);
```

## Tips for selecting tools

-   **Relevance**: Pick only the  you need. Avoid using all tools at once.
-   ** identification**: Always provide a unique and consistent `user_id` for each user. Use your internal or database user ID, not something entered by the user.

## Next steps

Now that you have integrated Arcade tools into your OpenAI  application, you can:

-   Experiment with different  Servers, such as “Github” or “LinkedIn”
-   Customize the ’s instructions for specific tasks
-   Try out multi- systems using different Arcade
-   Build your own custom tools with the Arcade  SDK

Enjoy exploring Arcade and building powerful AI-enabled Python applications!

Last updated on February 10, 2026

[Setup Arcade with OpenAI Agents SDK](/en/get-started/agent-frameworks/openai-agents/use-arcade-with-openai-agents.md)
[Managing user authorization](/en/get-started/agent-frameworks/openai-agents/user-auth-interrupts.md)
