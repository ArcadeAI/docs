---
title: "Setup Arcade with LangChain"
description: "Learn how to use Arcade tools in LangChain agents"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[LangChain](/en/get-started/agent-frameworks/langchain/overview.md)
Setup (Python)

# Setup Arcade with LangChain

LangChain is a popular agentic framework that abstracts a lot of the complexity of building AI agents. It is built on top of LangGraph, a lower level orchestration framework that offers more control over the inner flow of the .

## Outcomes

Learn how to integrate Arcade  using LangChain primitives

### You will Learn

-   How to retrieve Arcade  and transform them into LangChain tools
-   How to build a LangChain
-   How to integrate Arcade  into the agentic flow
-   How to manage Arcade  authorization using LangChain interrupts

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   The [`uv` package manager](https://docs.astral.sh/uv/)


## LangChain primitives you will use in this guide

LangChain provides multiple abstractions for building AI , and it’s useful to internalize how some of these primitives work, so you can understand and extend the different agentic patterns LangChain supports.

-   : Most agentic frameworks, including LangChain, provide an abstraction for a .
-   [_Interrupts_](https://docs.langchain.com/oss/python/langgraph/interrupts)
    : Interrupts in LangChain are a way to control the flow of the agentic loop when something needs to be done outside of the normal ReAct flow. For example, if a tool requires authorization, you can interrupt the  and ask the user to authorize the  before continuing.
-   [_Checkpointers_](https://docs.langchain.com/oss/python/langgraph/persistence)
    : Checkpointers are how LangChain implements persistence. A checkpointer stores the ’s state in a “checkpoint” that you can resume later. You save those checkpoints to a _thread_, which you can access after the agent’s execution, making it simple for long-running agents and for handling interruptions and more sophisticated flows such as branching, time travel, and more.

## Integrate Arcade tools into a LangChain agent

### Create a new project

```bash
mkdir langchain-arcade-example
cd langchain-arcade-example
uv init
uv venv
source .venv/bin/activate
uv add arcadepy langchain langchain-openai python-dotenv
```

Create a new file called `.env` and add the following :

```bash
# .env
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Import the necessary packages

Create a new file called `main.py` and add the following code:

```python
# main.py
import asyncio
import os
from typing import Dict, Any, List

from dotenv import load_dotenv
from arcadepy import AsyncArcade
from arcadepy.types import ToolDefinition
from langchain.agents import create_agent
from langchain_core.messages import AIMessage, ToolMessage
from langchain_core.tools import StructuredTool
from langchain_core.runnables import RunnableConfig
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import Command, interrupt
from pydantic import BaseModel, Field, create_model
```

This is quite a number of imports, let’s break them down:

-   Arcade imports:
    -   `AsyncArcade`: The , interacts with the .
    -   `ToolDefinition`: The tool definition type, defines the shape of the tools that the  can use.
-   LangChain imports:
    -   `create_agent`: Creates a LangChain  using the ReAct pattern.
    -   `AIMessage`: The message type for the ’s response.
    -   `ToolMessage`: The message type for the ’s  calls.
    -   `StructuredTool`: LangChain’s tool definition type, defines the shape of the tools that the  can use.
    -   `RunnableConfig`: The configuration type for the ’s run, includes the thread ID and other configuration options.
    -   `ChatOpenAI`: The LLM to use for the ’s response, specific to OpenAI models.
    -   `MemorySaver`: Stores the ’s state, and checkpointing and interrupts require it.
    -   `Command`: Communicates the user’s decisions to the ’s interrupts.
    -   `interrupt`: Interrupts the ReAct flow and asks the  for input.
-   Other imports:
    -   `load_dotenv`: Loads the environment variables from the `.env` file.
    -   `os`: The operating system module, used to interact with the operating system.
    -   `typing` imports: Used for type hints, which are not required but recommended for type safety.
    -   `pydantic` imports: Used for data validation and model creation when converting Arcade  to LangChain tools.

### Configure the agent

The rest of the code uses these variables to customize the  and manage the . Feel free to configure them to your liking.

```python
# main.py
# Load environment variables from the .env file
load_dotenv()

# Configure your own values to customize your agent
# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This determines the maximum number of tool definitions Arcade will return per MCP server
TOOL_LIMIT = 30
# This prompt defines the behavior of the agent.
SYSTEM_PROMPT = "You are a helpful assistant that can use Gmail tools. Your main task is to help the user with anything they may need."
# This determines which LLM will be used inside the agent
MODEL = "gpt-5-nano"
```

### Write a helper function to convert Arcade tools to LangChain tools

Here you convert the Arcade  to LangChain tools. You use the `arcade_schema_to_pydantic` function to convert the Arcade tool definition to a Pydantic model, and then use the moddel to define a `StructuredTool` and create a LangChain tool.

The `arcade_to_langchain` function wraps the  and dynamically creates a `tool_function` that executes the  and handles the authorization flow using the `interrupt` function. Once the tool is authorized, the `tool_function` will use the Arcade client to execute the tool with the provided arguments, and handle any errors that may occur.

```python
# main.py
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

def arcade_schema_to_pydantic(tool_def: ToolDefinition) -> type[BaseModel]:
    try:
        fields: dict[str, Any] = {}
        for param in tool_def.input.parameters or []:
            param_type = get_python_type(param.value_schema.val_type)
            if param_type is list and param.value_schema.inner_val_type:
                inner_type: type[Any] = get_python_type(param.value_schema.inner_val_type)
                param_type = list[inner_type]
            param_description = param.description or "No description provided."
            default = ... if param.required else None
            fields[param.name] = (
                param_type,
                Field(default=default, description=param_description),
            )
        return create_model(f"{tool_def.name}Args", **fields)
    except ValueError as e:
        raise ValueError(
            f"Error converting {tool_def.name} parameters into pydantic model for langchain: {e}"
        )

async def arcade_to_langchain(
    arcade_client: AsyncArcade,
    arcade_tool: ToolDefinition,
) -> StructuredTool:
    # Convert Arcade schema to Pydantic model
    args_schema = arcade_schema_to_pydantic(arcade_tool)

    # Create the executor function with interrupt handling
    async def tool_function(config: RunnableConfig, **kwargs: Any) -> Any:
        user_id = config.get("configurable", {}).get("user_id") if config else None
        if not user_id:
            raise ValueError("User ID is required to execute Arcade tools")

        auth_response = await arcade_client.tools.authorize(
            tool_name=arcade_tool.qualified_name,
            user_id=user_id
        )

        if auth_response.status != "completed":
            # Interrupt the agent to handle authorization
            interrupt_result = interrupt({
                "type": "authorization_required",
                "tool_name": arcade_tool.qualified_name,
                "auth_response": {
                    "id": auth_response.id,
                    "url": auth_response.url,
                }
            })

            # Resume the flow with the authorization decision
            authorized = interrupt_result.get("authorized")
            if not authorized:
                raise RuntimeError(
                    f"Authorization was not completed for tool {arcade_tool.name}"
                )

        # Filter out None values to avoid passing unset optional parameters
        filtered_kwargs = {k: v for k, v in kwargs.items() if v is not None}

        response = await arcade_client.tools.execute(
            tool_name=arcade_tool.qualified_name,
            input=filtered_kwargs,
            user_id=user_id,
        )

        if response.output and response.output.value:
            return response.output.value

        error_details = {
            "error": "Unknown error occurred",
            "tool": arcade_tool.qualified_name,
        }

        if response.output is not None and response.output.error is not None:
            error = response.output.error
            error_message = str(error.message) if hasattr(error, "message") else "Unknown error"
            error_details["error"] = error_message

            # Add all non-None optional error fields to the details
            for field in ["additional_prompt_content", "can_retry", "developer_message", "retry_after_ms"]:
                if (value := getattr(error, field, None)) is not None:
                    error_details[field] = str(value)

        return error_details

    # Create and return the LangChain StructuredTool
    return StructuredTool.from_function(
        coroutine=tool_function,
        name=arcade_tool.qualified_name.replace(".", "_"),
        description=arcade_tool.description,
        args_schema=args_schema
    )
```

### Write a helper function to get Arcade tools in LangChain format

In this helper function you use the  to retrieved the  you configured at the beginning of the `main.py` file. You will use a dictionary to store the tools and avoid possible duplicates that may occur if you retrieve the same tool in the `TOOLS` and `MCP_SERVERS` variables. After retrieving all the tools, you will call the `arcade_to_langchain` function to convert the Arcade tools to LangChain tools.

```python
# main.py
async def get_arcade_tools(
    arcade_client: AsyncArcade | None = None,
    mcp_servers: List[str] | None = None,
    tools: List[str] | None = None,
) -> List[StructuredTool]:

    if not arcade_client:
        arcade_client = AsyncArcade(api_key=os.getenv("ARCADE_API_KEY"))

    # if no tools or MCP servers are provided, raise an error
    if not tools and not mcp_servers:
        raise ValueError(
            "No tools or MCP servers provided to retrieve tool definitions")

    # Collect tool definitions, using qualified name as key to avoid duplicates
    tool_definitions: dict[str, ToolDefinition] = {}

    # Retrieve individual tools if specified
    if tools:
        tasks = [arcade_client.tools.get(name=tool_name) for tool_name in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_definitions[response.fully_qualified_name] = response

    # Retrieve tools from specified toolkits
    if mcp_servers:
        tasks = [arcade_client.tools.list(toolkit=mcp_server) for mcp_server in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            for tool in response.items:
                tool_definitions[tool.fully_qualified_name] = tool

    tasks = [arcade_to_langchain(arcade_client, tool_definition) for tool_definition in tool_definitions.values()]
    langchain_tools = await asyncio.gather(*tasks)
    return langchain_tools
```

### Write the interrupt handler

In LangChain, each interrupt needs to be “resolved” for the flow to continue. In response to an interrupt, you need to return a decision object with the information needed to resolve the interrupt. In this case, the decision is whether the authorization was successful, in which case the tool call will be retried, or if the authorization failed, the flow will be interrupted with an error, and the  will decide what to do next.

This helper function receives an interrupt and returns a decision object. Decision objects can be of any serializable type (convertible to JSON). In this case, you return a dictionary with a boolean flag indicating if the authorization was successful.

This function captures the authorization flow outside of the agent’s context, which is a good practice for security and context engineering. By handling everything in the , you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the  free from any authorization-related traces, which reduces the risk of hallucinations.

```python
# main.py
async def handle_authorization_interrupt(
    interrupt_value: Dict[str, Any],
    arcade_client: AsyncArcade
) -> Dict[str, bool]:
    # Extract authorization context
    auth_response = interrupt_value.get("auth_response", {})
    auth_id = auth_response.get("id")
    auth_url = auth_response.get("url")
    tool_name = interrupt_value.get("tool_name")

    if not auth_id or not auth_url:
        print("❌ Authorization interrupt missing required context")
        return {"authorized": False}

    # Display authorization URL to user
    print(f"\n{'='*70}")
    print(f"🔐 Authorization Required for {tool_name}")
    print("\nPlease visit the following URL to authorize:")
    print(f"\n  {auth_url}\n")
    print("Waiting for authorization to complete...")
    print(f"{'='*70}\n")

    try:
        status_response = await arcade_client.auth.wait_for_completion(auth_id)

        if status_response.status == "completed":
            print("✅ Authorization completed successfully!\n")
            return {"authorized": True}
        else:
            print(f"❌ Authorization failed with status: {status_response.status}\n")
            return {"authorized": False}

    except Exception as e:
        print(f"❌ Error during authorization: {str(e)}\n")
        return {"authorized": False}
```

### Write the invoke helper

This last helper function handles the streaming of the ’s response, and captures the interrupts. When an interrupt is detected, it is added to the `interrupts` array, and the flow is interrupted. If there are no interrupts, it will just stream the agent’s to your console.

```python
# main.py
async def stream_agent_response(agent, input_data, config) -> List[Any]:
    interrupts = []

    async for chunk in agent.astream(input_data, config, stream_mode="updates"):
        # Check and collect interrupts
        if "__interrupt__" in chunk:
            interrupts.extend(chunk["__interrupt__"])

        # Display agent actions
        for node_name, node_output in chunk.items():
            if node_name == "__interrupt__":
                continue

            if "messages" in node_output:
                for msg in node_output["messages"]:
                    # Tool calls from the AI
                    if isinstance(msg, AIMessage) and msg.tool_calls:
                        for tool_call in msg.tool_calls:
                            print(f"🔧 Calling tool: {tool_call['name']}")

                    # Tool response - just acknowledge it, don't dump the content
                    elif isinstance(msg, ToolMessage):
                        print(f"   ✓ {msg.name} completed, processing output...")

                    # Final AI response text
                    elif isinstance(msg, AIMessage) and msg.content:
                        print(f"\n🤖 Assistant:\n{msg.content}")

    return interrupts
```

### Write the main function

Finally, write the main function that will create the , initialize the conversation, and handle the  input.

Here the `config` object is used to configure the `thread_id`, which tells the  to store the state of the conversation into that specific thread. In the main function you will also initialize the checkpointer, and handle route the interrupts to the handles you wrote earlier. Notice how a single turn of the agentic loop may have multiple interrupts, and you need to handle them all before continuing to the next turn.

```python
# main.py
async def main():
    # Initialize Arcade client
    arcade = AsyncArcade()

    # Get tools
    all_tools = await get_arcade_tools(arcade_client=arcade,
                                       mcp_servers=MCP_SERVERS, tools=TOOLS)

    # Initialize LLM
    model = ChatOpenAI(
        model=MODEL,
        api_key=os.getenv("OPENAI_API_KEY")
    )

    # Create agent with memory checkpointer
    memory = MemorySaver()
    agent = create_agent(
        system_prompt=SYSTEM_PROMPT,
        model=model,
        tools=all_tools,
        checkpointer=memory
    )

    print(f"\n🤖 Agent created with {len(all_tools)} tools")
    print("Type 'quit' or 'exit' to end the conversation.\n")
    print("="*70)

    # Configuration for agent execution
    config = {
        "configurable": {
            "thread_id": "conversation_thread",
            "user_id": ARCADE_USER_ID
        }
    }

    # Interactive conversation loop
    while True:
        # Get user input
        try:
            user_message = input("\n💬 You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n\n👋 Goodbye!")
            break

        # Check for exit commands
        if not user_message:
            continue
        if user_message.lower() in ("quit", "exit", "q"):
            print("\n👋 Goodbye!")
            break

        print("="*70)

        # Start with user message
        current_input = {"messages": [{"role": "user", "content": user_message}]}

        # Agent execution loop with interrupt handling
        while True:
            print("\n🔄 Running agent...\n")

            interrupts = await stream_agent_response(agent, current_input, config)

            # Handle interrupts if any occurred
            if interrupts:
                print(f"\n⚠️  Detected {len(interrupts)} interrupt(s)\n")

                # Process each interrupt
                for interrupt_obj in interrupts:
                    interrupt_type = interrupt_obj.value.get("type")

                    if interrupt_type == "authorization_required":
                        # Handle authorization interrupt
                        decision = await handle_authorization_interrupt(
                            interrupt_obj.value,
                            arcade
                        )

                        # Resume agent with authorization decision
                        current_input = Command(resume=decision)
                        break  # Continue to next iteration
                    else:
                        print(f"❌ Unknown interrupt type: {interrupt_type}")
                        break
                else:
                    # All interrupts processed without break
                    break
            else:
                # No interrupts - agent completed successfully
                print("\n✅ Response complete!")
                break

        print("\n" + "="*70)


if __name__ == "__main__":
    asyncio.run(main())
```

### Run the agent

```bash
uv run main.py
```

You should see the  responding to your prompts like any model, as well as handling any  calls and authorization requests. Here are some example prompts you can try:

-   “Send me an email with a random haiku about LangChain ”
-   “Summarize my latest 3 emails”

## Key takeaways

-   Arcade  can be integrated into any agentic framework like LangChain, all you need is to transform the Arcade tools into LangChain tools and handle the authorization flow.
-    isolation: By handling the authorization flow outside of the ’s context, you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the context free from any authorization-related traces, which reduces the risk of hallucinations.
-   You can leverage the interrupts mechanism to handle human intervention in the ’s flow, useful for authorization flows, policy enforcement, or anything else that requires input from the .

## Next Steps

1.  Try adding additional tools to the  or modifying the  in the catalog for a different use case by modifying the `MCP_SERVERS` and `TOOLS` variables.
2.  Try refactoring the `handle_authorization_interrupt` function to handle more complex flows, such as human-in-the-loop.
3.  Try implementing a fully deterministic flow before the agentic loop, use this deterministic phase to prepare the  for the , adding things like the current date, time, or any other information that is relevant to the task at hand.

## Example code

### **main.py** (full file)

```python
# main.py
import asyncio
import os
from typing import Dict, Any, List

from dotenv import load_dotenv
from arcadepy import AsyncArcade
from arcadepy.types import ToolDefinition
from langchain.agents import create_agent
from langchain_core.messages import AIMessage, ToolMessage
from langchain_core.tools import StructuredTool
from langchain_core.runnables import RunnableConfig
from langchain_openai import ChatOpenAI
from langgraph.checkpoint.memory import MemorySaver
from langgraph.types import Command, interrupt
from pydantic import BaseModel, Field, create_model

# Load environment variables from the .env file
load_dotenv()

# Configure your own values to customize your agent
# The Arcade User ID identifies who is authorizing each service.
ARCADE_USER_ID = os.getenv("ARCADE_USER_ID")
# This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
MCP_SERVERS = ["Slack"]
# This determines individual tools. Useful to pick specific tools when you don't need all of them.
TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"]
# This determines the maximum number of tool definitions Arcade will return per MCP server
TOOL_LIMIT = 30
# This prompt defines the behavior of the agent.
SYSTEM_PROMPT = "You are a helpful assistant that can use Gmail tools. Your main task is to help the user with anything they may need."
# This determines which LLM will be used inside the agent
MODEL = "gpt-4o-mini"

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

def arcade_schema_to_pydantic(tool_def: ToolDefinition) -> type[BaseModel]:
    try:
        fields: dict[str, Any] = {}
        for param in tool_def.input.parameters or []:
            param_type = get_python_type(param.value_schema.val_type)
            if param_type is list and param.value_schema.inner_val_type:
                inner_type: type[Any] = get_python_type(param.value_schema.inner_val_type)
                param_type = list[inner_type]
            param_description = param.description or "No description provided."
            default = ... if param.required else None
            fields[param.name] = (
                param_type,
                Field(default=default, description=param_description),
            )
        return create_model(f"{tool_def.name}Args", **fields)
    except ValueError as e:
        raise ValueError(
            f"Error converting {tool_def.name} parameters into pydantic model for langchain: {e}"
        )


async def arcade_to_langchain(
    arcade_client: AsyncArcade,
    arcade_tool: ToolDefinition,
) -> StructuredTool:
    # Convert Arcade schema to Pydantic model
    args_schema = arcade_schema_to_pydantic(arcade_tool)

    # Create the executor function with interrupt handling
    async def tool_function(config: RunnableConfig, **kwargs: Any) -> Any:
        user_id = config.get("configurable", {}).get("user_id") if config else None
        if not user_id:
            raise ValueError("User ID is required to execute Arcade tools")

        auth_response = await arcade_client.tools.authorize(
            tool_name=arcade_tool.qualified_name,
            user_id=user_id
        )

        if auth_response.status != "completed":
            # Interrupt the agent to handle authorization
            interrupt_result = interrupt({
                "type": "authorization_required",
                "tool_name": arcade_tool.qualified_name,
                "auth_response": {
                    "id": auth_response.id,
                    "url": auth_response.url,
                }
            })

            # Resume the flow with the authorization decision
            authorized = interrupt_result.get("authorized")
            if not authorized:
                raise RuntimeError(
                    f"Authorization was not completed for tool {arcade_tool.name}"
                )

        # Filter out None values to avoid passing unset optional parameters
        filtered_kwargs = {k: v for k, v in kwargs.items() if v is not None}

        response = await arcade_client.tools.execute(
            tool_name=arcade_tool.qualified_name,
            input=filtered_kwargs,
            user_id=user_id,
        )

        if response.output and response.output.value:
            return response.output.value

        error_details = {
            "error": "Unknown error occurred",
            "tool": arcade_tool.qualified_name,
        }

        if response.output is not None and response.output.error is not None:
            error = response.output.error
            error_message = str(error.message) if hasattr(error, "message") else "Unknown error"
            error_details["error"] = error_message

            # Add all non-None optional error fields to the details
            for field in ["additional_prompt_content", "can_retry", "developer_message", "retry_after_ms"]:
                if (value := getattr(error, field, None)) is not None:
                    error_details[field] = str(value)

        return error_details

    # Create and return the LangChain StructuredTool
    return StructuredTool.from_function(
        coroutine=tool_function,
        name=arcade_tool.qualified_name.replace(".", "_"),
        description=arcade_tool.description,
        args_schema=args_schema
    )


async def get_arcade_tools(
    arcade_client: AsyncArcade | None = None,
    mcp_servers: List[str] | None = None,
    tools: List[str] | None = None,
    tool_limit: int = TOOL_LIMIT,
) -> List[StructuredTool]:

    if not arcade_client:
        arcade_client = AsyncArcade(api_key=os.getenv("ARCADE_API_KEY"))

    # if no tools or MCP servers are provided, raise an error
    if not tools and not mcp_servers:
        raise ValueError(
            "No tools or MCP servers provided to retrieve tool definitions")

    # Collect tool definitions, using qualified name as key to avoid duplicates
    tool_definitions: dict[str, ToolDefinition] = {}

    # Retrieve individual tools if specified
    if tools:
        tasks = [arcade_client.tools.get(name=tool_name) for tool_name in tools]
        responses = await asyncio.gather(*tasks)
        for response in responses:
            tool_definitions[response.fully_qualified_name] = response

    # Retrieve tools from specified toolkits
    if mcp_servers:
        tasks = [arcade_client.tools.list(toolkit=mcp_server, limit=tool_limit) for mcp_server in mcp_servers]
        responses = await asyncio.gather(*tasks)

        # Combine the tool definitions from each response.
        for response in responses:
            for tool in response.items:
                tool_definitions[tool.fully_qualified_name] = tool

    tasks = [arcade_to_langchain(arcade_client, tool_definition) for tool_definition in tool_definitions.values()]
    langchain_tools = await asyncio.gather(*tasks)
    return langchain_tools


async def handle_authorization_interrupt(
    interrupt_value: Dict[str, Any],
    arcade_client: AsyncArcade
) -> Dict[str, bool]:
    # Extract authorization context
    auth_response = interrupt_value.get("auth_response", {})
    auth_id = auth_response.get("id")
    auth_url = auth_response.get("url")
    tool_name = interrupt_value.get("tool_name")

    if not auth_id or not auth_url:
        print("❌ Authorization interrupt missing required context")
        return {"authorized": False}

    # Display authorization URL to user
    print(f"\n{'='*70}")
    print(f"🔐 Authorization Required for {tool_name}")
    print("\nPlease visit the following URL to authorize:")
    print(f"\n  {auth_url}\n")
    print("Waiting for authorization to complete...")
    print(f"{'='*70}\n")

    try:
        status_response = await arcade_client.auth.wait_for_completion(auth_id)

        if status_response.status == "completed":
            print("✅ Authorization completed successfully!\n")
            return {"authorized": True}
        else:
            print(f"❌ Authorization failed with status: {status_response.status}\n")
            return {"authorized": False}

    except Exception as e:
        print(f"❌ Error during authorization: {str(e)}\n")
        return {"authorized": False}


async def stream_agent_response(agent, input_data, config) -> List[Any]:
    interrupts = []

    async for chunk in agent.astream(input_data, config, stream_mode="updates"):
        # Check and collect interrupts
        if "__interrupt__" in chunk:
            interrupts.extend(chunk["__interrupt__"])

        # Display agent actions
        for node_name, node_output in chunk.items():
            if node_name == "__interrupt__":
                continue

            if "messages" in node_output:
                for msg in node_output["messages"]:
                    # Tool calls from the AI
                    if isinstance(msg, AIMessage) and msg.tool_calls:
                        for tool_call in msg.tool_calls:
                            print(f"🔧 Calling tool: {tool_call['name']}")

                    # Tool response - just acknowledge it, don't dump the content
                    elif isinstance(msg, ToolMessage):
                        print(f"   ✓ {msg.name} completed, processing output...")

                    # Final AI response text
                    elif isinstance(msg, AIMessage) and msg.content:
                        print(f"\n🤖 Assistant:\n{msg.content}")

    return interrupts


async def main():
    # Initialize Arcade client
    arcade = AsyncArcade()

    # Get tools
    all_tools = await get_arcade_tools(arcade_client=arcade,
                                       mcp_servers=MCP_SERVERS, tools=TOOLS)

    # Initialize LLM
    model = ChatOpenAI(
        model=MODEL,
        api_key=os.getenv("OPENAI_API_KEY")
    )

    # Create agent with memory checkpointer
    memory = MemorySaver()
    agent = create_agent(
        system_prompt=SYSTEM_PROMPT,
        model=model,
        tools=all_tools,
        checkpointer=memory
    )

    print(f"\n🤖 Agent created with {len(all_tools)} tools")
    print("Type 'quit' or 'exit' to end the conversation.\n")
    print("="*70)

    # Configuration for agent execution
    config = {
        "configurable": {
            "thread_id": "conversation_thread",
            "user_id": ARCADE_USER_ID
        }
    }

    # Interactive conversation loop
    while True:
        # Get user input
        try:
            user_message = input("\n💬 You: ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\n\n👋 Goodbye!")
            break

        # Check for exit commands
        if not user_message:
            continue
        if user_message.lower() in ("quit", "exit", "q"):
            print("\n👋 Goodbye!")
            break

        print("="*70)

        # Start with user message
        current_input = {"messages": [{"role": "user", "content": user_message}]}

        # Agent execution loop with interrupt handling
        while True:
            print("\n🔄 Running agent...\n")

            interrupts = await stream_agent_response(agent, current_input, config)

            # Handle interrupts if any occurred
            if interrupts:
                print(f"\n⚠️  Detected {len(interrupts)} interrupt(s)\n")

                # Process each interrupt
                for interrupt_obj in interrupts:
                    interrupt_type = interrupt_obj.value.get("type")

                    if interrupt_type == "authorization_required":
                        # Handle authorization interrupt
                        decision = await handle_authorization_interrupt(
                            interrupt_obj.value,
                            arcade
                        )

                        # Resume agent with authorization decision
                        current_input = Command(resume=decision)
                        break  # Continue to next iteration
                    else:
                        print(f"❌ Unknown interrupt type: {interrupt_type}")
                        break
                else:
                    # All interrupts processed without break
                    break
            else:
                # No interrupts - agent completed successfully
                print("\n✅ Response complete!")
                break

        print("\n" + "="*70)


if __name__ == "__main__":
    asyncio.run(main())
```

Last updated on January 5, 2026

[Overview](/en/get-started/agent-frameworks/langchain/overview.md)
[Setup (TypeScript)](/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-ts.md)
