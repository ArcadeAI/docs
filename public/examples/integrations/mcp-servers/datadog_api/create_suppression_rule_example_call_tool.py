import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.CreateSuppressionRule"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'enable_suppression_rule': True,
    'rule_query': "security.alerts.type: 'malicious'",
    'suppression_rule_name': 'Suppress Malicious Alerts',
    'suppression_rule_description': 'Suppress alerts for known malicious activities.',
    'expiration_date_unix_ms': 1710000000000
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
