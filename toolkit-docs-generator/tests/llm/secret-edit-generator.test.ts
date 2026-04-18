import { describe, expect, it, vi } from "vitest";
import type { LlmClient } from "../../src/llm/client.js";
import { LlmSecretEditGenerator } from "../../src/llm/secret-edit-generator.js";

const fakeClient = (response: string): LlmClient => ({
  provider: "anthropic",
  generateText: vi.fn(async () => response),
});

describe("LlmSecretEditGenerator.cleanupStaleReferences", () => {
  it("skips the LLM call when no secrets were removed", async () => {
    const client = fakeClient("unused");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      kind: "summary",
      content: "original",
      removedSecrets: [],
      currentSecrets: ["KEEP"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("original");
    expect(client.generateText).not.toHaveBeenCalled();
  });

  it("strips an optional code fence from the response", async () => {
    const client = fakeClient("```markdown\nedited content\n```");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      kind: "summary",
      content: "mentions OLD",
      removedSecrets: ["OLD"],
      currentSecrets: ["KEEP"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("edited content");
  });

  it("passes the removed and current secrets into the prompt", async () => {
    const client = fakeClient("ok");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    await editor.cleanupStaleReferences({
      kind: "documentation_chunk",
      content: "Mentions OLD_TOKEN in a row.",
      removedSecrets: ["OLD_TOKEN"],
      currentSecrets: ["KEEP_URL"],
      toolkitLabel: "GitHub",
    });
    expect(client.generateText).toHaveBeenCalledTimes(1);
    const call = (client.generateText as ReturnType<typeof vi.fn>).mock
      .calls[0]?.[0] as { prompt: string };
    expect(call.prompt).toContain("OLD_TOKEN");
    expect(call.prompt).toContain("KEEP_URL");
    expect(call.prompt).toContain("GitHub");
  });

  it("throws when the LLM response is empty", async () => {
    const client = fakeClient("");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    await expect(
      editor.cleanupStaleReferences({
        kind: "summary",
        content: "mentions OLD",
        removedSecrets: ["OLD"],
        currentSecrets: [],
        toolkitLabel: "GitHub",
      })
    ).rejects.toThrow(/empty/i);
  });
});

describe("LlmSecretEditGenerator.fillCoverageGaps", () => {
  it("skips the LLM call when nothing is missing and no link is required", async () => {
    const client = fakeClient("unused");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.fillCoverageGaps({
      content: "original",
      missingSecretNames: [],
      currentSecrets: ["KEEP"],
      toolkitLabel: "GitHub",
      requireConfigLink: false,
    });
    expect(out).toBe("original");
    expect(client.generateText).not.toHaveBeenCalled();
  });

  it("calls the LLM when a config link is required", async () => {
    const client = fakeClient("edited");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.fillCoverageGaps({
      content: "Summary without a link.",
      missingSecretNames: [],
      currentSecrets: ["KEEP"],
      toolkitLabel: "GitHub",
      requireConfigLink: true,
    });
    expect(out).toBe("edited");
    expect(client.generateText).toHaveBeenCalledTimes(1);
  });
});
