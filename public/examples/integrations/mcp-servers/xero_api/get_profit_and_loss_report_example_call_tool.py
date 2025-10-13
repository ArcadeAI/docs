import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.GetProfitAndLossReport"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'tenant_identifier': 'abc123-tenant',
    'from_date': '2024-01-01',
    'end_date': '2024-06-30',
    'number_of_comparison_periods': 2,
    'comparison_timeframe': 'MONTH',
    'tracking_category_id': 'tc-987',
    'secondary_tracking_category_id': 'tc-654',
    'tracking_option_1_id': 'opt-12',
    'tracking_option_id_2': 'opt-34',
    'return_standard_layout': True,
    'return_cash_basis_only': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
