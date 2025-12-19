import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "MailchimpMarketingApi.GetFileManagerFiles";

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
  "created_after_date": "2023-01-01T00:00:00+00:00",
  "exclude_fields_list": "size,metadata",
  "fields_to_return": "name,url,date",
  "file_created_by_user": "user@example.com",
  "file_sort_field": "date",
  "file_type": "image/jpeg",
  "number_of_records_to_return": "20",
  "pagination_offset": "0",
  "restrict_files_before_date": "2023-12-31T23:59:59+00:00",
  "sort_order_direction": "ASC"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
