import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

let userId = "you@example.com";

const response = await client.tools.execute({
  tool_name: "Math.Sqrt",
  input: { a: "625" },
  user_id: userId,
});

console.log(response.output.value);
