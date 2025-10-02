import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "StripeApi.GetUpfrontQuoteLineItems";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "quote_id": "qt_1A2b3C4d5E",
  "pagination_ending_before_id": "li_9Z8y7X6w5V",
  "fields_to_expand": [
    "invoice",
    "price.product"
  ],
  "max_line_items_to_return": 20,
  "pagination_starting_object_id": "obj_abc123"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
