import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCrmApi.GetCartDetails";

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
  "cart_identifier": "cart_12345",
  "associated_object_types": [
    "deals",
    "contacts"
  ],
  "only_return_archived_results": false,
  "properties_with_history": [
    "status",
    "total"
  ],
  "return_properties": [
    "items",
    "total_price"
  ],
  "unique_property_name": "custom_id"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
