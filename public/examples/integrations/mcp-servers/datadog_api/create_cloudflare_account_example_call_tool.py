import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.CreateCloudflareAccount"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'cloudflare_account_name': 'example-account',
    'cloudflare_api_key': 'abc123xyz',
    'cloudflare_account_email': 'user@example.com',
    'json_api_type': 'cloudflare-accounts',
    'resources_allowlist': ['web', 'dns'],
    'zone_allowlist': ['zone1', 'zone2']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
