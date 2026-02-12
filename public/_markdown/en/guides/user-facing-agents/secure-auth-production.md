---
title: "Secure Auth in Production"
description: "How to secure and brand your auth flows in production"
---
User-facing agentsSecure Auth in Production

# Secure and Brand the Auth Flow in Production

To keep your users safe, Arcade.dev performs a user verification check when a  is authorized for the first time. This check verifies that the  who is authorizing the tool is the same user who started the authorization flow, which helps prevent phishing attacks.

There are two ways to secure your auth flows with Arcade.dev:

-   Use the **Arcade  verifier** for development (enabled by default)
-   Implement a **custom  verifier** for production

This setting is configured in the [Auth > Settings section](https://api.arcade.dev/dashboard/auth/settings)  of the Arcade Dashboard.

## Use the Arcade user verifier

If you’re building a proof-of-concept app or a solo project, use the Arcade user verifier. This option requires no custom development and is on by default when you create a new Arcade.dev .

This setting is configured in the [Auth > Settings section](https://api.arcade.dev/dashboard/auth/settings)  of the Arcade Dashboard:

![An image showing how to pick the Arcade user verifier option in the Arcade Dashboard](/images/docs/auth/dashboard-arcade-verifier.png)

When you authorize a tool, you’ll be prompted to sign in to your Arcade.dev . If you are already signed in (to the Arcade Dashboard, for example), this verification will succeed silently.

The Arcade.dev user verifier helps keep your auth flows secure while you are building and testing your  or app. When you’re ready to share your work with others, implement a [custom user verifier](#build-a-custom-user-verifier) so your  don’t need to sign in to Arcade.dev.

Arcade’s default OAuth apps can _only_ be used with the Arcade  verifier. If you are building a multi-user production app, you must obtain your own OAuth app credentials and add them to Arcade. For example, see our docs on [configuring Google auth in the Arcade Dashboard](/references/auth-providers/google.md#access-the-arcade-dashboard).

## Build a custom user verifier

In a production application or , end-users are verified by your code, not Arcade.dev. This allows you to fully control the  experience of the auth flow. To enable this, build a custom verifier route and add the URL to the Arcade Dashboard.

When your users authorize a , Arcade.dev will redirect the ’s browser to your verifier route with some information in the query string. Your custom verifier route must send a response back to Arcade.dev to confirm the user’s ID.

If you need help, join the [Implementing a custom user verifier](https://github.com/ArcadeAI/arcade-ai/discussions/486)  GitHub discussion and we’ll be happy to assist.

### Build a new route

Create a public route in your app or API that can accept a browser redirect (HTTP 303) from Arcade.dev after a user has authorized a .

The route must gather the following information:

-   The `flow_id` from the current URL’s query string
-   The unique ID of the  currently signed in, commonly an ID from your application’s database, an email address, or similar.

How the ’s unique ID is retrieved varies depending on how your app is built, but it is typically retrieved from a session cookie or other secure storage. It **must** match the user ID that your code specified at the start of the authorization flow.

### Verify the user’s identity

Use the Arcade SDK (or our REST API) to verify the ’s identity.

Because this request uses your  key, it _must not_ be made from the client side (a browser or desktop app). This code must be run on a server.

### JavaScript

```typescript
import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Looks for process.env.ARCADE_API_KEY by default

// Within a server GET handler:
// Validate required parameters
if (!flow_id) {
  throw new Error("Missing required parameters: flow_id");
}

// Confirm the user's identity
try {
  const result = await client.auth.confirmUser({
    flow_id: flow_id as string,
    user_id: user_id_from_your_app_session, // Replace with the user's ID
  });
} catch (error) {
  console.error(
    "Error during verification",
    "status code:",
    error.status,
    "data:",
    error.data
  );
  throw error;
}
```

### Python

```python
from arcadepy import AsyncArcade

client = AsyncArcade() # Looks for ARCADE_API_KEY environment variable by default

# Within a server GET handler:
# Validate required parameters
if not flow_id:
    raise Exception("Missing required parameters: flow_id")

# Confirm the user's identity
try:
    result = await client.auth.confirm_user(
        flow_id=flow_id,
        user_id=user_id_from_your_app_session, # Replace with the user's ID
    )
except Exception as error:
    print("Error during verification:", error)
    raise Exception("Failed to verify the request")
```

### REST

TEXT

```
POST https://cloud.arcade.dev/api/v1/oauth/confirm_user
Authorization: Bearer <arcade_api_key>
Content-Type: application/json

{
  "flow_id": "<flow_id from the query string>",
  "user_id": "<the current user's ID>"
}

```

**Valid Response**

If the ’s ID matches the ID specified at the start of the authorization flow, the response will contain some information about the auth flow. You can either:

-   Redirect the ’s browser to Arcade’s `next_uri`
-   Redirect to a different route in your application
-   Look up the auth flow’s status in the  and render a success page

### JavaScript

```typescript
// Wait for the auth flow to be completed by the user:
const authResponse = await client.auth.waitForCompletion(result.auth_id);

if (authResponse.status === "completed") {
  // Either redirect to a URL, or render your own success page:
  return new Response(null, {
    status: 303,
    headers: {
      Location: "https://your-app.com/auth/success",
    },
  });
} else {
  return "Something went wrong. Please try again.";
}
```

### Python

```python
from starlette.responses import Response

# Wait for the auth flow to be completed by the user:
auth_response = await client.auth.wait_for_completion(result.auth_id)

if auth_response.status == "completed":
    # Either redirect to a URL, or render your own success page:
    return Response(
        status_code=303,
        headers={"Location": "https://your-app.com/auth/success"}
    )
else:
    return "Something went wrong. Please try again."
```

### REST

TEXT

```
HTTP 200 OK
Content-Type: application/json

{
  // Can be used to look up the auth flow's status in the Arcade API
  "auth_id": "ac_2zKml...",

  // Optional: URL to redirect the user to after the authorization flow is complete
  "next_uri": "https://..."
}

```

**Invalid Response**

If the ’s ID does not match the ID specified at the start of the authorization flow, the response will contain an error.

### JavaScript

```typescript
console.error(
  "Error during verification",
  "status code:",
  error.status,
  "data:",
  error.data
);
throw error;
```

### Python

```python
print("Error during verification:", error)
raise Exception("Failed to verify the request")
```

### REST

TEXT

```
HTTP 400 Bad Request
Content-Type: application/json

{
  "code": 400,
  "msg": "An error occurred during verification"
}
```

### Add your custom verifier route to Arcade

In the [Auth > Settings section](https://api.arcade.dev/dashboard/auth/settings)  of the Arcade Dashboard, pick the **Custom verifier** option and add the URL of your verifier route.

![An image showing how to pick the custom verifier option in the Arcade Dashboard](/images/docs/auth/dashboard-custom-verifier.png)

Arcade’s default OAuth apps _only_ support the Arcade  verifier. Authorization flows using Arcade’s default OAuth apps will use the Arcade user verifier even if you have a custom verifier route set up.

Last updated on January 30, 2026

[Migrate from toolkits to MCP servers](/en/guides/create-tools/migrate-toolkits.md)
[Overview](/en/guides/deployment-hosting.md)
