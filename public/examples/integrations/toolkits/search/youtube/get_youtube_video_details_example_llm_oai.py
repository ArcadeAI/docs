import os
from openai import OpenAI

PROMPT = "Get the details of the video with the id 'dQw4w9WgXcQ' on YouTube."
TOOL_NAME = "Search.GetYoutubeVideoDetails"

client = OpenAI(
    base_url="https://api.arcade.dev", api_key=os.environ.get("ARCADE_API_KEY")
)

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": PROMPT},
    ],
    model="gpt-4o-mini",
    tools=[TOOL_NAME],
    tool_choice="generate",
)
print(response.choices[0].message.content)
