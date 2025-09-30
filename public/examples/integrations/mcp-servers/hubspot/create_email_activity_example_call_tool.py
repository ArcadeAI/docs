import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Hubspot.CreateEmailActivity"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'subject': 'Quarterly update and next steps',
    'when_occurred': '2025-09-12T10:30:00',
    'from_email': 'alice@example.com',
    'to_email': 'bob@acme.com',
    'body_text': 'Hi Bob,\n'
                 '\n'
                 'Please find the quarterly update attached. Let me know if you have questions.\n'
                 '\n'
                 'Best,\n'
                 'Alice',
    'body_html': '<p>Hi Bob,</p><p>Please find the quarterly update attached. Let me know if you '
                 'have questions.</p><p>Best,<br>Alice</p>',
    'from_first_name': 'Alice',
    'from_last_name': 'Johnson',
    'to_first_name': 'Bob',
    'to_last_name': 'Smith',
    'cc_emails': ['carol@example.com'],
    'bcc_emails': ['audit@example.com'],
    'direction': 'EMAIL',
    'status': 'SENT',
    'associate_to_contact_id': 12345,
    'associate_to_company_id': 6789
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
