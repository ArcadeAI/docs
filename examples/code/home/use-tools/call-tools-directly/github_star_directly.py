from arcade.client import Arcade

client = Arcade()

result = client.tool.run(
    tool_name="GitHub.SetStarred",
    inputs={"owner": "ArcadeAI", "name": "arcade-ai", "starred": True},
)

print(result)
