import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Create a reply to review comment #1 on pull request #2 in the ArcadeAI/example repository with the body 'This is a reply.'"
TOOL_NAME = "Github.CreateReplyForReviewComment"

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
