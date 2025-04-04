import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Get the top 10 posts in the subreddit 'TestSubreddit' in the last 24 hours."
TOOL_NAME = "Reddit.GetPostsInSubreddit"

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
