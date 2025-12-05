import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Figma.GetFileNodes"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

client.auth.wait_for_completion(auth_response)

tool_input = {
    "file_key": "abc123xyz",  # Replace with your Figma file key
    "node_ids": ["0:1", "1-2"],  # Replace with your node IDs
    "depth": 1,  # Optional: limit to direct children only
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))

