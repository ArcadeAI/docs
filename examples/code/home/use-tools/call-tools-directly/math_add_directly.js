import Arcade from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const response = await client.tools.execute({
  tool_name: "Math.Sqrt",
  input: { a: "625" },
  user_id: "user@example.com",
});

console.log(response.output.value); // 25
