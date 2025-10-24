import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.FetchAllScorecardOutcomes";

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
  "filter_by_rule_id": "12345",
  "filter_by_rule_name": "Critical Error",
  "filter_outcomes_by_service_name": "PaymentService",
  "filter_rule_enabled": true,
  "include_rule_details": "true",
  "outcome_state_filter": "success",
  "page_offset": 0,
  "page_size": 50,
  "rule_fields_to_return": "name,status",
  "specified_outcome_values": "outcome1,outcome2"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
