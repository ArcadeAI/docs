import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZohoCreatorApi.FetchZohoReportRecords"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'zoho_private_link': 'https://creator.zoho.com/private/report/12345',
    'account_owner_name': 'john_doe',
    'zoho_application_link_name': 'my_app',
    'report_link_name': 'sales_report',
    'record_fetch_start_index': 0,
    'record_limit': 100,
    'filter_criteria': "status = 'active'"
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
