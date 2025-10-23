import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "ZohoBooksApi.EmailSalesOrderToCustomer";

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
  "organization_id": "org123",
  "sales_order_id": "so456",
  "sales_order_identifier": "so789",
  "sales_order_attachments": "[attachment_url]",
  "file_name": "order.pdf",
  "include_sales_order_attachment": true,
  "request_body": "{\"customer_email\":\"customer@example.com\",\"subject\":\"Your Sales Order\",\"body\":\"Thank you for your order!\"}"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
