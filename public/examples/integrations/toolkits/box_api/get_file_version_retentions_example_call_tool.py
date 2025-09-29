import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.GetFileVersionRetentions"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_file_id': '1234567890',
    'retention_policy_id': 'rp_987654',
    'filter_by_disposition_action': 'permanently_delete',
    'filter_by_disposition_before_date': '2025-12-31',
    'disposition_effective_after_date': '2024-01-01',
    'max_items_per_page': 50,
    'pagination_start_marker': 'marker_abc123'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
