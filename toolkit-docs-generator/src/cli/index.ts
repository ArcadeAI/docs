#!/usr/bin/env node

/**
 * Toolkit Docs Generator CLI
 *
 * Entry point for the CLI application.
 * Run with: npx toolkit-docs-generator <command>
 *
 * Input format for providers:
 *   --providers "Github:1.0.0,Slack:2.1.0"
 *   --providers "Github" (uses latest version)
 */

import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";
import { join, resolve } from "path";
import { createJsonGenerator } from "../generator/json-generator.js";
import {
  createLlmClient,
  type LlmProvider,
  LlmToolExampleGenerator,
} from "../llm/index.js";
import type { MergeResult } from "../merger/data-merger.js";
import { createDataMerger } from "../merger/data-merger.js";
import { createCustomSectionsFileSource } from "../sources/custom-sections-file.js";
import { createEmptyCustomSectionsSource } from "../sources/in-memory.js";
import { createMockToolkitDataSource } from "../sources/toolkit-data-source.js";
import { type ProviderVersion, ProviderVersionSchema } from "../types/index.js";

const program = new Command();

/**
 * Parse providers string into array of ProviderVersion objects
 * @param input - Comma-separated string like "Github:1.0.0,Slack:2.1.0"
 */
const parseProviders = (input: string): ProviderVersion[] => {
  const parts = input
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.map((part) => {
    const [provider, version] = part.split(":").map((s) => s.trim());
    if (!provider) {
      throw new Error(
        `Invalid provider format: "${part}". Expected "Provider" or "Provider:version"`
      );
    }
    const parsed = ProviderVersionSchema.safeParse({
      provider,
      version: version || undefined,
    });
    if (!parsed.success) {
      throw new Error(`Invalid provider: ${parsed.error.message}`);
    }
    return parsed.data;
  });
};

/**
 * Get the default fixture paths (for mock mode)
 */
const getDefaultMockDataDir = (): string => join(process.cwd(), "mock-data");

const resolveLlmProvider = (value?: string): LlmProvider => {
  if (value === "openai" || value === "anthropic") {
    return value;
  }
  throw new Error(
    'LLM provider is required. Use --llm-provider "openai" or "anthropic".'
  );
};

const resolveLlmConfig = (options: {
  llmProvider?: string;
  llmApiKey?: string;
  llmModel?: string;
  llmBaseUrl?: string;
  llmTemperature?: number;
  llmMaxTokens?: number;
  llmSystemPrompt?: string;
}) => {
  const provider = resolveLlmProvider(
    options.llmProvider ?? process.env.LLM_PROVIDER
  );
  const model = options.llmModel ?? process.env.LLM_MODEL;

  if (!model) {
    throw new Error("LLM model is required. Use --llm-model or LLM_MODEL.");
  }

  const apiKey =
    options.llmApiKey ??
    (provider === "openai"
      ? process.env.OPENAI_API_KEY
      : process.env.ANTHROPIC_API_KEY);

  if (!apiKey) {
    throw new Error(
      provider === "openai"
        ? "OpenAI API key is required. Use --llm-api-key or OPENAI_API_KEY."
        : "Anthropic API key is required. Use --llm-api-key or ANTHROPIC_API_KEY."
    );
  }

  const client = createLlmClient({
    provider,
    config: {
      apiKey,
      ...(options.llmBaseUrl ? { baseUrl: options.llmBaseUrl } : {}),
    },
  });

  return new LlmToolExampleGenerator({
    client,
    model,
    ...(options.llmTemperature !== undefined
      ? { temperature: options.llmTemperature }
      : {}),
    ...(options.llmMaxTokens !== undefined
      ? { maxTokens: options.llmMaxTokens }
      : {}),
    ...(options.llmSystemPrompt
      ? { systemPrompt: options.llmSystemPrompt }
      : {}),
  });
};

const processProviders = async (
  providers: ProviderVersion[],
  merger: ReturnType<typeof createDataMerger>,
  spinner: ReturnType<typeof ora>,
  verbose: boolean
): Promise<MergeResult[]> => {
  const results: MergeResult[] = [];

  for (const pv of providers) {
    spinner.start(`Processing ${pv.provider}...`);

    try {
      const result = await merger.mergeToolkit(pv.provider, pv.version);
      results.push(result);

      if (result.warnings.length > 0 && verbose) {
        spinner.warn(`${pv.provider}: ${result.warnings.join(", ")}`);
      } else {
        spinner.succeed(`${pv.provider}: ${result.toolkit.tools.length} tools`);
      }
    } catch (error) {
      spinner.fail(`${pv.provider}: ${error}`);
    }
  }

  return results;
};

program
  .name("toolkit-docs-generator")
  .description("Generate documentation JSON for Arcade toolkits")
  .version("1.0.0");

program
  .command("generate")
  .description("Generate documentation for specified providers")
  .requiredOption(
    "-p, --providers <providers>",
    'Comma-separated list of providers with optional versions (e.g., "Github:1.0.0,Slack:2.1.0" or "Github,Slack")'
  )
  .option("-o, --output <dir>", "Output directory", "./output")
  .option("--mock-data-dir <dir>", "Path to mock data directory")
  .option("--llm-provider <provider>", "LLM provider (openai|anthropic)")
  .option("--llm-model <model>", "LLM model to use")
  .option("--llm-api-key <key>", "LLM API key")
  .option("--llm-base-url <url>", "LLM base URL")
  .option("--llm-temperature <number>", "LLM temperature", (value) =>
    Number.parseFloat(value)
  )
  .option("--llm-max-tokens <number>", "LLM max tokens", (value) =>
    Number.parseInt(value, 10)
  )
  .option("--llm-system-prompt <text>", "LLM system prompt override")
  .option("--custom-sections <file>", "Path to custom sections JSON")
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      providers: string;
      output: string;
      mockDataDir?: string;
      llmProvider?: string;
      llmModel?: string;
      llmApiKey?: string;
      llmBaseUrl?: string;
      llmTemperature?: number;
      llmMaxTokens?: number;
      llmSystemPrompt?: string;
      customSections?: string;
      verbose: boolean;
    }) => {
      const spinner = ora("Parsing input...").start();

      try {
        // Parse providers
        const providers = parseProviders(options.providers);
        spinner.succeed(`Parsed ${providers.length} provider(s)`);

        if (options.verbose) {
          console.log(chalk.cyan("\nProviders to process:"));
          for (const pv of providers) {
            const version = pv.version ?? "latest";
            console.log(chalk.dim(`  - ${pv.provider}:${version}`));
          }
        }

        // Initialize sources
        spinner.start("Initializing data sources...");

        const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
        const toolkitDataSource = createMockToolkitDataSource({
          dataDir: mockDataDir,
        });
        const toolExampleGenerator = resolveLlmConfig(options);

        // Custom sections source
        const customSectionsSource = options.customSections
          ? createCustomSectionsFileSource(options.customSections)
          : createEmptyCustomSectionsSource();

        spinner.succeed("Data sources initialized");

        // Create merger using unified source
        const merger = createDataMerger({
          toolkitDataSource,
          customSectionsSource,
          toolExampleGenerator,
        });

        // Create generator
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
        });

        // Process each provider
        const allResults = await processProviders(
          providers,
          merger,
          spinner,
          options.verbose
        );

        // Generate output files
        if (allResults.length > 0) {
          spinner.start("Writing output files...");

          const toolkits = allResults.map((r) => r.toolkit);
          const genResult = await generator.generateAll(toolkits);

          if (genResult.errors.length > 0) {
            spinner.warn(`Written with errors: ${genResult.errors.join(", ")}`);
          } else {
            spinner.succeed(`Written ${genResult.filesWritten.length} file(s)`);
          }

          // Print summary
          console.log(chalk.green("\n✓ Generation complete\n"));
          console.log(chalk.dim("Files:"));
          for (const file of genResult.filesWritten) {
            console.log(chalk.dim(`  ${file}`));
          }
        }
      } catch (error) {
        spinner.fail(
          `Error: ${error instanceof Error ? error.message : String(error)}`
        );
        process.exit(1);
      }
    }
  );

program
  .command("generate-all")
  .description("Generate documentation for all toolkits in mock data")
  .option("-o, --output <dir>", "Output directory", "./output")
  .option("--mock-data-dir <dir>", "Path to mock data directory")
  .option("--llm-provider <provider>", "LLM provider (openai|anthropic)")
  .option("--llm-model <model>", "LLM model to use")
  .option("--llm-api-key <key>", "LLM API key")
  .option("--llm-base-url <url>", "LLM base URL")
  .option("--llm-temperature <number>", "LLM temperature", (value) =>
    Number.parseFloat(value)
  )
  .option("--llm-max-tokens <number>", "LLM max tokens", (value) =>
    Number.parseInt(value, 10)
  )
  .option("--llm-system-prompt <text>", "LLM system prompt override")
  .option("--custom-sections <file>", "Path to custom sections JSON")
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      output: string;
      mockDataDir?: string;
      llmProvider?: string;
      llmModel?: string;
      llmApiKey?: string;
      llmBaseUrl?: string;
      llmTemperature?: number;
      llmMaxTokens?: number;
      llmSystemPrompt?: string;
      customSections?: string;
      verbose: boolean;
    }) => {
      const spinner = ora("Initializing...").start();

      try {
        const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
        const toolkitDataSource = createMockToolkitDataSource({
          dataDir: mockDataDir,
        });
        const toolExampleGenerator = resolveLlmConfig(options);

        const customSectionsSource = options.customSections
          ? createCustomSectionsFileSource(options.customSections)
          : createEmptyCustomSectionsSource();

        spinner.succeed("Data sources initialized");

        // Create merger using unified source
        const merger = createDataMerger({
          toolkitDataSource,
          customSectionsSource,
          toolExampleGenerator,
        });

        spinner.start("Merging all toolkits...");
        const results = await merger.mergeAllToolkits();
        spinner.succeed(`Merged ${results.length} toolkit(s)`);

        // Generate output
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
        });

        spinner.start("Writing output files...");
        const toolkits = results.map((r) => r.toolkit);
        const genResult = await generator.generateAll(toolkits);

        if (genResult.errors.length > 0) {
          spinner.warn(`Written with errors: ${genResult.errors.join(", ")}`);
        } else {
          spinner.succeed(`Written ${genResult.filesWritten.length} file(s)`);
        }

        console.log(chalk.green("\n✓ Generation complete\n"));
      } catch (error) {
        spinner.fail(
          `Error: ${error instanceof Error ? error.message : String(error)}`
        );
        process.exit(1);
      }
    }
  );

program
  .command("validate <file>")
  .description("Validate a generated JSON file against the schema")
  .action(async (file: string) => {
    const { readFile } = await import("fs/promises");
    const { MergedToolkitSchema } = await import("../types/index.js");

    try {
      const content = await readFile(file, "utf-8");
      const json = JSON.parse(content);
      const result = MergedToolkitSchema.safeParse(json);

      if (result.success) {
        console.log(chalk.green(`✓ ${file} is valid`));
      } else {
        console.log(chalk.red(`✗ ${file} is invalid:`));
        console.log(chalk.dim(result.error.message));
        process.exit(1);
      }
    } catch (error) {
      console.log(chalk.red(`✗ Failed to validate: ${error}`));
      process.exit(1);
    }
  });

program
  .command("list-toolkits")
  .description("List toolkits available in mock data")
  .option("--mock-data-dir <dir>", "Path to mock data directory")
  .option("--json", "Output as JSON", false)
  .action(async (options: { mockDataDir?: string; json: boolean }) => {
    try {
      const toolkits = new Map<string, number>();
      const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
      const toolkitDataSource = createMockToolkitDataSource({
        dataDir: mockDataDir,
      });
      const toolkitData = await toolkitDataSource.fetchAllToolkitsData();

      for (const [id, data] of toolkitData) {
        toolkits.set(id, data.tools.length);
      }

      if (options.json) {
        const data = Array.from(toolkits.entries()).map(([id, count]) => ({
          id,
          toolCount: count,
        }));
        console.log(JSON.stringify(data, null, 2));
      } else {
        console.log(chalk.bold(`\nToolkits in fixture (${toolkits.size}):\n`));
        for (const [id, count] of toolkits) {
          console.log(`  ${chalk.green(id.padEnd(20))} ${count} tool(s)`);
        }
      }
    } catch (error) {
      console.log(chalk.red(`Error: ${error}`));
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse();
