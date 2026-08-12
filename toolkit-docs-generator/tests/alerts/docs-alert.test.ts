import { describe, expect, it } from "vitest";

import { buildDocsAlert } from "../../src/alerts/docs-alert";

const omittedMicrosoftUsers = {
  id: "MicrosoftUsers",
  recovery: "omitted" as const,
  reason: "missing design-system metadata",
};

const preservedGithub = {
  id: "Github",
  recovery: "preserved" as const,
  reason: "Curation for Github targets unknown tool(s): CreateIsue",
};

describe("buildDocsAlert", () => {
  it("stays silent when nothing was preserved or omitted", () => {
    expect(buildDocsAlert({ recoveredToolkits: [] })).toBeNull();
    expect(buildDocsAlert({})).toBeNull();
  });

  it("names the toolkit in the headline when only one is missing", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [omittedMicrosoftUsers],
    });

    expect(message?.text).toContain(
      ":no_entry: MicrosoftUsers is missing from the docs site"
    );
  });

  it("reports the reason, not just the toolkit name", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [omittedMicrosoftUsers],
    });

    expect(message?.text).toContain("missing design-system metadata");
  });

  it("tells the reader how to fix missing design-system metadata", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [omittedMicrosoftUsers],
    });

    expect(message?.text).toContain("`MicrosoftUsers` entry to");
    expect(message?.text).toContain("@arcadeai/design-system");
    expect(message?.text).toContain("skip-toolkits.txt");
  });

  it("points curation failures at the curation directory", () => {
    const message = buildDocsAlert({ recoveredToolkits: [preservedGithub] });

    expect(message?.text).toContain("curation/github/");
  });

  it("falls back to the log for an unrecognized reason", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [
        { id: "Slack", recovery: "preserved", reason: "socket hang up" },
      ],
    });

    expect(message?.text).toContain(
      "Open the failing step for the full error."
    );
  });

  // An omitted toolkit has no page at all; a preserved one still serves
  // yesterday's. Leading with the softer of the two is how the real alert
  // read as "handled, ignore me".
  it("leads with the omitted toolkits when both kinds are present", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [preservedGithub, omittedMicrosoftUsers],
    });
    const text = message?.text ?? "";

    expect(text.startsWith(":no_entry:")).toBe(true);
    expect(text.indexOf("Missing entirely")).toBeLessThan(
      text.indexOf("Still serving the previous docs")
    );
  });

  it("counts toolkits when more than one is missing", () => {
    const message = buildDocsAlert({
      recoveredToolkits: [
        omittedMicrosoftUsers,
        { ...omittedMicrosoftUsers, id: "MicrosoftDynamics" },
      ],
    });

    expect(message?.text).toContain(
      ":no_entry: 2 toolkits are missing from the docs site"
    );
  });

  it("links the job log when one is given, and omits the line when not", () => {
    const withLink = buildDocsAlert(
      { recoveredToolkits: [omittedMicrosoftUsers] },
      { logUrl: "https://github.com/ArcadeAI/docs/actions/runs/1/job/2" }
    );
    const withoutLink = buildDocsAlert({
      recoveredToolkits: [omittedMicrosoftUsers],
    });

    expect(withLink?.text).toContain(
      "<https://github.com/ArcadeAI/docs/actions/runs/1/job/2|Open the failing step>"
    );
    expect(withoutLink?.text).not.toContain("Open the failing step>");
  });
});
