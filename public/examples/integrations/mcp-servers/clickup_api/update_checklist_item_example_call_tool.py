import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ClickupApi.UpdateChecklistItem"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'checklist_item_uuid': '123e4567-e89b-12d3-a456-426614174000',
    'checklist_unique_identifier': 'b8a8-48d8-a0c6-b4200788a683',
    'assign_item_to_user': 'user_456',
    'checklist_item_name': 'Update documentation',
    'mark_as_resolved': True
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
