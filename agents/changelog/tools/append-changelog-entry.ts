import { tool } from '@openai/agents';
import * as fs from 'fs';
import path from 'path';
import { z } from 'zod';

import type { Config } from '../classes/config';
import type { Logger } from '../classes/logger';
import { ToolUtils } from '../utils/tool-utils';

const name = 'append_changelog_entry';
const description = 'Append a changelog entry to a file with a date and body text';
const parametersSchema = z.object({
  path: z.string().describe('The path to the changelog file'),
  date: z.string().describe('The date for the changelog entry (e.g., YYYY-MM-DD)'),
  body: z.string().describe('The body text of the changelog entry'),
});

export const appendChangelogEntryTool = (config: Config, logger: Logger) =>
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
      return `Error appending changelog entry: Cannot write outside configured directory ${configDir}`;
    }

    // Check if the file exists
    if (!fs.existsSync(targetPath)) {
      return `Error appending changelog entry: File does not exist: ${parameters.path}`;
    }

    // Read the current file content
    const currentContent = fs.readFileSync(targetPath, 'utf-8');

    // Format the changelog entry
    const entry = `## ${parameters.date}\n\n${parameters.body}\n\n`;

    // Find the first occurrence of ## (latest entry)
    const firstH2Index = currentContent.indexOf('## ');

    let newContent: string;
    if (firstH2Index !== -1) {
      // Insert the new entry before the latest entry
      newContent =
        currentContent.slice(0, firstH2Index) +
        entry +
        currentContent.slice(firstH2Index);
    } else {
      // No existing entries, append to the end
      newContent = currentContent + '\n' + entry;
    }

    // Write the updated content
    fs.writeFileSync(targetPath, newContent, 'utf-8');

    return `Changelog entry inserted successfully to ${parameters.path}`;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error appending changelog entry: ${error.message}`;
    }
    return `Error appending changelog entry: ${error}`;
  }
}

