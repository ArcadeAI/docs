import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Rewind the current track by 10 seconds."
TOOL_NAME = "Spotify.AdjustPlaybackPosition"

client = OpenAI(
    base_url="https://api.arcade.dev", api_key=os.environ.get("ARCADE_API_KEY")
)

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": PROMPT},
    ],
    model="gpt-4o-mini",
    user=USER_ID,
    tools=[TOOL_NAME],
    tool_choice="generate",
)
print(response.choices[0].message.content)
