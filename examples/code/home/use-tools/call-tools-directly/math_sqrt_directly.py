from arcadepy import Arcade

client = Arcade(api_key="arcade_api_key")

user_id = "user@example.com"

response = client.tools.execute(
    tool_name="Math.Sqrt",
    input={"a": 625},
    user_id=user_id,
)

print(response.output.value)
