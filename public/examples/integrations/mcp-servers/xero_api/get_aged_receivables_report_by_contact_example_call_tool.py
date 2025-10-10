import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.GetAgedReceivablesReportByContact"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'contact_identifier': 'c7890abc-def1-2345-6789-abcdef012345',
    'tenant_identifier': 'tnt-11223344-5566-7788',
    'report_date': '2025-09-30',
    'start_date_filter': '2025-07-01',
    'filter_by_to_date': '2025-09-30'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
