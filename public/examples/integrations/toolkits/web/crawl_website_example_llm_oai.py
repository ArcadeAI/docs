from arcadepy import Arcade

USER_ID = "you@example.com"
TOOL_NAME = "Web.CrawlWebsite"

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

inputs = {"url": "https://example.com", "max_depth": 2}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
