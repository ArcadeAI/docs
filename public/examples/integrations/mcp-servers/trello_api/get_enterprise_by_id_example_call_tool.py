import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetEnterpriseById"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'enterprise_id': '5f8d0d55a1b2c3001a2b3c4d',
    'enterprise_fields_to_retrieve': 'id,name,displayName,createdAt',
    'member_inclusion_type': 'admins',
    'member_fields': 'username',
    'member_filter_query': 'status eq "active" and title co "Engineer"',
    'member_sort_value': '-lastName',
    'member_sort': '-lastName',
    'deprecated_member_sort_order': 'desc',
    'member_start_index': 0,
    'member_count': 25,
    'organization_visibility_filter': 'members',
    'organization_fields': 'id,name,paidAccount',
    'organization_memberships_filter': 'me,active',
    'include_paid_account_information': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
