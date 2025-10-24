import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZohoBooksApi.CreateSalesOrder"

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
    'organization_identifier': 'org_12345',
    'total_number_of_files': 2,
    'document_attachment': '[file_content]',
    'ignore_auto_number_generation': False,
    'can_send_via_email': True,
    'request_body': '{"customer_id":"cust_001","items":[{"item_id":"item_001","quantity":1,"price":100}]}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
