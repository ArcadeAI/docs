import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.CustomUnfurlSlackUrls"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'channel_id': 'C1234567890',
    'message_timestamp': '1623855600.000200',
    'unfurl_url_map': '%7B%22https%3A%2F%2Fexample.com%2Fitem%2F42%22%3A%7B%22attachments%22%3A%5B%7B%22fallback%22%3A%22Item%2042%20details%22%2C%22title%22%3A%22Item%2042%22%2C%22text%22%3A%22Short%20description%20of%20item%2042%22%7D%5D%7D%7D',
    'authentication_invitation_message': '*Please authenticate* to see a rich preview of this '
                                         'link.',
    'custom_authentication_url': 'https%3A%2F%2Fexample.com%2Fauth%3Freturn_to%3Dslack',
    'user_authentication_blocks': [   '{"type":"section","text":{"type":"mrkdwn","text":"_Authenticate '
                                      'to enable unfurls_"}}'],
    'unfurl_link_id': 'LNK-987654',
    'link_source': 'conversations_history',
    'require_user_authentication': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
