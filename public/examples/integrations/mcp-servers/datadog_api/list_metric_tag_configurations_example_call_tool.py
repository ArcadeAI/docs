import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "DatadogApi.ListMetricTagConfigurations"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'filter_by_query_status': True,
    'filter_metrics_by_tags': 'env:production',
    'filter_metrics_used_in_assets': False,
    'filter_tag_configurations': 'tag1:value1',
    'include_metrics_with_configured_tags': True,
    'look_back_seconds': 7200,
    'max_results_per_page': 50,
    'metric_type_filter': 'distribution',
    'pagination_cursor': None
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
