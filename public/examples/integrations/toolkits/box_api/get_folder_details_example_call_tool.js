import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "BoxApi.GetFolderDetails";

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
  "folder_unique_identifier": "12345",
  "requested_fields": [
    "id",
    "name",
    "created_at",
    "size"
  ],
  "secondary_sort_attribute": "name",
  "sort_direction": "ASC",
  "response_offset": 0,
  "max_items_per_page": 100,
  "ensure_item_has_changed": "0a1b2c3d4e",
  "shared_link_credentials": "shared_link=https://app.box.com/s/abcd1234&shared_link_password=secret"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
