from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Salesforce.CreateContact"

auth_response = client.tools.authorize(tool_name=TOOL_NAME)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    "account_id": "001111111111111111",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "mobile_phone": "1234567890",
    "title": "Director of Marketing",
    "department": "Marketing",
    "description": "John Doe is the Director of Marketing of Acme Inc.",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(response.output.value)
