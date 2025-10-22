import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "WeaviateApi.DeleteReferenceFromObject";

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
  "mode": "execute",
  "collection_name": "UserCollection",
  "source_object_uuid": "123e4567-e89b-12d3-a456-426614174000",
  "reference_property_name": "friends",
  "required_consistency_level": "quorum",
  "tenant_identifier": "tenant123",
  "request_body": "{\"referenceId\":\"456e7890-e12b-34d5-a678-426614174001\"}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
