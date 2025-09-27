import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.CustomUnfurlSlackUrls"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'channel_id': 'C1234567890',
    'message_timestamp': '1623864557.000200',
    'unfurl_url_map': '{"https://example.com/item/42": {"attachments": [{"text": "Item 42 '
                      'details","actions": [{"type": "button","text": "View","url": '
                      '"https://example.com/item/42"}] }]}}',
    'authentication_invitation_message': 'Please *connect* your account to view detailed previews. '
                                         '<https://example.com/auth|Authenticate here>',
    'custom_authentication_url': 'https://example.com/auth?return_to=%2Fapp',
    'user_authentication_blocks': '[{"type":"section","text":{"type":"mrkdwn","text":"Click below '
                                  'to connect your '
                                  'account."}},{"type":"actions","elements":[{"type":"button","text":{"type":"plain_text","text":"Authenticate"},"url":"https://example.com/auth"}]}]',
    'unfurl_link_id': 'LNK-98765',
    'link_source': 'conversations_history',
    'require_user_authentication': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
