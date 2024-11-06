from arcadepy import Arcade

client = Arcade()

# Get all tools in the Github toolkit formatted for OpenAI
github_tools = list(client.tools.formatted.list(format="openai", toolkit="github"))

# Print the number of tools in the Github toolkit
print(len(github_tools))
