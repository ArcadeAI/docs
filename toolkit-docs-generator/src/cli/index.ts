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
import { readFile, readdir, rm } from "fs/promises";
import { Command } from "commander";
import ora from "ora";
import { join, resolve } from "path";
import { createJsonGenerator, verifyOutputDir } from "../generator/index.js";
import {
  createLlmClient,
  type LlmClient,
  type LlmProvider,
  LlmToolExampleGenerator,
  LlmToolkitSummaryGenerator,
} from "../llm/index.js";
import type { MergeResult } from "../merger/data-merger.js";
import { createDataMerger } from "../merger/data-merger.js";
import { createCustomSectionsFileSource } from "../sources/custom-sections-file.js";
import { createEmptyCustomSectionsSource } from "../sources/in-memory.js";
import { createMockMetadataSource } from "../sources/mock-metadata.js";
import {
  createEngineToolkitDataSource,
  createMockToolkitDataSource,
} from "../sources/toolkit-data-source.js";
import {
  MergedToolkitSchema,
  type MergedToolkit,
  type ProviderVersion,
  ProviderVersionSchema,
} from "../types/index.js";

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

/**
 * Get the default output directory for docs JSON.
 */
const getDefaultOutputDir = (): string => {
  const cwd = process.cwd();
  if (cwd.endsWith("toolkit-docs-generator")) {
    return resolve(cwd, "..", "data", "toolkits");
  }
  return resolve(cwd, "data", "toolkits");
};

const clearOutputDir = async (
  outputDir: string,
  verbose: boolean
): Promise<void> => {
  const resolvedDir = resolve(outputDir);
  const repoRoot = resolve(process.cwd());
  if (resolvedDir === "/" || resolvedDir === repoRoot) {
    throw new Error(
      `Refusing to overwrite output directory: ${resolvedDir}`
    );
  }
  await rm(resolvedDir, { recursive: true, force: true });
  if (verbose) {
    console.log(chalk.dim(`Cleared output directory: ${resolvedDir}`));
  }
};

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
}): {
  client: LlmClient;
  model: string;
  temperature?: number;
  maxTokens?: number;
  systemPrompt?: string;
} => {
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

  return {
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
  };
};

const resolveEngineConfig = (options: {
  engineApiUrl?: string;
  engineApiKey?: string;
  enginePageSize?: number;
}) => {
  const baseUrl = options.engineApiUrl ?? process.env.ENGINE_API_URL;
  const apiKey = options.engineApiKey ?? process.env.ENGINE_API_KEY;

  if (!baseUrl && !apiKey) {
    return null;
  }

  if (!baseUrl || !apiKey) {
    throw new Error(
      "Engine API requires both --engine-api-url and --engine-api-key (or ENGINE_API_URL/ENGINE_API_KEY)."
    );
  }

  return {
    baseUrl,
    apiKey,
    ...(options.enginePageSize ? { pageSize: options.enginePageSize } : {}),
  };
};

const normalizeToolkitKey = (toolkitId: string): string =>
  toolkitId.toLowerCase();

const loadPreviousToolkit = async (
  filePath: string
): Promise<MergedToolkit | null> => {
  try {
    const content = await readFile(filePath, "utf-8");
    const parsed = JSON.parse(content) as unknown;
    const result = MergedToolkitSchema.safeParse(parsed);
    if (!result.success) {
      return null;
    }
    return result.data;
  } catch {
    return null;
  }
};

const loadPreviousToolkitsForProviders = async (
  dir: string,
  providers: ProviderVersion[],
  verbose: boolean
): Promise<ReadonlyMap<string, MergedToolkit>> => {
  const previousToolkits = new Map<string, MergedToolkit>();

  for (const provider of providers) {
    const filePath = join(dir, `${provider.provider.toLowerCase()}.json`);
    const toolkit = await loadPreviousToolkit(filePath);
    if (toolkit) {
      previousToolkits.set(normalizeToolkitKey(toolkit.id), toolkit);
    } else if (verbose) {
      console.log(
        chalk.dim(`No previous output found for ${provider.provider}.`)
      );
    }
  }

  return previousToolkits;
};

const loadPreviousToolkitsFromDir = async (
  dir: string,
  verbose: boolean
): Promise<ReadonlyMap<string, MergedToolkit>> => {
  const previousToolkits = new Map<string, MergedToolkit>();

  try {
    const entries = await readdir(dir);
    const jsonFiles = entries.filter(
      (entry) => entry.endsWith(".json") && entry !== "index.json"
    );

    for (const fileName of jsonFiles) {
      const filePath = join(dir, fileName);
      const toolkit = await loadPreviousToolkit(filePath);
      if (toolkit) {
        previousToolkits.set(normalizeToolkitKey(toolkit.id), toolkit);
      }
    }
  } catch (error) {
    if (verbose) {
      console.log(chalk.dim(`Failed to read previous output: ${error}`));
    }
  }

  return previousToolkits;
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
  .description("Generate documentation for specific providers or all toolkits")
  .option(
    "-p, --providers <providers>",
    'Comma-separated list of providers with optional versions (e.g., "Github:1.0.0,Slack:2.1.0" or "Github,Slack")'
  )
  .option("--all", "Generate documentation for all toolkits", false)
  .option("-o, --output <dir>", "Output directory", getDefaultOutputDir())
  .option("--mock-data-dir <dir>", "Path to mock data directory")
  .option("--metadata-file <file>", "Path to metadata JSON file")
  .option("--engine-api-url <url>", "Engine API base URL")
  .option("--engine-api-key <key>", "Engine API key")
  .option("--engine-page-size <number>", "Engine API page size", (value) =>
    Number.parseInt(value, 10)
  )
  .option("--previous-output <dir>", "Path to previous output directory")
  .option("--force-regenerate", "Regenerate all examples and summary", false)
  .option(
    "--overwrite-output",
    "Delete output directory before writing new JSON"
  )
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
  .option(
    "--llm-concurrency <number>",
    "Max concurrent LLM calls per toolkit (default: 5)",
    (value) => Number.parseInt(value, 10)
  )
  .option(
    "--toolkit-concurrency <number>",
    "Max concurrent toolkit processing (default: 3)",
    (value) => Number.parseInt(value, 10)
  )
  .option(
    "--no-index-from-output",
    "Do not rebuild index from output directory"
  )
  .option("--skip-examples", "Skip LLM example generation", false)
  .option("--skip-summary", "Skip LLM summary generation", false)
  .option("--no-verify-output", "Skip output verification")
  .option("--custom-sections <file>", "Path to custom sections JSON")
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      providers?: string;
      all: boolean;
      output: string;
      mockDataDir?: string;
      metadataFile?: string;
      engineApiUrl?: string;
      engineApiKey?: string;
      enginePageSize?: number;
      previousOutput?: string;
      forceRegenerate: boolean;
      overwriteOutput?: boolean;
      llmProvider?: string;
      llmModel?: string;
      llmApiKey?: string;
      llmBaseUrl?: string;
      llmTemperature?: number;
      llmMaxTokens?: number;
      llmSystemPrompt?: string;
      llmConcurrency?: number;
      toolkitConcurrency?: number;
      indexFromOutput: boolean;
      skipExamples: boolean;
      skipSummary: boolean;
      verifyOutput: boolean;
      customSections?: string;
      verbose: boolean;
    }) => {
      const spinner = ora("Parsing input...").start();

      try {
        const runAll = options.all;
        if (runAll && options.providers) {
          throw new Error('Use either "--all" or "--providers", not both.');
        }

        const providers = runAll
          ? []
          : options.providers
            ? parseProviders(options.providers)
            : null;

        if (!runAll && !providers) {
          throw new Error('Missing required option "--providers" or "--all".');
        }

        if (providers) {
          spinner.succeed(`Parsed ${providers.length} provider(s)`);

          if (options.verbose) {
            console.log(chalk.cyan("\nProviders to process:"));
            for (const pv of providers) {
              const version = pv.version ?? "latest";
              console.log(chalk.dim(`  - ${pv.provider}:${version}`));
            }
          }
        } else {
          spinner.succeed("Parsed all toolkits");
        }

        // Initialize sources
        spinner.start("Initializing data sources...");

        const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
        const metadataFile =
          options.metadataFile ?? join(mockDataDir, "metadata.json");
        const metadataSource = createMockMetadataSource(metadataFile);
        const engineConfig = resolveEngineConfig(options);
        const toolkitDataSource = engineConfig
          ? createEngineToolkitDataSource({
              engine: engineConfig,
              metadataSource,
            })
          : createMockToolkitDataSource({
              dataDir: mockDataDir,
            });
        const needsExamples = !options.skipExamples;
        const needsSummary = !options.skipSummary;
        const needsLlm = needsExamples || needsSummary;

        const llmConfig = needsLlm ? resolveLlmConfig(options) : null;

        let toolExampleGenerator: LlmToolExampleGenerator | undefined;
        if (needsExamples) {
          if (!llmConfig) {
            throw new Error("LLM configuration is required for examples.");
          }
          toolExampleGenerator = new LlmToolExampleGenerator(llmConfig);
        }

        let toolkitSummaryGenerator: LlmToolkitSummaryGenerator | undefined;
        if (needsSummary) {
          if (!llmConfig) {
            throw new Error("LLM configuration is required for summaries.");
          }
          toolkitSummaryGenerator = new LlmToolkitSummaryGenerator(llmConfig);
        }
        const previousOutputDir = options.forceRegenerate
          ? undefined
          : options.previousOutput ??
            (options.overwriteOutput ? undefined : options.output);
        const previousToolkits = previousOutputDir
          ? runAll
            ? await loadPreviousToolkitsFromDir(
                previousOutputDir,
                options.verbose
              )
            : await loadPreviousToolkitsForProviders(
                previousOutputDir,
                providers ?? [],
                options.verbose
              )
          : undefined;

        // Custom sections source
        const customSectionsSource = options.customSections
          ? createCustomSectionsFileSource(options.customSections)
          : createEmptyCustomSectionsSource();

        spinner.succeed("Data sources initialized");

        if (options.overwriteOutput) {
          spinner.start("Clearing output directory...");
          await clearOutputDir(options.output, options.verbose);
          spinner.succeed("Output directory cleared");
        }

        // Track progress for --all mode
        const completedToolkits: string[] = [];
        const onToolkitProgress = (
          toolkitId: string,
          status: "start" | "done"
        ) => {
          if (status === "start") {
            spinner.text = `Processing ${toolkitId}...`;
          } else {
            completedToolkits.push(toolkitId);
            spinner.text = `Processed ${completedToolkits.length} toolkit(s) (latest: ${toolkitId})`;
          }
        };

        // Create merger using unified source
        const merger = createDataMerger({
          toolkitDataSource,
          customSectionsSource,
          ...(toolExampleGenerator ? { toolExampleGenerator } : {}),
          ...(toolkitSummaryGenerator ? { toolkitSummaryGenerator } : {}),
          ...(previousToolkits ? { previousToolkits } : {}),
          ...(options.llmConcurrency ? { llmConcurrency: options.llmConcurrency } : {}),
          ...(options.toolkitConcurrency ? { toolkitConcurrency: options.toolkitConcurrency } : {}),
          ...(runAll ? { onToolkitProgress } : {}),
        });

        // Create generator
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
          indexSource: options.indexFromOutput ? "output" : "current",
        });

        // Process toolkits
        if (runAll) {
          spinner.start("Processing toolkits...");
        }
        const allResults = runAll
          ? await merger.mergeAllToolkits()
          : await processProviders(
              providers ?? [],
              merger,
              spinner,
              options.verbose
            );
        if (runAll) {
          spinner.succeed(`Processed ${allResults.length} toolkit(s)`);
        }

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

        if (options.verifyOutput) {
          spinner.start("Verifying output...");
          const verification = await verifyOutputDir(resolve(options.output));
          if (!verification.valid) {
            spinner.fail("Output verification failed.");
            for (const error of verification.errors) {
              console.log(chalk.red(`  - ${error}`));
            }
            process.exit(1);
          }
          spinner.succeed("Output verified");
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
  .option("-o, --output <dir>", "Output directory", getDefaultOutputDir())
  .option("--mock-data-dir <dir>", "Path to mock data directory")
  .option("--metadata-file <file>", "Path to metadata JSON file")
  .option("--engine-api-url <url>", "Engine API base URL")
  .option("--engine-api-key <key>", "Engine API key")
  .option("--engine-page-size <number>", "Engine API page size", (value) =>
    Number.parseInt(value, 10)
  )
  .option("--previous-output <dir>", "Path to previous output directory")
  .option("--force-regenerate", "Regenerate all examples and summary", false)
  .option(
    "--overwrite-output",
    "Delete output directory before writing new JSON"
  )
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
  .option(
    "--llm-concurrency <number>",
    "Max concurrent LLM calls per toolkit (default: 5)",
    (value) => Number.parseInt(value, 10)
  )
  .option(
    "--toolkit-concurrency <number>",
    "Max concurrent toolkit processing (default: 3)",
    (value) => Number.parseInt(value, 10)
  )
  .option(
    "--no-index-from-output",
    "Do not rebuild index from output directory"
  )
  .option("--skip-examples", "Skip LLM example generation", false)
  .option("--skip-summary", "Skip LLM summary generation", false)
  .option("--no-verify-output", "Skip output verification")
  .option("--custom-sections <file>", "Path to custom sections JSON")
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      output: string;
      mockDataDir?: string;
      metadataFile?: string;
      engineApiUrl?: string;
      engineApiKey?: string;
      enginePageSize?: number;
      previousOutput?: string;
      forceRegenerate: boolean;
      overwriteOutput?: boolean;
      llmProvider?: string;
      llmModel?: string;
      llmApiKey?: string;
      llmBaseUrl?: string;
      llmTemperature?: number;
      llmMaxTokens?: number;
      llmSystemPrompt?: string;
      llmConcurrency?: number;
      toolkitConcurrency?: number;
      indexFromOutput: boolean;
      skipExamples: boolean;
      skipSummary: boolean;
      verifyOutput: boolean;
      customSections?: string;
      verbose: boolean;
    }) => {
      const spinner = ora("Initializing...").start();

      try {
        const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
        const metadataFile =
          options.metadataFile ?? join(mockDataDir, "metadata.json");
        const metadataSource = createMockMetadataSource(metadataFile);
        const engineConfig = resolveEngineConfig(options);
        const toolkitDataSource = engineConfig
          ? createEngineToolkitDataSource({
              engine: engineConfig,
              metadataSource,
            })
          : createMockToolkitDataSource({
              dataDir: mockDataDir,
            });
        const needsExamples = !options.skipExamples;
        const needsSummary = !options.skipSummary;
        const needsLlm = needsExamples || needsSummary;

        const llmConfig = needsLlm ? resolveLlmConfig(options) : null;

        let toolExampleGenerator: LlmToolExampleGenerator | undefined;
        if (needsExamples) {
          if (!llmConfig) {
            throw new Error("LLM configuration is required for examples.");
          }
          toolExampleGenerator = new LlmToolExampleGenerator(llmConfig);
        }

        let toolkitSummaryGenerator: LlmToolkitSummaryGenerator | undefined;
        if (needsSummary) {
          if (!llmConfig) {
            throw new Error("LLM configuration is required for summaries.");
          }
          toolkitSummaryGenerator = new LlmToolkitSummaryGenerator(llmConfig);
        }
        const previousOutputDir = options.forceRegenerate
          ? undefined
          : options.previousOutput ??
            (options.overwriteOutput ? undefined : options.output);
        const previousToolkits = previousOutputDir
          ? await loadPreviousToolkitsFromDir(
              previousOutputDir,
              options.verbose
            )
          : undefined;

        const customSectionsSource = options.customSections
          ? createCustomSectionsFileSource(options.customSections)
          : createEmptyCustomSectionsSource();

        spinner.succeed("Data sources initialized");

        if (options.overwriteOutput) {
          spinner.start("Clearing output directory...");
          await clearOutputDir(options.output, options.verbose);
          spinner.succeed("Output directory cleared");
        }

        // Track progress
        const completedToolkits: string[] = [];
        const onToolkitProgress = (
          toolkitId: string,
          status: "start" | "done"
        ) => {
          if (status === "start") {
            spinner.text = `Processing ${toolkitId}...`;
          } else {
            completedToolkits.push(toolkitId);
            spinner.text = `Processed ${completedToolkits.length} toolkit(s) (latest: ${toolkitId})`;
          }
        };

        // Create merger using unified source
        const merger = createDataMerger({
          toolkitDataSource,
          customSectionsSource,
          ...(toolExampleGenerator ? { toolExampleGenerator } : {}),
          ...(toolkitSummaryGenerator ? { toolkitSummaryGenerator } : {}),
          ...(previousToolkits ? { previousToolkits } : {}),
          ...(options.llmConcurrency ? { llmConcurrency: options.llmConcurrency } : {}),
          ...(options.toolkitConcurrency ? { toolkitConcurrency: options.toolkitConcurrency } : {}),
          onToolkitProgress,
        });

        spinner.start("Processing toolkits...");
        const results = await merger.mergeAllToolkits();
        spinner.succeed(`Processed ${results.length} toolkit(s)`);

        // Generate output
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
          indexSource: options.indexFromOutput ? "output" : "current",
        });

        spinner.start("Writing output files...");
        const toolkits = results.map((r) => r.toolkit);
        const genResult = await generator.generateAll(toolkits);

        if (genResult.errors.length > 0) {
          spinner.warn(`Written with errors: ${genResult.errors.join(", ")}`);
        } else {
          spinner.succeed(`Written ${genResult.filesWritten.length} file(s)`);
        }

        if (options.verifyOutput) {
          spinner.start("Verifying output...");
          const verification = await verifyOutputDir(resolve(options.output));
          if (!verification.valid) {
            spinner.fail("Output verification failed.");
            for (const error of verification.errors) {
              console.log(chalk.red(`  - ${error}`));
            }
            process.exit(1);
          }
          spinner.succeed("Output verified");
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

program
  .command("verify-output")
  .description("Verify output directory structure and schema")
  .option("-o, --output <dir>", "Output directory", getDefaultOutputDir())
  .action(async (options: { output: string }) => {
    try {
      const verification = await verifyOutputDir(resolve(options.output));
      if (!verification.valid) {
        console.log(chalk.red("Output verification failed:"));
        for (const error of verification.errors) {
          console.log(chalk.red(`  - ${error}`));
        }
        process.exit(1);
      }

      console.log(chalk.green("✓ Output verified"));
    } catch (error) {
      console.log(chalk.red(`Error: ${error}`));
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse();
