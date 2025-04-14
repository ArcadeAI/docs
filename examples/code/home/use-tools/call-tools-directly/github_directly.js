import Arcade from "@arcadeai/arcadejs";

const client = new Arcade();

let userId = "you@example.com";

const response = await client.tools.execute({
  tool_name: "GitHub.SetStarred",
  input: {
    owner: "ArcadeAI",
    name: "arcade-ai",
    starred: true,
  },
  user_id: userId,
});

console.log(response.output.value);
