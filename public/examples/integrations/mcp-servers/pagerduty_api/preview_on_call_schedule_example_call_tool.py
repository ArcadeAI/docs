import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.PreviewOnCallSchedule"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'mode': 'execute',
    'start_date_range': '2023-10-01T10:00:00Z',
    'end_date': '2023-10-07T10:00:00Z',
    'include_overflow_entries': False,
    'request_body': '{"team":"devops","shifts":[{"member":"Alice","start":"2023-10-01T10:00:00Z","end":"2023-10-02T10:00:00Z"},{"member":"Bob","start":"2023-10-02T10:00:00Z","end":"2023-10-03T10:00:00Z"}]}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
