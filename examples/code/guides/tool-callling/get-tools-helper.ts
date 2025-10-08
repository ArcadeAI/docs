import Arcade from "@arcadeai/arcadejs";

export type ToolDefinition = Record<string, unknown>;

export type ArcadeClient = InstanceType<typeof Arcade>;

export type GetToolDefinitionsParams = {
  client?: ArcadeClient;
  tools?: string[];
  toolkits?: string[];
  raiseOnEmpty: boolean;
  limit?: number;
  offset?: number;
};
/**
 * Retrieve tool definitions from the Arcade client, accounting for pagination.
 *
 * - If `tools` are provided, fetch each by name via `client.tools.get`.
 * - If `toolkits` are provided, fetch lists via `client.tools.list` and collect `items`.
 * - If neither `tools` nor `toolkits` are provided and `raiseOnEmpty` is true, throw an error.
 */
export async function getToolDefinitions(
  params: GetToolDefinitionsParams,
): Promise<ToolDefinition[]> {
  const {
    client,
    tools,
    toolkits,
    raiseOnEmpty = true,
    limit,
    offset,
  } = params;
  const arcade = client ?? new Arcade();
  const allTools: ToolDefinition[] = [];

  const noTools = !tools || tools.length === 0;
  const noToolkits = !toolkits || toolkits.length === 0;

  if (noTools && noToolkits) {
    if (raiseOnEmpty) {
      throw new Error(
        "No tools or toolkits provided to retrieve tool definitions.",
      );
    }
    return [];
  }

  // Fetch specific tools by name
  if (tools && tools.length > 0) {
    const fetched = await Promise.all(
      tools.map((toolName) => arcade.tools.get(toolName)),
    );
    allTools.push(...fetched);
  }

  // Fetch tools from provided toolkits (respecting optional pagination)
  if (toolkits && toolkits.length > 0) {
    for (const tk of toolkits) {
      const response: any = await arcade.tools.list({
        toolkit: tk,
        ...(limit !== undefined ? { limit } : {}),
        ...(offset !== undefined ? { offset } : {}),
      });

      const items: ToolDefinition[] = Array.isArray(response?.items)
        ? response.items
        : [];
      allTools.push(...items);
    }
  }

  return allTools;
}

export default getToolDefinitions;

getToolDefinitions({
  client: new Arcade(),
});
