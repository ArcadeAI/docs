import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "BoxApi.ListAiAgents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_mode': ['text_gen', 'extract'],
    'response_fields': ['id', 'name', 'mode', 'status'],
    'agent_state_filter': ['enabled', 'enabled_for_selected_users'],
    'results_start_position_marker': 'marker_abc123',
    'max_items_per_page': 25,
    'include_box_default_agents': False
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
