import { Arcade } from "@arcadeai/arcadejs";

// Initialize the Arcade client
const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const TOOL_NAME = "E2b.RunCode";

// Define the code to merge sort a list
const mergeSort = `
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}

const sampleList = ["banana", "apple", "cherry", "date", "elderberry"];

const sortedList = mergeSort(sampleList);
console.log("Sorted list:", sortedList);
`;

const toolInput = {
  code: mergeSort,
  language: "js"
};

// Execute the tool
const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
  user_id: USER_ID,
});

console.log(response);
