import ReactMarkdown from "react-markdown";

import { AvailableToolsTable } from "./AvailableToolsTable";
import { DocumentationChunkRenderer } from "./DocumentationChunkRenderer";
import { ToolkitHeader } from "./ToolkitHeader";
import { ToolSection } from "./ToolSection";
import type { ToolkitPageProps } from "../types";

/**
 * ToolkitPage
 *
 * Composes the full toolkit documentation page from JSON data.
 */
export function ToolkitPage({ data }: ToolkitPageProps) {
  const tools = data.tools ?? [];

  return (
    <div>
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="header"
        position="before"
      />
      <ToolkitHeader
        id={data.id}
        label={data.label}
        description={data.description}
        metadata={data.metadata}
        auth={data.auth}
        version={data.version}
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="header"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="header"
        position="after"
      />

      {data.summary && (
        <div className="mt-4 text-sm text-text-color">
          <ReactMarkdown>{data.summary}</ReactMarkdown>
        </div>
      )}

      <h2 className="mt-8 text-2xl font-semibold">Available tools</h2>
      <AvailableToolsTable
        tools={tools.map((tool) => ({
          name: tool.name,
          qualifiedName: tool.qualifiedName,
          description: tool.description,
          secrets: tool.secrets,
          secretsInfo: tool.secretsInfo,
        }))}
      />

      {tools.map((tool) => (
        <ToolSection key={tool.qualifiedName} tool={tool} toolkitId={data.id} />
      ))}

      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="footer"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="footer"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="footer"
        position="after"
      />
    </div>
  );
}

export default ToolkitPage;
