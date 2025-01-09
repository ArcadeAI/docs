import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Arcade AI
client = OpenAI(
    api_key=os.environ["ARCADE_API_KEY"],
    base_url="https://api.arcade-ai.com/v1",
)

# Get a unique identifier for your end user
user_id = "you@example.com"

while True:
    # Ask the user for input
    prompt = input("Enter your prompt (type 'exit' to quit):")
    if prompt.lower() == "exit":
        break

    # Use a tool and generate a response
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
        ],
        model="gpt-4o",
        user=user_id,
        tools=[
            "GitHub.SetStarred",
        ],
        tool_choice="generate",
    )

    print(response.choices[0].message.content)
