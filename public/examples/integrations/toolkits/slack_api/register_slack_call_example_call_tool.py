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
    'unique_call_id': 'call_3p_7890',
    'call_join_url': 'https://meet.example.com/j/abc123',
    'optional_human_readable_display_id': 'TeamSync-0925',
    'desktop_app_join_url': 'slackcall://launch?room=abc123',
    'call_start_timestamp': 1764364800,
    'call_title': 'Weekly Team Sync',
    'call_creator_user_id': 'U12345678',
    'participants_info': [   {   'slack_id': 'U23456789',
                                 'external_id': 'ext_001',
                                 'display_name': 'Alice Johnson',
                                 'avatar_url': 'https://example.com/avatars/alice.jpg'},
                             {   'slack_id': 'U34567890',
                                 'external_id': 'ext_002',
                                 'display_name': 'Bob Lee',
                                 'avatar_url': 'https://example.com/avatars/bob.jpg'}]
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
