from typing import Any

from crewai_arcade import ArcadeToolManager

USER_ID = "user@example.com"

def custom_auth_flow(
    manager: ArcadeToolManager, tool_name: str, **tool_input: dict[str, Any]
) -> Any:
    """Custom auth flow for the ArcadeToolManager

    This function is called when CrewAI needs to call a tool that requires authorization.
    Authorization is handled before executing the tool.
    This function overrides the ArcadeToolManager's default auth flow performed by ArcadeToolManager.authorize_tool
    """
    # Get authorization status
    auth_response = manager.authorize(tool_name, USER_ID)

    # If the user is not authorized for the tool,
    # then we need to handle the authorization before executing the tool
    if not manager.is_authorized(auth_response.id):
        print(f"Authorization required for tool: '{tool_name}' with inputs:")
        for input_name, input_value in tool_input.items():
            print(f"  {input_name}: {input_value}")
        # Handle authorization
        print(f"\nTo authorize, visit: {auth_response.url}")
        # Block until the user has completed the authorization
        auth_response = manager.wait_for_auth(auth_response)

        # Ensure authorization completed successfully
        if not manager.is_authorized(auth_response.id):
            raise ValueError(f"Authorization failed for {tool_name}. URL: {auth_response.url}")
    else:
        print(f"Authorization already granted for tool: '{tool_name}' with inputs:")
        for input_name, input_value in tool_input.items():
            print(f"  {input_name}: {input_value}")


def tool_manager_callback(tool_manager: ArcadeToolManager, tool_name: str, **tool_input: dict[str, Any]) -> Any:
    """Tool executor callback with custom auth flow for the ArcadeToolManager

    ArcadeToolManager's default executor handles authorization and tool execution.
    This function overrides the default executor to handle authorization in a custom way and then executes the tool.
    """
    custom_auth_flow(tool_manager, tool_name, **tool_input)
    return tool_manager.execute_tool(USER_ID, tool_name, **tool_input)
