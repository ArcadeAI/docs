# Import the OpenAI client
from openai import OpenAI

# Replace these values with your own:
ARCADE_API_KEY = "MY_ARCADE_API_KEY"  # Your Arcade API key from the previous step
RECIPIENT_EMAIL = "FRIEND@EMAIL.COM"  # The email address where you want to send the email
YOUR_EMAIL = "YOUR@EMAIL.COM"  # Your email address (used for authorization)

# Instantiate the OpenAI client pointing to Arcade's endpoint
client = OpenAI(base_url="https://api.arcade.dev/v1", api_key=ARCADE_API_KEY)

# Define the parameters for the request
prompt = f"""Send an email to {RECIPIENT_EMAIL} with the subject 'Arcade.dev' and the body
'I'm trying out Arcade.dev and it's awesome! You should check it out too:
https://api.arcade.dev/signup'"""
tools = ["Google.SendEmail"]  # The tools available to use for the request
model = "gpt-4o"
user_id = YOUR_EMAIL  # Identifies the user for Arcade to auth with

# Send the request to the LLM via Arcade's Gateway
response = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": prompt}],
    tools=tools,
    tool_choice="generate",  # Instructs Arcade to use its tools
    user=user_id,
)

# Print the response from the LLM
print(response.choices[0].message.content)
