from arcade.core.config import config
from openai import OpenAI

# Initialize the OpenAI client, pointing to Arcade AI
client = OpenAI(
    base_url="https://api.arcade-ai.com/v1",
    api_key=config.api_key,
)

# Get a unique identifier for your end user
user_id = "you@example.com"

while True:
    # Ask the user for input
    prompt = input("Enter your prompt (type 'exit' to quit): ")
    if prompt.lower() == "exit":
        break

    # Generate a response
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt},
        ],
        model="gpt-4o",
        user=user_id,
        # Make specific tools available to the AI model
        tools=[
            "GitHub.SetStarred",
        ],
        # Instruct the model to use tools and generate a response
        tool_choice="generate",
    )

    print(response.choices[0].message.content)
