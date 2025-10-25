import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.ObtainOauthToken"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'application_id': 'app_123456',
    'oauth_grant_type': 'authorization_code',
    'application_client_secret': 'secret_abc',
    'application_redirect_url': 'https://example.com/callback',
    'authorization_code': 'auth_code_xyz',
    'expire_token_in_24_hours': True,
    'requested_scopes': ['MERCHANT_PROFILE_READ', 'PAYMENTS_READ']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
