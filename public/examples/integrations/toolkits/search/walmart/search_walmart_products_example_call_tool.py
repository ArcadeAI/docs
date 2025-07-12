from arcadepy import Arcade
from arcade_search.enums import WalmartSortBy

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Walmart.SearchProducts"

tool_input = {
    "query": "Apple iPhone",
    "sort_by": WalmartSortBy.PRICE_LOW_TO_HIGH.value,
    "max_price": 250,
    "next_day_delivery": True,
    "page": 1,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(response)
