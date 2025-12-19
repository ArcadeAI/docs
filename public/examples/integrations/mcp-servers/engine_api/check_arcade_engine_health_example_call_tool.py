import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "EngineApi.CheckArcadeEngineHealth"

tool_input = {
    
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(json.dumps(response.output.value, indent=2))
