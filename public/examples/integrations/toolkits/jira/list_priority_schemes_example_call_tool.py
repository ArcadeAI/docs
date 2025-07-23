import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"  # Unique identifier for your user (email, UUID, etc.)
TOOL_NAME = "Jira.ListPrioritySchemes"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "scheme_name": "High Priority",
    "limit": 10,
    "offset": 0,
    "order_by": "name ascending",
    # Important: about the atlassian_cloud_id argument, please refer to the documentation at
    # https://docs.arcade.dev/toolkits/productivity/jira#handling-multiple-atlassian-clouds
    "atlassian_cloud_id": "13516a07-1725-4dc0-9ae7-13b5749dd747"
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
