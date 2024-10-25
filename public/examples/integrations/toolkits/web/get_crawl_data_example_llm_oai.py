from arcadepy import Arcade

USER_ID = "you@example.com"
TOOL_NAME = "Web.GetCrawlData"

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

inputs = {"crawl_id": "your_crawl_id"}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
