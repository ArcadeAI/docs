import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Hubspot.CreateCompany"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=TOOL_NAME
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'company_name': 'Acme Analytics',
    'web_domain': 'acme-analytics.com',
    'industry_type': 'technology',
    'company_city': 'San Francisco',
    'company_state': 'CA',
    'company_country': 'USA',
    'phone_number': '+1-415-555-0123',
    'website_url': 'https://www.acme-analytics.com'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
