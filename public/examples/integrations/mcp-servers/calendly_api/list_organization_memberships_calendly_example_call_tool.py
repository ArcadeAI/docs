import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "CalendlyApi.ListOrganizationMembershipsCalendly"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'pagination_token': 'abc123',
    'number_of_rows_to_return': 25,
    'filter_by_email': 'alice@example.com',
    'filter_by_organization': 'org_9876',
    'filter_by_user': 'user_54321',
    'filter_by_role': 'admin'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
