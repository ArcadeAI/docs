---
title: "Setup Arcade with Google ADK (Python)"
description: "Build an agent with Arcade tools using Google ADK"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[Google ADK](/en/get-started/agent-frameworks/google-adk/overview.md)
Setup (Python)

# Setup Arcade with Google ADK (Python)

Google ADK is a modular framework for building and deploying AI . It is optimized for Gemini and the Google Ecosystem, but supports any model and is built with compatibility with other frameworks in mind.

## Outcomes

Learn how to integrate Arcade  using Google ADK primitives

### You will Learn

-   How to retrieve Arcade  and transform them into Google ADK tools
-   How to build a Google ADK
-   How to integrate Arcade  into the agentic flow
-   How to manage Arcade tool authorization for Google ADK

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   The [`uv` package manager](https://docs.astral.sh/uv/)


## The agent architecture you will build in this guide

In this guide, you will build a simple  that can use Arcade  to help the  with their requests. It will follow the ReAct pattern, where the agent thinks about what to do, plans the steps, and then executes the steps, calling tools as needed.

### Create a new project

Create a new directory for your  and initialize a new virtual environment:

```bash
mkdir google-adk-arcade-example
cd google-adk-arcade-example
uv init
uv venv
source .venv/bin/activate
```

Install the necessary packages:

```bash
uv add arcadepy google-adk
```

### Configure API keys

Provide your Arcade and Google . You can store it in environment variables or directly in your code:

> Need an  key? Visit the [Get an API key](/get-started/setup/api-keys.md) page to create one.

Create a new file called `.env` and add the following environment variables:

```bash
# .env
# Arcade API key
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
# Arcade user ID (this is the email address you used to login to Arcade)
ARCADE_USER_ID={arcade_user_id}
# Google API key
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
# Google GenAI use VertexAI
GOOGLE_GENAI_USE_VERTEXAI=FALSE
```

### Import the necessary packages

Create a new file called `main.py` and add the following code:

```python
# main.py
from arcadepy import AsyncArcade
from arcadepy.types import ToolDefinition
from arcadepy.types.execute_tool_response import ExecuteToolResponse
from google.adk import Agent, Runner
from google.adk.artifacts import InMemoryArtifactService
from google.adk.sessions import InMemorySessionService, Session
from google.adk.tools import ToolContext, FunctionTool
from google.adk.tools._automatic_function_calling_util import (
    _map_pydantic_type_to_property_schema
)
from google.genai import types
from pydantic import BaseModel, Field, create_model
from typing import Any
from typing_extensions import override
from dotenv import load_dotenv
import logging
import os
```

This includes several imports, here’s a breakdown:

-   Arcade imports:
    -   `AsyncArcade`: The , used to interact with the .
    -   `ToolDefinition`: The  definition type, used to define the input and output of a tool.
    -   `ExecuteToolResponse`: The response type for the execute  response.
-   Google ADK imports:
    -   `Agent`: The Google ADK  class, used to define an agent.
    -   `Runner`: The Google ADK runner, used to manage and run the agentic loop.
    -   `InMemoryArtifactService`: The in-memory artifact service, used to store and retrieve artifacts, such as the ’s state.
    -   `InMemorySessionService`: The in-memory session service, used to store and retrieve sessions, such as the conversation history.
    -   `Session`: The session type, used to define a session.
    -   `ToolContext`: The  , used to provide contextual information, such as the  ID.
    -   `FunctionTool`: The Google ADK function  class, used to define a function tool.
    -   `_map_pydantic_type_to_property_schema`: A utility function that maps Pydantic types to Google ADK schemas.
-   Google GenAI imports:
    -   `types`: The Google GenAI types, used to define the types for the Google GenAI API.
-   Pydantic imports:
    -   `BaseModel`: The Pydantic base model, used to define a base model.
    -   `Field`: The Pydantic field, used to define a field.
    -   `create_model`: A Pydantic function used to create a model from a dictionary of fields.
    -   `typing` imports: Used to provide type hints for the code.
    -   `dotenv`: Used to load environment variables from a `.env` file.
-   Other imports:
    -   `logging`: The logging module, used to log messages to the console.
    -   `os`: Used to retrieve loaded environment variables.

### Configure the agent

These variables are used in the rest of the code to customize the  and manage the . Feel free to configure them to your liking. Set the `google_genai.types` logging level to `ERROR` to avoid a lot of noise in the console. Load the environment variables from the `.env` file using `load_dotenv()`.

```python
# main.py
logging.getLogger("google_genai.types").setLevel(logging.ERROR)

load_dotenv()

# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This prompt defines the behavior of the agent.
MODEL = "gemini-2.5-flash"
# This determines which LLM model will be used inside the agent
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
# This determines the name of the agent.
AGENT_NAME = "AwesomeAgent"
```

### Write a utility function to transform Arcade tool definitions into Pydantic models

In this utility function, you use Pydantic to transform an Arcade  definition into a Pydantic model. Later, you will use these models to construct tools in the format expected by Google ADK. The `tool_definition_to_pydantic_model` function extracts the tools’ parameters, name, and description, and maps them to a Pydantic model.

```python
# main.py
# Mapping of Arcade value types to Python types
TYPE_MAPPING = {
    "string": str,
    "number": float,
    "integer": int,
    "boolean": bool,
    "array": list,
    "json": dict,
}


def get_python_type(val_type: str) -> Any:
    _type = TYPE_MAPPING.get(val_type)
    if _type is None:
        raise ValueError(f"Invalid value type: {val_type}")
    return _type


def tool_definition_to_pydantic_model(tool_def: ToolDefinition) -> type[BaseModel]:
    try:
        fields: dict[str, Any] = {}
        for param in tool_def.input.parameters or []:
            param_type = get_python_type(param.value_schema.val_type)
            if param_type == list and param.value_schema.inner_val_type:  # noqa: E721
                inner_type: type[Any] = get_python_type(param.value_schema.inner_val_type)
                param_type = list[inner_type]  # type: ignore[valid-type]
            param_description = param.description or "No description provided."
            default = ... if param.required else None
            fields[param.name] = (
                param_type,
                Field(default=default, description=param_description),
            )
        return create_model(f"{tool_def.name}Args", **fields)
    except ValueError as e:
        raise ValueError(
            f"Error converting {tool_def.name} parameters into pydantic model: {e}"
        )
```

### Write a custom class that extends the Google ADK FunctionTool class

Here, you define the `ArcadeTool` class that extends the Google ADK `FunctionTool` class to add the following functionality:

-   Authorize the tool using the  with the `_authorize_tool` helper function
-   Execute the tool using the  with the `_async_invoke_arcade_tool` helper function
-   Map the Pydantic model to the Google ADK schema using the `_map_pydantic_type_to_property_schema` utility function

You also define a `ToolError` class to handle errors from the Arcade . It wraps the `ExecuteToolResponse` and provides an informative error message that can be handled in the agentic loop in case anything goes wrong.

This class captures the authorization flow outside of the agent’s , which is a good practice for security and context engineering. By handling everything in the `ArcadeTool` class, you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the context free from any authorization-related traces, which reduces the risk of hallucinations, and reduces context bloat.

```python
# main.py
class ToolError(ValueError):
    def __init__(self, result: ExecuteToolResponse):
        self.result = result

    @property
    def message(self):
        return self.result.output.error.message

    def __str__(self):
        return f"Tool {self.result.tool_name} failed with error: {self.message}"


async def _authorize_tool(client: AsyncArcade, tool_context: ToolContext, tool_name: str):
    if not tool_context.state.get("user_id"):
        raise ValueError("No user ID and authorization required for tool")

    result = await client.tools.authorize(
        tool_name=tool_name,
        user_id=tool_context.state.get("user_id"),
    )
    if result.status != "completed":
        print(f"{tool_name} requires authorization to run, please open the following URL to authorize: {result.url}")

        await client.auth.wait_for_completion(result)


async def _async_invoke_arcade_tool(
    tool_context: ToolContext,
    tool_args: dict,
    tool_name: str,
    client: AsyncArcade,
) -> dict:
    await _authorize_tool(client, tool_context, tool_name)

    print(f"Executing tool: {tool_name} with args: {tool_args}")

    result = await client.tools.execute(
        tool_name=tool_name,
        input=tool_args,
        user_id=tool_context.state.get("user_id"),
    )

    if not result.success:
        raise ToolError(result)

    print(f"{tool_name} called successfully, processing result...")
    return result.output.value


class ArcadeTool(FunctionTool):
    def __init__(self,
                 name: str,
                 description: str,
                 schema: BaseModel,
                 client: AsyncArcade):

        # define callable
        async def func(tool_context: ToolContext,
                       **kwargs: Any) -> dict:
            return await _async_invoke_arcade_tool(
                tool_context=tool_context,
                tool_args=kwargs,
                tool_name=name,
                client=client
            )
        func.__name__ = name.lower()
        func.__doc__ = description

        super().__init__(func)
        schema = schema.model_json_schema()
        _map_pydantic_type_to_property_schema(schema)
        self.schema = schema
        self.name = name.replace(".", "_")
        self.description = description
        self.client = client

    @override
    async def run_async(self, *, args: dict[str, Any],
                        tool_context: ToolContext) -> Any:
        return await _async_invoke_arcade_tool(
            tool_context=tool_context,
            tool_args=args,
            tool_name=self.name,
            client=self.client,
        )

    @override
    def _get_declaration(self) -> types.FunctionDeclaration:
        return types.FunctionDeclaration(
            parameters=types.Schema(
                type='OBJECT',
                properties=self.schema["properties"],
            ),
            description=self.description,
            name=self.name,
        )
```

### Retrieve Arcade tools and transform them into Google ADK tools

Here you get the Arcade tools you want the agent to use, and transform them into Google ADK tools. The first step is to initialize the , and get the  you want to use.

This helper function is long, here’s a breakdown of what it does for clarity:

-   retrieve tools from all configured  servers (defined in the `MCP_SERVERS` variable)
-   retrieve individual  (defined in the `TOOLS` variable)
-   transform the Arcade  to Google ADK tools using the `ArcadeTool` class you defined earlier

```python
# main.py
async def get_arcade_tools(
    client: AsyncArcade | None = None,
    tools: list[str] | None = None,
    mcp_servers: list[str] | None = None,
    **kwargs: dict[str, Any],
) -> list[ArcadeTool]:
    if not client:
        client = AsyncArcade()

    if not tools and not mcp_servers:
        raise ValueError("No tools or toolkits provided to retrieve tool definitions")

    tool_formats: list[ToolDefinition] = []
    # Retrieve individual tools if specified
    if tools:
        tasks = [client.tools.get(name=tool_id)
                 for tool_id in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_formats.append(response)

    # Retrieve tools from specified toolkits
    if mcp_servers:
        tasks = [client.tools.list(toolkit=mcp_server)
                 for mcp_server in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            tool_formats.extend(response.items)

    tool_functions = []
    for tool in tool_formats:
        sanitized_name = tool.qualified_name.replace(".", "_")
        tool_function = ArcadeTool(
            name=sanitized_name,
            description=tool.description,
            schema=tool_definition_to_pydantic_model(tool),
            client=client,
        )
        tool_functions.append(tool_function)

    return tool_functions
```

### Create the main function

The main function is where you:

-   Initialize the session and artifact services
-   Get the Arcade tools from the configured  Servers
-   Create an  with the Arcade
-   Initialize the conversation
-   Run the loop

Google ADK provides a `Runner` class that manages the agentic loop, and will use the session and artifact services you created earlier to store the conversation history and  state. Therefore, you don’t need to manually store the conversation history or agent state, and you can just pass the latest  message to the runner.

```python
# main.py
async def main():

    session_service = InMemorySessionService()
    artifact_service = InMemoryArtifactService()
    client = AsyncArcade()

    arcade_tools = await get_arcade_tools(client,
                                          tools=TOOLS,
                                          mcp_servers=MCP_SERVERS)

    agent = Agent(
        model=MODEL,
        name=AGENT_NAME,
        instruction=SYSTEM_PROMPT,
        tools=arcade_tools,
    )

    session = await session_service.create_session(
        app_name=AGENT_NAME, user_id=ARCADE_USER_ID, state={
            "user_id": ARCADE_USER_ID,
        }
    )

    runner = Runner(
        app_name=AGENT_NAME,
        agent=agent,
        artifact_service=artifact_service,
        session_service=session_service,
    )

    async def run_prompt(session: Session, new_message: str):
        content = types.Content(
            role='user', parts=[types.Part.from_text(text=new_message)]
        )
        async for event in runner.run_async(
            user_id=ARCADE_USER_ID,
            session_id=session.id,
            new_message=content,
        ):
            if event.content.parts and event.content.parts[0].text:
                print(f'** {event.author}: {event.content.parts[0].text}')

    while True:
        user_input = input("User: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        await run_prompt(session, user_input)


if __name__ == '__main__':
    import asyncio
    asyncio.run(main())
```

### Run the agent

```bash
uv run main.py
```

You should see the  responding to your prompts like any model, as well as handling any  calls and authorization requests. Here are some example prompts you can try:

-   “Send me an email with a random haiku about Google ADK”
-   “Summarize my latest 3 emails”
-   “summarize my latest 3 emails, then send me that summary on a Slack DM”

## Tips for selecting tools

-   **Relevance**: Pick only the  you need. Avoid using all tools at once.
-   ** identification**: Always provide a unique and consistent `user_id` for each user. Use your internal or database user ID, not something entered by the user.

## Next steps

Now that you have integrated Arcade  into your Google ADK application, you can:

-   Experiment with different  Servers, such as “Github” or “LinkedIn”
-   Customize the ’s instructions for specific tasks
-   Try out multi- systems using different Arcade
-   Build your own custom tools with the Arcade  SDK

Enjoy exploring Arcade and building powerful AI-enabled Python applications!

## Example code

### **main.py** (full file)

```python
# main.py
from arcadepy import AsyncArcade
from arcadepy.types import ToolDefinition
from arcadepy.types.execute_tool_response import ExecuteToolResponse
from google.adk import Agent, Runner
from google.adk.artifacts import InMemoryArtifactService
from google.adk.sessions import InMemorySessionService, Session
from google.adk.tools import ToolContext, FunctionTool
from google.adk.tools._automatic_function_calling_util import (
    _map_pydantic_type_to_property_schema
)
from google.genai import types
from pydantic import BaseModel, Field, create_model
from typing import Any
from typing_extensions import override
from dotenv import load_dotenv
import logging
import os

logging.getLogger("google_genai.types").setLevel(logging.ERROR)

load_dotenv()

# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This prompt defines the behavior of the agent.
MODEL = "gemini-2.5-flash"
# This determines which LLM model will be used inside the agent
SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack."
# This determines the name of the agent.
AGENT_NAME = "AwesomeAgent"


# Mapping of Arcade value types to Python types
TYPE_MAPPING = {
    "string": str,
    "number": float,
    "integer": int,
    "boolean": bool,
    "array": list,
    "json": dict,
}


def get_python_type(val_type: str) -> Any:
    _type = TYPE_MAPPING.get(val_type) if _type is None:
        raise ValueError(f"Invalid value type: {val_type}")
    return _type


def tool_definition_to_pydantic_model(tool_def: ToolDefinition) -> type[BaseModel]:
    try:
        fields: dict[str, Any] = {}
        for param in tool_def.input.parameters or []:
            param_type = get_python_type(param.value_schema.val_type)
            if param_type == list and param.value_schema.inner_val_type:  # noqa: E721
                inner_type: type[Any] = get_python_type(param.value_schema.inner_val_type)
                param_type = list[inner_type]  # type: ignore[valid-type]
            param_description = param.description or "No description provided."
            default = ... if param.required else None
            fields[param.name] = (
                param_type,
                Field(default=default, description=param_description),
            )
        return create_model(f"{tool_def.name}Args", **fields)
    except ValueError as e:
        raise ValueError(
            f"Error converting {tool_def.name} parameters into pydantic model: {e}"
        )


class ToolError(ValueError):
    def __init__(self, result: ExecuteToolResponse):
        self.result = result

    @property
    def message(self):
        return self.result.output.error.message

    def __str__(self):
        return f"Tool {self.result.tool_name} failed with error: {self.message}"


async def _authorize_tool(client: AsyncArcade, tool_context: ToolContext, tool_name: str):
    if not tool_context.state.get("user_id"):
        raise ValueError("No user ID and authorization required for tool")

    result = await client.tools.authorize(
        tool_name=tool_name,
        user_id=tool_context.state.get("user_id"),
    )
    if result.status != "completed":
        print(f"{tool_name} requires authorization to run, please open the following URL to authorize: {result.url}")

        await client.auth.wait_for_completion(result)


async def _async_invoke_arcade_tool(
    tool_context: ToolContext,
    tool_args: dict,
    tool_name: str,
    client: AsyncArcade,
) -> dict:
    await _authorize_tool(client, tool_context, tool_name)

    print(f"Executing tool: {tool_name} with args: {tool_args}")

    result = await client.tools.execute(
        tool_name=tool_name,
        input=tool_args,
        user_id=tool_context.state.get("user_id"),
    )

    if not result.success:
        raise ToolError(result)

    print(f"{tool_name} called successfully, processing result...")
    return result.output.value


class ArcadeTool(FunctionTool):
    def __init__(self,
                 name: str,
                 description: str,
                 schema: BaseModel,
                 client: AsyncArcade):

        # define callable
        async def func(tool_context: ToolContext,
                       **kwargs: Any) -> dict:
            return await _async_invoke_arcade_tool(
                tool_context=tool_context,
                tool_args=kwargs,
                tool_name=name,
                client=client
            )
        func.__name__ = name.lower()
        func.__doc__ = description

        super().__init__(func)
        schema = schema.model_json_schema()
        _map_pydantic_type_to_property_schema(schema)
        self.schema = schema
        self.name = name.replace(".", "_")
        self.description = description
        self.client = client

    @override
    async def run_async(self, *, args: dict[str, Any],
                        tool_context: ToolContext) -> Any:
        return await _async_invoke_arcade_tool(
            tool_context=tool_context,
            tool_args=args,
            tool_name=self.name,
            client=self.client,
        )

    @override
    def _get_declaration(self) -> types.FunctionDeclaration:
        return types.FunctionDeclaration(
            parameters=types.Schema(
                type='OBJECT',
                properties=self.schema["properties"],
            ),
            description=self.description,
            name=self.name,
        )


async def get_arcade_tools(
    client: AsyncArcade | None = None,
    tools: list[str] | None = None,
    mcp_servers: list[str] | None = None,
    **kwargs: dict[str, Any],
) -> list[ArcadeTool]:
    if not client:
        client = AsyncArcade()

    if not tools and not mcp_servers:
        raise ValueError("No tools or toolkits provided to retrieve tool definitions")

    tool_formats: list[ToolDefinition] = []
    # Retrieve individual tools if specified
    if tools:
        tasks = [client.tools.get(name=tool_id)
                 for tool_id in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_formats.append(response)

    # Retrieve tools from specified toolkits
    if mcp_servers:
        tasks = [client.tools.list(toolkit=mcp_server)
                 for mcp_server in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            tool_formats.extend(response.items)

    tool_functions = []
    for tool in tool_formats:
        sanitized_name = tool.qualified_name.replace(".", "_")
        tool_function = ArcadeTool(
            name=sanitized_name,
            description=tool.description,
            schema=tool_definition_to_pydantic_model(tool),
            client=client,
        )
        tool_functions.append(tool_function)

    return tool_functions


async def main():

    session_service = InMemorySessionService()
    artifact_service = InMemoryArtifactService()
    client = AsyncArcade()

    arcade_tools = await get_arcade_tools(client,
                                          tools=TOOLS,
                                          mcp_servers=MCP_SERVERS)

    agent = Agent(
        model=MODEL,
        name=AGENT_NAME,
        instruction=SYSTEM_PROMPT,
        tools=arcade_tools,
    )

    session = await session_service.create_session(
        app_name=AGENT_NAME, user_id=ARCADE_USER_ID, state={
            "user_id": ARCADE_USER_ID,
        }
    )

    runner = Runner(
        app_name=AGENT_NAME,
        agent=agent,
        artifact_service=artifact_service,
        session_service=session_service,
    )

    async def run_prompt(session: Session, new_message: str):
        content = types.Content(
            role='user', parts=[types.Part.from_text(text=new_message)]
        )
        async for event in runner.run_async(
            user_id=ARCADE_USER_ID,
            session_id=session.id,
            new_message=content,
        ):
            if event.content.parts and event.content.parts[0].text:
                print(f'** {event.author}: {event.content.parts[0].text}')

    while True:
        user_input = input("User: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        await run_prompt(session, user_input)


if __name__ == '__main__':
    import asyncio
    asyncio.run(main())
```

Last updated on February 10, 2026

[Overview](/en/get-started/agent-frameworks/google-adk/overview.md)
[Setup (TypeScript)](/en/get-started/agent-frameworks/google-adk/setup-typescript.md)
