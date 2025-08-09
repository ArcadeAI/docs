import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = 'Asana.ListTags';

// Start the authorization process
const authResponse = await client.tools.authorize({ tool_name: TOOL_NAME });

if (authResponse.status !== 'completed') {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  team_id: '1234567890',
  workspace_id: '1234567890',
  limit: 100,
  next_page_token: 'abc123',
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(JSON.stringify(response.output.value, null, 2));
