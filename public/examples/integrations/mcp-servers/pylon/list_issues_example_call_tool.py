import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Pylon.ListIssues"

tool_input = {
    "state": None,  # e.g., "open", "closed"
    "assignee_id": None,
    "team_id": None,
    "tags": None,
    "start_time": None,
    "end_time": None,
    "cursor": None,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
    secrets={"PYLON_API_TOKEN": "<your_pylon_admin_token>"},
)

print(json.dumps(response.output.value, indent=2))
