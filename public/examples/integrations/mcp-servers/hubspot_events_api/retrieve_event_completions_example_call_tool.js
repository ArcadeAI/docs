import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotEventsApi.RetrieveEventCompletions";

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
  "crm_object_id": 12345,
  "crm_object_type": "contact",
  "event_instance_ids": [
    1,
    2,
    3
  ],
  "event_property_filter": {
    "hs_city": "portland"
  },
  "event_type_name": "webinar",
  "filter_events_occurred_before": "2023-12-31T23:59:59Z",
  "max_results_per_page": 10,
  "sort_direction": [
    "DESCENDING"
  ],
  "unique_identifier_property": {
    "email": "example@domain.com"
  }
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
