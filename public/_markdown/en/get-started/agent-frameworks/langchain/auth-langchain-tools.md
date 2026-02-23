---
title: "Authorize Existing Tools"
description: "Use Arcade to authorize existing tools"
---
[Agent Frameworks](/en/get-started/agent-frameworks.md)
[LangChain](/en/get-started/agent-frameworks/langchain/overview.md)
Authorizing Existing Tools

## Authorize Existing Tools

In this guide, we’ll show you how to authorize LangChain  like the `GmailToolkit` using Arcade. You may already have tools you want to use, and this guide will show you how to authorize them. Arcade handles retrieving, authorizing, and managing tokens so you don’t have to.

### Prerequisites

-   [Obtain an Arcade API key](/get-started/setup/api-keys.md)


### Install the required packages

Instead of the `langchain_arcade` package, you only need the `arcadepy` package to authorize existing  since Arcade tools are not being used.

### Python

```bash
pip install langchain-openai langgraph arcadepy langchain-google-community
```

### JavaScript

```bash
npm install @arcadeai/arcadejs @langchain/openai @langchain/core @langchain/langgraph @langchain/community
```

### Import the necessary packages

### Python

```python
import os
from arcadepy import Arcade
from google.oauth2.credentials import Credentials
from langchain_google_community import GmailToolkit
from langchain_google_community.gmail.utils import build_resource_service
from langchain_openai import ChatOpenAI
from langgraph.prebuilt import create_react_agent
```

### JavaScript

```javascript
import { Arcade } from "@arcadeai/arcadejs";
import {
	GmailCreateDraft,
	GmailGetMessage,
	GmailGetThread,
	GmailSearch,
	GmailSendMessage,
} from "@langchain/community/tools/gmail";
import type { StructuredTool } from "@langchain/core/tools";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatOpenAI } from "@langchain/openai";
```

### Initialize the Arcade client

### Python

```python
api_key = os.getenv("ARCADE_API_KEY")
client = Arcade(api_key=api_key)
```

### JavaScript

```javascript
const arcade = new Arcade();
```

### Start the authorization process for Gmail

### Python

```python
user_id = "{arcade_user_id}"
auth_response = client.auth.start(
    user_id=user_id,
    provider="google",
    scopes=["https://www.googleapis.com/auth/gmail.readonly"],
)
```

### JavaScript

```javascript
const USER_ID = "{arcade_user_id}";
const authResponse = await arcade.auth.start(USER_ID, "google", {
	scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

```

### Prompt the user to authorize

### Python

```python
if auth_response.status != "completed":
    print("Please authorize the application in your browser:")
    print(auth_response.url)
```

The `auth_response.status` will be `"completed"` if the  has already authorized the application, so they won’t be prompted to authorize again.

### JavaScript

```javascript
if (authResponse.status !== "completed") {
	console.log("Please authorize the application in your browser:");
	console.log(authResponse.url);
}
```

The `authResponse.status` will be `"completed"` if the  has already authorized the application, so they won’t be prompted to authorize again.

### Wait for authorization completion

### Python

```python
auth_response = client.auth.wait_for_completion(auth_response)
```

The `wait_for_completion` method will do nothing if the  has already authorized the application.

### JavaScript

```javascript
const completedAuth = await arcade.auth.waitForCompletion(authResponse);
```

The `waitForCompletion` method will do nothing if the  has already authorized the application.

### Use the token to initialize the Gmail MCP Server

### Python

```python
creds = Credentials(auth_response.context.token)
api_resource = build_resource_service(credentials=creds)
toolkit = GmailToolkit(api_resource=api_resource)
tools = toolkit.get_tools()
```

### JavaScript

```javascript
const gmailParam = {
	credentials: {
		accessToken: completedAuth.context.token,
	},
};
const tools: StructuredTool[] = [
	new GmailCreateDraft(gmailParam),
	new GmailGetMessage(gmailParam),
	new GmailGetThread(gmailParam),
	new GmailSearch(gmailParam),
	new GmailSendMessage(gmailParam),
];
```

### Initialize the agent

### Python

```python
model = ChatOpenAI(model="gpt-4o")
agent_executor = create_react_agent(model, tools)
```

### JavaScript

```javascript
const llm = new ChatOpenAI({ model: "gpt-4o" });
const agent_executor = createReactAgent({ llm, tools });
```

### Execute the agent

### Python

```python
example_query = "Read my latest emails and summarize them."

events = agent_executor.stream(
    {"messages": [("user", example_query)]},
    stream_mode="values",
)
for event in events:
    event["messages"][-1].pretty_print()
```

### JavaScript

```javascript
const exampleQuery = "Read my latest emails and summarize them.";
const events = await agent_executor.stream({ messages: [ { role: "user", content: exampleQuery } ] }, {	streamMode: "values" } );
for await (const event of events) {
	console.log(event.messages[event.messages.length - 1]);
}
```

### Next Steps

Now you’re ready to explore more LangChain tools with Arcade. Try integrating additional  Servers and crafting more complex queries to enhance your AI workflows.

Last updated on February 10, 2026

[Setup (TypeScript)](/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-ts.md)
[Mastra](/en/get-started/agent-frameworks/mastra.md)
