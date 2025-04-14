import os
from openai import OpenAI

USER_ID = "you@example.com"
# TODO: Replace with an identifier for a real comment
PROMPT = "Reply to the comment on https://www.reddit.com/r/TestSubreddit/comments/1abcdefg/comment/3abcdefg/ saying 'This is a test reply to a non-existent comment.'"
TOOL_NAME = "Reddit.ReplyToComment"

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
