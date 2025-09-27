import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.SendSlackMessage"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'target_channel_id_or_name': '#project-updates',
    'message_text': 'Deployment completed successfully. All services are healthy.',
    'structured_blocks': '[{"type":"section","text":{"type":"mrkdwn","text":"*Deployment '
                         'Complete*\\nAll services are '
                         'healthy."}},{"type":"context","elements":[{"type":"mrkdwn","text":"<@U12345> '
                         '• 2m ago"}]}]',
    'emoji_icon_for_message': ':rocket:',
    'bot_username': 'deploy-bot',
    'enable_slack_markup_parsing': True,
    'broadcast_reply_to_channel': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
