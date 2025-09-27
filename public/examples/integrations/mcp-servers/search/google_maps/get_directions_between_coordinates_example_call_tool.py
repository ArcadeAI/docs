from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleMaps.GetDirectionsBetweenCoordinates"

tool_input = {
    "origin_latitude": 37.7879,
    "origin_longitude": -122.4076,
    "destination_latitude": 37.8219,
    "destination_longitude": -122.4789,
    "distance_unit": "KM",
    "travel_mode": "BEST",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
