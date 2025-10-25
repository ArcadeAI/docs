import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.RetrieveInventoryCounts";

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
  "filter_by_catalog_object_ids": [
    "catalog_id_1",
    "catalog_id_2"
  ],
  "filter_by_location_ids": [
    "location_id_1"
  ],
  "filter_by_updated_after_timestamp": "2023-10-01T00:00:00Z",
  "inventory_state_filters": [
    "AVAILABLE",
    "RESERVED"
  ],
  "record_limit": 10
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
