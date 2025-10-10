import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "XeroApi.DeletePrepaymentAllocation"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'prepayment_id': 'a1b2c3d4-5678-90ab-cdef-1234567890ab',
    'allocation_id': 'f0e1d2c3-b4a5-6789-0abc-def123456789',
    'xero_tenant_identifier': '123e4567-e89b-12d3-a456-426614174000'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
