import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.ScheduleSlackMessage"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'slack_channel_id_or_name': 'C024BE91L',
    'schedule_time_unix_timestamp': 1716201600,
    'message_text': 'Reminder: stand-up meeting starts in 10 minutes. Please join the #standup '
                    'channel.',
    'structured_blocks_json': '[{"type":"section","text":{"type":"mrkdwn","text":"*Stand-up '
                              'Reminder*\\nPlease join the meeting in 10 minutes."}}]',
    'enable_group_linking': False,
    'enable_link_unfurling': True,
    'disable_unfurling_of_media_content': False,
    'make_reply_visible_to_everyone': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
