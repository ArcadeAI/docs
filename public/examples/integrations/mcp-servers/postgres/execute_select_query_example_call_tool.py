from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Postgres.ExecuteSelectQuery"

user_id = "{arcade_user_id}"

tool_input = {
    "select_clause": "id, name, email",
    "from_clause": "users",
    "where_clause": "active = true",
    "order_by_clause": "name",
    "limit": 10,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=user_id,
)

print(response.output.value)
