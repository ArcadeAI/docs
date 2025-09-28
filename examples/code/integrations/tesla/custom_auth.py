from arcade import ArcadeClient

# Initialize the Arcade client
client = ArcadeClient()

# Start the authorization flow for Tesla
# This will redirect the user to Tesla's authorization page if needed
auth_result = client.auth.start(
    provider="tesla",
    scopes=["vehicle_data", "vehicle_cmds"]
)

# Use the token to make API calls to Tesla Fleet API
token = auth_result.token

# Now you can use the token to make API calls to Tesla Fleet API
# For example:
# response = requests.get(
#     "https://fleet-api.prd.eu.vn.cloud.tesla.com/api/1/vehicles",
#     headers={"Authorization": f"Bearer {token}"}
# )