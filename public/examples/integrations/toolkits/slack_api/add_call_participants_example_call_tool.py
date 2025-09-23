import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.AddCallParticipants"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'call_id': 'C12345678',
    'participant_users': [   {   'slack_id': 'U23456789',
                                 'display_name': 'Alice Chen',
                                 'avatar_url': 'https://example.com/alice.jpg'},
                             {   'external_id': 'external-987',
                                 'display_name': 'Bob Martín',
                                 'avatar_url': 'https://example.com/bob.png'}]
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
