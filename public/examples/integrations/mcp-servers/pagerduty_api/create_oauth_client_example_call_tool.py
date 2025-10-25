import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.CreateOauthClient"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'oauth_client_id': '123456',
    'oauth_client_name': 'MyWebhookClient',
    'oauth_client_secret': 'secret123',
    'oauth_grant_type': 'client_credentials',
    'oauth_token_endpoint_url': 'https://api.example.com/oauth/token',
    'oauth_scopes_requested': 'webhook:read,webhook:write'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
