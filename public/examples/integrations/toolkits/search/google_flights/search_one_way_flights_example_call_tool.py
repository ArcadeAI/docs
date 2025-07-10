from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Search.SearchOneWayFlights"

tool_input = {
    "departure_airport_code": "LAX",
    "arrival_airport_code": "SFO",
    "outbound_date": "2025-09-01",
    "currency_code": "USD",
    "travel_class": "ECONOMY",
    "num_adults": 1,
    "num_children": 0,
    "max_stops": "ANY",
    "sort_by": "TOP_FLIGHTS",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
