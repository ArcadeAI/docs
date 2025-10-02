import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetTerminalConfigurations";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "pagination_ending_before": "cfg_1Gq2xL2eZvKYlo2C0a1b2c3d",
  "fields_to_expand": [
    "merchant_profile",
    "device_settings"
  ],
  "maximum_objects_to_return": 25,
  "pagination_starting_after_id": "cfg_1Gq2wK3eZvKYlo2C9d8e7f6g",
  "only_return_account_default_configurations": false
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
