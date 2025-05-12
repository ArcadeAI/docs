import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Asana.CreateTask";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  name: "My Task",
  description: "This is a task",
  start_date: "2025-01-01",
  due_date: "2025-01-30",
  workspace_id: "1234567890",
  project: "My Project",
  assignee_id: "1234567890",
  tags: ["Quick Fox", "Lazy Dog"],
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(JSON.stringify(response.output.value, null, 2));
