import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Pylon.UpdateIssueStatus"

tool_input = {
    "state": "open",  # e.g., "open", "closed"
    "lookup_by": "id",  # "id" or "search"
    "value": "ISSUE_ID_OR_KEYWORDS",
    "auto_accept_matches": False,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
    secrets={"PYLON_API_TOKEN": "<your_pylon_admin_token>"},
)

print(json.dumps(response.output.value, indent=2))
