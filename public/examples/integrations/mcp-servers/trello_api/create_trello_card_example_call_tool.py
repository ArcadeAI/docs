import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.CreateTrelloCard"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'list_id_for_card': '5f8d0d3a9c1b2a7e3f4b6c1d',
    'card_name': 'Prepare Q4 roadmap',
    'card_description': 'Draft product roadmap for Q4, include milestones and owners. Review with '
                        'PM and engineering.',
    'card_position': 'top',
    'card_due_date': '2025-10-15',
    'start_date': '2025-10-01',
    'member_ids_to_add': ['6102f1a9b3e4c2d1f0a9b8c'],
    'label_ids': ['red', 'green'],
    'attachment_url': 'https://example.com/roadmap.pdf',
    'attachment_file_path': '/tmp/roadmap.pdf',
    'attachment_mime_type': 'application/pdf',
    'copy_card_source_id': None,
    'copy_properties_from_source': 'attachments,checklists,labels,members',
    'map_view_address': '123 Main St, Anytown, USA',
    'location_name': 'Headquarters',
    'map_coordinates': '37.7749,-122.4194',
    'card_display_role': 'board',
    'card_completion_status': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
