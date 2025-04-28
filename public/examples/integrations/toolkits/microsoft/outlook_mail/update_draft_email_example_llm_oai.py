import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "update the draft email with id 1234567890 with the subject 'My new subject' and the body 'My new body'. Add johndoe@example.com to the to recipients and remove a@example.com from the to recipients."
TOOL_NAME = "Microsoft.UpdateDraftEmail"

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
