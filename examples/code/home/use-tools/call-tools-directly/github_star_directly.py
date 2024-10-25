from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

result = client.tools.execute(
    user_id="user@example.com",
    tool_name="GitHub.SetStarred",
    inputs={"owner": "ArcadeAI", "name": "arcade-ai", "starred": True},
)

print(result)
