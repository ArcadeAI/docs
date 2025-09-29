import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.GetLegalHoldPolicyAssignments"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'legal_hold_policy_id': 'lhp_9b3f2a7d',
    'filter_by_assignment_type': 'file_version',
    'filter_by_item_id': '1234567890',
    'pagination_marker': 'marker_abc',
    'maximum_items_per_page': 100,
    'response_fields': ['id', 'assigned_to', 'assignment_type', 'created_at']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
