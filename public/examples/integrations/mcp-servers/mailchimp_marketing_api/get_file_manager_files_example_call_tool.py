import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "MailchimpMarketingApi.GetFileManagerFiles"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'created_after_date': '2023-01-01T00:00:00+00:00',
    'exclude_fields_list': 'size,metadata',
    'fields_to_return': 'name,url,date',
    'file_created_by_user': 'user@example.com',
    'file_sort_field': 'date',
    'file_type': 'image/jpeg',
    'number_of_records_to_return': '20',
    'pagination_offset': '0',
    'restrict_files_before_date': '2023-12-31T23:59:59+00:00',
    'sort_order_direction': 'ASC'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
