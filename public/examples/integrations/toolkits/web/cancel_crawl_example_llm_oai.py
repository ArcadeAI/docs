from arcadepy import Arcade

USER_ID = "you@example.com"
TOOL_NAME = "Web.CancelCrawl"

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

tool_input = {"crawl_id": "your_crawl_id"}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
