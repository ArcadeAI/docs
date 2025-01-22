import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Write a draft email to john.doe@example.com with the subject 'Project Update' and body 'Please find the attached project update.'"
TOOL_NAME = "Google.WriteDraftEmail"

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
