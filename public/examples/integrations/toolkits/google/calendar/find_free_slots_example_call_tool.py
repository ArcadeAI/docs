from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Google.FindTimeSlotsWhenEveryoneIsFree"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "email_addresses": ["john.doe@example.com", "jenifer.smith@example.com"],
    "start_date": "2025-04-01",
    "end_date": "2025-04-07",
    "start_time_boundary": "09:00",
    "end_time_boundary": "20:00",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
