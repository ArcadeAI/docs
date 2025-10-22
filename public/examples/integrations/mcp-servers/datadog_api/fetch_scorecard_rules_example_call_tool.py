import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.FetchScorecardRules"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_custom_rules_only': True,
    'filter_for_enabled_rules': False,
    'filter_rule_by_id': 'rule-123',
    'filter_rule_description': 'performance',
    'filter_rules_by_name': 'CPU Usage',
    'include_scorecard_details': 'true',
    'page_offset': 0,
    'page_size': 50,
    'specific_rule_fields': 'id,name,description',
    'specific_scorecard_fields': 'id,name'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
