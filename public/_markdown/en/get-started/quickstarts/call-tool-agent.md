---
title: "Calling tools in your agent"
description: "Learn how to call tools in your agent"
---
QuickstartsCall tools in agents

# Calling tools in your agent with Arcade

Arcade gives your AI  the power to act. With Arcade-hosted , your AI-powered apps can send Gmail, update Notion, message in Slack, and more.

## Outcomes

Install and use the  to call Arcade Hosted .

### You will Learn

-   Install the
-   Build a workflow that uses  to:
    -   search for news with Google News
    -   Create a Google Doc with the news
    -   Email a link to the Google Doc to the
-   Present an OAuth URL to the user when the  requires authorization

### Prerequisites

-   An [Arcade](https://api.arcade.dev/dashboard/register)

-   An [Arcade API key](/get-started/setup/api-keys.md)

-   The [`uv` package manager](https://docs.astral.sh/uv/getting-started/installation/)
     if you are using Python
-   The [`bun` runtime](https://bun.com/)
     if you are using TypeScript

### Install the Arcade client

### Python

In your terminal, run the following command to create a new `uv` :

```bash
mkdir arcade-quickstart
cd arcade-quickstart
uv init
```

Then, run the following command to create and activate a new virtual environment, isolating the  dependencies from your system:

```bash
uv venv
source .venv/bin/activate
```

Then, run the following command to install the Python client package `arcadepy`:

```bash
uv add arcadepy
```

### TypeScript

In your terminal, run the following command to install the JavaScript client package `@arcadeai/arcadejs`:

```bash
bun install @arcadeai/arcadejs
```

### Setup the client

### Python

Open the `main.py` file and replace the content with the following:

```python
# main.py
from arcadepy import Arcade

# You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
client = Arcade(api_key="{arcade_api_key}")

# Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
# In this example, use the email you used to sign up for Arcade.dev:
user_id = "{arcade_user_id}"
```

### TypeScript

Create a new script called `example.ts`:

```typescript
// example.ts
import Arcade from "@arcadeai/arcadejs";

// You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
const client = new Arcade({
  apiKey: "{arcade_api_key}",
});

// Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
// In this example, use the email you used to sign up for Arcade.dev:
let userId = "{arcade_user_id}";
```

### Write a helper function to authorize and run tools

This helper function will check if a  requires authorization and if so, it will print the authorization URL and wait for the  to authorize the tool call. If the tool does not require authorization, it will run the tool directly without interrupting the flow.

### Python

```python
# main.py
# Helper function to authorize and run any tool
def authorize_and_run_tool(tool_name, input, user_id):
    # Start the authorization process
    auth_response = client.tools.authorize(
        tool_name=tool_name,
        user_id=user_id,
    )

    # If the authorization is not completed, print the authorization URL and wait for the user to authorize the app.
    # Tools that do not require authorization will have the status "completed" already.
    if auth_response.status != "completed":
        print(f"Click this link to authorize {tool_name}:\n{auth_response.url}.\nThe process will continue once you have authorized the app.")
        client.auth.wait_for_completion(auth_response.id)

    # Run the tool
    return client.tools.execute(tool_name=tool_name, input=input, user_id=user_id)
```

### JavaScript

```typescript
// example.ts
// Helper function to authorize and run any tool
async function authorize_and_run_tool({
  tool_name,
  input,
  user_id,
}: {
  tool_name: string;
  input: any;
  user_id: string;
}) {
  // Start the authorization process
  const authResponse = await client.tools.authorize({
    tool_name: tool_name,
    user_id: user_id,
  });

  // If the authorization is not completed, print the authorization URL and wait for the user to authorize the app. Tools that do not require authorization will have the status "completed" already.
  if (authResponse.status !== "completed") {
    console.log(
      `Click this link to authorize ${tool_name}:\n${authResponse.url}.\nThe process will continue once you have authorized the app.`
    );
    // Wait for the user to authorize the app
    await client.auth.waitForCompletion(authResponse.id);
  }

  // Run the tool
  const response = await client.tools.execute({
    tool_name: tool_name,
    input: input,
    user_id: user_id,
  });
  return response;
}
```

### Implement the workflow

In this example workflow, we:

-   Get the latest news about  URL mode elicitation
-   Create a Google Doc with the news
-   Send a link to the Google Doc to the

### Python

```python
# main.py
# This tool does not require authorization, so it will return the results
# without prompting the user to authorize the tool call.
response_search = authorize_and_run_tool(
    tool_name="GoogleNews.SearchNewsStories",
    input={
        "keywords": "MCP URL mode elicitation",
    },
    user_id=user_id,
)

# Get the news results from the response
news = response_search.output.value["news_results"]

# Format the news results into a string
output = "latest news about MCP URL mode elicitation:\n"
for search_result in news:
    output += f"{search_result['source']} - {search_result['title']}\n"
    output += f"{search_result['link']}\n\n"

# Create a Google Doc with the news results
# If the user has not previously authorized the Google Docs tool, they will be prompted to authorize the tool call.
response_create_doc = authorize_and_run_tool(
    tool_name="GoogleDocs.CreateDocumentFromText",
    input={
        "title": "News about MCP URL mode elicitation",
        "text_content": output,
    },
    user_id=user_id,
)

# Get the Google Doc from the response
google_doc = response_create_doc.output.value

email_body = f"You can find the news about MCP URL mode elicitation in the following Google Doc: {google_doc['documentUrl']}"

# Send an email with the link to the Google Doc
response_send_email = authorize_and_run_tool(
    tool_name="Gmail.SendEmail",
    input={
        "recipient": user_id,
        "subject": "News about MCP URL mode elicitation",
        "body": email_body,
    },
    user_id=user_id,
)

# Print the response from the tool call
print(f"Success! Check your email at {user_id}\n\nYou just chained 3 tools together:\n  1. Searched Google News for stories about MCP URL mode elicitation\n  2. Created a Google Doc with the results\n  3. Sent yourself an email with the document link\n\nEmail metadata:")
print(response_send_email.output.value)
```

### TypeScript

```typescript
// example.ts
// This tool does not require authorization, so it will return the results
// without prompting the user to authorize the app.
const response_search = await authorize_and_run_tool({
  tool_name: "GoogleNews.SearchNewsStories",
  input: {
    keywords: "MCP URL mode elicitation",
  },
  user_id: userId,
});

// Get the news results from the response
const news = response_search.output?.value?.news_results;

// Format the news results into a string
let output = "latest news about MCP URL mode elicitation:\n";
for (const search_result of news) {
  output += "--------------------------------\n";
  output += `${search_result.source} - ${search_result.title}\n`;
  output += `${search_result.link ?? ""}\n`;
}

// Create a Google Doc with the news results
// If the user has not previously authorized the Google Docs tool, they will be prompted to authorize the tool call.
const respose_create_doc = await authorize_and_run_tool({
  tool_name: "GoogleDocs.CreateDocumentFromText",
  input: {
    title: "News about MCP URL mode elicitation",
    text_content: output,
  },
  user_id: userId,
});

const google_doc = respose_create_doc.output?.value;

// Send an email with the link to the Google Doc
const email_body = `You can find the news about MCP URL mode elicitation in the following Google Doc: ${google_doc.documentUrl}`;

// Here again, if the user has not previously authorized the Gmail tool, they will be prompted to authorize the tool call.
const respose_send_email = await authorize_and_run_tool({
  tool_name: "Gmail.SendEmail",
  input: {
    recipient: userId,
    subject: "News about MCP URL mode elicitation",
    body: email_body,
  },
  user_id: userId,
});

// Print the response from the tool call
console.log(
  `Success! Check your email at ${userId}\n\nYou just chained 3 tools together:\n  1. Searched Google News for stories about MCP URL mode elicitation\n  2. Created a Google Doc with the results\n  3. Sent yourself an email with the document link\n\nEmail metadata:`
);
console.log(respose_send_email.output?.value);
```

### Run the code

### Python

```bash
uv run main.py
```

TEXT

```
Success! Check your email at {arcade_user_id}

You just chained 3 tools together:
  1. Searched Google News for stories about MCP URL mode elicitation
  2. Created a Google Doc with the results
  3. Sent yourself an email with the document link

Email metadata:
{'id': '19ba...', 'label_ids': ['UNREAD', 'SENT', 'INBOX'], 'thread_id': '19ba...', 'url': 'https://mail.google.com/mail/u/0/#sent/19ba...'}
```

### TypeScript

```bash
bun run example.ts
```

TEXT

```
Success! Check your email at {arcade_user_id}

You just chained 3 tools together:
  1. Searched Google News for stories about MCP URL mode elicitation
  2. Created a Google Doc with the results
  3. Sent yourself an email with the document link

Email metadata:
{
  id: "19ba...",
  label_ids: [ "UNREAD", "SENT", "INBOX" ],
  thread_id: "19ba...",
  url: "https://mail.google.com/mail/u/0/#sent/19ba...",
}
```

## Next Steps

In this example, we call the tool methods directly. In your real applications and , you’ll likely be letting the LLM decide which  to call. Learn more about using Arcade with Frameworks in the [Frameworks](/get-started/agent-frameworks.md) section, or [how to build your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

[![Vanilla Python logo](/images/icons/python.svg) Vanilla Python MCP Client](/guides/agent-frameworks/setup-arcade-with-your-llm-python.md)
[![LangChain logo](/images/icons/langchain.svg) LangChain Agent Framework](/guides/agent-frameworks/langchain/use-arcade-tools.md)
[![CrewAI logo](https://avatars.githubusercontent.com/u/170677839?s=200&v=4) CrewAI Agent Framework](/guides/agent-frameworks/crewai/use-arcade-tools.md)
[![OpenAI Agents logo](https://avatars.githubusercontent.com/u/14957082?s=200&v=4) OpenAI Agents Agent Framework](/guides/agent-frameworks/openai-agents/overview.md)
[![Google ADK logo](https://avatars.githubusercontent.com/u/1342004?s=200&v=4) Google ADK Agent Framework](/guides/agent-frameworks/google-adk/overview.md)

[![LangChain logo](/images/icons/langchain.svg) LangChain Agent Framework](/guides/agent-frameworks/langchain/use-arcade-tools.md)
[![Google ADK logo](https://avatars.githubusercontent.com/u/1342004?s=200&v=4) Google ADK Agent Framework](/guides/agent-frameworks/google-adk/overview.md)
[![Mastra logo](/images/icons/mastra.svg) Mastra Agent Framework](/guides/agent-frameworks/mastra/overview.md)
[![Vercel AI logo](/images/icons/vercel.svg) Vercel AI Agent Framework](/guides/agent-frameworks/vercelai.md)

## Full Example Code

### Python

### **main.py** (full file)

```python
# example.py
from arcadepy import Arcade

# You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
client = Arcade(api_key="{arcade_api_key}")

# Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
# In this example, use the email you used to sign up for Arcade.dev:
user_id = "{arcade_user_id}"


# Helper function to authorize and run any tool
def authorize_and_run_tool(tool_name, input, user_id):
    # Start the authorization process
    auth_response = client.tools.authorize(
        tool_name=tool_name,
        user_id=user_id,
    )

    # If the authorization is not completed, print the authorization URL and wait for the user to authorize the app.
    # Tools that do not require authorization will have the status "completed" already.
    if auth_response.status != "completed":
        print(f"Click this link to authorize {tool_name}:\n{auth_response.url}.\nThe process will continue once you have authorized the app.")
        client.auth.wait_for_completion(auth_response.id)

    # Run the tool
    return client.tools.execute(tool_name=tool_name, input=input, user_id=user_id)

# This tool does not require authorization, so it will return the results
# without prompting the user to authorize the tool call.
response_search = authorize_and_run_tool(
    tool_name="GoogleNews.SearchNewsStories",
    input={
        "keywords": "MCP URL mode elicitation",
    },
    user_id=user_id,
)

# Get the news results from the response
news = response_search.output.value["news_results"]

# Format the news results into a string
output = "latest news about MCP URL mode elicitation:\n"
for search_result in news:
    output += "----------------------------\n"
    output += f"{search_result['source']} - {search_result['title']}\n"
    output += f"{search_result['link']}\n"

# Create a Google Doc with the news results
# If the user has not previously authorized the Google Docs tool, they will be prompted to authorize the tool call.
response_create_doc = authorize_and_run_tool(
    tool_name="GoogleDocs.CreateDocumentFromText",
    input={
        "title": "News about MCP URL mode elicitation",
        "text_content": output,
    },
    user_id=user_id,
)

# Get the Google Doc from the response
google_doc = response_create_doc.output.value

email_body = f"You can find the news about MCP URL mode elicitation in the following Google Doc: {google_doc['documentUrl']}"

# Send an email with the link to the Google Doc
response_send_email = authorize_and_run_tool(
    tool_name="Gmail.SendEmail",
    input={
        "recipient": user_id,
        "subject": "News about MCP URL mode elicitation",
        "body": email_body,
    },
    user_id=user_id,
)

# Print the response from the tool call
print(f"Success! Check your email at {user_id}\n\nYou just chained 3 tools together:\n  1. Searched Google News for stories about MCP URL mode elicitation\n  2. Created a Google Doc with the results\n  3. Sent yourself an email with the document link\n\nEmail metadata:")
print(response_send_email.output.value)
```

### TypeScript

### **example.ts** (full file)

```typescript
// example.ts
import Arcade from "@arcadeai/arcadejs";

// You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
const client = new Arcade(
  apiKey: "{arcade_api_key}",
);

// Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
// In this example, use the email you used to sign up for Arcade.dev:
let userId = "{arcade_user_id}";


// Helper function to authorize and run any tool
async function authorize_and_run_tool({
  tool_name,
  input,
  user_id,
}: {
  tool_name: string,
  input: any,
  user_id: string,
}) {


  // Start the authorization process
  const authResponse = await client.tools.authorize({
    tool_name: tool_name,
    user_id: user_id,
  });

  // If the authorization is not completed, print the authorization URL and wait for the user to authorize the app. Tools that do not require authorization will have the status "completed" already.
  if (authResponse.status !== "completed") {
    console.log(
      `Click this link to authorize ${tool_name}:\n${authResponse.url}.\nThe process will continue once you have authorized the app.`
    );
    // Wait for the user to authorize the app
    await client.auth.waitForCompletion(authResponse.id);
  }

  // Run the tool
  const response = await client.tools.execute({
    tool_name: tool_name,
    input: input,
    user_id: user_id,
  });
  return response;
}

// This tool does not require authorization, so it will return the results
// without prompting the user to authorize the app.
const response_search = await authorize_and_run_tool({
  tool_name: "GoogleNews.SearchNewsStories",
  input: {
    keywords: "MCP URL mode elicitation",
  },
  user_id: userId,
});

// Get the news results from the response
const news = response_search.output?.value?.news_results;

// Format the news results into a string
let output = "latest news about MCP URL mode elicitation:\n";
for (const search_result of news) {
  output += "--------------------------------\n";
  output += `${search_result.source} - ${search_result.title}\n`;
  output += `${search_result.link ?? ""}\n`;
}

// Create a Google Doc with the news results
// If the user has not previously authorized the Google Docs tool, they will be prompted to authorize the tool call.
const respose_create_doc = await authorize_and_run_tool({
  tool_name: "GoogleDocs.CreateDocumentFromText",
  input: {
    title: "News about MCP URL mode elicitation",
    text_content: output,
  },
  user_id: userId,
});

const google_doc = respose_create_doc.output?.value;

// Send an email with the link to the Google Doc
const email_body = `You can find the news about MCP URL mode elicitation in the following Google Doc: ${google_doc.documentUrl}`;

// Here again, if the user has not previously authorized the Gmail tool, they will be prompted to authorize the tool call.
const respose_send_email = await authorize_and_run_tool({
  tool_name: "Gmail.SendEmail",
  input: {
    recipient: userId,
    subject: "News about MCP URL mode elicitation",
    body: email_body,
  },
  user_id: userId,
});

// Print the response from the tool call
console.log(
  `Success! Check your email at ${userId}\n\nYou just chained 3 tools together:\n  1. Searched Google News for stories about MCP URL mode elicitation\n  2. Created a Google Doc with the results\n  3. Sent yourself an email with the document link\n\nEmail metadata:`
);
console.log(respose_send_email.output?.value);
```

Last updated on January 30, 2026

[Connect Arcade docs to your IDE](/en/get-started/setup/connect-arcade-docs.md)
[Call tools in IDE/MCP clients](/en/get-started/quickstarts/call-tool-client.md)
