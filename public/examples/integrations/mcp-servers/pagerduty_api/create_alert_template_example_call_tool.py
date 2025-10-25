import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerdutyApi.CreateAlertTemplate"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'email_body_html': '<p>This is a test alert template.</p>',
    'email_subject': 'Test Alert',
    'short_message_template': 'Alert: Test',
    'template_description': 'This template is used for testing alerts.',
    'template_name': 'Test Alert Template',
    'template_type': 'status_update'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
