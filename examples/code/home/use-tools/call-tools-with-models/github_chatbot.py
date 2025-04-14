import os
from openai import OpenAI

# Initialize the OpenAI client, pointing to Arcade
client = OpenAI(
    base_url="https://api.arcade.dev/v1",
    api_key="arcade_api_key",
)

# Set a unique identifier for your end user
user_id = "you@example.com"

# Determine which tools will be available to the chatbot agent
tools = [
    "GitHub.SetStarred",
    "Github.ListStargazers",
    "Github.CreateIssue",
    "Github.CreateIssueComment",
    "Github.ListPullRequests",
    "Github.GetPullRequest",
    "Github.UpdatePullRequest",
    "Github.GetRepository",
    "Github.ListRepositoryActivities",
]

while True:
    # Ask the user for input
    prompt = input("Enter your prompt (type 'exit' to quit):")
    if prompt.lower() == "exit":
        break

    # Let the LLM choose a tool to use based on the user's prompt
    response = client.chat.completions.create(
        messages=[
            {"role": "system", "content": "You are a helpful assistant that can interact with GitHub."},
            {"role": "user", "content": prompt},
        ],
        model="gpt-4o",
        user=user_id,
        tools=tools,
        tool_choice="generate",
    )

    print(response.choices[0].message.content)
