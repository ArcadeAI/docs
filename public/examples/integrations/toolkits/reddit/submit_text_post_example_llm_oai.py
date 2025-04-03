import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Post to 'TestSubreddit'. The title is 'Why is the sky blue?' and the body is 'This is something I've been wondering about for a while. Wrong answers only.'"
TOOL_NAME = "Reddit.SubmitTextPost"

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
