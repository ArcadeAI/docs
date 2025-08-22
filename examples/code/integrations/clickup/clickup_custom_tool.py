import httpx
from arcade_tdk import tool, ToolContext
from arcade_tdk.auth import ClickUp

@tool(requires_auth=ClickUp())
async def get_my_workspaces(context: ToolContext) -> dict:
    """Get the authenticated user's workspaces (teams) from ClickUp."""
    token = context.authorization.token

    # Make authenticated request to ClickUp API
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.clickup.com/api/v2/team",
            headers={
                "Authorization": token,
                "Content-Type": "application/json"
            }
        )

        if response.status_code == 200:
            data = response.json()
            teams = data.get("teams", [])
            return {
                "success": True,
                "teams": [{"id": team["id"], "name": team["name"]} for team in teams]
            }
        else:
            return {
                "success": False,
                "error": f"ClickUp API error: {response.status_code} - {response.text}"
            }
