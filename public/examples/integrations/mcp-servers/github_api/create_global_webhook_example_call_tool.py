import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GithubApi.CreateGlobalWebhook"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'payload_delivery_url': 'https://example.com/webhook',
    'webhook_type': 'web',
    'hmac_key_for_signature': 'my_secret_key',
    'payload_content_type': 'json',
    'send_notifications': True,
    'ssl_verification': '0',
    'trigger_events': ['push', 'pull_request']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
