import { tool } from '@openai/agents';
import * as fs from 'fs';
import path from 'path';
import { z } from 'zod';
import type { Config } from '../classes/config';
import type { Logger } from '../classes/logger';
import { ToolUtils } from '../utils/tool-utils';

const name = 'read_file';
const description = 'Read the contents of a file';
const parametersSchema = z.object({
  path: z.string().describe('The path to the file to read'),
});

export const readFileTool = (config: Config, logger: Logger) =>
  tool({
    name,
    description,
    parameters: parametersSchema,
    execute: ToolUtils.wrappedExecute(name, execute, config, logger),
  });

export async function execute(
  parameters: z.infer<typeof parametersSchema>,
  config: Config
) {
  // Resolve the target path relative to the configured directory
  const targetPath = path.resolve(parameters.path);
  const configDir = path.resolve(config.directory);

  // Check if the target path is outside the configured directory
  if (!targetPath.startsWith(configDir)) {
    return `Error reading file: Cannot read outside configured directory ${configDir}`;
  }

  try {
    const content = fs.readFileSync(parameters.path, 'utf8');
    return `File contents for ${parameters.path}:\n\n\`\`\`\n${content}\n\`\`\``;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error reading file: ${error.message}`;
    }
    return `Error reading file: ${error}`;
  }
}
