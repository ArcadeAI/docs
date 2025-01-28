from arcade_slack.tools.chat import list_conversations_metadata

from arcade.sdk import ToolCatalog

tool_def = ToolCatalog.create_tool_definition(list_conversations_metadata, "Slack")
tool_def_json = tool_def.model_dump_json()

print(tool_def_json)
