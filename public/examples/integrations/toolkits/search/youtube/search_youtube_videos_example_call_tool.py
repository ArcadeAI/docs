from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

TOOL_NAME = "Search.SearchYoutubeVideos"

tool_input = {
    "keywords": "Apple iPhone",
    "language_code": "en",
    "country_code": "us",
    "next_page_token": None,
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
)
print(response)
