import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "CalendlyApi.GetActivityLogEntries";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "organization_uri": "https://api.calendly.com/organizations/ORG123",
  "filter_by_search_term": "\"jane.doe@example.com\" +(meeting) -spam",
  "actor_uris": [
    "https://api.calendly.com/users/USER1",
    "https://api.calendly.com/users/USER2"
  ],
  "sort_order": [
    "date:desc"
  ],
  "include_entries_after_time": "2025-09-01T00:00:00.000Z",
  "end_time_utc": "2025-09-30T23:59:59.000Z",
  "next_page_token": "abc123token",
  "number_of_rows_to_return": 50,
  "entry_categories": [
    "event_created",
    "event_canceled"
  ],
  "filter_by_actions": [
    "invite_sent",
    "invite_updated"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
