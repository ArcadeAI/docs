import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetEnterpriseUsers"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'enterprise_id': 'ent_12345abcd',
    'active_since_date': '2025-01-01',
    'search_value_filter': 'alice',
    'pagination_cursor': 'cursor_0001',
    'licensed_members_only': True,
    'return_deactivated_members': False,
    'include_collaborators': False,
    'return_managed_members': True,
    'include_administrators_only': None
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
