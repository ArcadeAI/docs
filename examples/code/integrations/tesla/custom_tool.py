from arcade.tools import tool, ToolContext
from arcade.auth import Tesla
import requests
from typing import Dict, Any, List

@tool(
    name="get_vehicle_data",
    description="Get data about the user's Tesla vehicles",
    auth=Tesla(scopes=["vehicle_data"])
)
def get_vehicle_data(context: ToolContext) -> Dict[str, Any]:
    """
    Get a list of vehicles associated with the user's Tesla account.
    
    Returns:
        A dictionary containing the vehicle data.
    """
    # The token is automatically provided by the Arcade Engine
    token = context.authorization.token
    
    # Use the token to call the Tesla Fleet API
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get("https://fleet-api.prd.eu.vn.cloud.tesla.com/api/1/vehicles", headers=headers)
    
    # Return the vehicle data
    return response.json()

@tool(
    name="send_vehicle_command",
    description="Send a command to a Tesla vehicle",
    auth=Tesla(scopes=["vehicle_cmds"])
)
def send_vehicle_command(
    context: ToolContext,
    vehicle_id: str,
    command: str
) -> Dict[str, Any]:
    """
    Send a command to a Tesla vehicle.
    
    Args:
        vehicle_id: The ID of the vehicle to send the command to.
        command: The command to send (e.g., "wake_up", "door_unlock", "climate_on").
        
    Returns:
        A dictionary containing the response from the Tesla API.
    """
    # The token is automatically provided by the Arcade Engine
    token = context.authorization.token
    
    # Use the token to call the Tesla Fleet API
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.post(
        f"https://fleet-api.prd.eu.vn.cloud.tesla.com/api/1/vehicles/{vehicle_id}/command/{command}",
        headers=headers
    )
    
    # Return the response
    return response.json()