from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Google.ListEvents"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    "min_day": "today",
    "min_time_slot": "00:00",
    "max_day": "tomorrow",
    "max_time_slot": "23:59",
    "max_results": 15,
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
