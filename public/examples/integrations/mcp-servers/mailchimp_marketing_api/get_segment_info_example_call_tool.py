import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "MailchimpMarketingApi.GetSegmentInfo"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'list_unique_id': 'abc123',
    'segment_id': 'seg456',
    'exclude_fields_list': 'members.cleaned,members.transactional',
    'fields_to_return': 'members.id,members.email_address',
    'include_cleaned_members': 'true',
    'include_transactional_members': 'false'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
