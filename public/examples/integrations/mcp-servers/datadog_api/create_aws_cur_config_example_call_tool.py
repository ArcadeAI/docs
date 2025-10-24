import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.CreateAwsCurConfig"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'aws_account_id': '123456789012',
    'aws_bucket_name_for_cur': 'my-cost-reports-bucket',
    'aws_cur_config_type': 'aws_cur_config_post_request',
    'bucket_region': 'us-east-1',
    'include_new_member_accounts': True,
    'report_month': 10,
    'report_name': 'MonthlyCostReport',
    'report_prefix': 'cost-report-'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
