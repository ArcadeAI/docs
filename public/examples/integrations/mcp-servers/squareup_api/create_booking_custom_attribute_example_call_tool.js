import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "SquareupApi.CreateBookingCustomAttribute";

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
  "attribute_schema_json": "{\"type\":\"object\",\"properties\":{\"example_property\":{\"type\":\"string\"}}}",
  "custom_attribute_definition_name": "BookingType",
  "custom_attribute_key": "booking_type",
  "custom_attribute_visibility": "VISIBILITY_READ_WRITE_VALUES",
  "idempotency_key": "unique-request-12345"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
