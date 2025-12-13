import json
from arcadepy import Arcade

client = Arcade()

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Pylon.WhoAmI"

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input={},
    user_id=USER_ID,
    secrets={"PYLON_API_TOKEN": "<your_pylon_admin_token>"},
)

print(json.dumps(response.output.value, indent=2))
