import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.ActivateAwsScanOptions"

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
    'enable_container_vulnerability_scanning': True,
    'enable_lambda_function_scanning': True,
    'enable_sensitive_data_scanning': False,
    'enable_vulnerability_scan_host_os': True,
    'resource_type': 'aws_scan_options'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
