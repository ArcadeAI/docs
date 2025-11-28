import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"  # Unique identifier for your user (email, UUID, etc.)
TOOL_NAME = "Linear.CreateInitiative"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "name": "Q1 2025 Objectives",
    "description": "Strategic goals for Q1 2025",
    "status": "planned",
    "target_date": "2025-03-31"
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))

