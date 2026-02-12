---
title: "Setup Arcade with LangChain"
description: "Learn how to use Arcade tools in LangChain agents"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[LangChain](/en/get-started/agent-frameworks/langchain/overview.md)
Setup (TypeScript)

# Setup Arcade with LangChain

Learn how to integrate Arcade tools using LangChain primitives to build AI .

LangChain is a popular agentic framework that abstracts a lot of the complexity of building AI agents. LangGraph, a lower level orchestration framework, builds it and offers more control over the inner flow of the .

## Outcomes

Learn how to integrate Arcade  using LangChain primitives

### You will Learn

-   How to retrieve Arcade  and transform them into LangChain tools
-   How to build a LangChain
-   How to integrate Arcade  into the agentic flow
-   How to manage Arcade  authorization using LangChain interrupts

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   The [`bun` runtime](https://bun.com/)


## LangChain primitives you will use in this guide

LangChain provides multiple abstractions for building AI , and it’s useful to internalize how some of these primitives work, so you can understand and extend the different agentic patterns LangChain supports.

-   : Most agentic frameworks, including LangChain, provide an abstraction for a .
-   [_Interrupts_](https://docs.langchain.com/oss/javascript/langgraph/interrupts)
    : Interrupts in LangChain are a way to control the flow of the agentic loop when something needs to occur outside of the normal ReAct flow. For example, if a tool requires authorization, you can interrupt the  and ask the user to authorize the  before continuing.
-   [_Checkpointers_](https://docs.langchain.com/oss/javascript/langgraph/persistence)
    : Checkpointers are how LangChain implements persistence. A checkpointer stores the ’s state in a “checkpoint” that you can resume later. Those checkpoints are saved to a _thread_, which you can access after the agent’s execution, making it simple for long-running agents and for handling interruptions and more sophisticated flows such as branching, time travel, and more.

## Integrate Arcade tools into a LangChain agent

### Create a new project

```bash
mkdir langchain-arcade-example
cd langchain-arcade-example
bun install @arcadeai/arcadejs langchain @langchain/openai @langchain/core @langchain/langgraph
```

Create a new file called `.env` and add the following :

```bash
# .env
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Import the necessary packages

Create a new file called `main.ts` and add the following code:

```typescript
// main.ts
"use strict";
import { Arcade } from "@arcadeai/arcadejs";
import {
  type ToolExecuteFunctionFactoryInput,
  executeZodTool,
  isAuthorizationRequiredError,
  toZod,
} from "@arcadeai/arcadejs/lib/index";
import { type ToolExecuteFunction } from "@arcadeai/arcadejs/lib/zod/types";
import { createAgent, tool } from "langchain";
import {
  Command,
  interrupt,
  MemorySaver,
  type Interrupt,
} from "@langchain/langgraph";
import chalk from "chalk";
import readline from "node:readline/promises";
```

This is a number of imports, examine them:

-   Arcade imports:
    -   `Arcade`: This is the , used to interact with the .
    -   `type ToolExecuteFunctionFactoryInput`: Encodes the input to execute Arcade .
    -   `isAuthorizationRequiredError`: Checks if a  requires authorization.
    -   `toZod`: Converts an Arcade  definition into a [Zod](https://zod.dev)
          schema (Zod provides type safety and validation at runtime).
    -   `executeZodTool`: Executes an Zod-converted .
-   LangChain imports:
    -   `createAgent`: Creates a LangChain  using the ReAct pattern.
    -   `tool`: Turns an Arcade  definition into a LangChain tool.
    -   `interrupt`: Interrupts the ReAct flow and asks the  for input.
    -   `Command`: Communicates the user’s decisions to the ’s interrupts.
    -   `MemorySaver`: Stores the ’s state, and is required for checkpointing and interrupts.
-   Other imports:
    -   `chalk`: This is a library to colorize the console output.
    -   `readline`: This is a library to read input from the console.

### Configure the agent

These variables are used in the rest of the code to customize the  and manage the . Feel free to configure them to your liking.

```typescript
// main.ts
// configure your own values to customize your agent

// The Arcade User ID identifies who is authorizing each service.
const arcadeUserID = "{arcade_user_id}";
// This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
const MCPServers = ["Slack"];
// This determines individual tools. Useful to pick specific tools when you don't need all of them.
const individualTools = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"];
// This determines the maximum number of tool definitions Arcade will return per MCP server
const toolLimit = 30;
// This prompt defines the behavior of the agent.
const systemPrompt =
  "You are a helpful assistant that can use Gmail tools. Your main task is to help the user with anything they may need.";
// This determines which LLM the agent uses
const agentModel = "gpt-4o-mini";
// This allows LangChain to retain the context of the session
const threadID = "1";
```

### Write a helper function to execute Arcade tools

This is a wrapper around the `executeZodTool` function. When it fails, you interrupt the flow and send the authorization request for the  to handle. If the user authorizes the , the harness will reply with an `{authorized: true}` object, and the system will retry the tool call without interrupting the flow.

```typescript
// main.ts
function executeOrInterruptTool({
  zodToolSchema,
  toolDefinition,
  client,
  userId,
}: ToolExecuteFunctionFactoryInput): ToolExecuteFunction<any> {
  const { name: toolName } = zodToolSchema;

  return async (input: unknown) => {
    try {
      // Try to execute the tool
      const result = await executeZodTool({
        zodToolSchema,
        toolDefinition,
        client,
        userId,
      })(input);
      return result;
    } catch (error) {
      // If the tool requires authorization, interrupt the flow and ask the user to authorize the tool
      if (error instanceof Error && isAuthorizationRequiredError(error)) {
        const response = await client.tools.authorize({
          tool_name: toolName,
          user_id: userId,
        });

        // Interrupt the flow here, and pass everything the handler needs to get the user's authorization
        const interrupt_response = interrupt({
          authorization_required: true,
          authorization_response: response,
          tool_name: toolName,
          url: response.url ?? "",
        });

        // If the user authorized the tool, retry the tool call without interrupting the flow
        if (interrupt_response.authorized) {
          const result = await executeZodTool({
            zodToolSchema,
            toolDefinition,
            client,
            userId,
          })(input);
          return result;
        } else {
          // If the user didn't authorize the tool, the system handles errors through LangChain
          throw new Error(
            `Authorization required for tool call ${toolName}, but user didn't authorize.`,
          );
        }
      }
      throw error;
    }
  };
}
```

### Retrieve Arcade tools and transform them into LangChain tools

Here you get the Arcade tools you want the agent to use, and transform them into LangChain tools. The first step is to initialize the , and get the  you want to use. Then, use the `toZod` function to convert the Arcade tools into a Zod schema, and pass it to the `executeOrInterruptTool` function to create a LangChain tool.

This helper function is long, here’s a breakdown of what it does for clarity:

-   retrieve tools from all configured  servers (defined in the `MCPServers` variable)
-   retrieve individual  (defined in the `individualTools` variable)
-   combine the tools from the  servers and the individual
-   convert the Arcade  to Zod tools
-   convert the Zod  to LangChain tools

You then call the `getTools` function to get the tools you want the  to use.

```typescript
// main.ts
// Initialize the Arcade client
const arcade = new Arcade();

export type GetToolsProps = {
  arcade: Arcade;
  mcpServers?: string[];
  individualTools?: string[];
  userId: string;
  limit?: number;
};

export async function getTools({
  arcade,
  mcpServers = [],
  individualTools = [],
  userId,
  limit = 30,
}: GetToolsProps) {
  if (mcpServers.length === 0 && individualTools.length === 0) {
    throw new Error("At least one tool or toolkit must be provided");
  }

  // Get up to `limit` tools from each configured MCP server
  const from_mcpServers = await Promise.all(
    mcpServers.map(async (mcpServerName) => {
      const definitions = await arcade.tools.list({
        toolkit: mcpServerName,
        limit: limit,
      });
      return definitions.items;
    }),
  );

  // Get the individual tools
  const from_individualTools = await Promise.all(
    individualTools.map(async (toolName) => {
      return await arcade.tools.get(toolName);
    }),
  );

  // Combine the tools from the MCP servers and the individual tools
  const all_tools = [...from_mcpServers.flat(), ...from_individualTools];
  const unique_tools = Array.from(
    new Map(all_tools.map((tool) => [tool.qualified_name, tool])).values(),
  );

  // Convert the Arcade tools to Zod tools
  const arcadeTools = toZod({
    tools: unique_tools,
    client: arcade,
    executeFactory: executeOrInterruptTool,
    userId: userId,
  });

  // Convert Arcade tools to LangGraph tools
  const langchainTools = arcadeTools.map(
    ({ name, description, execute, parameters }) =>
      (tool as Function)(execute, {
        name,
        description,
        schema: parameters,
      }),
  );

  return langchainTools;
}

const tools = await getTools({
  arcade,
  mcpServers: MCPServers,
  individualTools: individualTools,
  userId: arcadeUserID,
  limit: toolLimit,
});
```

### Write the interrupt handler

In LangChain, each interrupt needs to be “resolved” for the flow to continue. In response to an interrupt, you need to return a decision object with the information needed to resolve the interrupt. In this case, the decision is whether the authorization was successful, in which case the system will retry the tool call, or if the authorization failed, the flow will be interrupted with an error, and the  will decide what to do next.

This helper function receives an interrupt and returns a decision object. Decision objects can be of any serializable type (convertible to JSON). In this case, you return an object with a boolean flag indicating if the authorization was successful.

This function captures the authorization flow outside of the agent’s context, which is a good practice for security and context engineering. By handling everything in the , you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the  free from any authorization-related traces, which reduces the risk of hallucinations, and reduces context bloat.

```typescript
// main.ts
async function handleAuthInterrupt(
  interrupt: Interrupt,
): Promise<{ authorized: boolean }> {
  const value = interrupt.value;
  const authorization_required = value.authorization_required;
  if (authorization_required) {
    const tool_name = value.tool_name;
    const authorization_response = value.authorization_response;
    console.log("⚙️: Authorization required for tool call", tool_name);
    console.log(
      "⚙️: Please authorize in your browser",
      authorization_response.url,
    );
    console.log("⚙️: Waiting for you to complete authorization...");
    try {
      await arcade.auth.waitForCompletion(authorization_response.id);
      console.log("⚙️: Authorization granted. Resuming execution...");
      return { authorized: true };
    } catch (error) {
      console.error("⚙️: Error waiting for authorization to complete:", error);
      return { authorized: false };
    }
  }
  return { authorized: false };
}
```

### Create the agent

Here you create the  using the `createAgent` function. You pass the system prompt, the model, the tools, and the checkpointer. When the agent runs, it will automatically use the helper function you wrote earlier to handle  calls and authorization requests.

```typescript
// main.ts
const agent = createAgent({
  systemPrompt: systemPrompt,
  model: agentModel,
  tools: tools,
  checkpointer: new MemorySaver(),
});
```

### Write the invoke helper

This last helper function handles the streaming of the ’s response, and captures the interrupts. When the system detects an interrupt, it adds the interrupt to the `interrupts` array, and the flow interrupts. If there are no interrupts, it will just stream the agent’s to your console.

```typescript
// main.ts
async function streamAgent(
  agent: any,
  input: any,
  config: any,
): Promise<Interrupt[]> {
  const stream = await agent.stream(input, {
    ...config,
    streamMode: "updates",
  });
  const interrupts: Interrupt[] = [];

  for await (const chunk of stream) {
    if (chunk.__interrupt__) {
      interrupts.push(...(chunk.__interrupt__ as Interrupt[]));
      continue;
    }
    for (const update of Object.values(chunk)) {
      for (const msg of (update as any)?.messages ?? []) {
        console.log("🤖: ", msg.toFormattedString());
      }
    }
  }

  return interrupts;
}
```

### Write the main function

Finally, write the main function that will call the  and handle the  input.

Here the `config` object configures the `thread_id`, which tells the  to store the state of the conversation into that specific thread. Like any typical agent loop, you:

1.  Capture the  input
2.  Stream the ’s response
3.  Handle any authorization interrupts
4.  Resume the  after authorization
5.  Handle any errors
6.  Exit the loop if the  wants to quit

```typescript
// main.ts
async function main() {
  const config = { configurable: { thread_id: threadID } };
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(chalk.green("Welcome to the chatbot Type 'exit' to quit."));
  while (true) {
    const input = await rl.question("> ");
    if (input.toLowerCase() === "exit") {
      break;
    }
    rl.pause();

    try {
      let agentInput: any = {
        messages: [{ role: "user", content: input }],
      };

      // Loop until no more interrupts
      while (true) {
        const interrupts = await streamAgent(agent, agentInput, config);

        if (interrupts.length === 0) {
          break; // No more interrupts, we're done
        }

        // Handle all interrupts
        const decisions: any[] = [];
        for (const interrupt of interrupts) {
          decisions.push(await handleAuthInterrupt(interrupt));
        }

        // Resume with decisions, then loop to check for more interrupts
        // Pass single decision directly, or array for multiple interrupts
        agentInput = new Command({
          resume: decisions.length === 1 ? decisions[0] : decisions,
        });
      }
    } catch (error) {
      console.error(error);
    }

    rl.resume();
  }
  console.log(chalk.red("👋 Bye..."));
  process.exit(0);
}

// Run the main function
main().catch((err) => console.error(err));
```

### Run the agent

```bash
bun run main.ts
```

You should see the  responding to your prompts like any model, as well as handling any  calls and authorization requests. Here are some example prompts you can try:

-   “Send me an email with a random haiku about LangChain ”
-   “Summarize my latest 3 emails”

## Key takeaways

-   You can integrate Arcade  into any agentic framework like LangChain, all you need is to transform the Arcade tools into LangChain tools and handle the authorization flow.
-    isolation: By handling the authorization flow outside of the ’s context, you remove the risk of the LLM replacing the authorization URL or leaking it, and you keep the context free from any authorization-related traces, which reduces the risk of hallucinations.
-   You can leverage the interrupts mechanism to handle human intervention in the ’s flow, useful for authorization flows, policy enforcement, or anything else that requires input from the .

## Next Steps

1.  Try adding additional tools to the  or modifying the  in the catalog for a different use case by modifying the `MCPServers` and `individualTools` variables.
2.  Try refactoring the `handleAuthInterrupt` function to handle more complex flows, such as human-in-the-loop.
3.  Try implementing a fully deterministic flow before the agentic loop, use this deterministic phase to prepare the  for the , adding things like the current date, time, or any other information that is relevant to the task at hand.

## Example code

### **main.ts** (full file)

```typescript
// main.ts
"use strict";
import { Arcade } from "@arcadeai/arcadejs";
import {
  type ToolExecuteFunctionFactoryInput,
  executeZodTool,
  isAuthorizationRequiredError,
  toZod,
} from "@arcadeai/arcadejs/lib/index";
import { type ToolExecuteFunction } from "@arcadeai/arcadejs/lib/zod/types";
import { createAgent, tool } from "langchain";
import {
  Command,
  interrupt,
  MemorySaver,
  type Interrupt,
} from "@langchain/langgraph";
import chalk from "chalk";
import readline from "node:readline/promises";

// configure your own values to customize your agent

// The Arcade User ID identifies who is authorizing each service.
const arcadeUserID = "{arcade_user_id}";
// This determines which MCP server is providing the tools, you can customize this to make a Notion agent. All tools from the MCP servers defined in the array will be used.
const MCPServers = ["Slack"];
// This determines individual tools. Useful to pick specific tools when you don't need all of them.
const individualTools = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"];
// This determines the maximum number of tool definitions Arcade will return
const toolLimit = 30;
// This prompt defines the behavior of the agent.
const systemPrompt =
"You are a helpful assistant that can use Gmail tools. Your main task is to help the user with anything they may need.";
// This determines which LLM the agent uses
const agentModel = "gpt-4o-mini";
// This allows LangChain to retain the context of the session
const threadID = "1";

function executeOrInterruptTool({
zodToolSchema,
toolDefinition,
client,
userId,
}: ToolExecuteFunctionFactoryInput): ToolExecuteFunction<any> {
const { name: toolName } = zodToolSchema;

return async (input: unknown) => {
try {
// Try to execute the tool
const result = await executeZodTool({
zodToolSchema,
toolDefinition,
client,
userId,
})(input);
return result;
} catch (error) {
// If the tool requires authorization, interrupt the flow and ask the user to authorize the tool
if (error instanceof Error && isAuthorizationRequiredError(error)) {
const response = await client.tools.authorize({
tool_name: toolName,
user_id: userId,
});

        // Interrupt the flow here, and pass everything the handler needs to get the user's authorization
        const interrupt_response = interrupt({
          authorization_required: true,
          authorization_response: response,
          tool_name: toolName,
          url: response.url ?? "",
        });

        // If the user authorized the tool, retry the tool call without interrupting the flow
        if (interrupt_response.authorized) {
          const result = await executeZodTool({
            zodToolSchema,
            toolDefinition,
            client,
            userId,
          })(input);
          return result;
        } else {
          // If the user didn't authorize the tool, the system handles errors through LangChain
          throw new Error(
            `Authorization required for tool call ${toolName}, but user didn't authorize.`
          );
        }
      }
      throw error;
    }

};
}

// Initialize the Arcade client
const arcade = new Arcade();

export type GetToolsProps = {
  arcade: Arcade;
  mcpServers?: string[];
  individualTools?: string[];
  userId: string;
  limit?: number;
};

export async function getTools({
  arcade,
  mcpServers = [],
  individualTools = [],
  userId,
  limit = 30,
}: GetToolsProps) {
  if (mcpServers.length === 0 && individualTools.length === 0) {
    throw new Error("At least one tool or toolkit must be provided");
  }

const from_mcpServers = await Promise.all(
mcpServers.map(async (mcpServerName) => {
const definitions = await arcade.tools.list({
toolkit: mcpServerName,
limit: limit,
});
return definitions.items;
})
);

const from_individualTools = await Promise.all(
individualTools.map(async (toolName) => {
return await arcade.tools.get(toolName);
})
);

const all_tools = [...from_mcpServers.flat(), ...from_individualTools];
const unique_tools = Array.from(
new Map(all_tools.map((tool) => [tool.qualified_name, tool])).values()
);

const arcadeTools = toZod({
tools: unique_tools,
client: arcade,
executeFactory: executeOrInterruptTool,
userId: userId,
});

// Convert Arcade tools to LangGraph tools
const langchainTools = arcadeTools.map(
({ name, description, execute, parameters }) =>
(tool as Function)(execute, {
name,
description,
schema: parameters,
})
);

return langchainTools;
}

const tools = await getTools({
arcade,
mcpServers: MCPServers,
individualTools: individualTools,
userId: arcadeUserID,
limit: toolLimit,
});

async function handleAuthInterrupt(
interrupt: Interrupt
): Promise<{ authorized: boolean }> {
const value = interrupt.value;
const authorization_required = value.authorization_required;
if (authorization_required) {
const tool_name = value.tool_name;
const authorization_response = value.authorization_response;
console.log("⚙️: Authorization required for tool call", tool_name);
console.log(
"⚙️: Please authorize in your browser",
authorization_response.url
);
console.log("⚙️: Waiting for you to complete authorization...");
try {
await arcade.auth.waitForCompletion(authorization_response.id);
console.log("⚙️: Authorization granted. Resuming execution...");
return { authorized: true };
} catch (error) {
console.error("⚙️: Error waiting for authorization to complete:", error);
return { authorized: false };
}
}
return { authorized: false };
}

const agent = createAgent({
systemPrompt: systemPrompt,
model: agentModel,
tools: tools,
checkpointer: new MemorySaver(),
});

async function streamAgent(
agent: any,
input: any,
config: any
): Promise<Interrupt[]> {
const stream = await agent.stream(input, {
...config,
streamMode: "updates",
});
const interrupts: Interrupt[] = [];

for await (const chunk of stream) {
if (chunk.**interrupt**) {
interrupts.push(...(chunk.**interrupt** as Interrupt[]));
continue;
}
for (const update of Object.values(chunk)) {
for (const msg of (update as any)?.messages ?? []) {
console.log("🤖: ", msg.toFormattedString());
}
}
}

return interrupts;
}

async function main() {
const config = { configurable: { thread_id: threadID } };
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

console.log(chalk.green("Welcome to the chatbot Type 'exit' to quit."));
while (true) {
const input = await rl.question("> ");
if (input.toLowerCase() === "exit") {
break;
}
rl.pause();

    try {
      let agentInput: any = {
        messages: [{ role: "user", content: input }],
      };

      // Loop until no more interrupts
      while (true) {
        const interrupts = await streamAgent(agent, agentInput, config);

        if (interrupts.length === 0) {
          break; // No more interrupts, we're done
        }

        // Handle all interrupts
        const decisions: any[] = [];
        for (const interrupt of interrupts) {
          decisions.push(await handleAuthInterrupt(interrupt));
        }

        // Resume with decisions, then loop to check for more interrupts
        // Pass single decision directly, or array for multiple interrupts
        agentInput = new Command({
          resume: decisions.length === 1 ? decisions[0] : decisions,
        });
      }
    } catch (error) {
      console.error(error);
    }

    rl.resume();

}
console.log(chalk.red("👋 Bye..."));
process.exit(0);
}

// Run the main function
main().catch((err) => console.error(err));

```


Last updated on February 11, 2026

[Setup (Python)](/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py.md)
[Authorizing Existing Tools](/en/get-started/agent-frameworks/langchain/auth-langchain-tools.md)
