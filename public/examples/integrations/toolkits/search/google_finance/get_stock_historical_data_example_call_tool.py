from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
TOOL_NAME = "GoogleFinance.GetStockHistoricalData"

tool_input = {
    "ticker_symbol": "GOOG",
    "exchange_identifier": "NASDAQ",
    "window": "ONE_MONTH",
}

response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
