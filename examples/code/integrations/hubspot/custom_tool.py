from typing import Annotated

import httpx

from arcade_tdk import ToolContext, tool
from arcade_tdk.auth import Hubspot


@tool(
    requires_auth=Hubspot(
        scopes=["oauth", "crm.objects.companies.read"],
    )
)
async def get_company_details(
    context: ToolContext,
    company_id: Annotated[
        str,
        "The ID of the company to get the details of.",
    ],
) -> Annotated[dict, "Details of the company"]:
    """Gets the details of a company."""
    url = f"https://api.hubapi.com/crm//v3/objects/companies/{company_id}"
    headers = {"Authorization": f"Bearer {context.get_auth_token_or_empty()}"}

    async with httpx.AsyncClient() as client:
        response = await client.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
