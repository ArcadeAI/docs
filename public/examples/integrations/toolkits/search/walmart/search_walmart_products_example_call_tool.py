from arcadepy import Arcade
from arcade_search.enums import WalmartSortBy

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "Search.SearchWalmartProducts"

tool_input = {
    "query": "Apple iPhone",
    "sort_by": WalmartSortBy.PRICE_LOW_TO_HIGH,
    "max_price": 250,
    "next_day_delivery": True,
    "page": 1,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
