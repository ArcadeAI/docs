import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.UpdateTrelloWebhook"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'webhook_id': '605c72d9f1a2b84e9b3a1c7d',
    'webhook_description': 'Notify external service when card moved to Done',
    'callback_url': 'https://example.com/trello-webhook',
    'model_id_to_monitor': 'board_9a8b7c6d5e4f',
    'set_webhook_active': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
