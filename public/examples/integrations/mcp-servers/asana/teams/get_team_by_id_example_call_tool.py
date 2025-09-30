import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Asana.GetUserById"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "user_id": "1234567890",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(json.dumps(response.output.value, indent=2))
