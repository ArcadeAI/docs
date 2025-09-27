from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Clickhouse.DiscoverTables"

user_id = "{arcade_user_id}"

tool_input = {
    "schema_name": "public",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)

print(response.output.value)
