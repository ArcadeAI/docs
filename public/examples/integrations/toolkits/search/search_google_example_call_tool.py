from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Search.SearchGoogle"

inputs = {"query": "Arcade AI documentation", "n_results": 5}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
