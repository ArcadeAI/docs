import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade();

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "Figma.ExportImage";

const authResponse = await client.tools.authorize({tool_name: TOOL_NAME, user_id: USER_ID});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

await client.auth.waitForCompletion(authResponse);

const toolInput = {
  file_key: "abc123xyz",  // Replace with your Figma file key
  node_ids: ["0:1", "1-2"],  // Replace with node IDs to export
  image_format: "png",  // Options: png, jpg, svg, pdf
  scale: 2.0,  // Optional: scale factor for PNG/JPG (0.01 to 4.0)
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));

