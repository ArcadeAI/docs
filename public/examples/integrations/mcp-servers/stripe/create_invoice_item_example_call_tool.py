from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "Stripe.CreateInvoiceItem"

tool_input = {
    "customer": "cus_123456789",
    "price": "price_123456789",
    "invoice": "in_123456789"
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
