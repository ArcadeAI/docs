import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.ScheduleSlackMessage"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'slack_channel_id_or_name': '#project-updates',
    'schedule_time_unix_timestamp': 1767225600,
    'structured_blocks_json': '%5B%7B%22type%22%3A%22section%22%2C%22text%22%3A%7B%22type%22%3A%22mrkdwn%22%2C%22text%22%3A%22Daily%20standup%20reminder%20%E2%9C%85%22%7D%7D%5D',
    'message_text': 'Reminder: daily standup in 15 minutes. Please post your updates.',
    'enable_group_linking': False,
    'make_reply_visible_to_everyone': False,
    'enable_link_unfurling': True,
    'disable_unfurling_of_media_content': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
