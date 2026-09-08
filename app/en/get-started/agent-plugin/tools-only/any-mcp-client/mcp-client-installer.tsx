"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@arcadeai/design-system";
import {
  getMcpClientMeta,
  MCPInstallButton,
  type McpClientId,
} from "@arcadeai/ui-kit/mcp-gateway-connect";
import { useState } from "react";
import {
  AGENT_PLUGIN_ENGINE_PUBLIC_URL,
  AGENT_PLUGIN_GATEWAY_SLUG,
} from "@/lib/agent-plugin";

const INSTALL_CLIENTS = [
  "cursor",
  "vscode",
] as const satisfies readonly McpClientId[];

type InstallClient = (typeof INSTALL_CLIENTS)[number];

function isInstallClient(value: string | null): value is InstallClient {
  return value === "cursor" || value === "vscode";
}

function ClientOption({ clientId }: { clientId: InstallClient }) {
  const client = getMcpClientMeta(clientId);

  return (
    <span className="flex items-center gap-2">
      <span className="flex size-4 shrink-0 items-center justify-center [&>svg]:size-4">
        {client.logo}
      </span>
      {client.name}
    </span>
  );
}

export function MCPClientInstaller() {
  const [selectedClient, setSelectedClient] = useState<InstallClient>("cursor");

  return (
    <div className="space-y-4">
      <Select
        onValueChange={(value) => {
          if (isInstallClient(value)) {
            setSelectedClient(value);
          }
        }}
        value={selectedClient}
      >
        <SelectTrigger className="w-[200px]">
          <ClientOption clientId={selectedClient} />
        </SelectTrigger>
        <SelectContent>
          {INSTALL_CLIENTS.map((clientId) => (
            <SelectItem key={clientId} value={clientId}>
              <ClientOption clientId={clientId} />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <MCPInstallButton
        clientId={selectedClient}
        enginePublicUrl={AGENT_PLUGIN_ENGINE_PUBLIC_URL}
        gatewayName="Arcade"
        gatewaySlug={AGENT_PLUGIN_GATEWAY_SLUG}
      />
    </div>
  );
}
