import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.FetchScorecardRules";

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
  "filter_custom_rules_only": true,
  "filter_for_enabled_rules": false,
  "filter_rule_by_id": "rule-123",
  "filter_rule_description": "performance",
  "filter_rules_by_name": "CPU Usage",
  "include_scorecard_details": "true",
  "page_offset": 0,
  "page_size": 50,
  "specific_rule_fields": "id,name,description",
  "specific_scorecard_fields": "id,name"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
