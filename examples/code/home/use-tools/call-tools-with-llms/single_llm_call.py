import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Arcade AI
client = OpenAI(
    api_key=os.environ["ARCADE_API_KEY"],
    base_url="https://api.arcade-ai.com/v1",
)

# Get a unique identifier for your end user
user_id = "you@example.com"

# Use a tool and generate a response
response = client.chat.completions.create(
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Star the ArcadeAI/langchain-arcade repo on GitHub",
        },
    ],
    model="gpt-4o",
    user=user_id,
    tools=[
        "GitHub.SetStarred",
        "GitHub.CountStargazers",
    ],
    tool_choice="generate",
)

print(response)
