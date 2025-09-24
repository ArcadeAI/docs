import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.SendEphemeralMessageSlack"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'target_channel': 'C1234567890',
    'recipient_user_id': 'U2345678901',
    'structured_blocks': [   {   'type': 'section',
                                 'text': {   'type': 'mrkdwn',
                                             'text': "Hey <@U2345678901>, here's an update just "
                                                     'for you.'}},
                             {   'type': 'actions',
                                 'elements': [   {   'type': 'button',
                                                     'text': {   'type': 'plain_text',
                                                                 'text': 'View Details'},
                                                     'value': 'view_details',
                                                     'action_id': 'view_details'}]}],
    'message_icon_emoji': ':bell:',
    'ephemeral_message_text': 'Quick update: your report is ready.',
    'bot_username': 'notify-bot',
    'link_names_auto_link': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
