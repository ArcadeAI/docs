import os
from openai import OpenAI

PROMPT = "Download the file /My Documents/My Folder/quarterly report 2025.pdf"
TOOL_NAME = "Dropbox.DownloadFile"

client = OpenAI(
    base_url="https://api.arcade.dev", api_key=os.environ.get("ARCADE_API_KEY")
)

response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": PROMPT},
    ],
    model="gpt-4o-mini",
    tools=[TOOL_NAME],
    tool_choice="generate",
)
print(response.choices[0].message.content)
