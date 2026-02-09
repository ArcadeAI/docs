---
title: "ClickUp"
description: "Arcade - AI platform for developers"
---
[Auth Providers](/en/references/auth-providers.md)
ClickUp

# ClickUp

The ClickUp  enables tools and  to call the ClickUp API on behalf of a .

### What’s documented here

This page describes how to use and configure ClickUp auth with Arcade.

This  is used by:

-   Your [app code](#using-clickup-auth-in-app-code)
     that needs to call ClickUp APIs
-   Or, your [custom tools](#using-clickup-auth-in-custom-tools)
     that need to call ClickUp APIs

## Configuring ClickUp auth

When using your own app credentials, make sure you configure your  to use a [custom user verifier](/guides/user-facing-agents/secure-auth-production.md#build-a-custom-user-verifier). Without this, your end-users will not be able to use your app or  in production.

In a production environment, you will most likely want to use your own ClickUp app credentials. This way, your  will see your application’s name requesting permission.

Before showing how to configure your ClickUp app credentials, let’s go through the steps to create a ClickUp app.

### Create a ClickUp app

-   Navigate to your ClickUp workspace and go to **Settings → Apps**
-   Click **Create new app** in the OAuth Apps section
-   Fill in your app name and description
-   Set the OAuth Redirect URL to: `https://cloud.arcade.dev/api/v1/oauth/callback`
-   Copy the Client ID and Client Secret, which you’ll need below

## Configuring your own ClickUp Auth Provider in Arcade

### Dashboard GUI

### Configure ClickUp Auth Using the Arcade Dashboard GUI

#### Access the Arcade Dashboard

To access the Arcade Cloud dashboard, go to [api.arcade.dev/dashboard](https://api.arcade.dev/dashboard) . If you are self-hosting, by default the dashboard will be available at `http://localhost:9099/dashboard`. Adjust the host and port number to match your environment.

#### Navigate to the OAuth Providers page

-   Under the **Connections** section of the Arcade Dashboard left-side menu, click **Connected Apps**.
-   Click **Add OAuth Provider** in the top right corner.
-   Select the **Included Providers** tab at the top.
-   In the **Provider** dropdown, select **ClickUp**.

#### Enter the provider details

-   Choose a unique **ID** for your provider (e.g. “my-clickup-provider”).
-   Optionally enter a **Description**.
-   Enter the **Client ID** and **Client Secret** from your ClickUp app.

#### Create the provider

Hit the **Create** button and the provider will be ready to be used.

When you use tools that require ClickUp auth using your Arcade  credentials, Arcade will automatically use this ClickUp OAuth provider. If you have multiple ClickUp providers, see [using multiple auth providers of the same type](/references/auth-providers.md#using-multiple-providers-of-the-same-type) for more information.

## Using ClickUp auth in app code

Use the ClickUp  in your own  and AI apps to get a \-scoped token for the ClickUp API. See [authorizing agents with Arcade](/get-started/about-arcade.md) to understand how this works.

Use `client.auth.start()` to get a  token for the ClickUp API:

### Python

```python
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

user_id = "{arcade_user_id}"

# Start the authorization process
auth_response = client.auth.start(
    user_id=user_id,
    provider="clickup",
)

if auth_response.status != "completed":
    print("Please complete the authorization challenge in your browser:")
    print(auth_response.url)

# Wait for the authorization to complete
auth_response = client.auth.wait_for_completion(auth_response)

token = auth_response.context.token
# TODO: Do something interesting with the token...
```

### JavaScript

```javascript
import { Arcade } from "arcade-js";

const client = new Arcade();

const auth = await client.auth.start({
  provider: "clickup",
});

if (auth.status !== "completed") {
  console.log("Finish authorization at:", auth.url);
  await client.auth.waitForCompletion(auth);
}

const { token } = auth.context;
// Use the token in ClickUp API requests
```

## Using ClickUp auth in custom tools

You can author your own [custom tools](/guides/create-tools/tool-basics/build-mcp-server.md) that interact with the ClickUp API.

Use the `ClickUp()` auth class to specify that a  requires authorization with ClickUp. The `context.authorization.token` field will be automatically populated with the ’s ClickUp token:

```python
import httpx
from arcade_tdk import tool, ToolContext
from arcade_tdk.auth import ClickUp

@tool(requires_auth=ClickUp())
async def get_my_workspaces(context: ToolContext) -> dict:
    """Get the authenticated user's workspaces (teams) from ClickUp."""
    token = context.authorization.token

    # Make authenticated request to ClickUp API
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.clickup.com/api/v2/team",
            headers={
                "Authorization": token,
                "Content-Type": "application/json"
            }
        )

        if response.status_code == 200:
            data = response.json()
            teams = data.get("teams", [])
            return {
                "success": True,
                "teams": [{"id": team["id"], "name": team["name"]} for team in teams]
            }
        else:
            return {
                "success": False,
                "error": f"ClickUp API error: {response.status_code} - {response.text}"
            }
```

Last updated on February 9, 2026

[Calendly](/en/references/auth-providers/calendly.md)
[Discord](/en/references/auth-providers/discord.md)
