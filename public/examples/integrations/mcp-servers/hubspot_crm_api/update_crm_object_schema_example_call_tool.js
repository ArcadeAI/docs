import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "HubspotCrmApi.UpdateCrmObjectSchema";

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
  "object_type_identifier": "custom_object_123",
  "clear_description": false,
  "object_description": "This is a custom object for tracking user interactions.",
  "object_singular_name": "User Interaction",
  "plural_labels": "User Interactions",
  "primary_display_property": "interaction_type",
  "required_properties": [
    "user_id",
    "timestamp"
  ],
  "restorable": true,
  "searchable_properties": [
    "interaction_type",
    "user_id"
  ],
  "secondary_display_properties": [
    "location",
    "device"
  ]
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
