import {
  type MergedToolkit,
  MergedToolkitAuthSchema,
  MergedToolkitMetadataSchema,
  MergedToolkitSchema,
  type ToolDefinition,
  ToolDefinitionSchema,
} from "../types/index.js";

const DEFAULT_PREVIOUS_TOOLKIT_METADATA = {
  category: "development" as const,
  iconUrl: "",
  isBYOC: false,
  isPro: false,
  type: "arcade" as const,
  docsLink: "",
  isComingSoon: false,
  isHidden: false,
};

const toRecord = (value: unknown): Record<string, unknown> | null =>
  typeof value === "object" && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;

const toStringOrNull = (value: unknown): string | null =>
  typeof value === "string" ? value : null;

const toStringArray = (value: unknown): string[] =>
  Array.isArray(value)
    ? value.flatMap((item) => (typeof item === "string" ? [item] : []))
    : [];

const deriveQualifiedName = (
  raw: Record<string, unknown>,
  fallbackToolkitId: string,
  fallbackIndex: number
): string => {
  const qualifiedName = raw.qualifiedName;
  if (typeof qualifiedName === "string" && qualifiedName.length > 0) {
    return qualifiedName;
  }

  const fullyQualifiedName = raw.fullyQualifiedName;
  if (typeof fullyQualifiedName === "string" && fullyQualifiedName.length > 0) {
    return (
      fullyQualifiedName.split("@")[0] ??
      `${fallbackToolkitId}.Tool${fallbackIndex}`
    );
  }

  const name = raw.name;
  if (typeof name === "string" && name.length > 0) {
    return `${fallbackToolkitId}.${name}`;
  }

  return `${fallbackToolkitId}.Tool${fallbackIndex}`;
};

const deriveVersion = (
  raw: Record<string, unknown>,
  fallbackVersion: string
): string => {
  const fullyQualifiedName = raw.fullyQualifiedName;
  if (
    typeof fullyQualifiedName !== "string" ||
    fullyQualifiedName.length === 0
  ) {
    return fallbackVersion;
  }
  const version = fullyQualifiedName.split("@")[1];
  return version && version.length > 0 ? version : fallbackVersion;
};

const normalizeParameter = (
  value: unknown
): ToolDefinition["parameters"][number] | null => {
  const record = toRecord(value);
  if (!record) return null;

  const name = record.name;
  if (typeof name !== "string" || name.length === 0) {
    return null;
  }

  const enumValues = Array.isArray(record.enum)
    ? toStringArray(record.enum)
    : null;

  return {
    name,
    type: typeof record.type === "string" ? record.type : "string",
    ...(typeof record.innerType === "string"
      ? { innerType: record.innerType }
      : {}),
    required: Boolean(record.required),
    description: toStringOrNull(record.description),
    enum: enumValues,
    inferrable:
      typeof record.inferrable === "boolean" ? record.inferrable : true,
  };
};

const normalizeAuth = (value: unknown): ToolDefinition["auth"] => {
  const record = toRecord(value);
  if (!record) return null;

  const providerType =
    typeof record.providerType === "string"
      ? record.providerType
      : typeof record.provider_type === "string"
        ? record.provider_type
        : null;

  if (!providerType) {
    return null;
  }

  const providerId =
    typeof record.providerId === "string"
      ? record.providerId
      : typeof record.provider_id === "string"
        ? record.provider_id
        : null;

  return {
    providerId,
    providerType,
    scopes: toStringArray(record.scopes),
  };
};

const normalizeOutput = (value: unknown): ToolDefinition["output"] => {
  if (value == null) return null;
  const record = toRecord(value);
  if (!record) return null;

  const outputType =
    typeof record.type === "string"
      ? record.type
      : (() => {
          const valueSchema = toRecord(record.value_schema);
          return valueSchema && typeof valueSchema.val_type === "string"
            ? valueSchema.val_type
            : "unknown";
        })();

  return {
    type: outputType,
    description: toStringOrNull(record.description),
  };
};

const normalizeTool = (
  value: unknown,
  toolkitId: string,
  toolkitVersion: string,
  fallbackIndex: number
): ToolDefinition | null => {
  const record = toRecord(value);
  if (!record) return null;

  const qualifiedName = deriveQualifiedName(record, toolkitId, fallbackIndex);
  const toolName =
    typeof record.name === "string" && record.name.length > 0
      ? record.name
      : (qualifiedName.split(".").at(-1) ?? `Tool${fallbackIndex}`);
  const toolVersion = deriveVersion(record, toolkitVersion);

  const candidate: ToolDefinition = {
    name: toolName,
    qualifiedName,
    fullyQualifiedName:
      typeof record.fullyQualifiedName === "string" &&
      record.fullyQualifiedName.length > 0
        ? record.fullyQualifiedName
        : `${qualifiedName}@${toolVersion}`,
    description: toStringOrNull(record.description),
    toolkitDescription: toStringOrNull(record.toolkitDescription),
    parameters: Array.isArray(record.parameters)
      ? record.parameters.flatMap((parameter) => {
          const normalized = normalizeParameter(parameter);
          return normalized ? [normalized] : [];
        })
      : [],
    auth: normalizeAuth(record.auth),
    secrets: toStringArray(record.secrets),
    output: normalizeOutput(record.output),
  };

  const parsed = ToolDefinitionSchema.safeParse(candidate);
  return parsed.success ? parsed.data : null;
};

const getVersionFromTool = (
  tool: ToolDefinition | undefined
): string | undefined => {
  if (!tool) return;
  const version = tool.fullyQualifiedName.split("@")[1];
  return version && version.length > 0 ? version : undefined;
};

const getNonEmptyString = (value: unknown): string | undefined =>
  typeof value === "string" && value.length > 0 ? value : undefined;

const getFallbackReason = (error: {
  issues: ReadonlyArray<{ path: readonly PropertyKey[]; message: string }>;
  message: string;
}): string => {
  const firstIssue = error.issues[0];
  return firstIssue
    ? `${firstIssue.path.map(String).join(".")}: ${firstIssue.message}`
    : error.message;
};

type FallbackToolsResult = {
  tools: ToolDefinition[];
  droppedToolCount: number;
  droppedParameterCount: number;
};

const normalizeFallbackTools = (
  record: Record<string, unknown>,
  toolkitId: string,
  declaredVersion: string
): FallbackToolsResult => {
  const rawTools = Array.isArray(record.tools) ? record.tools : [];
  let droppedToolCount = 0;
  let droppedParameterCount = 0;

  const tools = rawTools.flatMap((rawTool, index) => {
    const rawRecord = toRecord(rawTool);
    const rawParamCount =
      rawRecord && Array.isArray(rawRecord.parameters)
        ? rawRecord.parameters.length
        : 0;

    const normalized = normalizeTool(
      rawTool,
      toolkitId,
      declaredVersion,
      index + 1
    );
    if (!normalized) {
      droppedToolCount += 1;
      return [];
    }

    droppedParameterCount += rawParamCount - normalized.parameters.length;
    return [normalized];
  });

  return { tools, droppedToolCount, droppedParameterCount };
};

type FallbackToolkitResult = {
  toolkit: MergedToolkit;
  droppedToolCount: number;
  droppedParameterCount: number;
};

const buildFallbackToolkit = (
  record: Record<string, unknown>,
  fallbackId: string
): FallbackToolkitResult => {
  const toolkitId = getNonEmptyString(record.id) ?? fallbackId;
  const label = getNonEmptyString(record.label) ?? toolkitId;
  const description = toStringOrNull(record.description);
  const declaredVersion = getNonEmptyString(record.version) ?? "0.0.0";

  const { tools, droppedToolCount, droppedParameterCount } =
    normalizeFallbackTools(record, toolkitId, declaredVersion);
  const version = getVersionFromTool(tools[0]) ?? declaredVersion;

  const metadataResult = MergedToolkitMetadataSchema.safeParse(record.metadata);
  const authResult = MergedToolkitAuthSchema.safeParse(record.auth);
  const summary =
    typeof record.summary === "string" ? record.summary : undefined;
  const generatedAt =
    typeof record.generatedAt === "string" ? record.generatedAt : undefined;

  return {
    toolkit: {
      id: toolkitId,
      label,
      version,
      description,
      ...(summary ? { summary } : {}),
      metadata: metadataResult.success
        ? metadataResult.data
        : DEFAULT_PREVIOUS_TOOLKIT_METADATA,
      auth: authResult.success ? authResult.data : null,
      tools: tools.map((tool) => ({
        ...tool,
        secretsInfo: [],
        documentationChunks: [],
      })),
      documentationChunks: [],
      customImports: [],
      subPages: [],
      ...(generatedAt ? { generatedAt } : {}),
    },
    droppedToolCount,
    droppedParameterCount,
  };
};

export type PreviousToolkitParseResult = {
  toolkit: MergedToolkit | null;
  usedFallback: boolean;
  reason?: string;
  droppedToolCount?: number;
  droppedParameterCount?: number;
};

export const parsePreviousToolkitForDiff = (
  payload: unknown,
  fallbackId: string
): PreviousToolkitParseResult => {
  const strictResult = MergedToolkitSchema.safeParse(payload);
  if (strictResult.success) {
    return { toolkit: strictResult.data, usedFallback: false };
  }

  const record = toRecord(payload);
  if (!record) {
    return {
      toolkit: null,
      usedFallback: true,
      reason: "Previous output file is not a JSON object",
    };
  }

  const fallbackReason = getFallbackReason(strictResult.error);
  const { toolkit, droppedToolCount, droppedParameterCount } =
    buildFallbackToolkit(record, fallbackId);
  return {
    toolkit,
    usedFallback: true,
    reason: fallbackReason,
    droppedToolCount,
    droppedParameterCount,
  };
};
