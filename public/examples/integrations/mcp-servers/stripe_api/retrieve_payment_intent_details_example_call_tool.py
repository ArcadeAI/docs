import json
from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "StripeApi.RetrievePaymentIntentDetails"

auth_response = client.tools.authorize(
    tool_name=TOOL_NAME,
    user_id=USER_ID,
)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

tool_input = {
    'payment_intent_id': 'pi_1Hh1YZ2eZvKYlo2C3qX7a9b0',
    'payment_intent_client_secret': 'pi_1Hh1YZ2eZvKYlo2C3qX7a9b0_secret_123',
    'fields_to_expand': [   'charges.data.balance_transaction',
                            'latest_charge.payment_method_details']
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(json.dumps(response.output.value, indent=2))
