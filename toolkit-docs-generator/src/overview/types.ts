import type { DocumentationChunk, MergedToolkit } from "../types/index.js";

export type ToolkitOverviewInstructions = {
  readonly toolkitId: string;
  readonly label?: string;
  readonly sources?: readonly string[];
  readonly instructions?: string;
};

export type OverviewGenerationMode = "file" | "auto";

export type OverviewGenerationInput = {
  readonly toolkit: MergedToolkit;
  readonly instructions?: ToolkitOverviewInstructions | null;
  readonly previousOverview?: string | null;
  readonly mode: OverviewGenerationMode;
};

export type OverviewGenerationResult = {
  readonly chunk: DocumentationChunk;
  readonly reason?: string;
};

export interface ToolkitOverviewGenerator {
  generate: (
    input: OverviewGenerationInput
  ) => Promise<OverviewGenerationResult | null>;
}
