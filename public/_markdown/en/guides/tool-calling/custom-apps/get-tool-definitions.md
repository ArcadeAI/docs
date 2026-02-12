---
title: "Get Formatted Tool Definitions"
description: "Learn how to get formatted tool definitions using Arcade"
---
[Call tools](/en/guides/tool-calling.md)
[In custom applications](/en/guides/tool-calling/custom-apps.md)
Get formatted tool definitions

# Get Formatted Tool Definitions

When calling tools directly, it can be useful to get tool definitions in a specific model provider’s format. The  provides methods for getting a ’s definition and also for listing the definitions of multiple tools in a specific model provider’s format.

## Get a single tool definition formatted for a model

It can be useful to get a ’s definition in a specific model provider’s format. For example, you may want to get the `Github.SetStarred` tool’s definition in OpenAI’s format.

To do this, you can use the `client.tools.formatted.get` method and specify the  name and format.

### Python

```python
from arcadepy import Arcade

client = Arcade()

# Get a specific tool formatted for OpenAI
github_star_repo = client.tools.formatted.get(name="Github.SetStarred", format="openai")

print(github_star_repo)
```

### JavaScript

```javascript
import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get a specific tool formatted for OpenAI
const githubStarRepo = await client.tools.formatted.get("Github.SetStarred", {
  format: "openai",
});

console.log(githubStarRepo);
```

## Get all tool definitions in a MCP Server formatted for a model

It can be useful to list tool definitions for a  Server in a specific model provider’s format. For example, you may want to get the definitions of  in the `Github`  in OpenAI’s format.

To do this, you can use the `client.tools.formatted.list` method and specify the  Server and format. Since this method returns an iterator of pages, you can cast to a list to get all the .

### Python

```python
from arcadepy import Arcade

client = Arcade()

# Get all tools in the Github MCP Server formatted for OpenAI
github_tools = list(client.tools.formatted.list(format="openai", toolkit="github"))

# Print the number of tools in the Github MCP Server
print(len(github_tools))
```

### JavaScript

```javascript
import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get all tools in the Github MCP Server formatted for OpenAI
const githubTools = await client.tools.formatted.list({
  format: "openai",
  toolkit: "github",
});

// Print the number of tools in the Github MCP Server
console.log(githubTools.total_count);
```

## Get all tool definitions formatted for a model

To get all  formatted for OpenAI, you can use the `client.tools.formatted.list` method without specifying a  Server.

### Python

```python
from arcadepy import Arcade

client = Arcade()

# Get all tools formatted for OpenAI
all_tools = list(client.tools.formatted.list(format="openai"))

# Print the number of tools
print(len(all_tools))
```

### JavaScript

```javascript
import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

// Get all tools formatted for OpenAI
const allTools = await client.tools.formatted.list({ format: "openai" });

// Print the number of tools
console.log(allTools.total_count);
```

## Get Zod Tool Definitions

[Zod](https://zod.dev)  is a TypeScript-first schema validation library that helps you define and validate data structures. The [Arcade JS](https://github.com/ArcadeAI/arcade-js)  client offers methods to convert Arcade  definitions into Zod schemas, providing type safety and validation while enabling seamless integration with AI frameworks like LangChain, Vercel AI SDK, and Mastra AI. Using Zod with Arcade provides:

1.  **Type Safety**: Runtime validation of  inputs and outputs against their defined types
2.  **TypeScript Integration**: Provides excellent TypeScript support with automatic type inference
3.  **Framework Compatibility**: Direct integration with LangChain, Vercel AI SDK, and Mastra AI

### Convert to Zod Format

Arcade offers three ways to convert your  into Zod schemas, each for different use cases:

#### 1\. Convert to array of Zod tools

This method returns an array of  with Zod validation.

```typescript
import { toZod } from "@arcadeai/arcadejs/lib/index"

const googleToolkit = await arcade.tools.list({
    limit: 20,
    toolkit: "gmail",
});

const tools = toZod({
    tools: googleToolkit.items,
    client: arcade,
    userId: "<YOUR_USER_ID>",
})
```

#### 2\. Convert to object of Zod tools

This method returns an object with  names as keys, allowing direct access to tools by name:

```typescript
import { toZodToolSet } from "@arcadeai/arcadejs/lib/index"

const googleToolkit = await arcade.tools.list({
    limit: 20,
    toolkit: "gmail",
});

const tools = toZodToolSet({
    tools: googleToolkit.items,
    client: arcade,
    userId: "<YOUR_USER_ID>",
})

const emails = await tools.Gmail_ListEmails.execute({
  limit: 10,
});
```

#### 3\. Convert a single tool

When you only need to work with a specific , use this method to convert just that tool to a Zod schema:

```typescript
import { createZodTool } from "@arcadeai/arcadejs/lib/index"

const listEmails = await arcade.tools.get("Gmail_ListEmails");

const listEmailsTool = createZodTool({
    tool: listEmails,
    client: arcade,
    userId: "<YOUR_USER_ID>",
});

const emails = await listEmailsTool.execute({
  limit: 10,
});
```

### Handle Authorization

When working with  that require  authorization (like Gmail, GitHub, Slack, etc.), Arcade provides two approaches to handle the authorization flow when using Zod-converted tools:

#### Option 1: Manual handling

When you convert Arcade  to Zod without adding an `executeFactory`, Arcade will try to run tools directly. For tools that need permission (like Gmail or Slack), you’ll see a `PermissionDeniedError` if the  hasn’t given access yet.

This approach gives you complete control over the authorization flow, making it perfect for custom UI implementations or complex workflows. You’ll have full flexibility to design your own  experience, but you’ll need to handle authorization flows and error states manually in your code.

```typescript
import { PermissionDeniedError } from "@arcadeai/arcadejs"

const tools = toZodToolSet({
  tools: googleToolkit.items,
  client: arcade,
  userId: "<YOUR_USER_ID>",
})

try {
	const result = await tools.Gmail_ListEmails.execute({
		limit: 10,
	});
	console.log(result);
} catch (error) {
	if (error instanceof PermissionDeniedError) {
		// You can use the `arcade.tools.authorize` method to get an authorization URL for the user
		const authorizationResponse = await arcade.tools.authorize({
			tool_name: "Gmail.ListEmails",
			user_id: "<YOUR_USER_ID>",
		});
		console.log(authorizationResponse.url);
	} else {
		console.error("Error executing tool:", error);
	}
}
```

#### Option 2: Execute and authorize tool

Arcade offers a more convenient way to handle  execution and initial authorization steps. When converting tools to Zod, you can add the `executeOrAuthorizeZodTool` helper to the `executeFactory`. With this helper, your code no longer needs to catch a `PermissionDeniedError` for tools requiring permissions (as shown in Option 1). Instead, if the  hasn’t yet granted access, the `execute` method will return an `ToolAuthorizationResponse` object that contains the authorization URL.

This approach simplifies your code by:

1.  Attempting to execute the .
2.  If permissions are missing, it returns an object containing the authorization URL. This eliminates the need for both a `try...catch` block for `PermissionDeniedError` and a separate call (like `arcade.tools.authorize`) just to retrieve this URL.
3.  If the  is already authorized, it executes directly. Arcade remembers  authorizations, so once a user approves access, subsequent calls using this helper will execute the tool without prompting for authorization again.

While this helper streamlines obtaining the authorization URL, you are still responsible for presenting this URL to the . It’s particularly useful for straightforward implementations where you want to reduce boilerplate.

```typescript
import { executeOrAuthorizeZodTool } from "@arcadeai/arcadejs"

const tools = toZodToolSet({
	tools: googleToolkit.items,
	client: arcade,
	userId: "<YOUR_USER_ID>",
	executeFactory: executeOrAuthorizeZodTool, // Automatically handles tool authorization flows, including generating auth URLs
});

const result = await tools.Gmail_ListEmails.execute({
	limit: 10,
});

if ("authorization_required" in result && result.authorization_required) {
	console.log(
		`Please visit ${result.authorization_response.url} to authorize the tool`,
	);
} else {
	console.log(result);
}
```

Last updated on January 5, 2026

[Check authorization status](/en/guides/tool-calling/custom-apps/check-auth-status.md)
[Overview](/en/guides/create-tools/tool-basics.md)
