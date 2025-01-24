from arcadepy import Arcade

# Initialize the Arcade client
client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "CodeSandbox.CreateStaticMatplotlibChart"

# Define the code to create a chart
chart_code = """
import matplotlib.pyplot as plt

labels = ['Apples', 'Bananas', 'Cherries', 'Dates']
sizes = [30, 25, 20, 25]
colors = ['red', 'yellow', 'purple', 'brown']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)

plt.axis('equal')

plt.title('Fruit Distribution')

plt.savefig('fruit_pie_chart.png')
"""

tool_input = {"code": chart_code}

# Execute the tool
response = client.tools.execute(
    tool_name=TOOL_NAME,
    input=tool_input,
    user_id=USER_ID,
)
print(response)
