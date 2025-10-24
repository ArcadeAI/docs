import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.GetAggregatedDnsTraffic"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'end_timestamp': 1697049600,
    'filter_dns_traffic_by_tags': 'env:production,service:web',
    'group_dns_traffic_by_fields': 'network.dns_query,client_ip',
    'max_dns_entries': 500,
    'start_query_timestamp': 1697046000
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
