import { Arcade } from '@arcadeai/arcadejs';

const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable

const TOOL_NAME = 'Youtube.GetYoutubeVideoDetails';

const toolInput = {
  video_id: 'dQw4w9WgXcQ',
};

const response = await client.tools.execute({
  tool_name: TOOL_NAME,
  input: toolInput,
});

console.log(response);
