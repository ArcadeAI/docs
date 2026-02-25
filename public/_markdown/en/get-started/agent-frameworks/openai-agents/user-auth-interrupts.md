---
title: "Managing user authorization"
description: "Handle tool authorization with Arcade and OpenAI Agents"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[OpenAI Agents](/en/get-started/agent-frameworks/openai-agents/overview.md)
Managing user authorization

## User authorization with OpenAI Agents

In this guide, you will learn how to handle user authorization for Arcade tools in your OpenAI Agents application. When a tool requires authorization, the  will raise an `AuthorizationError` with a URL for the  to visit and grant permissions.

### Prerequisites

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)


### Install the required packages

Set up your environment with the following installations:

### Python

```bash
pip install agents-arcade arcadepy
```

### JavaScript

```bash
npm install @openai/agents @arcadeai/agents-arcade
```

### Configure your Arcade environment

Make sure you have set your  key in the environment, or assign it directly in the code:

> Need an  key? Visit the [Get an API key](/get-started/setup/api-keys.md) page to create one.

### Python

```python
import os
from arcadepy import AsyncArcade
from agents import Agent, Runner
from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError

# Set your API key
os.environ["ARCADE_API_KEY"] = "YOUR_ARCADE_API_KEY"

# Initialize the Arcade client
client = AsyncArcade()
```

### JavaScript

Add your  to your environment variables:

```bash
# In your .env file
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
```

```javascript
import Arcade from '@arcadeai/arcadejs';
import { isAuthorizationRequiredError, toZod } from "@arcadeai/arcadejs/lib";
import { Agent, run, tool } from '@openai/agents';

const client = new Arcade();
```

### Fetch Arcade tools

Get the tools you need for your . In this example, we’ll use GitHub :

### Python

```python
# Get GitHub tools for this example
tools = await get_arcade_tools(client, toolkits=["github"])

# Create an agent with GitHub tools
github_agent = Agent(
    name="GitHub agent",
    instructions="You are a helpful assistant that can assist with GitHub API calls.",
    model="gpt-4o-mini",
    tools=tools,
)
```

### JavaScript

```javascript
const githubToolkit = await client.tools.list({ toolkit: "github", limit: 30 });
const arcadeTools = toZod({
  tools: githubToolkit.items,
  client,
  userId: "<YOUR_SYSTEM_USER_ID_2>", // Replace this with your application's user ID (e.g. email address, UUID, etc.)
})
```

### Handle authorization errors

### Python

When a user needs to authorize access to a tool, the  will raise an `AuthorizationError`. You can handle it like this:

```python
try:
    result = await Runner.run(
        starting_agent=github_agent,
        input="Star the arcadeai/arcade-ai repo",
        # Pass a unique user_id for authentication
        context={"user_id": "{arcade_user_id}"},
    )
    print("Final output:\n\n", result.final_output)
except AuthorizationError as e:
    # Display the authorization URL to the user
    print(f"Please Login to GitHub: {e}")
    # The error contains the authorization URL that the user should visit
```

### JavaScript

Choose how to handle authorization errors based on your needs:

**Default behavior (throws errors):**

```javascript
const arcadeTools = toZod({
  tools: githubToolkit.items,
  client,
  userId: "<YOUR_SYSTEM_USER_ID>", // Replace with your user ID
});
```

Use this when you want to handle authorization flow yourself with custom logic.

**Auto-handle authorization (recommended):**

```javascript
import { executeOrAuthorizeZodTool } from "@arcadeai/arcadejs/lib";

const arcadeTools = toZod({
  tools: githubToolkit.items,
  client,
  userId: "<YOUR_SYSTEM_USER_ID>", // Replace with your user ID
  executeFactory: executeOrAuthorizeZodTool,
});
```

This automatically returns authorization URLs instead of throwing errors.

**Custom error handling:**

```javascript
import { isAuthorizationRequiredError } from "@arcadeai/arcadejs/lib";

const tools =  arcadeTools.map((arcadeTool) => {
  return tool({
    ...arcadeTool,
    errorFunction: async (_, error) => {
      if (error instanceof Error && isAuthorizationRequiredError(error)) {
        const response = await client.tools.authorize({
          tool_name: arcadeTool.name,
          user_id: "<YOUR_SYSTEM_USER_ID>",
        });
        return `Please login to Google: ${response.url}`;
      }
      return "Error executing tool"
    }
  })
});
```

### Wait for authorization completion

You can also wait for the  to complete the authorization before continuing:

### Python

```python
from arcadepy import AsyncArcade
import asyncio

client = AsyncArcade()

async def handle_auth_flow(auth_id):
    # Display a message to the user
    print("Please visit the authorization URL in your browser")


    # Wait for the user to authenticate
    await client.auth.wait_for_completion(auth_id)

    # Check if authorization was successful
    if await is_authorized(auth_id):
        print("Authorization successful! You can now use the tool.")
        return True
    else:
        print("Authorization failed or timed out.")
        return False

# In your main function
try:
    # Run agent code
    # ...
except AuthorizationError as e:
    auth_id = e.auth_id
    if await handle_auth_flow(auth_id):
        # Try running the agent again
        result = await Runner.run(
            starting_agent=github_agent,
            input="Star the arcadeai/arcade-ai repo",
            context={"user_id": "{arcade_user_id}"},
        )
        print("Final output:\n\n", result.final_output)
```

### JavaScript

To wait for authorization completion, follow this approach:

1.  Throw the error to the
2.  Catch and handle the error while waiting for completion

```javascript
const tools =  arcadeTools.map((arcadeTool) => {
  return tool({
    ...arcadeTool,
    errorFunction: (_, error) => { throw error } // Throw the error to the agent for handling
  })
});

while (true) {
    try {
      const result = await run(googleAgent, "What are my latest emails?");
      console.log(result.finalOutput);
    } catch (error) {
      // Catch the authorization error and wait for completion
      if (error instanceof Error && isAuthorizationRequiredError(error)) {
        const response = await client.tools.authorize({
          tool_name: "Gmail_ListEmails",
          user_id: "<YOUR_SYSTEM_USER_ID_2>",
        });
        if (response.status !== "completed") {
          console.log(`Please complete the authorization challenge in your browser: ${response.url}`);
        }

        // Wait for the authorization to complete
        await client.auth.waitForCompletion(response);
        console.log("Authorization completed, retrying...");
      }
    }
  }
```

### Complete example

Here’s a full example that demonstrates the authorization flow with waiting for authentication:

### Python

```python
from arcadepy.auth import wait_for_authorization_completion

import time

from agents import Agent, Runner
from arcadepy import AsyncArcade

from agents_arcade import get_arcade_tools
from agents_arcade.errors import AuthorizationError


async def main():
    client = AsyncArcade()
    # Use the "github" MCP Server for this example
    tools = await get_arcade_tools(client, toolkits=["github"])

    github_agent = Agent(
        name="GitHub agent",
        instructions="You are a helpful assistant that can assist with GitHub API calls.",
        model="gpt-4o-mini",
        tools=tools,
    )

    user_id = "{arcade_user_id}"  # Make sure to use a unique user ID

    while True:
        try:
            result = await Runner.run(
                starting_agent=github_agent,
                input="Star the arcadeai/arcade-ai repo",
                # Pass the user_id for auth
                context={"user_id": user_id},
            )
            print("Final output:\n\n", result.final_output)
            break  # Exit the loop if successful

        except AuthorizationError as e:
            auth_url = str(e)
            print(f"{auth_url}.  Please authenticate to continue.")

            # Wait for the user to authenticate
            await client.auth.wait_for_completion(e.result.id)


if __name__ == "__main__":
    import asyncio

    asyncio.run(main())
```

### JavaScript

Check out the complete working example in our [GitHub repository](https://github.com/ArcadeAI/arcade-ai/tree/main/examples/openai-agents-ts/src/waitForCompletion.ts) .

```javascript
import Arcade from '@arcadeai/arcadejs';
import { isAuthorizationRequiredError, toZod } from "@arcadeai/arcadejs/lib";
import { Agent, run, tool } from '@openai/agents';

async function main() {
  // 1) Initialize Arcade client
  const client = new Arcade();

  // 2) Fetch Gmail MCP Server from Arcade and prepare tools for OpenAI Agents
  const googleToolkit = await client.tools.list({ toolkit: "gmail", limit: 30 });
  const tools = toZod({
    tools: googleToolkit.items,
    client,
    userId: "<YOUR_SYSTEM_USER_ID_2>", // Replace this with your application's user ID (e.g. email address, UUID, etc.)
  }).map(tool);

  // 3) Create a new agent with the Gmail MCP Server
  const googleAgent = new Agent({
    name: "Gmail agent",
    instructions: "You are a helpful assistant that can assist with Google API calls.",
    model: "gpt-4o-mini",
    tools
  });

  // 4) Run the agent, if authorization is required, wait for it to complete and retry
  while (true) {
    try {
      const result = await run(googleAgent, "What are my latest emails?");
      console.log(result.finalOutput);
      break; // Exit the loop if the result is successful
    } catch (error) {
      if (error instanceof Error && isAuthorizationRequiredError(error)) {
        const response = await client.tools.authorize({
          tool_name: "Gmail_ListEmails",
          user_id: "<YOUR_SYSTEM_USER_ID_2>",
        });
        if (response.status !== "completed") {
          console.log(`Please complete the authorization challenge in your browser: ${response.url}`);
        }

        // Wait for the authorization to complete
        await client.auth.waitForCompletion(response);
        console.log("Authorization completed, retrying...");
      }
    }
  }
}

main();
```

This example handles the authentication flow by:

1.  Attempting to run the
2.  Catching any AuthorizationError
3.  Open the authentication URL in a browser
4.  Waiting for the  to complete authentication
5.  Retrying the operation after a wait period

## Authentication persistence

Once a user authorizes with an auth provider, Arcade will remember the authorization for that specific user\_id and  Server. You don’t need to re-authorize each time you run the .

Key points to remember:

-   Always use a consistent and unique `user_id` for each
-   Store the `user_id` securely in your application
-   Different  Servers require separate authorization flows
-   Authorization tokens are managed by Arcade, not your application

## Next steps

-   Build a  interface to handle authorization flows smoothly
-   Explore other Arcade  Servers like Google, LinkedIn, or X
-   Create multi-step workflows with multiple  and authorizations
-   Learn to build your own custom tools with the Arcade  SDK

By handling Arcade’s authorization flow correctly, you can build AI-driven applications that securely integrate with various services while respecting  permissions. Have fun exploring Arcade!

Last updated on February 10, 2026

[Using Arcade tools](/en/get-started/agent-frameworks/openai-agents/use-arcade-tools.md)
[Vercel AI SDK](/en/get-started/agent-frameworks/vercelai.md)
