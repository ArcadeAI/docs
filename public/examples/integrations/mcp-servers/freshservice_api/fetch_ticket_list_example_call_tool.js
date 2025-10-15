import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "FreshserviceApi.FetchTicketList";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "ticket_filter_type": "new_and_my_open",
  "requester_email_filter": "jane.doe@example.com",
  "filter_by_requester_id": 9876,
  "filter_by_updated_since": "2025-10-01T00:00:00Z",
  "fields_to_include_in_response": "requester",
  "sort_order": "desc"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
