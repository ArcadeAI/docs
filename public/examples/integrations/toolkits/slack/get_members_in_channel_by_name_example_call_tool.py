import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "user@example.com"  # Unique identifier for your user (email, UUID, etc.)
TOOL_NAME = "Slack.GetMembersInChannelByName"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'channel_name': 'general', 'limit': 10
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
