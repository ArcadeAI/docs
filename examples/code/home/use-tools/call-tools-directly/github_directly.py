from arcadepy import Arcade

client = Arcade()

user_id = "{arcade_user_id}"

response = client.tools.execute(
    tool_name="GitHub.SetStarred",
    input={
        "owner": "ArcadeAI",
        "name": "arcade-ai",
        "starred": True,
    },
    user_id=user_id,
)

print(response.output.value)
