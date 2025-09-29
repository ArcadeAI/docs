import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.RetrieveTrashedItems";

// Start the authorization process
const authResponse = await client.tools.authorize({
    tool_name: TOOL_NAME,
    user_id: USER_ID
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "include_attributes": [
    "owner",
    "created_at",
    "custom:project_id"
  ],
  "maximum_items_per_page": 50,
  "pagination_offset": 0,
  "pagination_marker": "mkr_9f8a7b",
  "sort_direction": "DESC",
  "secondary_sort_attribute": "date",
  "use_marker_based_pagination": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
