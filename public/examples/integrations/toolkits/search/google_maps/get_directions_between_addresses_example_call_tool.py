from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleMaps.GetDirectionsBetweenAddresses"

tool_input = {
    "origin_address": "123 Main St, New York, NY 10001",
    "destination_address": "456 Main St, New York, NY 10001",
    "distance_unit": "KM",
    "travel_mode": "BEST",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
