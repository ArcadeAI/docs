import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.RegisterSlackCall"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'unique_call_id': 'ext-call-987654',
    'call_join_url': 'https://meet.example.com/j/987654',
    'optional_human_readable_display_id': 'MEET-987654',
    'desktop_app_join_url': 'slack-call://open?call_id=987654',
    'call_start_timestamp': 1735689600,
    'call_title': 'Weekly Sync',
    'call_creator_user_id': 'U12345678',
    'participants_info': [   {   'slack_id': 'U11111111',
                                 'external_id': 'alice@example.com',
                                 'display_name': 'Alice',
                                 'avatar_url': 'https://example.com/avatars/alice.png'},
                             {   'slack_id': 'U22222222',
                                 'external_id': 'bob@example.com',
                                 'display_name': 'Bob',
                                 'avatar_url': 'https://example.com/avatars/bob.png'}]
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
