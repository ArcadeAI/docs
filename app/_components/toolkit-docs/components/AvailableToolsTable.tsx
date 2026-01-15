"use client";

import TableOfContents from "../../table-of-contents";
import type { AvailableToolsTableProps, SecretType } from "../types";

export function toToolAnchorId(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-").replace(".", "");
}

export function buildToolsTableData(
  tools: AvailableToolsTableProps["tools"],
  options?: Pick<
    AvailableToolsTableProps,
    "secretsDisplay" | "secretTypeLabels" | "secretTypeDocsBaseUrl"
  >
): string[][] {
  const secretTypeLabels: Record<SecretType, string> = {
    api_key: "API key",
    token: "Token",
    client_secret: "Client secret",
    webhook_secret: "Webhook secret",
    private_key: "Private key",
    password: "Password",
    unknown: "Unknown",
    ...options?.secretTypeLabels,
  };

  const normalizeBaseUrl = (baseUrl: string | undefined): string | undefined => {
    if (!baseUrl) {
      return undefined;
    }
    return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  };

  const baseUrl = normalizeBaseUrl(options?.secretTypeDocsBaseUrl);

  const formatSecretTypeLabel = (type: SecretType): string => {
    const label = secretTypeLabels[type] ?? "Unknown";
    return baseUrl ? `${label} (${baseUrl}/${type})` : label;
  };

  const formatSecretSummary = (
    tool: AvailableToolsTableProps["tools"][number]
  ): string => {
    const displayMode = options?.secretsDisplay ?? "summary";
    const secretsInfo = tool.secretsInfo ?? [];
    const secrets = tool.secrets ?? [];

    if (displayMode === "names") {
      return secrets.length === 0 ? "None" : secrets.join(", ");
    }

    if (
      displayMode === "types" ||
      (displayMode === "summary" && secretsInfo.length > 0)
    ) {
      const uniqueTypes = Array.from(
        new Set(secretsInfo.map((secret) => secret.type))
      );
      return uniqueTypes.length === 0
        ? "None"
        : uniqueTypes.map((type) => formatSecretTypeLabel(type)).join(", ");
    }

    return secrets.length === 0 ? "None" : secrets.join(", ");
  };

  return tools.map((tool) => [
    tool.qualifiedName,
    tool.description ?? "No description provided.",
    formatSecretSummary(tool),
  ]);
}

/**
 * AvailableToolsTable
 *
 * Renders a table of tools with clickable rows.
 */
export function AvailableToolsTable({
  tools,
  secretsColumnLabel = "Secrets",
  secretsDisplay = "summary",
  secretTypeLabels,
  secretTypeDocsBaseUrl,
}: AvailableToolsTableProps) {
  if (!tools || tools.length === 0) {
    return (
      <p className="my-3 text-muted-foreground text-sm">
        No tools available.
      </p>
    );
  }

  return (
    <TableOfContents
      data={buildToolsTableData(tools, {
        secretsDisplay,
        secretTypeLabels,
        secretTypeDocsBaseUrl,
      })}
      headers={["Tool name", "Description", secretsColumnLabel]}
    />
  );
}

export default AvailableToolsTable;
