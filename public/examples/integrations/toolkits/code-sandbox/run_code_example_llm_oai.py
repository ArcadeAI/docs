import os
from openai import OpenAI

USER_ID = "you@example.com"
PROMPT = "Write a JavaScript program that merges two sorted lists into one sorted list. List 1: [1, 3, 5, 7], List 2: [2, 4, 6, 8] and run it."
TOOL_NAME = "CodeSandbox.RunCode"

client = OpenAI(
    base_url="https://api.arcade-ai.com", api_key=os.environ.get("ARCADE_API_KEY")
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
