---
title: "Setup Arcade with Google ADK (TypeScript)"
description: "Build an agent with Arcade tools using Google ADK for TypeScript"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[Google ADK](/en/get-started/agent-frameworks/google-adk/overview.md)
Setup (TypeScript)

# Setup Arcade with Google ADK (TypeScript)

[Google ADK for TypeScript](https://github.com/google/adk-js)  provides a framework for building AI  in TypeScript. Arcade’s `@arcadeai/arcadejs` library provides the  integration, allowing your agents to access Gmail, GitHub, Slack, and 100+ other services.

## Outcomes

Build an  that uses Arcade  to help  with Gmail and Slack

### You will Learn

-   How to retrieve Arcade  and convert them to Google ADK format
-   How to build a Google ADK  with Arcade
-   How to handle  authorization

### Prerequisites

-   [Arcade account](https://app.arcade.dev/register)

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)

-   [Node.js](https://nodejs.org/)
      18+ (includes npm) or [Bun](https://bun.sh/)
     
-   A [Gemini API key](https://aistudio.google.com/apikey)
     

## How Arcade integrates with Google ADK

Google ADK uses `FunctionTool` for defining callable . Arcade’s `@arcadeai/arcadejs` library provides `toZod` to convert tool definitions to Zod schemas, which Google ADK’s `FunctionTool` accepts. The `Runner` class manages the ’s conversation loop, while `InMemorySessionService` handles session state.

## Build the agent

### Create a new project

Create a new directory and install dependencies:

### npm

```bash
mkdir google-adk-arcade-ts
cd google-adk-arcade-ts
npm init -y
npm install @google/adk @arcadeai/arcadejs dotenv
```

### bun

```bash
mkdir google-adk-arcade-ts
cd google-adk-arcade-ts
bun init -y
bun add @google/adk @arcadeai/arcadejs dotenv
```

Create a `.env` file with your :

```bash
# .env
# Arcade API key from https://app.arcade.dev/api-keys
ARCADE_API_KEY=YOUR_ARCADE_API_KEY
# Your Arcade user ID (the email you used to sign up)
ARCADE_USER_ID={arcade_user_id}
# Google Gemini API key (get one at https://aistudio.google.com/apikey)
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

### Create the agent file

Create `index.ts` with the following imports and configuration:

```typescript
// index.ts
import {
  LlmAgent,
  FunctionTool,
  Runner,
  InMemorySessionService,
  setLogLevel,
  LogLevel,
} from "@google/adk";
import Arcade from "@arcadeai/arcadejs";
import { toZod } from "@arcadeai/arcadejs/lib/zod/zod";
import "dotenv/config";
import readline from "node:readline/promises";

// Suppress verbose ADK logs (options: DEBUG, INFO, WARNING, ERROR)
setLogLevel(LogLevel.ERROR);

// Configuration
const ARCADE_USER_ID = process.env.ARCADE_USER_ID || "default-user";
const MCP_SERVERS = ["Slack"];
const INDIVIDUAL_TOOLS = ["Gmail_ListEmails", "Gmail_SendEmail", "Gmail_WhoAmI"];
const SYSTEM_PROMPT = "You are a helpful assistant that can assist with Gmail and Slack.";
const MODEL = "gemini-2.0-flash";
const APP_NAME = "inbox_assistant";
```

### Convert Arcade tools to Google ADK format

Use Arcade’s `toZod` to convert  definitions to Zod schemas, then wrap them in Google ADK’s `FunctionTool`:

```typescript
// index.ts
async function getArcadeTools(client: Arcade, userId: string): Promise<FunctionTool[]> {
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

  // Convert Arcade tools to Zod format (with proper schemas)
  const zodTools = toZod({
    tools: uniqueTools,
    client,
    userId,
    executeFactory: ({ toolDefinition, client, userId }) => {
      const toolName = toolDefinition.qualified_name;
      return async (args: unknown) => {
        // Handle authorization
        const authResult = await client.tools.authorize({
          tool_name: toolName,
          user_id: userId,
        });

        if (authResult.status !== "completed") {
          console.log(`\nAuthorization required for ${toolName}`);
          console.log(`Please visit: ${authResult.url}\n`);
          await client.auth.waitForCompletion(authResult);
          console.log("Authorization complete!\n");
        }

        // Execute the tool
        const result = await client.tools.execute({
          tool_name: toolName,
          input: args as Record<string, unknown>,
          user_id: userId,
        });

        if (!result.success) {
          throw new Error(`Tool execution failed: ${result.output?.error?.message}`);
        }

        return result.output?.value;
      };
    },
  });

  // Convert to Google ADK FunctionTool format
  return zodTools.map((tool) =>
    new FunctionTool({
      name: tool.name,
      description: tool.description,
      parameters: tool.parameters,
      execute: tool.execute,
    })
  );
}
```

**What’s happening here:**

-   `toZod` converts Arcade  definitions to Zod schemas with proper parameter types
-   `executeFactory` creates the execution function that handles authorization and  calls
-   Each Zod  is wrapped in a Google ADK `FunctionTool`

### Create and run the agent

```typescript
// index.ts
async function main() {
  const client = new Arcade();
  const sessionService = new InMemorySessionService();

  // Get Arcade tools
  const arcadeTools = await getArcadeTools(client, ARCADE_USER_ID);

  // Create the agent
  const agent = new LlmAgent({
    name: APP_NAME,
    description: "An assistant that helps with Gmail and Slack",
    model: MODEL,
    instruction: SYSTEM_PROMPT,
    tools: arcadeTools,
  });

  // Create a session
  const session = await sessionService.createSession({
    appName: APP_NAME,
    userId: ARCADE_USER_ID,
    state: { user_id: ARCADE_USER_ID },
  });

  // Create the runner
  const runner = new Runner({
    appName: APP_NAME,
    agent,
    sessionService,
  });

  // Set up interactive chat
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Hello! I'm your Google ADK Agent with Arcade Tools.");
  console.log("Try asking me to summarize your recent emails or send a Slack message!");
  console.log("Type 'exit' to quit.\n");

  while (true) {
    const input = await rl.question("> ");
    if (input.toLowerCase() === "exit") {
      break;
    }

    try {
      const events = runner.runAsync({
        userId: ARCADE_USER_ID,
        sessionId: session.id,
        newMessage: { role: "user", parts: [{ text: input }] },
      });

      for await (const event of events) {
        if (event.content?.parts?.[0]?.text) {
          console.log(`\n${event.author}: ${event.content.parts[0].text}\n`);
        }
      }
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

### Run the agent

### npm

```bash
npx tsx index.ts
```

### bun

```bash
bun run index.ts
```

Google ADK for TypeScript is relatively new. Check the [official documentation](https://google.github.io/adk-docs)  and [samples repository](https://github.com/google/adk-samples)  for the latest API updates.

## Key takeaways

-   **`toZod`** from `@arcadeai/arcadejs` converts Arcade  to Zod schemas with proper parameter types
-   **`FunctionTool`** wraps the Zod  for Google ADK
-   **`Runner`** manages the ’s conversation loop with `runAsync()`
-   **`InMemorySessionService`** handles session state between messages
-   **Authorization** is handled in the execute factory - the auth URL is displayed when needed
-   **`userId`** tracks authorization per  - use a consistent ID for each user in your application

## Example code

### **index.ts** (full file)

```typescript
// index.ts
import {
  LlmAgent,
  FunctionTool,
  Runner,
  InMemorySessionService,
  setLogLevel,
  LogLevel,
} from "@google/adk";
import Arcade from "@arcadeai/arcadejs";
import { toZod } from "@arcadeai/arcadejs/lib/zod/zod";
import "dotenv/config";
import readline from "node:readline/promises";

// Suppress verbose ADK logs (options: DEBUG, INFO, WARNING, ERROR)
setLogLevel(LogLevel.ERROR);

// Configuration
const ARCADE_USER_ID = process.env.ARCADE_USER_ID || "default-user";
const MCP_SERVERS = ["Slack"];
const INDIVIDUAL_TOOLS = [
  "Gmail_ListEmails",
  "Gmail_SendEmail",
  "Gmail_WhoAmI",
];
const SYSTEM_PROMPT =
  "You are a helpful assistant that can assist with Gmail and Slack.";
const MODEL = "gemini-2.0-flash";
const APP_NAME = "inbox_assistant";

async function getArcadeTools(
  client: Arcade,
  userId: string
): Promise<FunctionTool[]> {
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

  // Convert Arcade tools to Zod format (with proper schemas)
  const zodTools = toZod({
    tools: uniqueTools,
    client,
    userId,
    executeFactory: ({ toolDefinition, client, userId }) => {
      const toolName = toolDefinition.qualified_name;
      return async (args: unknown) => {
        // Handle authorization
        const authResult = await client.tools.authorize({
          tool_name: toolName,
          user_id: userId,
        });

        if (authResult.status !== "completed") {
          console.log(`\nAuthorization required for ${toolName}`);
          console.log(`Please visit: ${authResult.url}\n`);
          await client.auth.waitForCompletion(authResult);
          console.log("Authorization complete!\n");
        }

        // Execute the tool
        const result = await client.tools.execute({
          tool_name: toolName,
          input: args as Record<string, unknown>,
          user_id: userId,
        });

        if (!result.success) {
          throw new Error(
            `Tool execution failed: ${result.output?.error?.message}`
          );
        }

        return result.output?.value;
      };
    },
  });

  // Convert to Google ADK FunctionTool format
  return zodTools.map((tool) =>
    new FunctionTool({
      name: tool.name,
      description: tool.description,
      parameters: tool.parameters,
      execute: tool.execute,
    })
  );
}

async function main() {
  const client = new Arcade();
  const sessionService = new InMemorySessionService();

  // Get Arcade tools
  const arcadeTools = await getArcadeTools(client, ARCADE_USER_ID);

  // Create the agent
  const agent = new LlmAgent({
    name: APP_NAME,
    description: "An assistant that helps with Gmail and Slack",
    model: MODEL,
    instruction: SYSTEM_PROMPT,
    tools: arcadeTools,
  });

  // Create a session
  const session = await sessionService.createSession({
    appName: APP_NAME,
    userId: ARCADE_USER_ID,
    state: { user_id: ARCADE_USER_ID },
  });

  // Create the runner
  const runner = new Runner({
    appName: APP_NAME,
    agent,
    sessionService,
  });

  // Set up interactive chat
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Hello! I'm your Google ADK Agent with Arcade Tools.");
  console.log("Try asking me to summarize your recent emails or send a Slack message!");
  console.log("Type 'exit' to quit.\n");

  while (true) {
    const input = await rl.question("> ");
    if (input.toLowerCase() === "exit") {
      break;
    }

    try {
      const events = runner.runAsync({
        userId: ARCADE_USER_ID,
        sessionId: session.id,
        newMessage: { role: "user", parts: [{ text: input }] },
      });

      for await (const event of events) {
        if (event.content?.parts?.[0]?.text) {
          console.log(`\n${event.author}: ${event.content.parts[0].text}\n`);
        }
      }
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
-   Build multi- systems with different Arcade
-   Explore [creating custom tools](/guides/create-tools/tool-basics/build-mcp-server.md)
     with the Arcade  SDK

Last updated on February 10, 2026

[Setup (Python)](/en/get-started/agent-frameworks/google-adk/setup-python.md)
[Overview](/en/get-started/agent-frameworks/langchain/overview.md)
