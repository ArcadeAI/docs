import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Figma.GetComponentSets"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

client.auth.wait_for_completion(auth_response)

tool_input = {
    "source": "file",  # Options: file, team
    "source_id": "abc123xyz",  # File key or team ID
    "page_size": 10,  # Optional: for team mode only
    "after_cursor": None,  # Optional: for pagination in team mode
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))

