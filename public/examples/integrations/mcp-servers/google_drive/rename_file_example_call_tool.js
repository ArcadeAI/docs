import { Arcade } from "@arcadeai/arcadejs";
// Required Google OAuth scopes:
// - https://www.googleapis.com/auth/drive.file

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "GoogleDrive.RenameFile";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME, user_id: USER_ID});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "file_path_or_id": "Projects/old_report.pdf",
  "new_filename": "Q4_Report_Final.pdf"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));

