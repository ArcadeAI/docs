import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "SquareupApi.RetrieveInventoryCounts"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_catalog_object_ids': ['catalog_id_1', 'catalog_id_2'],
    'filter_by_location_ids': ['location_id_1'],
    'filter_by_updated_after_timestamp': '2023-10-01T00:00:00Z',
    'inventory_state_filters': ['AVAILABLE', 'RESERVED'],
    'record_limit': 10
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
