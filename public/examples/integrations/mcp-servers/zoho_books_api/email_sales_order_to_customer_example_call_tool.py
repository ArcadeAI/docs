import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "ZohoBooksApi.EmailSalesOrderToCustomer"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'mode': 'execute',
    'organization_id': 'org123',
    'sales_order_id': 'so456',
    'sales_order_identifier': 'so789',
    'sales_order_attachments': '[attachment_url]',
    'file_name': 'order.pdf',
    'include_sales_order_attachment': True,
    'request_body': '{"customer_email":"customer@example.com","subject":"Your Sales '
                    'Order","body":"Thank you for your order!"}'
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
