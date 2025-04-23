import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "reply all to the email with id 1234567890 with the body 'I am replying to all recipients with this email.'."
TOOL_NAME = "Microsoft.ReplyAllToEmail"

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
