from arcadepy import Arcade

client = Arcade(base_url="http://localhost:9099")  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Salesforce.GetAccountDataById"

auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "account_id": "001111111111111111",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response.output.value)
