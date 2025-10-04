from arcadepy import Arcade

client = Arcade()
list_conversations_metadata = client.tools.formatted.get(
    name="Slack.ListConversationsMetadata", format="openai"
)

print(list_conversations_metadata)
