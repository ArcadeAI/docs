import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.FetchMonthlyCostAttribution"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'cost_types_fields': 'infra_host_on_demand_cost,infra_host_percentage_in_account',
    'start_month': '2023-10',
    'end_month': '2023-10',
    'include_child_organization_costs': True,
    'sort_by_billing_dimension': 'infra_host',
    'sort_by_direction': 'asc',
    'tag_keys_for_cost_grouping': 'environment,project'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
