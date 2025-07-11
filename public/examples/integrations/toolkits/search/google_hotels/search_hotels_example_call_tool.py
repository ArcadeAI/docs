from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "GoogleHotels.SearchHotels"

tool_input = {
    "location": "New York, NY",
    "check_in_date": "2025-09-01",
    "check_out_date": "2025-09-02",
    "query": "hotel",
    "currency": "USD",
    "min_price": 100,
    "max_price": 500,
    "num_adults": 2,
    "num_children": 0,
    "sort_by": "RELEVANCE",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
