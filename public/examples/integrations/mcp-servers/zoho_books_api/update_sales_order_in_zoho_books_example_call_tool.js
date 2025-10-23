import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZohoBooksApi.UpdateSalesOrderInZohoBooks";

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
  "organization_id": "123456",
  "sales_order_id": "SO78910",
  "total_number_of_files": 2,
  "attach_document": "http://example.com/document.pdf",
  "ignore_auto_number_generation": false,
  "allow_email_sending": true,
  "request_body": "{\"line_items\":[{\"item_id\":\"item123\",\"quantity\":2,\"price\":50}]}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
