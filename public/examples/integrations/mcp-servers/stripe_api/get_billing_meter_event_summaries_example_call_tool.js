import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetBillingMeterEventSummaries";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "customer_id": "cust_12345",
  "stop_aggregating_until": 1700000400,
  "start_time_timestamp": 1699996800,
  "meter_id": "meter_cpu_hours",
  "pagination_ending_before_id": "evt_98765",
  "fields_to_expand": [
    "usage_details",
    "price_components"
  ],
  "number_of_objects_limit": 25,
  "pagination_starting_after_id": "evt_12345",
  "granularity_for_event_summaries": "hour"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
