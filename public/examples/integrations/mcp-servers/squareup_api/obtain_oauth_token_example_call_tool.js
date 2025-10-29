import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.ObtainOauthToken";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "application_id": "app_123456",
  "oauth_grant_type": "authorization_code",
  "application_client_secret": "secret_abc",
  "application_redirect_url": "https://example.com/callback",
  "authorization_code": "auth_code_xyz",
  "expire_token_in_24_hours": true,
  "requested_scopes": [
    "MERCHANT_PROFILE_READ",
    "PAYMENTS_READ"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
