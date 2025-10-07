import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.GetEnterpriseMembers"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'enterprise_id': 'ent_12345',
    'member_fields': 'id,fullName,username,email',
    'scim_filter_query': 'userName eq "jdoe@example.com"',
    'sort_members': '-fullName',
    'member_start_index': 0,
    'member_count_filter': 'count eq 50',
    'organization_fields': 'id,name',
    'included_board_fields': 'id,name,closed'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
