from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

response = client.tools.execute(
    tool_name="Math.Sqrt",
    input={"a": 625},
    user_id="user@example.com",
)

print(response.output.value)  # 25
