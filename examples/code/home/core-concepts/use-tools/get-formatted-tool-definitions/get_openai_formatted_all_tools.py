from arcadepy import Arcade

client = Arcade()

# Get all tools formatted for OpenAI
all_tools = list(client.tools.formatted.list(format="openai"))

# Print the number of tools
print(len(all_tools))
