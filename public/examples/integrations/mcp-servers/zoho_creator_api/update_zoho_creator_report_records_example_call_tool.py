import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZohoCreatorApi.UpdateZohoCreatorReportRecords"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'mode': 'execute',
    'account_owner_name': 'john_doe',
    'application_link_name': 'my_app',
    'report_link_name': 'sales_report',
    'process_until_limit_enabled': True,
    'request_body': '{"records":[{"id":"1","field":"value1"},{"id":"2","field":"value2"}]}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
