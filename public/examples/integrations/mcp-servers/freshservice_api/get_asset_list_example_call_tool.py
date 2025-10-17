import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "FreshserviceApi.GetAssetList"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'entries_per_page': 50,
    'page_number': 1,
    'include_asset_type_fields': 'warranty_status,model_number',
    'apply_asset_filter': 'asset_type_id=2&department_id=5',
    'asset_search_query': "name:'Dell Monitor'",
    'include_trashed_assets': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
