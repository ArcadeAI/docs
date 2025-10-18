import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "CalendlyApi.ListScheduledEvents";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "user_uri": "https://api.calendly.com/users/ABC123",
  "organization_uri": "https://api.calendly.com/organizations/ORG789",
  "invitee_email": "invitee@example.com",
  "event_status": "active",
  "order_results_by": "start_time:asc",
  "start_time_after": "2025-10-01T00:00:00Z",
  "max_start_time": "2025-10-31T23:59:59Z",
  "pagination_token": "token_456",
  "number_of_events_to_return": 25,
  "group_uri": "https://api.calendly.com/groups/GROUP321"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
