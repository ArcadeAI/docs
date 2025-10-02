import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetTerminalReaders";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "filter_by_device_type": "stripe_s700",
  "object_return_limit": 25,
  "filter_by_location_id": "loc_1A2b3C4d",
  "filter_by_status": "online",
  "expand_response_fields": [
    "configuration",
    "last_connection"
  ],
  "pagination_start_object_id": "trr_0001",
  "filter_by_serial_number": "SN12345"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
