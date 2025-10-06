import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.UpdateWebhookToken"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'authentication_token': 'token_abc123',
    'webhook_id': '5f8d0c9a7b1e2d3f4a6b7c8d',
    'webhook_description': 'Card update notifications',
    'callback_url': 'https://example.com/trello-webhook',
    'webhook_object_id': '60a7b2c3d4e5f67890123456'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
