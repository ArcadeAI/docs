from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Web.CancelCrawl"

inputs = {"crawl_id": "your_crawl_id"}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)