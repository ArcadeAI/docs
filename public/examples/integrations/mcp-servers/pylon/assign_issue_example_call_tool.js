import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();
const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Pylon.AssignIssue";

const toolInput = {
  issue_lookup_by: "id", // "id" or "search"
  issue_value: "ISSUE_ID_OR_KEYWORDS",
  user_lookup_by: "name", // "id" or "name"
  user_value: "Alex Doe",
  auto_accept_matches: false,
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
  secrets: { PYLON_API_TOKEN: "<your_pylon_admin_token>" },
});

console.log(JSON.stringify(response.output.value, null, 2));
