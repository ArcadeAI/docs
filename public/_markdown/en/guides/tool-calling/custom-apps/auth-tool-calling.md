---
title: "Authorized Tool Calling"
description: "Guide on calling tools that require authorization"
---
[Call tools](/en/guides/tool-calling.md)
[In custom applications](/en/guides/tool-calling/custom-apps.md)
Authorize tool calling

# Authorized Tool Calling

Arcade provides an authorization system that handles OAuth 2.0, , and user tokens needed by AI  to access external services through . This means your AI agents can now act on behalf of  securely and privately.

With Arcade, developers can now create  that can as _as the end  of their application_ to perform tasks like:

-   Creating a new Zoom meeting
-   Sending or reading email
-   Answering questions about files in Google Drive.

Arcade also allows for actions (tools) to be authorized directly. For example, to access a user’s Gmail , you can utilize the following guide.

### Initialize the client

Import the  in a Python/Javascript script. The client automatically finds  set by `arcade login`.

### Python

```python
from arcadepy import Arcade

client = Arcade() # Automatically finds the `ARCADE_API_KEY` env variable

```

### JavaScript

```javascript
import Arcade from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable
```

### Authorize a tool directly

Many  require authorization. For example, the `Gmail.ListEmails` tool requires authorization with Google.

This authorization must be approved by the user. By approving, the user allows your  or app to access only the data they’ve approved.

### Python

```python
# As the developer, you must identify the user you're authorizing
# and pass a unique identifier for them (e.g. an email or user ID) to Arcade:
USER_ID = "{arcade_user_id}"

# Request access to the user's Gmail account
auth_response = client.tools.authorize(
  tool_name="Gmail.ListEmails",
  user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")
```

### JavaScript

```javascript
// As the developer, you must identify the user you're authorizing
// and pass a unique identifier for them (e.g. an email or user ID) to Arcade:
const userId = "{arcade_user_id}";

// Request access to the user's Gmail account
const authResponse = await client.tools.authorize({
tool_name: "Gmail.ListEmails",
user_id: userId,
});

if (authResponse.status !== "completed") {
console.log(`Click this link to authorize: ${authResponse.url}`);
}

```

This will print a URL that the  must visit to approve the authorization.

### Check for authorization status

You can wait for the authorization to complete using the following methods:

### Python

```python
client.auth.wait_for_completion(auth_response)
```

### JavaScript

```javascript
await client.auth.waitForCompletion(authResponse);
```

### Call the tool with authorization

Once the user has approved the action, you can run the . You only need to pass the `user_id`:

### Python

```python
emails_response = client.tools.execute(
    tool_name="Gmail.ListEmails",
    user_id=USER_ID,
)
print(emails_response)
```

### JavaScript

```javascript
const emailsResponse = await client.tools.execute({
  tool_name: "Gmail.ListEmails",
  user_id: userId,
});

console.log(emailsResponse.output.value);
```

Arcade remembers the user’s authorization tokens, so you don’t have to! Next time the user runs the same , they won’t have to go through the authorization process again until the auth expires or is revoked.

### How it works

When you call a  with `client.tools.execute()`, Arcade:

1.  Checks for authorization.
2.  Routes the request to the ’s provider.
3.  Returns the ’s response.

With `client.tools.authorize()`, you can also authorize  for later use.

These APIs give you programmatic control over  calling.

### Next steps

Arcade also allows you to [build your own tools](/guides/create-tools/tool-basics/build-mcp-server.md) to integrate any custom functionality or API to your  or AI workflows.

Your  can use the [service providers supported by Arcade](/references/auth-providers.md) or you can integrate with any [OAuth2-compatible service](/references/auth-providers/oauth2.md).

Last updated on February 11, 2026

[Overview](/en/guides/tool-calling/custom-apps.md)
[Check authorization status](/en/guides/tool-calling/custom-apps/check-auth-status.md)
