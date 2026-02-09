---
title: "Directly call third-party APIs"
description: "Guide on how to retrieve an authorization token to call third-party APIs directly"
---
[Call tools](/en/guides/tool-calling.md)
Call third-party APIs

# Directly call third-party APIs

In this guide, you’ll learn how to use Arcade to obtain user authorization and interact with third-party services by calling their API endpoints directly, without using Arcade for  execution or definition. We’ll use Google’s Gmail API as an example to demonstrate how to:

-   Get authorization tokens through Arcade
-   Handle  authentication flows
-   Use tokens with external services

This can be useful when you need to manage authorization flows in your application.

### Prerequisites

-   Sign up for an [Arcade](https://api.arcade.dev/dashboard/register)
     if you haven’t already
-   Generate an [Arcade API key](/get-started/setup/api-keys.md)
     and take note of it

### Install required libraries

### Python

`bash pip install arcadepy google-api-python-client google-auth-httplib2 google-auth-oauthlib`

### JavaScript

`bash npm install @arcadeai/arcadejs googleapis`

### Start coding

### Python

Create a new file `direct_api_call.py` and import all libraries we’re going to use:

```python
from arcadepy import Arcade
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
```

### JavaScript

Create a new file `direct_api_call.js` and import all libraries we’re going to use:

```javascript
import { Arcade } from "@arcadeai/arcadejs";
import { google } from "googleapis";
```

### Initialize the Arcade client

Create an instance of the :

### Python

```python
client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable
```

### JavaScript

```javascript
const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable
```

### Initiate an authorization request

Use `client.auth.start()` to initiate the authorization process:

### Python

```python
# This would be your app's internal ID for the user (an email, UUID, etc.)
user_id = "{arcade_user_id}"

# Start the authorization process

auth_response = client.auth.start(
user_id=user_id,
provider="google",
scopes=["https://www.googleapis.com/auth/gmail.readonly"],
)

```

### JavaScript

```javascript
// Your app's internal ID for the user (an email, UUID, etc).
// It's used internally to identify your user in Arcade, not to identify with the Gmail service.
// Use your Arcade account email for testing:
const user_id = "{arcade_user_id}";

// Start the authorization process
let auth_response = await client.auth.start(user_id, "google", {
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});
```

### Guide the user through authorization

If authorization is not completed, prompt the  to visit the authorization URL:

### Python

```python
if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)
```

### JavaScript

```javascript
if (auth_response.status !== "completed") {
  console.log("Please complete the authorization challenge in your browser:");
  console.log(auth_response.url);
}
```

### Wait for the user to authorize the request

### Python

```python
# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)
```

### JavaScript

```javascript
// Wait for the authorization to complete
auth_response = await client.auth.waitForCompletion(auth_response);
```

### Use the obtained token

Once authorization is complete, you can use the obtained token to access the third-party service:

### Python

```python
credentials = Credentials(auth_response.context.token)
gmail = build("gmail", "v1", credentials=credentials)

email_messages = (
gmail.users().messages().list(userId="me").execute().get("messages", [])
)

print(email_messages)

```

### JavaScript

```javascript
const auth = new google.auth.OAuth2();
auth.setCredentials({ access_token: auth_response.context.token });
const gmail = google.gmail({ version: "v1", auth });

// List email messages
const response = await gmail.users.messages.list({
  userId: "me",
});

const email_messages = response.data.messages || [];
console.log(email_messages);
```

### Execute the code

### Python

`python python3 direct_api_call.py`

### JavaScript

`javascript node direct_api_call.js`

You should see an output similar to this:, which is a list of the email messages returned by the Gmail API:

TEXT

```
[{'id': '195f77a8ce90f2c1', 'threadId': '195f77a8ce90f2c1'}, {'id': '195ed467a90e8538', 'threadId': '195ed467a90e8538'}, ...]
```

For each item in the list/array, you could use the [`users.messages.get`](https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/get) endpoint to get the full message details.

Consider using the [Arcade Gmail MCP Server](/resources/integrations/productivity/gmail.md)
, which simplifies the process for retrieving email messages even further! The pattern described here is useful if you need to directly get a token to use with Google in other parts of your codebase.

### How it works

By using `client.auth.start` and `client.auth.wait_for_completion`, you leverage Arcade to manage the OAuth flow for  authorization.

Arcade handles the authorization challenges and tokens, simplifying the process for you.

### Next steps

Integrate this authorization flow into your application, and explore how you can manage different [auth providers](/references/auth-providers.md) and scopes.

Last updated on February 7, 2026

[Handling errors](/en/guides/tool-calling/error-handling.md)
[Overview](/en/guides/tool-calling/custom-apps.md)
