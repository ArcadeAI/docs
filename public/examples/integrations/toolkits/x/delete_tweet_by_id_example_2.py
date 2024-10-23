from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "X.DeleteTweetById"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {
    "tweet_id": "your_tweet_id_here"  # Tweet IDs can be found in the response of other X tools, like SearchRecentTweetsByUsername
}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
