import { Arcade } from "arcade-js";

const client = new Arcade();

const auth = await client.auth.start({
  provider: "clickup",
});

if (auth.status !== "completed") {
  console.log("Finish authorization at:", auth.url);
  await client.auth.waitForCompletion(auth);
}

const { token } = auth.context;
// Use the token in ClickUp API requests
