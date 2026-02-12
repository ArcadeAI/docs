---
title: "Arcade with Google ADK overview"
description: "Comprehensive guide to using Arcade with the Google ADK library"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
Google ADKOverview

# Arcade with Google ADK

The `google-adk-arcade` package provides a seamless integration between [Arcade](https://arcade.dev)  and the [Google ADK](https://github.com/google/adk-python/) . This integration allows you to enhance your AI  with powerful Arcade  including Google Mail, LinkedIn, GitHub, and many more.

## Installation

Install the necessary packages to get started:

```bash
pip install google-adk-arcade
```

Make sure you have your  key ready. [Get an API key](/get-started/setup/api-keys.md) if you don’t already have one.

## Key features

-   **Easy integration** with the Google ADK framework
-   **Access to all Arcade  Servers** including Google, GitHub, LinkedIn, X, and more
-   **Create custom ** with the Arcade Tool SDK
-   **Manage  authentication** for  that require it
-   **Asynchronous support** compatible with Google’s ADK framework

## Basic usage

Here’s a simple example of using Arcade tools with OpenAI :

```python
import asyncio

from arcadepy import AsyncArcade
from google.adk import Agent, Runner
from google.adk.artifacts import InMemoryArtifactService
from google.adk.sessions import InMemorySessionService
from google.genai import types

from google_adk_arcade.tools import get_arcade_tools


async def main():
    app_name = 'my_app'
    user_id = '{arcade_user_id}'
    session_service = InMemorySessionService()
    artifact_service = InMemoryArtifactService()
    client = AsyncArcade()

    google_tools = await get_arcade_tools(client, tools=["Gmail.ListEmails"])

    # authorize the tools
    for tool in google_tools:
        result = await client.tools.authorize(
            tool_name=tool.name,
            user_id=user_id
        )
        if result.status != "completed":
            print(f"Click this link to authorize {tool.name}:\n{result.url}")
        await client.auth.wait_for_completion(result)

    # create the agent
    google_agent = Agent(
        model="gemini-2.0-flash",
        name="google_tool_agent",
        instruction="I can use Google tools to manage an inbox!",
        description="An agent equipped with tools to read Gmail emails."
        tools=google_tools,
    )

    #create the session and pass the user ID to the state
    session = await session_service.create_session(
        app_name=app_name, user_id=user_id, state={
            "user_id": user_id,
        }
    )

    runner = Runner(
        app_name=app_name,
        agent=google_agent,
        artifact_service=artifact_service,
        session_service=session_service,
    )

    user_input = "summarize my latest 3 emails"
    content = types.Content(
        role='user', parts=[types.Part.from_text(text=user_input)]
    )
    for event in runner.run(
        user_id=user_id,
        session_id=session.id,
        new_message=content,
    ):
        if event.content.parts and event.content.parts[0].text:
            print(f'** {event.author}: {event.content.parts[0].text}')

if __name__ == '__main__':
    asyncio.run(main())
```

## Handling authorization

When a user needs to authorize access to a tool (like Google or GitHub), the  will reply with a URL for the  to visit, which will be displayed to the user.

After visiting the URL and authorizing access, the user can run the  again with the same `user_id`, and it will work without requiring re-authorization.

Alternatively, you can authorize the tool before running the :

```python
# authorize the tools
for tool in google_tools:
    result = await client.tools.authorize(
        tool_name=tool.name,
        user_id=user_id
    )
    if result.status != "completed":
        print(f"Click this link to authorize {tool.name}:\n{result.url}")
    await client.auth.wait_for_completion(result)
```

## Next steps

Ready to start building with Arcade and OpenAI ? Check out these guides:

-   [Using Arcade tools](/get-started/agent-frameworks/google-adk/use-arcade-tools.md)
     - Learn the basics of using Arcade  with Google ADK
-   [Creating custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     - Build your own tools with the Arcade  SDK

Enjoy exploring Arcade and building powerful AI-enabled applications.

Last updated on January 30, 2026

[Custom auth flow](/en/get-started/agent-frameworks/crewai/custom-auth-flow.md)
[Setup Arcade with Google ADK (Python)](/en/get-started/agent-frameworks/google-adk/use-arcade-tools.md)
