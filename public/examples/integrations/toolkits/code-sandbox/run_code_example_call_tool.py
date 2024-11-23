from arcadepy import Arcade

# Initialize the Arcade client
client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "you@example.com"
TOOL_NAME = "CodeSandbox.RunCode"

# Define the code to create a chart
merge_sort = """
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i, j = 0, 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

sample_list = ["banana", "apple", "cherry", "date", "elderberry"]

sorted_list = merge_sort(sample_list)
print("Sorted list:", sorted_list)
"""

inputs = {
    "code": merge_sort,
    "language": "python",
}

# Execute the tool
response = client.tools.execute(
    tool_name=TOOL_NAME,
    inputs=inputs,
    user_id=USER_ID,
)
print(response)
