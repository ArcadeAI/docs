import json
from arcade.client import Arcade

client = Arcade()

USER_ID = "you@example.com"
TOOL_NAME = "Web.GetCrawlData"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.auth_url}")
    input("After you have authorized, press Enter to continue...")

inputs = {"crawl_id": "your_crawl_id"}

response = client.tools.run(
    tool_name=TOOL_NAME,
    inputs=json.dumps(inputs),
    user_id=USER_ID,
)
print(response)