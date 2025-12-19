import json
from arcadepy import Arcade
# Required Google OAuth scopes:
# - https://www.googleapis.com/auth/drive.file

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleSheets.GetSpreadsheet"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'spreadsheet_id': '1AbCxyz',
    'sheet_id_or_name': 'Expenses',
    'start_row': 2,
    'start_col': 'B',
    'max_rows': 50,
    'max_cols': 10
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
