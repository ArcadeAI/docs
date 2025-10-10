import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "XeroApi.SetFinancialSetup";

// Start the authorization process
const authResponse = await client.tools.authorize({tool_name: TOOL_NAME});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

const toolInput = {
  "xero_tenant_identifier": "abcd1234-tenant",
  "financial_setup_details": {
    "conversion_date": "2025-01-01",
    "accounts": [
      {
        "code": "1000",
        "name": "Cash at Bank",
        "type": "ASSET",
        "tax_type": "NONE"
      },
      {
        "code": "2000",
        "name": "Accounts Payable",
        "type": "LIABILITY",
        "tax_type": "NONE"
      },
      {
        "code": "3000",
        "name": "Revenue",
        "type": "REVENUE",
        "tax_type": "OUTPUT"
      },
      {
        "code": "4000",
        "name": "Expenses",
        "type": "EXPENSE",
        "tax_type": "NONE"
      }
    ],
    "conversion_balances": [
      {
        "account_code": "1000",
        "balance": 15000.0,
        "currency": "USD"
      },
      {
        "account_code": "2000",
        "balance": -4500.0,
        "currency": "USD"
      },
      {
        "account_code": "3000",
        "balance": 0.0,
        "currency": "USD"
      },
      {
        "account_code": "4000",
        "balance": 0.0,
        "currency": "USD"
      }
    ]
  },
  "idempotency_key": "setup-2025-01-01-unique"
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(JSON.stringify(response.output.value, null, 2));
