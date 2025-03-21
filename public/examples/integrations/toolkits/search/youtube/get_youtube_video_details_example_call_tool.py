from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Search.GetYoutubeVideoDetails"

tool_input = {
    "video_id": "dQw4w9WgXcQ",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(response)
