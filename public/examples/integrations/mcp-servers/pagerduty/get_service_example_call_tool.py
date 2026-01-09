import json
from arcadepy import Arcade

client = Arcade()
USER_ID = "{arcade_user_id}"
TOOL_NAME = "PagerDuty.GetService"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)
if auth_response.status != "completed":
    print(f"Authorize here: {auth_response.url}")
client.auth.wait_for_completion(auth_response)

tool_input = {
    "service_id": "<service_id>",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
