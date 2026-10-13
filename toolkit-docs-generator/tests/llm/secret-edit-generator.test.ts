import { describe, expect, it, vi } from "vitest";
import type { LlmClient } from "../../src/llm/client";
import { LlmSecretEditGenerator } from "../../src/llm/secret-edit-generator";

const fakeClient = (response: string): LlmClient => ({
  generateText: vi.fn(async () => response),
  provider: "anthropic",
});

describe("LlmSecretEditGenerator.cleanupStaleReferences", () => {
  it("skips the LLM call when no secrets were removed", async () => {
    const client = fakeClient("unused");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "original",
      currentSecrets: ["KEEP"],
      kind: "summary",
      removedSecrets: [],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("original");
    expect(client.generateText).not.toHaveBeenCalled();
  });

  it("strips an optional code fence from the response", async () => {
    const client = fakeClient("```markdown\nedited content\n```");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "mentions OLD",
      currentSecrets: ["KEEP"],
      kind: "summary",
      removedSecrets: ["OLD"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("edited content");
  });

  it("preserves inner fenced code blocks when unwrapping the outer fence", async () => {
    // The LLM may wrap an edited documentation chunk (which itself
    // contains a fenced code block) inside an outer markdown fence. A
    // non-greedy fence regex would stop at the first inner ``` and
    // silently truncate the rest of the content.
    const wrappedEdit = [
      "```markdown",
      "Setup steps:",
      "",
      "```python",
      "arcade.run(tool='Github.CreateIssue')",
      "```",
      "",
      "Further notes follow.",
      "```",
    ].join("\n");
    const client = fakeClient(wrappedEdit);
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "mentions OLD",
      currentSecrets: ["KEEP"],
      kind: "documentation_chunk",
      removedSecrets: ["OLD"],
      toolkitLabel: "GitHub",
    });
    expect(out).toContain("```python");
    expect(out).toContain("Further notes follow.");
  });

  it("leaves non-wrapped content untouched (no outer fence)", async () => {
    // Response has inner fenced blocks but no outer fence — must pass
    // through verbatim, not partially matched.
    const response = "No wrapper.\n\n```js\nconsole.log(1);\n```\nTail text.";
    const client = fakeClient(response);
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "mentions OLD",
      currentSecrets: ["KEEP"],
      kind: "documentation_chunk",
      removedSecrets: ["OLD"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe(response);
  });

  it("does not strip a non-markdown language fence (e.g. ```python)", async () => {
    // A documentation chunk that IS a code block must survive the fence
    // strip. Only plain ``` or ```markdown/md/text qualifies as a
    // wrapper; a ```python block is the content itself.
    const response = "```python\nimport arcade\narcade.run()\n```";
    const client = fakeClient(response);
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "mentions OLD",
      currentSecrets: ["KEEP"],
      kind: "documentation_chunk",
      removedSecrets: ["OLD"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe(response);
  });

  it("does not strip a bash fence either", async () => {
    const response = "```bash\narcade deploy --env prod\n```";
    const client = fakeClient(response);
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.cleanupStaleReferences({
      content: "mentions OLD",
      currentSecrets: ["KEEP"],
      kind: "documentation_chunk",
      removedSecrets: ["OLD"],
      toolkitLabel: "GitHub",
    });
    expect(out).toBe(response);
  });

  it("passes the removed and current secrets into the prompt", async () => {
    const client = fakeClient("ok");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    await editor.cleanupStaleReferences({
      content: "Mentions OLD_TOKEN in a row.",
      currentSecrets: ["KEEP_URL"],
      kind: "documentation_chunk",
      removedSecrets: ["OLD_TOKEN"],
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
        content: "mentions OLD",
        currentSecrets: [],
        kind: "summary",
        removedSecrets: ["OLD"],
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
      currentSecrets: ["KEEP"],
      missingSecretNames: [],
      requireConfigLink: false,
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("original");
    expect(client.generateText).not.toHaveBeenCalled();
  });

  it("calls the LLM when a config link is required", async () => {
    const client = fakeClient("edited");
    const editor = new LlmSecretEditGenerator({ client, model: "test" });
    const out = await editor.fillCoverageGaps({
      content: "Summary without a link.",
      currentSecrets: ["KEEP"],
      missingSecretNames: [],
      requireConfigLink: true,
      toolkitLabel: "GitHub",
    });
    expect(out).toBe("edited");
    expect(client.generateText).toHaveBeenCalledTimes(1);
  });
});
