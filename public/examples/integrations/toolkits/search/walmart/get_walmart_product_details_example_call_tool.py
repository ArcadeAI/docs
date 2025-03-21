from arcadepy import Arcade
from arcade_search.enums import WalmartSortBy

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Search.GetWalmartProductDetails"

tool_input = {
    "item_id": "1234567890",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(response)
