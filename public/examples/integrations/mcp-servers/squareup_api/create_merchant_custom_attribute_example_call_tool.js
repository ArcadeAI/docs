import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.CreateMerchantCustomAttribute";

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
  "attribute_visibility_level": "VISIBILITY_READ_WRITE_VALUES",
  "custom_attribute_key": "app_123:custom_attr",
  "custom_attribute_name": "Loyalty Points",
  "custom_attribute_json_schema": {
    "type": "object",
    "properties": {
      "points": {
        "type": "integer"
      }
    },
    "required": [
      "points"
    ]
  },
  "idempotency_key": "unique-request-identifier"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
