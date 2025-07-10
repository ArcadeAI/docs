import { Arcade } from "@arcadeai/arcadejs";

// Initialize the Arcade client
const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "CodeSandbox.CreateStaticMatplotlibChart";

// Define the code to create a chart
const chartCode = `
import matplotlib.pyplot as plt

labels = ['Apples', 'Bananas', 'Cherries', 'Dates']
sizes = [30, 25, 20, 25]
colors = ['red', 'yellow', 'purple', 'brown']

plt.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)

plt.axis('equal')

plt.title('Fruit Distribution')

plt.savefig('fruit_pie_chart.png')
`;

const toolInput = {
  code: chartCode
};

// Execute the tool
const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response); 