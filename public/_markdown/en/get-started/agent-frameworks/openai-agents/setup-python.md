---
title: "Setup Arcade with OpenAI Agents (Python)"
description: "Build a CLI agent with Arcade tools using the OpenAI Agents SDK for Python"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[OpenAI Agents](/en/get-started/agent-frameworks/openai-agents/overview.md)
Setup (Python)

# Setup Arcade with OpenAI Agents (Python)

The [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)  is a Python library for building AI . It provides an interface for defining agents with , system prompts, and model configurations.

## Outcomes

Build a CLI  that uses Arcade  to help  with Gmail and Slack

### You will Learn

-   How to retrieve Arcade tools and convert them to OpenAI  format
-   How to build an OpenAI Agents  with Arcade
-   How to handle “just in time” (JIT)  authorization

### Prerequisites

-   [Arcade account](https://api.arcade.dev/dashboard/register)

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)

-   The [`uv` package manager](https://docs.astral.sh/uv/)


## How Arcade integrates with OpenAI Agents

The OpenAI  SDK provides an [Agent](https://openai.github.io/openai-agents-python/ref/agent/#agents.agent.Agent)  class that implements a . It accepts  in the [FunctionTool](https://openai.github.io/openai-agents-python/ref/tool/#agents.tool.FunctionTool)  format. The `agents-arcade` package provides a `get_arcade_tools` function that retrieves Arcade tools and converts them to this format automatically.

When a tool requires authorization (like Gmail or GitHub), the  raises an `AuthorizationError` with a URL for the  to visit. After the user authorizes, the agent can retry the operation.

## Build the agent

### Create a new project

Create a new directory and set up a virtual environment:

```bash
mkdir openai-agents-arcade-example
cd openai-agents-arcade-example
uv venv
source .venv/bin/activate
```

Install the required packages:

```bash
uv pip install openai-agents arcadepy agents-arcade python-dotenv
```

Create a `.env` file with your :

```bash
# .env
# Arcade API key from https://app.arcade.dev
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
# Your Arcade user ID (the email you used to sign up)
ARCADE_USER_ID={arcade_user_id}
# OpenAI API key
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Write the agent code

Create `main.py` with the following imports:

```python
# main.py
from agents import Agent, Runner, TResponseInputItem
from arcadepy import AsyncArcade
from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError
from dotenv import load_dotenv
import os
import asyncio

# Load environment variables
load_dotenv()
```

### Configure the agent

Define which tools and  servers your  can access:

```python
# main.py
# Configuration
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# MCP servers provide groups of related tools
MCP_SERVERS = ["Slack"]
# Individual tools can be specified by name
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# System prompt for the agent
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
# Model to use
MODEL = "gpt-4o-mini"
```

Browse the [MCP server catalog](/resources/integrations.md) to see all available  servers and .

### Create the main function

The main function initializes the , retrieves tools, creates an , and runs a conversation loop:

```python
# main.py
async def main():
    # Initialize the Arcade client
    client = AsyncArcade()

    # Get tools from MCP servers and individual tool names
    tools = await get_arcade_tools(
        client,
        toolkits=MCP_SERVERS,
        tools=TOOLS
    )

    # Create the agent with Arcade tools
    agent = Agent(
        name="Inbox Assistant",
        instructions=SYSTEM_PROMPT,
        model=MODEL,
        tools=tools,
    )

    # Conversation loop
    history: list[TResponseInputItem] = []
    while True:
        prompt = input("You: ")
        if prompt.lower() == "exit":
            break

        history.append({"role": "user", "content": prompt})

        try:
            result = await Runner.run(
                starting_agent=agent,
                input=history,
                context={"user_id": ARCADE_USER_ID},
            )
            history = result.to_input_list()
            print(f"Assistant: {result.final_output}")
        except AuthorizationError as e:
            # Display the authorization URL to the user
            print(f"Authorization required. Please visit: {e}")
            print("After authorizing, run your request again.")

if __name__ == "__main__":
    asyncio.run(main())
```

### Handle authorization

When a  requires OAuth authorization (like Gmail or GitHub), the `AuthorizationError` contains a URL where the  can grant access:

```python
except AuthorizationError as e:
    print(f"Please visit this URL to authorize: {e}")
```

After the  completes authorization, Arcade remembers it for that `user_id`. Future requests with the same `user_id` won’t require re-authorization.

The `user_id` should be a unique, consistent identifier for each user in your application (like their email or database ID). Arcade uses this to track which users have authorized which .

### Run the agent

```bash
uv run main.py
```

Try prompts like:

-   “What are my latest emails?”
-   “Send a Slack message to #general saying hello”
-   “Summarize my last 3 emails”

## Key takeaways

-   **`get_arcade_tools`** retrieves Arcade tools and converts them to OpenAI  `FunctionTool` format
-   **`AuthorizationError`** occurs when a  needs OAuth authorization, containing the URL for the  to visit
-   **`user_id`** tracks authorization per  - use a consistent ID for each user in your application
-   You can mix  servers (for groups of tools) with individual  names

## Complete code

```python
# main.py
from agents import Agent, Runner, TResponseInputItem
from arcadepy import AsyncArcade
from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError
from dotenv import load_dotenv
import os
import asyncio

# Load environment variables
load_dotenv()

# Configuration
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
MCP_SERVERS = ["Slack"]
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
MODEL = "gpt-4o-mini"

async def main():
    # Initialize the Arcade client
    client = AsyncArcade()

    # Get tools from MCP servers and individual tool names
    tools = await get_arcade_tools(
        client,
        toolkits=MCP_SERVERS,
        tools=TOOLS
    )

    # Create the agent with Arcade tools
    agent = Agent(
        name="Inbox Assistant",
        instructions=SYSTEM_PROMPT,
        model=MODEL,
        tools=tools,
    )

    # Conversation loop
    history: list[TResponseInputItem] = []
    while True:
        prompt = input("You: ")
        if prompt.lower() == "exit":
            break

        history.append({"role": "user", "content": prompt})

        try:
            result = await Runner.run(
                starting_agent=agent,
                input=history,
                context={"user_id": ARCADE_USER_ID},
            )
            history = result.to_input_list()
            print(f"Assistant: {result.final_output}")
        except AuthorizationError as e:
            print(f"Authorization required. Please visit: {e}")
            print("After authorizing, run your request again.")

if __name__ == "__main__":
    asyncio.run(main())
```

## Next steps

-   Add more  by modifying `MCP_SERVERS` and `TOOLS`
-   Build a web interface instead of CLI using frameworks like FastAPI or Flask
-   Explore [creating custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     with the Arcade  SDK

Last updated on February 10, 2026

[Overview](/en/get-started/agent-frameworks/openai-agents/overview.md)
[Setup (TypeScript)](/en/get-started/agent-frameworks/openai-agents/setup-typescript.md)
