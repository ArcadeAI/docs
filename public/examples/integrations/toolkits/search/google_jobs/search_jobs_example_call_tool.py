from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "GoogleJobs.SearchJobs"

tool_input = {
    "query": "software engineer",
    "location": "United States",
    "language": "en",
    "limit": 10,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
