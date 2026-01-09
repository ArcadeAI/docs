import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();
const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Pylon.GetTeamAndAssignment";

const toolInput = {
  lookup_by: "id", // "id" or "name"
  value: "TEAM_ID_OR_NAME",
  auto_accept_matches: false,
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
  secrets: { PYLON_API_TOKEN: "<your_pylon_admin_token>" },
});

console.log(JSON.stringify(response.output.value, null, 2));
