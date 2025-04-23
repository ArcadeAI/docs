from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Hubspot.GetCompanyDataByKeywords"

user_id = "user@example.com"
auth_response = client.tools.authorize(tool_name=TOOL_NAME, user_id=user_id)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "keywords": "Arcade",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)
print(response.output.value)
