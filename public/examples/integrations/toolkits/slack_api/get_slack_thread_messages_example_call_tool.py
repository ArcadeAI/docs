import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SlackApi.GetSlackThreadMessages"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'conversation_id': 'C1234567890',
    'thread_message_timestamp': '1622547800.000200',
    'pagination_cursor': 'dXNlcjpVMDYxTkZUQw==',
    'latest_message_timestamp': '1622551400',
    'maximum_items_to_return': 25,
    'start_time_unix_timestamp': '1622540000',
    'include_all_message_metadata': True,
    'include_boundary_timestamps': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
