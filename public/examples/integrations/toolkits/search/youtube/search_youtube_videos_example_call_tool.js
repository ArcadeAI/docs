import { Arcade } from "@arcadeai/arcadejs";

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = "Search.SearchYoutubeVideos";

const toolInput = {
	keywords: "Apple iPhone",
	language_code: "en",
	country_code: "us",
	next_page_token: null,
};

const response = await client.tools.execute({
	tool_name: TOOL_NAME,
	input: toolInput,
});

console.log(response);
