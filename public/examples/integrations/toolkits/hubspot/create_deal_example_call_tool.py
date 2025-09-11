import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Hubspot.CreateDeal"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'deal_name': 'Q3 Enterprise Renewal',
    'deal_amount': 125000,
    'deal_stage': 'appointmentscheduled',
    'deal_type': 'existingbusiness',
    'expected_close_date': '2025-10-15',
    'pipeline_id': 'default',
    'deal_owner': '78945',
    'priority_level': 'high',
    'deal_description': 'Renewal for enterprise account with added support package.'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
