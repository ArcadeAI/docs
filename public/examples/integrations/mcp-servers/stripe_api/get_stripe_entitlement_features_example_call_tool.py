import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.GetStripeEntitlementFeatures"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'pagination_ending_before': 'feat_01HxyzABCdef',
    'fields_to_expand': ['metadata', 'pricing_details'],
    'object_return_limit': 25,
    'filter_by_lookup_key': 'beta_access',
    'pagination_starting_after': 'feat_01HuvwXYZghi',
    'include_archived_features': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
