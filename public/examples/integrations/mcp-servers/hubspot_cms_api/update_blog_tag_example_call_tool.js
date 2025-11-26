import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCmsApi.UpdateBlogTag";

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
  "blog_tag_id": "12345",
  "blog_tag_unique_id": "tag-67890",
  "created_timestamp": "2023-01-01T12:00:00Z",
  "deleted_timestamp": "2023-10-01T12:00:00Z",
  "language": "en",
  "last_updated_timestamp": "2023-10-10T12:00:00Z",
  "primary_tag_translated_from_id": 1,
  "tag_name": "Updated Tag Name",
  "update_deleted_blog_tags": true
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
