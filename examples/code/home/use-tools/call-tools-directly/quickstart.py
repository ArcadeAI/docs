from arcadepy import Arcade

# You can also set the `ARCADE_API_KEY` environment variable instead of passing it as a parameter.
client = Arcade(api_key="{arcade_api_key}")

# Arcade needs a unique identifier for your application user (this could be an email address, a UUID, etc).
# In this example, use the email you used to sign up for Arcade.dev:
user_id = "{arcade_user_id}"

# Let's use the `Math.Sqrt` tool from the Arcade Math toolkit to get the square root of a number.
response = client.tools.execute(
    tool_name="Math.Sqrt",
    input={"a": '625'},
    user_id=user_id,
)

print(f"The square root of 625 is {response.output.value}")

# Now, let's use a tool that requires authentication to star a GitHub repository
auth_response = client.tools.authorize(
tool_name="GitHub.SetStarred",
user_id=user_id,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: `{auth_response.url}`.  The process will continue once you have authorized the app." )
    # Wait for the user to authorize the app
    client.auth.wait_for_completion(auth_response.id);

response = client.tools.execute(
    tool_name="GitHub.SetStarred",
    input={
        "owner": "ArcadeAI",
        "name": "arcade-ai",
        "starred": True,
    },
    user_id=user_id,
)

print(response.output.value)

