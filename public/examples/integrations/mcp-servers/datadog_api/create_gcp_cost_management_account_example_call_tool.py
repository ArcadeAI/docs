import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.CreateGcpCostManagementAccount"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'gcp_bucket_name': 'my-gcp-bucket',
    'gcp_usage_cost_export_dataset_name': 'usage_cost_dataset',
    'google_cloud_billing_account_id': '1234-5678-9012',
    'usage_cost_config_type': 'gcp_uc_config_post_request'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
