import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "DatadogApi.ListSpans";

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
  "end_time_filter": "2023-10-01T12:00:00Z",
  "max_number_of_spans": 100,
  "minimum_time_filter": "2023-10-01T00:00:00Z",
  "pagination_cursor": "cursor123",
  "resource_type": "search_request",
  "sort_order_for_spans": "-timestamp",
  "span_search_query": "service:my-service",
  "time_offset_seconds": 3600,
  "timezone_option": "UTC"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
