---
title: "Setup Arcade with OpenAI Agents SDK"
description: "Learn how to use Arcade tools in OpenAI Agents applications"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[OpenAI Agents](/en/get-started/agent-frameworks/openai-agents/overview.md)
Setup Arcade with OpenAI Agents SDK

# Setup Arcade with OpenAI Agents SDK

The [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)  is a popular Python library for building AI . It builds on top of the OpenAI API, and provides an interface for building agents.

## Outcomes

Learn how to integrate Arcade tools using OpenAI Agents primitives. You will implement a CLI agent that can user Arcade tools to help the user with their requests. The  handles  that require authorization automatically, so  don’t need to worry about it.

### You will Learn

-   How to retrieve Arcade tools and transform them into OpenAI
-   How to build an OpenAI Agents
-   How to integrate Arcade tools into the OpenAI  flow
-   How to implement “just in time” (JIT)  authorization using Arcade’s client

### Prerequisites

-   [Arcade account](https://api.arcade.dev/dashboard/register)

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)

-   The [`uv` package manager](https://docs.astral.sh/uv/)


## The agent architecture you will build in this guide

The OpenAI  SDK provides an [Agent](https://openai.github.io/openai-agents-python/ref/agent/#agents.agent.Agent)  class that implements a . It provides an interface for you to define the system prompt, the model, the , and possible sub-agents for handoffs. In this guide, you will manually keep track of the agent’s history and state, and use the `run` method to invoke the agent in an agentic loop.

## Integrate Arcade tools into an OpenAI Agents agent

### Create a new project

Create a new directory for your  and initialize a new virtual environment:

```bash
mkdir openai-agents-arcade-example
cd openai-agents-arcade-example
uv venv
source .venv/bin/activate
```

Install the necessary packages:

```bash
uv pip install openai-agents arcadepy
```

Create a new file called `.env` and add the following environment variables:

```bash
# .env
# Arcade API key
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
# Arcade user ID (this is the email address you used to login to Arcade)
ARCADE_USER_ID={arcade_user_id}
# OpenAI API key
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Import the necessary packages

Create a new file called `main.py` and add the following code:

```json
# main.py
from agents import Agent, Runner, TResponseInputItem
from agents.run_context import RunContextWrapper
from agents.tool import FunctionTool
from agents.exceptions import AgentsException
from arcadepy import AsyncArcade
from arcadepy.types.execute_tool_response import ExecuteToolResponse
from dotenv import load_dotenv
from functools import partial
from typing import Any
import os
import asyncio
import json
```

This includes several imports, here’s a breakdown:

-   Arcade imports:
    -   `AsyncArcade`: The , used to interact with the .
    -   `ExecuteToolResponse`: The response type for the execute  response.
-   OpenAI  imports:
    -   `Agent`: The OpenAI Agents , used to define an agent.
    -   `Runner`: The OpenAI Agents runner, used to run the  in an agentic loop.
    -   `TResponseInputItem`: The response input item type, determines the type of message in the conversation history.
    -   `RunContextWrapper`: Wraps the run , providing information such as the user ID, the tool name, tool arguments, and other contextual information different parts of the  may need.
    -   `FunctionTool`: OpenAI   definition format.
    -   `AgentsException`: The OpenAI  exception, used to handle errors in the agentic loop.
-   Other imports:
    -   `load_dotenv`: Loads the environment variables from the `.env` file.
    -   `functools.partial`: Partially applies a function to a given set of arguments.
    -   `typing.Any`: A type hint for the any type.
    -   `os`: The operating system module, used to interact with the operating system.
    -   `asyncio`: The asynchronous I/O module, used to interact with the asynchronous I/O.
    -   `json`: The JSON module, used to interact with JSON data.

### Configure the agent

These variables are used in the rest of the code to customize the  and manage the . Feel free to configure them to your liking.

```python
# main.py
# Load environment variables
load_dotenv()

# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This determines the maximum number of tool definitions Arcade will return per MCP server
TOOL_LIMIT = 30
# This prompt defines the behavior of the agent.
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
# This determines which LLM model will be used inside the agent
MODEL = "gpt-4o-mini"
```

### Write a custom error and utility functions to help with tool calls

Here, you define `ToolError` to handle errors from the Arcade . It wraps the `AgentsException` and provides an informative error message that can be handled in the agentic loop in case anything goes wrong.

You also define `convert_output_to_json` to convert the output of the Arcade tools to a JSON string. This is useful because the output of the Arcade tools is not always a JSON object, and the OpenAI  SDK expects a JSON string.

```python
# main.py
# Arcade to OpenAI agent exception classes
class ToolError(AgentsException):
    def __init__(self, result: ExecuteToolResponse | str):
        self.result = None
        if isinstance(result, str):
            self.message = result
        else:
            self.message = result.output.error.message
            self.result = result

    def __str__(self):
        if self.result:
            return f"Tool {self.result.tool_name} failed with error: {self.message}"
        else:
            return self.message


def convert_output_to_json(output: Any) -> str:
    if isinstance(output, dict) or isinstance(output, list):
        return json.dumps(output)
    else:
        return str(output)
```

### Write a helper function to authorize Arcade tools

This helper function is how you implement “just in time” (JIT) tool authorization using Arcade’s client. When the  tries to execute a  that requires authorization, the `result` object’s `status` will be `"pending"`, and you can use the `authorize` method to get an authorization URL. You then wait for the  to complete the authorization and retry the tool call. If the user has already authorized the tool, the `status` will be `"completed"`, and the OAuth dance is skipped silently, which improves the user experience.

This function captures the authorization flow outside of the agent’s context, which is a good practice for security and context engineering. By handling everything in the , you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the  free from any authorization-related traces, which reduces the risk of hallucinations.

```python
# main.py
async def authorize_tool(client: AsyncArcade, context: RunContextWrapper, tool_name: str):
    if not context.context.get("user_id"):
        raise ToolError("No user ID and authorization required for tool")

    result = await client.tools.authorize(
        tool_name=tool_name,
        user_id=context.context.get("user_id"),
    )

    if result.status != "completed":
        print(f"{tool_name} requires authorization to run, please open the following URL to authorize: {result.url}")

        await client.auth.wait_for_completion(result)
```

### Write a helper function to execute Arcade tools

This helper function is how the OpenAI  framework invokes the Arcade tools. It handles the authorization flow, and then calls the  using the `execute` method. It handles the conversion of the arguments from JSON to a dictionary (expected by Arcade) and the conversion of the output from the Arcade tool to a JSON string (expected by the OpenAI Agents framework). Here is where you call the helper functions defined earlier to authorize the tool and convert the output to a JSON string.

```python
# main.py
async def invoke_arcade_tool(
    context: RunContextWrapper,
    tool_args: str,
    tool_name: str,
    client: AsyncArcade,
):
    args = json.loads(tool_args)
    await authorize_tool(client, context, tool_name)

    print(f"Invoking tool {tool_name} with args: {args}")
    result = await client.tools.execute(
        tool_name=tool_name,
        input=args,
        user_id=context.context.get("user_id"),
    )
    if not result.success:
        raise ToolError(result)

    print(f"Tool {tool_name} called successfully, {MODEL} will now process the result...")

    return convert_output_to_json(result.output.value)
```

### Retrieve Arcade tools and transform them into LangChain tools

Here you get the Arcade tools you want the agent to use, and transform them into OpenAI Agents tools. The first step is to initialize the , and get the tools you want to use. Since OpenAI is itself an inference provider, the  provides a convenient endpoint to get the tools in the OpenAI format, which is also the format expected by the OpenAI  framework.

This helper function is long, here’s a breakdown of what it does for clarity:

-   retrieve tools from all configured  servers (defined in the `MCP_SERVERS` variable)
-   retrieve individual  (defined in the `TOOLS` variable)
-   get the Arcade  to OpenAI-formatted tools
-   create a list of FunctionTool objects, mapping each tool to a partial function that invokes the tool via the .

```python
# main.py
async def get_arcade_tools(
    client: AsyncArcade | None = None,
    tools: list[str] | None = None,
    mcp_servers: list[str] | None = None,
) -> list[FunctionTool]:

    if not client:
        client = AsyncArcade()

    # if no tools or MCP servers are provided, raise an error
    if not tools and not mcp_servers:
        raise ValueError(
            "No tools or MCP servers provided to retrieve tool definitions")

    # Use the Arcade Client to get OpenAI-formatted tool definitions
    tool_formats = []

    # Retrieve individual tools if specified
    if tools:
        # OpenAI-formatted tool definition
        tasks = [client.tools.formatted.get(name=tool_id, format="openai")
                 for tool_id in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_formats.append(response)

    # Retrieve tools from specified toolkits
    if mcp_servers:
        # Create a task for each toolkit to fetche the formatted tool definition concurrently.
        tasks = [client.tools.formatted.list(toolkit=tk, format="openai")
                 for tk in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            # Here the code assumes the returned response has an "items" attribute
            # containing a list of ToolDefinition objects.
            tool_formats.extend(response.items)


    # Create a list of FunctionTool objects, mapping each tool to a partial function that invokes the tool via the Arcade client.
    tool_functions = []
    for tool in tool_formats:
        tool_name = tool["function"]["name"]
        tool_description = tool["function"]["description"]
        tool_params = tool["function"]["parameters"]
        tool_function = FunctionTool(
            name=tool_name,
            description=tool_description,
            params_json_schema=tool_params,
            on_invoke_tool=partial(
                invoke_arcade_tool,
                tool_name=tool_name,
                client=client,
            ),
            strict_json_schema=False,
        )
        tool_functions.append(tool_function)

    return tool_functions
```

### Create the main function

The main function is where you:

-   Get the tools from the configured  Servers
-   Create an  with the configured
-   Initialize the conversation
-   Run the loop

The loop is a while loop that captures the user input, appends it to the conversation history, and then runs the . The agent’s response is then appended to the conversation history, and the loop continues.

The loop is interrupted when the ’s response contains a  call, and the tool call is handled by the helper function you wrote earlier.

```python
# main.py
async def main():
    # Get tools from the configured MCP Servers
    tools = await get_arcade_tools(mcp_servers=MCP_SERVERS,
                                   tools=TOOLS)

    # Create an agent with the configured tools
    agent = Agent(
        name="Inbox Assistant",
        instructions=SYSTEM_PROMPT,
        model=MODEL,
        tools=tools,
    )

    # initialize the conversation
    history: list[TResponseInputItem] = []
    # run the loop
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
        except ToolError as e:
            # Something went wrong with the tool call, print the error message and exit the loop
            print(e.message)
            break

# Run the main function as the entry point of the script
if __name__ == "__main__":
    asyncio.run(main())
```

### Run the agent

```bash
uv run main.py
```

You should see the  responding to your prompts like any model, as well as handling any  calls and authorization requests. Here are some example prompts you can try:

-   “Send me an email with a random haiku about OpenAI ”
-   “Summarize my latest 3 emails”

## Key takeaways

-   Arcade tools can be integrated into any agentic framework like OpenAI , all you need is to transform the Arcade  into OpenAI Agents tools and handle the authorization flow.
-    isolation: By handling the authorization flow outside of the ’s context, you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the context free from any authorization-related traces, which reduces the risk of hallucinations.

## Next Steps

1.  Try adding additional tools to the  or modifying the  in the catalog for a different use case by modifying the `MCP_SERVERS` and `TOOLS` variables.
2.  Try implementing a fully deterministic flow before the agentic loop, use this deterministic phase to prepare the  for the , adding things like the current date, time, or any other information that is relevant to the task at hand.

## Example code

```json
# main.py
from agents import Agent, Runner, TResponseInputItem
from agents.run_context import RunContextWrapper
from agents.tool import FunctionTool
from agents.exceptions import AgentsException
from arcadepy import AsyncArcade
from arcadepy.types.execute_tool_response import ExecuteToolResponse
from dotenv import load_dotenv
from functools import partial
from typing import Any
import os
import asyncio
import json

# Load environment variables
load_dotenv()

# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This determines the maximum number of tool definitions Arcade will return per MCP server
TOOL_LIMIT = 30
# This prompt defines the behavior of the agent.
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
# This determines which LLM model will be used inside the agent
MODEL = "gpt-4o-mini"

# Arcade to OpenAI agent exception classes
class ToolError(AgentsException):
    def __init__(self, result: ExecuteToolResponse | str):
        self.result = None
        if isinstance(result, str):
            self.message = result
        else:
            self.message = result.output.error.message
            self.result = result

    def __str__(self):
        if self.result:
            return f"Tool {self.result.tool_name} failed with error: {self.message}"
        else:
            return self.message


def convert_output_to_json(output: Any) -> str:
    if isinstance(output, dict) or isinstance(output, list):
        return json.dumps(output)
    else:
        return str(output)

async def authorize_tool(client: AsyncArcade, context: RunContextWrapper, tool_name: str):
    if not context.context.get("user_id"):
        raise ToolError("No user ID and authorization required for tool")

    result = await client.tools.authorize(
        tool_name=tool_name,
        user_id=context.context.get("user_id"),
    )

    if result.status != "completed":
        print(f"{tool_name} requires authorization to run, please open the following URL to authorize: {result.url}")

        await client.auth.wait_for_completion(result)

async def invoke_arcade_tool(
    context: RunContextWrapper,
    tool_args: str,
    tool_name: str,
    client: AsyncArcade,
):
    args = json.loads(tool_args)
    await authorize_tool(client, context, tool_name)

    print(f"Invoking tool {tool_name} with args: {args}")
    result = await client.tools.execute(
        tool_name=tool_name,
        input=args,
        user_id=context.context.get("user_id"),
    )
    if not result.success:
        raise ToolError(result)

    print(f"Tool {tool_name} called successfully, {MODEL} will now process the result...")

    return convert_output_to_json(result.output.value)

async def get_arcade_tools(
    client: AsyncArcade | None = None,
    tools: list[str] | None = None,
    mcp_servers: list[str] | None = None,
) -> list[FunctionTool]:

    if not client:
        client = AsyncArcade()

    # if no tools or MCP servers are provided, raise an error
    if not tools and not mcp_servers:
        raise ValueError(
            "No tools or MCP servers provided to retrieve tool definitions")

    # Use the Arcade Client to get OpenAI-formatted tool definitions
    tool_formats = []

    # Retrieve individual tools if specified
    if tools:
        # OpenAI-formatted tool definition
        tasks = [client.tools.formatted.get(name=tool_id, format="openai")
                 for tool_id in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_formats.append(response)

    # Retrieve tools from specified toolkits
    if mcp_servers:
        # Create a task for each toolkit to fetche the formatted tool definition concurrently.
        tasks = [client.tools.formatted.list(toolkit=tk, format="openai")
                 for tk in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            # Here the code assumes the returned response has an "items" attribute
            # containing a list of ToolDefinition objects.
            tool_formats.extend(response.items)


    # Create a list of FunctionTool objects, mapping each tool to a partial function that invokes the tool via the Arcade client.
    tool_functions = []
    for tool in tool_formats:
        tool_name = tool["function"]["name"]
        tool_description = tool["function"]["description"]
        tool_params = tool["function"]["parameters"]
        tool_function = FunctionTool(
            name=tool_name,
            description=tool_description,
            params_json_schema=tool_params,
            on_invoke_tool=partial(
                invoke_arcade_tool,
                tool_name=tool_name,
                client=client,
            ),
            strict_json_schema=False,
        )
        tool_functions.append(tool_function)

    return tool_functions

async def main():
    # Get tools from the configured MCP Servers
    tools = await get_arcade_tools(mcp_servers=MCP_SERVERS,
                                   tools=TOOLS)

    # Create an agent with the configured tools
    agent = Agent(
        name="Inbox Assistant",
        instructions=SYSTEM_PROMPT,
        model=MODEL,
        tools=tools,
    )

    # initialize the conversation
    history: list[TResponseInputItem] = []
    # run the loop
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
        except ToolError as e:
            # Something went wrong with the tool call, print the error message and exit the loop
            print(e.message)
            break

# Run the main function as the entry point of the script
if __name__ == "__main__":
    asyncio.run(main())
```

Last updated on February 7, 2026

[Overview](/en/get-started/agent-frameworks/openai-agents/overview.md)
[Using Arcade tools](/en/get-started/agent-frameworks/openai-agents/use-arcade-tools.md)
