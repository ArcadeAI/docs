import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "TrelloApi.UpdateOrganization"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'organization_id_or_name': 'team-alpha',
    'new_organization_name': 'team_alpha_01',
    'new_display_name': 'Team Alpha',
    'organization_description': 'Project coordination and planning workspace.',
    'organization_website_url': 'https://team-alpha.example.com',
    'google_apps_domain': 'alpha.example.com',
    'google_apps_version': 2,
    'workspace_board_visibility_restriction': 'admin',
    'private_board_visibility_restriction': 'org',
    'public_board_visibility_restriction': 'none',
    'organization_invite_restriction_email': '*@example.com',
    'workspace_visibility': 'private',
    'allow_external_members': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
