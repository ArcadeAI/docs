---
title: "Setup Arcade with OpenAI Agents (TypeScript)"
description: "Build an agent with Arcade tools using the OpenAI Agents SDK for JavaScript/TypeScript"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[OpenAI Agents](/en/get-started/agent-frameworks/openai-agents/overview.md)
Setup (TypeScript)

# Setup Arcade with OpenAI Agents (TypeScript)

The [OpenAI Agents SDK for JavaScript](https://openai.github.io/openai-agents-js/)  provides a framework for building AI  in TypeScript and JavaScript. Arcade’s `@arcadeai/arcadejs` library converts Arcade  to the format OpenAI Agents expects.

## Outcomes

Build an  that uses Arcade  to help  with Gmail and Slack

### You will Learn

-   How to retrieve Arcade tools and convert them to OpenAI  format
-   How to use the factory pattern for  execution
-   How to handle authorization with `executeOrAuthorizeZodTool`

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)

-   [Node.js](https://nodejs.org/)
      18+ (includes npm) or [Bun](https://bun.sh/)
     

## How Arcade integrates with OpenAI Agents

The OpenAI  JS SDK uses [Zod](https://zod.dev)  schemas for  definitions. Arcade’s `toZod()` function converts Arcade tool definitions to Zod schemas, and the `executeFactory` parameter determines how tools execute.

TypeScript uses a **factory pattern** to bind  to  functions. `executeFactory` receives  (`client`, `userId`, `tool definition`) and returns an execute function with that context “baked in”.

## Build the agent

### Create a new project

Create a new directory and install dependencies:

### npm

```bash
mkdir openai-agents-arcade-ts
cd openai-agents-arcade-ts
npm init -y
npm install @openai/agents @arcadeai/arcadejs dotenv
```

### bun

```bash
mkdir openai-agents-arcade-ts
cd openai-agents-arcade-ts
bun init -y
bun add @openai/agents @arcadeai/arcadejs dotenv
```

Create a `.env` file with your :

```bash
# .env
# Arcade API key from https://app.arcade.dev/api-keys
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
# Your Arcade user ID (the email you used to sign up)
ARCADE_USER_ID={arcade_user_id}
# OpenAI API key
OPENAI_API_KEY=YOUR_OPENAI_API_KEY
```

### Create agent file

Create `index.ts` (or `index.mjs` for plain JavaScript):

```typescript
// index.ts
import Arcade from "@arcadeai/arcadejs";
import { executeOrAuthorizeZodTool, toZod } from "@arcadeai/arcadejs/lib/index";
import { Agent, run, tool } from "@openai/agents";
import "dotenv/config";
import readline from "node:readline/promises";

// Configuration
const ARCADE_USER_ID = process.env.ARCADE_USER_ID || "default-user";
const MCP_SERVERS = ["Slack"];
const INDIVIDUAL_TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"];
const SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack.";
const MODEL = "gpt-4o-mini";
```

### Retrieve and convert Arcade tools

Use `toZod()` to convert Arcade  to Zod schemas, then `tool()` to convert them to OpenAI  format:

```typescript
// index.ts
async function getArcadeTools(client: Arcade, userId: string) {
  // Fetch tools from MCP servers
  const mcpServerTools = await Promise.all(
    MCP_SERVERS.map(async (serverName) => {
      const response = await client.tools.list({
        toolkit: serverName,
        limit: 30,
      });
      return response.items;
    })
  );

  // Fetch individual tools by name
  const individualToolDefs = await Promise.all(
    INDIVIDUAL_TOOLS.map((toolName) => client.tools.get(toolName))
  );

  // Combine and deduplicate
  const allTools = [...mcpServerTools.flat(), ...individualToolDefs];
  const uniqueTools = Array.from(
    new Map(allTools.map((t) => [t.qualified_name, t])).values()
  );

  // Convert to Zod format with the execute factory
  // This is the TypeScript equivalent of Python's functools.partial -
  // the factory receives context and returns an execute function
  const zodTools = toZod({
    tools: uniqueTools,
    client,
    userId,
    executeFactory: executeOrAuthorizeZodTool,
  });

  // Convert Zod tools to OpenAI Agents format
  return zodTools.map(tool);
}
```

**Understanding the factory pattern**: In TypeScript, `executeFactory` binds context to a function. It receives the   (`client`, `userId`, `tool definition`) and returns an execute function with that context already bound.

### Create and run the agent

```typescript
// index.ts
async function main() {
  // Initialize Arcade client
  const client = new Arcade();

  // Get tools converted to OpenAI Agents format
  const tools = await getArcadeTools(client, ARCADE_USER_ID);

  // Create the agent
  const agent = new Agent({
    name: "Inbox Assistant",
    instructions: SYSTEM_PROMPT,
    model: MODEL,
    tools,
  });

  // Set up interactive chat
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Hello! I'm your helpful OpenAI Agent! I use Arcade Tools to access your Gmail and Slack. Try asking me to summarize your recent emails or DM you on Slack!\n\nType 'exit' to quit.\n");

  // Track conversation history for multi-turn context
  let conversationHistory: any[] = [];

  while (true) {
    const input = await rl.question("> ");
    if (input.toLowerCase() === "exit") {
      break;
    }

    try {
      // Pass conversation history for context, add new user message
      const result = await run(
        agent,
        conversationHistory.concat({ role: "user", content: input })
      );
      // Update history with full conversation
      conversationHistory = result.history;
      console.log(`\n${result.finalOutput}\n`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log("Goodbye!");
  rl.close();
  process.exit(0);
}

main().catch(console.error);
```

### Handle authorization

The `executeOrAuthorizeZodTool` factory automatically handles authorization. When a tool needs OAuth authorization (like Gmail), instead of throwing an error, it returns a response with the authorization URL. The ’s output will include something like the following:

```bash
Please authorize access: https://accounts.google.com/...
```

After the  visits the URL and authorizes, running the same request again will succeed.

For more control over authorization flow, you can create a custom execute factory:

```typescript
// index.ts
import { isAuthorizationRequiredError, executeZodTool } from "@arcadeai/arcadejs/lib/index";

// Custom factory that waits for authorization
function executeWithWait({ zodToolSchema, toolDefinition, client, userId }) {
  return async (input) => {
    try {
      return await executeZodTool({ zodToolSchema, toolDefinition, client, userId })(input);
    } catch (error) {
      if (error instanceof Error && isAuthorizationRequiredError(error)) {
        const response = await client.tools.authorize({
          tool_name: zodToolSchema.name,
          user_id: userId,
        });

        if (response.status !== "completed") {
          console.log(`Please authorize: ${response.url}`);
          // Wait for the user to complete authorization
          await client.auth.waitForCompletion(response);
        }

        // Retry after authorization
        return await executeZodTool({ zodToolSchema, toolDefinition, client, userId })(input);
      }
      throw error;
    }
  };
}

// Use with toZod
const zodTools = toZod({
  tools: uniqueTools,
  client,
  userId,
  executeFactory: executeWithWait,
});
```

### Run the agent

### npm

Use `npx` (included with npm) to run the TypeScript file:

```bash
npx tsx index.ts
```

### bun

```bash
bun run index.ts
```

## Key takeaways

-   **`toZod()`** converts Arcade tools to Zod schemas that OpenAI  can use
-   **`executeFactory`** is the TypeScript equivalent of Python’s `functools.partial` - it binds  to  execute functions
-   **`executeOrAuthorizeZodTool`** automatically returns authorization URLs when  need OAuth
-   **`isAuthorizationRequiredError`** lets you detect and handle authorization errors in custom factories
-   The **`userId`** parameter tracks authorization per  - use a consistent ID for each user
-   **`result.history`** contains the full conversation history - pass it back to `run()` for multi-turn

## Complete code

```typescript
// index.ts
import Arcade from "@arcadeai/arcadejs";
import { executeOrAuthorizeZodTool, toZod } from "@arcadeai/arcadejs/lib/index";
import { Agent, run, tool } from "@openai/agents";
import "dotenv/config";
import readline from "node:readline/promises";

// Configuration
const ARCADE_USER_ID = process.env.ARCADE_USER_ID || "default-user";
const MCP_SERVERS = ["Slack"];
const INDIVIDUAL_TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"];
const SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack.";
const MODEL = "gpt-4o-mini";

async function getArcadeTools(client: Arcade, userId: string) {
  // Fetch tools from MCP servers
  const mcpServerTools = await Promise.all(
    MCP_SERVERS.map(async (serverName) => {
      const response = await client.tools.list({
        toolkit: serverName,
        limit: 30,
      });
      return response.items;
    })
  );

  // Fetch individual tools by name
  const individualToolDefs = await Promise.all(
    INDIVIDUAL_TOOLS.map((toolName) => client.tools.get(toolName))
  );

  // Combine and deduplicate
  const allTools = [...mcpServerTools.flat(), ...individualToolDefs];
  const uniqueTools = Array.from(
    new Map(allTools.map((t) => [t.qualified_name, t])).values()
  );

  // Convert to Zod format with the execute factory
  const zodTools = toZod({
    tools: uniqueTools,
    client,
    userId,
    executeFactory: executeOrAuthorizeZodTool,
  });

  // Convert Zod tools to OpenAI Agents format
  return zodTools.map(tool);
}

async function main() {
  const client = new Arcade();
  const tools = await getArcadeTools(client, ARCADE_USER_ID);

  const agent = new Agent({
    name: "Inbox Assistant",
    instructions: SYSTEM_PROMPT,
    model: MODEL,
    tools,
  });

  // Set up interactive chat
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Hello! I'm your helpful OpenAI Agent! I use Arcade Tools to access your Gmail and Slack. Try asking me to summarize your recent emails or DM you on Slack!\n\nType 'exit' to quit.\n");

  // Track conversation history for multi-turn context
  let conversationHistory: any[] = [];

  while (true) {
    const input = await rl.question("> ");
    if (input.toLowerCase() === "exit") {
      break;
    }

    try {
      const result = await run(
        agent,
        conversationHistory.concat({ role: "user", content: input })
      );
      conversationHistory = result.history;
      console.log(`\n${result.finalOutput}\n`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log("Goodbye!");
  rl.close();
  process.exit(0);
}

main().catch(console.error);
```

## Next steps

-   Add more  by modifying `MCP_SERVERS` and `INDIVIDUAL_TOOLS`
-   Build a web interface using frameworks like Next.js or Express
-   See the [Vercel AI SDK tutorial](/get-started/agent-frameworks/vercelai.md)
     for a complete web chatbot example
-   Explore [creating custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     with the Arcade  SDK

Last updated on February 10, 2026

[Setup (Python)](/en/get-started/agent-frameworks/openai-agents/setup-python.md)
[Vercel AI SDK](/en/get-started/agent-frameworks/vercelai.md)
