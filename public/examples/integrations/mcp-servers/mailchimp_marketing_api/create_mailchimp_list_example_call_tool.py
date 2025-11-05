import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "MailchimpMarketingApi.CreateMailchimpList"

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
    'request_body': '{"name":"New List","contact":{"company":"Company Name","address1":"123 Main '
                    'St","city":"Anytown","state":"CA","zip":"12345","country":"US"},"permission_reminder":"You '
                    'are receiving this email because you signed up for '
                    'updates.","campaign_defaults":{"from_name":"Your '
                    'Name","from_email":"you@example.com","subject":"Subject '
                    'Line","language":"en"},"email_type_option":true}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
