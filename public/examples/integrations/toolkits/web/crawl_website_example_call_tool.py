from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Web.CrawlWebsite"

inputs = {"url": "https://example.com", "max_depth": 2}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
