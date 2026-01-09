import { Arcade } from "@arcadeai/arcadejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const USER_ID = "{arcade_user_id}";
const FILE_ID = "Projects/report.pdf";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Authorize for download tools
const authResponse = await client.tools.authorize({
  tool_name: "GoogleDrive.DownloadFile",
  user_id: USER_ID,
});

if (authResponse.status !== "completed") {
  console.log(`Click this link to authorize: ${authResponse.url}`);
}

// Wait for the authorization to complete
await client.auth.waitForCompletion(authResponse);

// Step 1: Call download_file to get file info and possibly content
console.log(`Downloading file: ${FILE_ID}`);
const response = await client.tools.execute({
  tool_name: "GoogleDrive.DownloadFile",
  input: { file_path_or_id: FILE_ID },
  user_id: USER_ID,
});

// Check for errors in the response
if (response.output.error) {
  console.error(`Error: ${response.output.error}`);
  process.exit(1);
}

const result = response.output.value;
if (!result) {
  console.error(`Unexpected response: ${JSON.stringify(response)}`);
  process.exit(1);
}

console.log(`File name: ${result.name}`);
console.log(`MIME type: ${result.mimeType}`);
console.log(`Size: ${result.size || "unknown"} bytes`);

// Get file extension from the original filename
const originalName = result.name;
const ext = path.extname(originalName) || ".bin";
const outputPath = path.join(__dirname, `downloaded_file${ext}`);

let fileContent;

// Step 2: Check if chunked download is required
if (result.requires_chunked_download) {
  console.log("\nFile requires chunked download. Downloading in chunks...");
  const chunkSize = result.recommended_chunk_size;

  // Collect all chunks
  const chunks = [];
  let startByte = 0;

  while (true) {
    console.log(`Downloading chunk starting at byte ${startByte}...`);
    const chunkResponse = await client.tools.execute({
      tool_name: "GoogleDrive.DownloadFileChunk",
      input: {
        file_path_or_id: FILE_ID,
        start_byte: startByte,
        chunk_size: chunkSize,
      },
      user_id: USER_ID,
    });

    if (chunkResponse.output.error) {
      console.error(`Error downloading chunk: ${chunkResponse.output.error}`);
      process.exit(1);
    }

    const chunkResult = chunkResponse.output.value;
    if (!chunkResult) {
      console.error(`Unexpected chunk response: ${JSON.stringify(chunkResponse)}`);
      process.exit(1);
    }

    const chunkContent = Buffer.from(chunkResult.content, "base64");
    chunks.push(chunkContent);

    console.log(`Progress: ${chunkResult.progress_percent}%`);

    if (chunkResult.is_final_chunk) {
      break;
    }

    startByte = chunkResult.next_start_byte;
  }

  // Combine all chunks
  fileContent = Buffer.concat(chunks);
} else {
  // Small file - content is included directly
  console.log("\nFile content received directly (small file).");
  fileContent = Buffer.from(result.content, "base64");
}

// Save the file
fs.writeFileSync(outputPath, fileContent);

console.log(`\nFile saved to: ${outputPath}`);
console.log(`Total bytes written: ${fileContent.length}`);
