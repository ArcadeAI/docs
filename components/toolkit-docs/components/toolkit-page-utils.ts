export function getSharedServiceDomain(
  tools: ReadonlyArray<{
    metadata?: {
      classification?: {
        serviceDomains?: string[];
      } | null;
    } | null;
  }>
): string | null {
  if (tools.length === 0) {
    return null;
  }

  let sharedDomain: string | null = null;

  for (const tool of tools) {
    const serviceDomains = tool.metadata?.classification?.serviceDomains;
    if (!serviceDomains || serviceDomains.length !== 1) {
      return null;
    }

    const domain = serviceDomains[0];
    if (!domain || typeof domain !== "string") {
      return null;
    }

    if (sharedDomain === null) {
      sharedDomain = domain;
      continue;
    }

    if (sharedDomain !== domain) {
      return null;
    }
  }

  return sharedDomain;
}
