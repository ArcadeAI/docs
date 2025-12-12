import base64
import os

from arcadepy import Arcade

client = Arcade()  # Automatically finds the `ARCADE_API_KEY` env variable

USER_ID = "{arcade_user_id}"
FILE_ID = "Projects/report.pdf"
OUTPUT_DIR = os.path.dirname(os.path.abspath(__file__))

# Authorize for download tools
auth_response = client.tools.authorize(tool_name="GoogleDrive.DownloadFile", user_id=USER_ID)

if auth_response.status != "completed":
    print(f"Click this link to authorize: {auth_response.url}")

# Wait for the authorization to complete
client.auth.wait_for_completion(auth_response)

# Step 1: Call download_file to get file info and possibly content
print(f"Downloading file: {FILE_ID}")
response = client.tools.execute(
    tool_name="GoogleDrive.DownloadFile",
    input={"file_path_or_id": FILE_ID},
    user_id=USER_ID,
)

# Check for errors in the response
if response.output.error:
    print(f"Error: {response.output.error}")
    exit(1)

result = response.output.value
if result is None:
    print(f"Unexpected response: {response}")
    exit(1)

print(f"File name: {result['name']}")
print(f"MIME type: {result['mimeType']}")
print(f"Size: {result.get('size', 'unknown')} bytes")

# Get file extension from the original filename
original_name = result["name"]
_, ext = os.path.splitext(original_name)
if not ext:
    ext = ".bin"  # Default extension if none found

output_path = os.path.join(OUTPUT_DIR, f"downloaded_file{ext}")

# Step 2: Check if chunked download is required
if result.get("requires_chunked_download"):
    print("\nFile requires chunked download. Downloading in chunks...")
    total_size = result["total_size_bytes"]
    chunk_size = result["recommended_chunk_size"]

    # Collect all chunks
    chunks = []
    start_byte = 0

    while True:
        print(f"Downloading chunk starting at byte {start_byte}...")
        chunk_response = client.tools.execute(
            tool_name="GoogleDrive.DownloadFileChunk",
            input={
                "file_path_or_id": FILE_ID,
                "start_byte": start_byte,
                "chunk_size": chunk_size,
            },
            user_id=USER_ID,
        )

        if chunk_response.output.error:
            print(f"Error downloading chunk: {chunk_response.output.error}")
            exit(1)

        chunk_result = chunk_response.output.value
        if chunk_result is None:
            print(f"Unexpected chunk response: {chunk_response}")
            exit(1)

        chunk_content = base64.b64decode(chunk_result["content"])
        chunks.append(chunk_content)

        print(f"Progress: {chunk_result['progress_percent']}%")

        if chunk_result["is_final_chunk"]:
            break

        start_byte = chunk_result["next_start_byte"]

    # Combine all chunks and save
    file_content = b"".join(chunks)
else:
    # Small file - content is included directly
    print("\nFile content received directly (small file).")
    file_content = base64.b64decode(result["content"])

# Save the file
with open(output_path, "wb") as f:
    f.write(file_content)

print(f"\nFile saved to: {output_path}")
print(f"Total bytes written: {len(file_content)}")
