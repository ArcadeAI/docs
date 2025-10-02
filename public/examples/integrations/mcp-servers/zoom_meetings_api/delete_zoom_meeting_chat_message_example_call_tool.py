import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZoomMeetingsApi.DeleteZoomMeetingChatMessage"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'zoom_meeting_id': 1234567890123,
    'chat_message_uuid_base64': 'bWVzc2FnZV91dWlkX2Jhc2U2NA==',
    'chat_file_ids_base64': 'ZmlsZV8xX2Jhc2U2NCxm aWxlXzJfYmFzZTY0'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
