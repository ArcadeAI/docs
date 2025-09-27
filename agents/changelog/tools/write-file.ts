import { tool } from '@openai/agents';
import * as fs from 'fs';
import path from 'path';
import { z } from 'zod';

import type { Config } from '../classes/config';
import type { Logger } from '../classes/logger';
import { ToolUtils } from '../utils/tool-utils';

const name = 'write_file';
const description = 'Write the contents of a file';
const parametersSchema = z.object({
  path: z.string(),
  content: z.string(),
});

export const writeFileTool = (config: Config, logger: Logger) =>
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
  try {
    // Resolve the target path relative to the configured directory
    const targetPath = path.resolve(parameters.path);
    const configDir = path.resolve(config.directory);

    // Check if the target path is outside the configured directory
    if (!targetPath.startsWith(configDir)) {
      return `Error writing file: Cannot write outside configured directory ${configDir}`;
    }

    // Check if the directory exists
    const dir = path.dirname(targetPath);
    if (!fs.existsSync(dir)) {
      return `Error writing file: Directory does not exist: ${dir}`;
    }

    // Write the file directly
    fs.writeFileSync(targetPath, parameters.content, 'utf-8');

    return `File written successfully to ${parameters.path}`;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error writing file: ${error.message}`;
    }
    return `Error writing file: ${error}`;
  }
}
