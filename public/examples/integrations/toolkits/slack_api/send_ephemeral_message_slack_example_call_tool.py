import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.SendEphemeralMessageSlack"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
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
                                             'text': 'Hey <@U2345678901>, here is a quick update '
                                                     'about the deploy:'}},
                             {   'type': 'context',
                                 'elements': [{'type': 'mrkdwn', 'text': '*Status:* Successful'}]}],
    'message_icon_emoji': ':rocket:',
    'ephemeral_message_text': 'Deploy completed successfully. Click the details button for more '
                              'info.',
    'bot_username': 'deploy-bot',
    'link_names_auto_link': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
