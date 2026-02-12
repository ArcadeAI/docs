---
title: "Checking Tool Auth Status"
description: "Guide on checking the auth status of a tool"
---
[Call tools](/en/guides/tool-calling.md)
[In custom applications](/en/guides/tool-calling/custom-apps.md)
Check authorization status

# Checking Tool Authorization Status

Before executing  that require authorization, you can check their authorization status to understand what permissions are needed and whether they’re currently available for a .

This is useful for:

-   Displaying authorization requirements in your UI
-   Pre-checking  availability before execution
-   Understanding which  need  approval
-   Debugging authorization issues

### Initialize the client

Import the  in a Python/Javascript script.

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

### Check authorization status for all tools

You can get a list of all available  and check their authorization status for a specific :

### Python

```python
USER_ID = "{arcade_user_id}"

# Get all tools for the user
tools = client.tools.list(user_id=USER_ID)

for tool in tools:
    print(f"Tool: {tool.name}")

    if tool.requirements:
        # Check if all requirements are met
        print(f"Requirements met: {tool.requirements.met}")

        # Check authorization status
        if tool.requirements.authorization:
            print(f"Authorization status: {tool.requirements.authorization.status}")
            print(f"Token status: {tool.requirements.authorization.token_status}")

        # Check secret requirements
        if tool.requirements.secrets:
            for secret in tool.requirements.secrets:
                print(f"Secret '{secret.key}' met: {secret.met}")
                if not secret.met and secret.status_reason:
                    print(f"Reason: {secret.status_reason}")

    print("---")
```

### JavaScript

```javascript
const userId = "{arcade_user_id}";

// Get all tools for the user
const tools = await client.tools.list({ user_id: userId });

tools.items.forEach(tool => {
    console.log(`Tool: ${tool.name}`);

    if (tool.requirements) {
        // Check if all requirements are met
        console.log(`Requirements met: ${tool.requirements.met}`);

        // Check authorization status
        if (tool.requirements.authorization) {
            console.log(`Authorization status: ${tool.requirements.authorization.status}`);
            console.log(`Token status: ${tool.requirements.authorization.token_status}`);
        }

        // Check secret requirements
        if (tool.requirements.secrets) {
            tool.requirements.secrets.forEach(secret => {
                console.log(`Secret '${secret.key}' met: ${secret.met}`);
                if (!secret.met && secret.status_reason) {
                    console.log(`Reason: ${secret.status_reason}`);
                }
            });
        }
    }

    console.log("---");
});
```

If a username is not provided, the Token Status will be excluded and only the requirements for the provider will be shown.

### Check authorization status for a specific tool

You can also check the authorization status for a specific  by name:

### Python

```python
USER_ID = "{arcade_user_id}"
TOOL_NAME = "Gmail.ListEmails"

# Get specific tool details
tool = client.tools.get(tool_name=TOOL_NAME, user_id=USER_ID)

print(f"Tool: {tool.name}")
print(f"Description: {tool.description}")

if tool.requirements:
    print(f"All requirements met: {tool.requirements.met}")

    if tool.requirements.authorization:
        auth = tool.requirements.authorization
        print(f"Authorization required: {auth.provider_type}")
        print(f"Authorization status: {auth.status}")
        print(f"Token status: {auth.token_status}")

        if auth.status_reason:
            print(f"Status reason: {auth.status_reason}")

    if tool.requirements.secrets:
        print("Secret requirements:")
        for secret in tool.requirements.secrets:
            status = "✓" if secret.met else "✗"
            print(f"  {status} {secret.key}")
```

### JavaScript

```javascript
const userId = "{arcade_user_id}";
const toolName = "Gmail.ListEmails";

// Get specific tool details
const tool = await client.tools.get(toolName, {
    user_id: userId
});

console.log(`Tool: ${tool.name}`);
console.log(`Description: ${tool.description}`);

if (tool.requirements) {
    console.log(`All requirements met: ${tool.requirements.met}`);

    if (tool.requirements.authorization) {
        const auth = tool.requirements.authorization;
        console.log(`Authorization required: ${auth.provider_type}`);
        console.log(`Authorization status: ${auth.status}`);
        console.log(`Token status: ${auth.token_status}`);

        if (auth.status_reason) {
            console.log(`Status reason: ${auth.status_reason}`);
        }
    }

    if (tool.requirements.secrets) {
        console.log("Secret requirements:");
        tool.requirements.secrets.forEach(secret => {
            const status = secret.met ? "✓" : "✗";
            console.log(`  ${status} ${secret.key}`);
        });
    }
}
```

### Understanding the status values

#### Authorization Status

-   `active`: If the provider is configured and enabled
-   `inactive`: Authorization is not found or is disabled

#### Token Status

-   `not_started`: Authorization process hasn’t begun
-   `pending`: Authorization is in progress ( needs to approve)
-   `completed`: Authorization is complete and tokens are available
-   `failed`: Authorization process failed

#### Requirements Met

-   `true`: All requirements for the  are satisfied
-   `false`: Some requirements are missing (authorization, secrets, etc.)

#### Secret Met

-   `true`: The secret exists for the
-   `false`: The secret does not exist for the

Last updated on January 5, 2026

[Authorize tool calling](/en/guides/tool-calling/custom-apps/auth-tool-calling.md)
[Get formatted tool definitions](/en/guides/tool-calling/custom-apps/get-tool-definitions.md)
