"use client";

import { DocumentationChunkRenderer, hasChunksAt } from "./DocumentationChunkRenderer";
import { DynamicCodeBlock } from "./DynamicCodeBlock";
import { ParametersTable } from "./ParametersTable";
import { ScopesDisplay } from "./ScopesDisplay";
import { toToolAnchorId } from "./AvailableToolsTable";
import type { ToolSectionProps } from "../types";

export function shouldRenderDefaultSection(
  chunks: ToolSectionProps["tool"]["documentationChunks"],
  location: "description" | "parameters" | "auth" | "secrets" | "output"
): boolean {
  return !hasChunksAt(chunks, location, "replace");
}

/**
 * ToolSection
 *
 * Renders a single tool section with parameters, scopes, secrets, output, and example.
 */
export function ToolSection({ tool }: ToolSectionProps) {
  const anchorId = toToolAnchorId(tool.qualifiedName);
  const scopes = tool.auth?.scopes ?? [];
  const secretsInfo = tool.secretsInfo ?? [];

  const showDescription = shouldRenderDefaultSection(
    tool.documentationChunks,
    "description"
  );
  const showParameters = shouldRenderDefaultSection(
    tool.documentationChunks,
    "parameters"
  );
  const showAuth = shouldRenderDefaultSection(tool.documentationChunks, "auth");
  const showSecrets = shouldRenderDefaultSection(
    tool.documentationChunks,
    "secrets"
  );
  const showOutput = shouldRenderDefaultSection(tool.documentationChunks, "output");

  return (
    <section className="mt-8" id={anchorId}>
      <h3 className="mb-2 text-xl font-semibold">{tool.qualifiedName}</h3>

      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="before"
      />
      {showDescription && (
        <p className="text-sm text-text-color">
          {tool.description ?? "No description provided."}
        </p>
      )}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="after"
      />

      <h4 className="mt-6 font-semibold text-base">Parameters</h4>
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="parameters"
        position="before"
      />
      {showParameters && <ParametersTable parameters={tool.parameters} />}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="parameters"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="parameters"
        position="after"
      />

      <h4 className="mt-6 font-semibold text-base">Scopes</h4>
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="auth"
        position="before"
      />
      {showAuth && <ScopesDisplay scopes={scopes} variant="callout" />}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="auth"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="auth"
        position="after"
      />

      <h4 className="mt-6 font-semibold text-base">Secrets</h4>
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="secrets"
        position="before"
      />
      {showSecrets && (
        <div className="mt-2 text-sm text-text-color">
          {tool.secrets.length === 0 ? (
            <p>No secrets required.</p>
          ) : (
            <ul className="ml-4 list-disc space-y-1">
              {secretsInfo.length > 0
                ? secretsInfo.map((secret) => (
                    <li key={secret.name}>
                      <code>{secret.name}</code>
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({secret.type})
                      </span>
                    </li>
                  ))
                : tool.secrets.map((secret) => (
                    <li key={secret}>
                      <code>{secret}</code>
                    </li>
                  ))}
            </ul>
          )}
        </div>
      )}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="secrets"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="secrets"
        position="after"
      />

      <h4 className="mt-6 font-semibold text-base">Output</h4>
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="output"
        position="before"
      />
      {showOutput && (
        <div className="mt-2 text-sm text-text-color">
          {tool.output ? (
            <>
              <p>
                <strong>Type:</strong> <code>{tool.output.type}</code>
              </p>
              {tool.output.description && (
                <p className="mt-1">{tool.output.description}</p>
              )}
            </>
          ) : (
            <p>No output schema provided.</p>
          )}
        </div>
      )}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="output"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="output"
        position="after"
      />

      <h4 className="mt-6 font-semibold text-base">Example</h4>
      {tool.codeExample ? (
        <DynamicCodeBlock codeExample={tool.codeExample} />
      ) : (
        <p className="text-sm text-muted-foreground">
          No example available for this tool.
        </p>
      )}
    </section>
  );
}

export default ToolSection;
