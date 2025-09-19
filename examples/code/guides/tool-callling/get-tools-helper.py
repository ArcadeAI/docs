from typing import Optional
from arcadepy import NOT_GIVEN, AsyncArcade
from arcadepy.types import ToolDefinition


async def get_tool_definitions(
    client: Optional[AsyncArcade] = None,
    tools: Optional[list[str]] = None,
    toolkits: Optional[list[str]] = None,
    raise_on_empty: bool = True,
    limit: Optional[int] = None,
    offset: Optional[int] = None,
) -> list[ToolDefinition]:
    """
    Retrieve tool definitions asynchronously from the Arcade client, accounting for pagination.

    Args:
        tools: Optional list of specific tool names to include.
        toolkits: Optional list of toolkit names to include all tools from.
        raise_on_empty: Whether to raise an error if no tools or toolkits are provided.
        limit: Optional limit on the number of tools to retrieve per request.
        offset: Optional offset for paginated requests.

    Returns:
        List of ToolDefinition instances.

    Raises:
        ValueError: If no tools or toolkits are provided and raise_on_empty is True.
    """
    if client is None:
        client = AsyncArcade()
    all_tools: list[ToolDefinition] = []

    # If no specific tools or toolkits are requested, raise an error.
    if not tools and not toolkits:
        if raise_on_empty:
            raise ValueError("No tools or toolkits provided to retrieve tool definitions.")
        return []

    # First, gather single tools if the user specifically requested them.
    if tools:
        for tool_id in tools:
            # ToolsResource.get(...) returns a single ToolDefinition.
            single_tool = await client.tools.get(name=tool_id)
            all_tools.append(single_tool)

    # Next, gather tool definitions from any requested toolkits.
    if toolkits:
        for tk in toolkits:
            paginated_tools = await client.tools.list(
                toolkit=tk,
                limit=NOT_GIVEN if limit is None else limit,
                offset=NOT_GIVEN if offset is None else offset,
            )
            async for tool in paginated_tools:
                all_tools.append(tool)

    return all_tools
