import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.ListMetricTagConfigurations";

// Start the authorization process
const authResponse = await client.tools.authorize({
  tool_name: TOOL_NAME,
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "filter_by_query_status": true,
  "filter_metrics_by_tags": "env:production",
  "filter_metrics_used_in_assets": false,
  "filter_tag_configurations": "tag1:value1",
  "include_metrics_with_configured_tags": true,
  "look_back_seconds": 7200,
  "max_results_per_page": 50,
  "metric_type_filter": "distribution",
  "pagination_cursor": null
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
