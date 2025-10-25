import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.CreateOrderCustomAttribute";

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
  "creation_timestamp": "2023-10-01T12:00:00Z",
  "custom_attribute_definition_key": "order_priority",
  "custom_attribute_definition_name": "Order Priority",
  "custom_attribute_description": "Indicates the priority level of the order.",
  "custom_attribute_schema": {
    "type": "string",
    "enum": [
      "low",
      "medium",
      "high"
    ]
  },
  "custom_attribute_visibility": "VISIBILITY_READ_WRITE_VALUES",
  "unique_request_id": "123e4567-e89b-12d3-a456-426614174000"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
