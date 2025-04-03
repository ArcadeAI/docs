import os
from openai import OpenAI

USER_ID = "you@example.com"
# TODO: Replace with an identifier for a real post
PROMPT = "Get the top level comments of the post https://www.reddit.com/r/TestSubreddit/comments/1abcdefg/"
TOOL_NAME = "Reddit.GetTopLevelCommentsOfPost"

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
