import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.FetchMonthlyCostAttribution";

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
  "cost_types_fields": "infra_host_on_demand_cost,infra_host_percentage_in_account",
  "start_month": "2023-10",
  "end_month": "2023-10",
  "include_child_organization_costs": true,
  "sort_by_billing_dimension": "infra_host",
  "sort_by_direction": "asc",
  "tag_keys_for_cost_grouping": "environment,project"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
