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
import { readdir, readFile, rm } from "fs/promises";
import ora from "ora";
import { join, resolve } from "path";
import {
  createJsonGenerator,
  type VerificationProgress,
  verifyOutputDir,
} from "../generator/index.js";
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
  createArcadeToolkitDataSource,
  createEngineToolkitDataSource,
  createMockToolkitDataSource,
  type IToolkitDataSource,
} from "../sources/toolkit-data-source.js";
import {
  createProgressTracker,
  formatToolkitComplete,
} from "../utils/progress.js";

/**
 * Supported API sources:
 * - "list-tools": Uses /v1/tools endpoint (production Arcade API)
 * - "tool-metadata": Uses /v1/tool_metadata endpoint (Engine API)
 * - "mock": Uses local mock data files
 */
type ApiSource = "list-tools" | "tool-metadata" | "mock";

import {
  type MergedToolkit,
  MergedToolkitSchema,
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
    throw new Error(`Refusing to overwrite output directory: ${resolvedDir}`);
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

const resolveLlmConfig = (
  options: {
    llmProvider?: string;
    llmApiKey?: string;
    llmModel?: string;
    llmBaseUrl?: string;
    llmTemperature?: number;
    llmMaxTokens?: number;
    llmSystemPrompt?: string;
    llmMaxRetries?: number;
  },
  verbose: boolean
): {
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

  const onRetry = verbose
    ? (attempt: number, error: Error, delayMs: number) => {
        console.log(
          chalk.yellow(
            `  ⚠️  LLM call failed (attempt ${attempt}), retrying in ${delayMs}ms: ${error.message}`
          )
        );
      }
    : undefined;

  const client = createLlmClient({
    provider,
    config: {
      apiKey,
      ...(options.llmBaseUrl ? { baseUrl: options.llmBaseUrl } : {}),
      retry: {
        maxRetries: options.llmMaxRetries ?? 3,
        onRetry,
      },
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

const resolveApiSource = (options: {
  apiSource?: string;
  toolMetadataUrl?: string;
  toolMetadataKey?: string;
  listToolsUrl?: string;
  listToolsKey?: string;
}): ApiSource => {
  // Explicit source takes precedence
  if (options.apiSource) {
    const source = options.apiSource.toLowerCase();
    // Support both old and new names for backwards compatibility
    if (source === "list-tools" || source === "arcade") {
      return "list-tools";
    }
    if (source === "tool-metadata" || source === "engine") {
      return "tool-metadata";
    }
    if (source === "mock") {
      return "mock";
    }
    throw new Error(
      `Invalid --api-source "${options.apiSource}". Use "list-tools", "tool-metadata", or "mock".`
    );
  }

  // Auto-detect based on provided credentials
  const hasListToolsKey = !!(
    options.listToolsKey ?? process.env.ARCADE_API_KEY
  );
  const hasToolMetadataKey = !!(
    options.toolMetadataKey ?? process.env.ENGINE_API_KEY
  );
  const hasToolMetadataUrl = !!(
    options.toolMetadataUrl ?? process.env.ENGINE_API_URL
  );

  if (hasListToolsKey) {
    return "list-tools";
  }
  if (hasToolMetadataKey && hasToolMetadataUrl) {
    return "tool-metadata";
  }
  return "mock";
};

interface ToolkitDataSourceOptions {
  apiSource?: string;
  listToolsUrl?: string;
  listToolsKey?: string;
  listToolsPageSize?: number;
  toolMetadataUrl?: string;
  toolMetadataKey?: string;
  toolMetadataPageSize?: number;
}

const resolveListToolsConfig = (options: ToolkitDataSourceOptions) => {
  const baseUrl =
    options.listToolsUrl ??
    process.env.ARCADE_API_URL ??
    "https://api.arcade.dev";
  const apiKey = options.listToolsKey ?? process.env.ARCADE_API_KEY;

  if (!apiKey) {
    return null;
  }

  return {
    baseUrl,
    apiKey,
    ...(options.listToolsPageSize
      ? { pageSize: options.listToolsPageSize }
      : {}),
  };
};

const resolveToolMetadataConfig = (options: ToolkitDataSourceOptions) => {
  const baseUrl = options.toolMetadataUrl ?? process.env.ENGINE_API_URL;
  const apiKey = options.toolMetadataKey ?? process.env.ENGINE_API_KEY;

  if (!(baseUrl && apiKey)) {
    return null;
  }

  return {
    baseUrl,
    apiKey,
    ...(options.toolMetadataPageSize
      ? { pageSize: options.toolMetadataPageSize }
      : {}),
  };
};

const createToolkitDataSourceForApi = (
  apiSource: ApiSource,
  options: ToolkitDataSourceOptions,
  metadataSource: ReturnType<typeof createMockMetadataSource>,
  mockDataDir: string,
  verbose: boolean,
  spinner?: ReturnType<typeof ora>
): IToolkitDataSource => {
  if (apiSource === "list-tools") {
    const config = resolveListToolsConfig(options);
    if (!config) {
      throw new Error(
        "List tools API requires --list-tools-key (or ARCADE_API_KEY environment variable)."
      );
    }
    if (verbose) {
      console.log(chalk.dim(`Using /v1/tools endpoint: ${config.baseUrl}`));
    }
    // Add progress callback for API pagination
    const onProgress = spinner
      ? (fetched: number, total: number) => {
          spinner.text = `Fetching tools from API... ${fetched}/${total}`;
        }
      : undefined;
    return createArcadeToolkitDataSource({
      arcade: { ...config, onProgress },
      metadataSource,
    });
  }

  if (apiSource === "tool-metadata") {
    const config = resolveToolMetadataConfig(options);
    if (!config) {
      throw new Error(
        "Tool metadata API requires --tool-metadata-url and --tool-metadata-key."
      );
    }
    if (verbose) {
      console.log(
        chalk.dim(`Using /v1/tool_metadata endpoint: ${config.baseUrl}`)
      );
    }
    return createEngineToolkitDataSource({
      engine: config,
      metadataSource,
    });
  }

  if (verbose) {
    console.log(chalk.dim(`Using mock data: ${mockDataDir}`));
  }
  return createMockToolkitDataSource({
    dataDir: mockDataDir,
  });
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
  .option(
    "--api-source <source>",
    'API source: "list-tools" (/v1/tools), "tool-metadata" (/v1/tool_metadata), or "mock" (default: auto-detect)'
  )
  .option(
    "--list-tools-url <url>",
    "List tools API URL (default: https://api.arcade.dev)"
  )
  .option(
    "--list-tools-key <key>",
    "List tools API key (or ARCADE_API_KEY env)"
  )
  .option(
    "--list-tools-page-size <number>",
    "List tools API page size",
    (value) => Number.parseInt(value, 10)
  )
  .option("--tool-metadata-url <url>", "Tool metadata API URL")
  .option(
    "--tool-metadata-key <key>",
    "Tool metadata API key (or ENGINE_API_KEY env)"
  )
  .option(
    "--tool-metadata-page-size <number>",
    "Tool metadata API page size",
    (value) => Number.parseInt(value, 10)
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
    "--llm-max-retries <number>",
    "Max LLM retry attempts (default: 3)",
    (value) => Number.parseInt(value, 10)
  )
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
  .option(
    "--resume",
    "Resume from previous run, skipping already-generated toolkits",
    false
  )
  .option(
    "--incremental",
    "Write each toolkit immediately after processing (default when --resume)",
    false
  )
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      providers?: string;
      all: boolean;
      output: string;
      mockDataDir?: string;
      metadataFile?: string;
      apiSource?: string;
      listToolsUrl?: string;
      listToolsKey?: string;
      listToolsPageSize?: number;
      toolMetadataUrl?: string;
      toolMetadataKey?: string;
      toolMetadataPageSize?: number;
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
      llmMaxRetries?: number;
      llmConcurrency?: number;
      toolkitConcurrency?: number;
      indexFromOutput: boolean;
      skipExamples: boolean;
      skipSummary: boolean;
      verifyOutput: boolean;
      customSections?: string;
      resume: boolean;
      incremental: boolean;
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

        if (!(runAll || providers)) {
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

        // Create toolkit data source based on API source
        const apiSource = resolveApiSource(options);
        const toolkitDataSource = createToolkitDataSourceForApi(
          apiSource,
          options,
          metadataSource,
          mockDataDir,
          options.verbose,
          spinner
        );

        const needsExamples = !options.skipExamples;
        const needsSummary = !options.skipSummary;
        const needsLlm = needsExamples || needsSummary;

        const llmConfig = needsLlm
          ? resolveLlmConfig(options, options.verbose)
          : null;

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
          : (options.previousOutput ??
            (options.overwriteOutput ? undefined : options.output));
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

        // Create generator (needed early for resume check)
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
          indexSource: options.indexFromOutput ? "output" : "current",
        });

        // Handle resume mode - check for already completed toolkits
        const useResume = options.resume && !options.overwriteOutput;
        const useIncremental = options.incremental || useResume;
        let skipToolkitIds = new Set<string>();

        if (useResume) {
          spinner.start("Checking for previously completed toolkits...");
          skipToolkitIds = await generator.getCompletedToolkitIds();
          if (skipToolkitIds.size > 0) {
            spinner.succeed(
              `Found ${skipToolkitIds.size} already-completed toolkit(s) to skip`
            );
          } else {
            spinner.succeed("No previously completed toolkits found");
          }
        }

        if (options.overwriteOutput) {
          spinner.start("Clearing output directory...");
          await clearOutputDir(options.output, options.verbose);
          spinner.succeed("Output directory cleared");
        }

        // Track files written incrementally
        const filesWritten: string[] = [];
        const writeErrors: string[] = [];

        // Incremental write callback
        const onToolkitComplete = useIncremental
          ? async (result: MergeResult) => {
              try {
                const filePath = await generator.generateToolkitFile(
                  result.toolkit
                );
                filesWritten.push(filePath);
              } catch (error) {
                writeErrors.push(
                  `Failed to write ${result.toolkit.id}: ${error}`
                );
              }
            }
          : undefined;

        // Track progress for --all mode
        let onToolkitProgress:
          | ((
              toolkitId: string,
              status: "start" | "done",
              toolCount?: number
            ) => void)
          | undefined;

        // Create merger using unified source
        const merger = createDataMerger({
          toolkitDataSource,
          customSectionsSource,
          ...(toolExampleGenerator ? { toolExampleGenerator } : {}),
          ...(toolkitSummaryGenerator ? { toolkitSummaryGenerator } : {}),
          ...(previousToolkits ? { previousToolkits } : {}),
          ...(options.llmConcurrency
            ? { llmConcurrency: options.llmConcurrency }
            : {}),
          ...(options.toolkitConcurrency
            ? { toolkitConcurrency: options.toolkitConcurrency }
            : {}),
          ...(runAll ? { onToolkitProgress } : {}),
          ...(skipToolkitIds.size > 0 ? { skipToolkitIds } : {}),
          ...(onToolkitComplete ? { onToolkitComplete } : {}),
        });

        // Process toolkits
        let allResults: MergeResult[];
        if (runAll) {
          // First, get the toolkit count to set up progress tracking
          spinner.start("Fetching toolkit list...");
          const toolkitList = await toolkitDataSource.fetchAllToolkitsData();
          const totalToolkits = toolkitList.size;
          const toProcess = totalToolkits - skipToolkitIds.size;

          if (toProcess === 0) {
            spinner.succeed(`All ${totalToolkits} toolkit(s) already complete`);
            allResults = [];
          } else {
            spinner.succeed(
              `Found ${totalToolkits} toolkit(s), ${toProcess} to process${skipToolkitIds.size > 0 ? ` (${skipToolkitIds.size} skipped)` : ""}`
            );

            // Set up progress tracker
            const progressTracker = createProgressTracker({
              total: toProcess,
              barWidth: 25,
              onUpdate: (event) => {
                if (options.verbose && event.type === "complete") {
                  console.log(
                    formatToolkitComplete(event.toolkitId, event.toolCount ?? 0)
                  );
                }
              },
            });

            onToolkitProgress = (
              toolkitId: string,
              status: "start" | "done",
              toolCount?: number
            ) => {
              if (status === "start") {
                progressTracker.start(toolkitId);
                spinner.text = progressTracker.getProgressString(toolkitId);
              } else {
                progressTracker.complete(toolkitId, toolCount);
                spinner.text = progressTracker.getProgressString();
              }
            };

            // Re-create merger with the progress callback
            const mergerWithProgress = createDataMerger({
              toolkitDataSource,
              customSectionsSource,
              ...(toolExampleGenerator ? { toolExampleGenerator } : {}),
              ...(toolkitSummaryGenerator ? { toolkitSummaryGenerator } : {}),
              ...(previousToolkits ? { previousToolkits } : {}),
              ...(options.llmConcurrency
                ? { llmConcurrency: options.llmConcurrency }
                : {}),
              ...(options.toolkitConcurrency
                ? { toolkitConcurrency: options.toolkitConcurrency }
                : {}),
              onToolkitProgress,
              ...(skipToolkitIds.size > 0 ? { skipToolkitIds } : {}),
              ...(onToolkitComplete ? { onToolkitComplete } : {}),
            });

            spinner.start(progressTracker.getProgressString());
            allResults = await mergerWithProgress.mergeAllToolkits();

            const summary = progressTracker.getSummary();
            spinner.succeed(
              `Processed ${summary.completed} toolkit(s) with ${summary.totalTools} tools in ${summary.elapsed}`
            );
          }
        } else {
          allResults = await processProviders(
            providers ?? [],
            merger,
            spinner,
            options.verbose
          );
        }

        // Generate output files (batch mode if not incremental)
        if (!useIncremental && allResults.length > 0) {
          spinner.start("Writing output files...");

          const toolkits = allResults.map((r) => r.toolkit);
          const genResult = await generator.generateAll(toolkits);

          filesWritten.push(...genResult.filesWritten);
          writeErrors.push(...genResult.errors);

          if (genResult.errors.length > 0) {
            spinner.warn(`Written with errors: ${genResult.errors.join(", ")}`);
          } else {
            spinner.succeed(`Written ${genResult.filesWritten.length} file(s)`);
          }
        } else if (useIncremental) {
          // Generate index file for incremental mode
          if (allResults.length > 0 || skipToolkitIds.size > 0) {
            spinner.start("Generating index file...");
            try {
              const existingToolkits = await generator.getCompletedToolkitIds();
              const allToolkitIds = new Set([
                ...existingToolkits,
                ...allResults.map((r) => r.toolkit.id.toLowerCase()),
              ]);

              // Load all toolkits for index
              const toolkitsForIndex: MergedToolkit[] = [];
              for (const id of allToolkitIds) {
                const toolkit = await generator.loadToolkitFile(id);
                if (toolkit) {
                  toolkitsForIndex.push(toolkit);
                }
              }

              const genResult = await generator.generateAll(toolkitsForIndex);
              // Only add the index file to filesWritten
              const indexFile = genResult.filesWritten.find((f) =>
                f.endsWith("index.json")
              );
              if (indexFile) {
                filesWritten.push(indexFile);
              }
              spinner.succeed("Index file generated");
            } catch (error) {
              spinner.warn(`Failed to generate index: ${error}`);
            }
          }
        }

        // Print summary
        if (filesWritten.length > 0 || writeErrors.length > 0) {
          console.log(chalk.green("\n✓ Generation complete\n"));
          if (options.verbose) {
            console.log(chalk.dim("Files:"));
            for (const file of filesWritten) {
              console.log(chalk.dim(`  ${file}`));
            }
          } else {
            console.log(chalk.dim(`Written ${filesWritten.length} file(s)`));
          }

          if (writeErrors.length > 0) {
            console.log(chalk.yellow("\nWarnings:"));
            for (const error of writeErrors) {
              console.log(chalk.yellow(`  ${error}`));
            }
          }
        }

        if (options.verifyOutput) {
          spinner.start("Verifying output...");
          const onVerifyProgress = (progress: VerificationProgress) => {
            const phaseLabels = {
              reading: "Reading",
              validating: "Validating",
              "cross-referencing": "Cross-referencing",
            };
            spinner.text = `${phaseLabels[progress.phase]} ${progress.current}/${progress.total}: ${progress.fileName ?? ""}`;
          };
          const verification = await verifyOutputDir(
            resolve(options.output),
            onVerifyProgress
          );
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
  .option(
    "--api-source <source>",
    'API source: "list-tools" (/v1/tools), "tool-metadata" (/v1/tool_metadata), or "mock" (default: auto-detect)'
  )
  .option(
    "--list-tools-url <url>",
    "List tools API URL (default: https://api.arcade.dev)"
  )
  .option(
    "--list-tools-key <key>",
    "List tools API key (or ARCADE_API_KEY env)"
  )
  .option(
    "--list-tools-page-size <number>",
    "List tools API page size",
    (value) => Number.parseInt(value, 10)
  )
  .option("--tool-metadata-url <url>", "Tool metadata API URL")
  .option(
    "--tool-metadata-key <key>",
    "Tool metadata API key (or ENGINE_API_KEY env)"
  )
  .option(
    "--tool-metadata-page-size <number>",
    "Tool metadata API page size",
    (value) => Number.parseInt(value, 10)
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
    "--llm-max-retries <number>",
    "Max LLM retry attempts (default: 3)",
    (value) => Number.parseInt(value, 10)
  )
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
  .option(
    "--resume",
    "Resume from previous run, skipping already-generated toolkits",
    false
  )
  .option(
    "--incremental",
    "Write each toolkit immediately after processing (default when --resume)",
    false
  )
  .option("--verbose", "Enable verbose logging", false)
  .action(
    async (options: {
      output: string;
      mockDataDir?: string;
      metadataFile?: string;
      apiSource?: string;
      listToolsUrl?: string;
      listToolsKey?: string;
      listToolsPageSize?: number;
      toolMetadataUrl?: string;
      toolMetadataKey?: string;
      toolMetadataPageSize?: number;
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
      llmMaxRetries?: number;
      llmConcurrency?: number;
      toolkitConcurrency?: number;
      indexFromOutput: boolean;
      skipExamples: boolean;
      skipSummary: boolean;
      verifyOutput: boolean;
      customSections?: string;
      resume: boolean;
      incremental: boolean;
      verbose: boolean;
    }) => {
      const spinner = ora("Initializing...").start();

      try {
        const mockDataDir = options.mockDataDir ?? getDefaultMockDataDir();
        const metadataFile =
          options.metadataFile ?? join(mockDataDir, "metadata.json");
        const metadataSource = createMockMetadataSource(metadataFile);

        // Create toolkit data source based on API source
        const apiSource = resolveApiSource(options);
        const toolkitDataSource = createToolkitDataSourceForApi(
          apiSource,
          options,
          metadataSource,
          mockDataDir,
          options.verbose,
          spinner
        );

        const needsExamples = !options.skipExamples;
        const needsSummary = !options.skipSummary;
        const needsLlm = needsExamples || needsSummary;

        const llmConfig = needsLlm
          ? resolveLlmConfig(options, options.verbose)
          : null;

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
          : (options.previousOutput ??
            (options.overwriteOutput ? undefined : options.output));
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

        // Create generator (needed early for resume check)
        const generator = createJsonGenerator({
          outputDir: resolve(options.output),
          prettyPrint: true,
          generateIndex: true,
          indexSource: options.indexFromOutput ? "output" : "current",
        });

        // Handle resume mode
        const useResume = options.resume && !options.overwriteOutput;
        const useIncremental = options.incremental || useResume;
        let skipToolkitIds = new Set<string>();

        if (useResume) {
          spinner.start("Checking for previously completed toolkits...");
          skipToolkitIds = await generator.getCompletedToolkitIds();
          if (skipToolkitIds.size > 0) {
            spinner.succeed(
              `Found ${skipToolkitIds.size} already-completed toolkit(s) to skip`
            );
          } else {
            spinner.succeed("No previously completed toolkits found");
          }
        }

        if (options.overwriteOutput) {
          spinner.start("Clearing output directory...");
          await clearOutputDir(options.output, options.verbose);
          spinner.succeed("Output directory cleared");
        }

        // Track files written incrementally
        const filesWritten: string[] = [];
        const writeErrors: string[] = [];

        // Incremental write callback
        const onToolkitComplete = useIncremental
          ? async (result: MergeResult) => {
              try {
                const filePath = await generator.generateToolkitFile(
                  result.toolkit
                );
                filesWritten.push(filePath);
              } catch (error) {
                writeErrors.push(
                  `Failed to write ${result.toolkit.id}: ${error}`
                );
              }
            }
          : undefined;

        // First, get the toolkit count to set up progress tracking
        spinner.start("Fetching toolkit list...");
        const toolkitList = await toolkitDataSource.fetchAllToolkitsData();
        const totalToolkits = toolkitList.size;
        const toProcess = totalToolkits - skipToolkitIds.size;

        if (toProcess === 0) {
          spinner.succeed(`All ${totalToolkits} toolkit(s) already complete`);
        } else {
          spinner.succeed(
            `Found ${totalToolkits} toolkit(s), ${toProcess} to process${skipToolkitIds.size > 0 ? ` (${skipToolkitIds.size} skipped)` : ""}`
          );

          // Set up progress tracker
          const progressTracker = createProgressTracker({
            total: toProcess,
            barWidth: 25,
            onUpdate: (event) => {
              if (options.verbose && event.type === "complete") {
                console.log(
                  formatToolkitComplete(event.toolkitId, event.toolCount ?? 0)
                );
              }
            },
          });

          const onToolkitProgress = (
            toolkitId: string,
            status: "start" | "done",
            toolCount?: number
          ) => {
            if (status === "start") {
              progressTracker.start(toolkitId);
              spinner.text = progressTracker.getProgressString(toolkitId);
            } else {
              progressTracker.complete(toolkitId, toolCount);
              spinner.text = progressTracker.getProgressString();
            }
          };

          // Create merger using unified source
          const merger = createDataMerger({
            toolkitDataSource,
            customSectionsSource,
            ...(toolExampleGenerator ? { toolExampleGenerator } : {}),
            ...(toolkitSummaryGenerator ? { toolkitSummaryGenerator } : {}),
            ...(previousToolkits ? { previousToolkits } : {}),
            ...(options.llmConcurrency
              ? { llmConcurrency: options.llmConcurrency }
              : {}),
            ...(options.toolkitConcurrency
              ? { toolkitConcurrency: options.toolkitConcurrency }
              : {}),
            onToolkitProgress,
            ...(skipToolkitIds.size > 0 ? { skipToolkitIds } : {}),
            ...(onToolkitComplete ? { onToolkitComplete } : {}),
          });

          spinner.start(progressTracker.getProgressString());
          const results = await merger.mergeAllToolkits();
          const summary = progressTracker.getSummary();
          spinner.succeed(
            `Processed ${summary.completed} toolkit(s) with ${summary.totalTools} tools in ${summary.elapsed}`
          );

          // Generate output (batch mode if not incremental)
          if (!useIncremental && results.length > 0) {
            spinner.start("Writing output files...");
            const toolkits = results.map((r) => r.toolkit);
            const genResult = await generator.generateAll(toolkits);

            filesWritten.push(...genResult.filesWritten);
            writeErrors.push(...genResult.errors);

            if (genResult.errors.length > 0) {
              spinner.warn(
                `Written with errors: ${genResult.errors.join(", ")}`
              );
            } else {
              spinner.succeed(
                `Written ${genResult.filesWritten.length} file(s)`
              );
            }
          } else if (useIncremental) {
            // Generate index file for incremental mode
            spinner.start("Generating index file...");
            try {
              const existingToolkits = await generator.getCompletedToolkitIds();
              const allToolkitIds = new Set([
                ...existingToolkits,
                ...results.map((r) => r.toolkit.id.toLowerCase()),
              ]);

              const toolkitsForIndex: MergedToolkit[] = [];
              for (const id of allToolkitIds) {
                const toolkit = await generator.loadToolkitFile(id);
                if (toolkit) {
                  toolkitsForIndex.push(toolkit);
                }
              }

              const genResult = await generator.generateAll(toolkitsForIndex);
              const indexFile = genResult.filesWritten.find((f) =>
                f.endsWith("index.json")
              );
              if (indexFile) {
                filesWritten.push(indexFile);
              }
              spinner.succeed("Index file generated");
            } catch (error) {
              spinner.warn(`Failed to generate index: ${error}`);
            }
          }
        }

        if (options.verifyOutput) {
          spinner.start("Verifying output...");
          const onVerifyProgress = (progress: VerificationProgress) => {
            const phaseLabels = {
              reading: "Reading",
              validating: "Validating",
              "cross-referencing": "Cross-referencing",
            };
            spinner.text = `${phaseLabels[progress.phase]} ${progress.current}/${progress.total}: ${progress.fileName ?? ""}`;
          };
          const verification = await verifyOutputDir(
            resolve(options.output),
            onVerifyProgress
          );
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
        if (filesWritten.length > 0) {
          console.log(chalk.dim(`Written ${filesWritten.length} file(s)`));
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
  .option("--verbose", "Show detailed progress", false)
  .action(async (options: { output: string; verbose: boolean }) => {
    const spinner = ora("Verifying output...").start();
    try {
      const onVerifyProgress = (progress: VerificationProgress) => {
        const phaseLabels = {
          reading: "Reading",
          validating: "Validating",
          "cross-referencing": "Cross-referencing",
        };
        spinner.text = `${phaseLabels[progress.phase]} ${progress.current}/${progress.total}: ${progress.fileName ?? ""}`;
      };
      const verification = await verifyOutputDir(
        resolve(options.output),
        onVerifyProgress
      );
      if (!verification.valid) {
        spinner.fail("Output verification failed:");
        for (const error of verification.errors) {
          console.log(chalk.red(`  - ${error}`));
        }
        process.exit(1);
      }

      spinner.succeed("Output verified");
    } catch (error) {
      spinner.fail(`Error: ${error}`);
      process.exit(1);
    }
  });

// Parse command line arguments
program.parse();
