import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Hubspot.CreateCallActivity"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'title': 'Intro call with Acme',
    'when_occurred': '2025-09-12T10:30:00',
    'direction': 'OUTBOUND',
    'summary': 'Discussed project scope and next steps; agreed to send proposal.',
    'duration': 900,
    'to_number': '+14155550123',
    'from_number': '+14155550987',
    'associate_to_contact_id': 7854,
    'associate_to_company_id': 120
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
