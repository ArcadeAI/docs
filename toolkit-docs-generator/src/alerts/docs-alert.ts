/**
 * Slack message for a generation run that recovered from toolkit failures.
 *
 * The text is built here rather than in workflow YAML so that it is testable,
 * and so it can carry the two things the report already knows but a bare list
 * of toolkit names cannot say: why the toolkit failed, and what to do about it.
 *
 * `omitted` outranks `preserved` throughout. A preserved toolkit still serves
 * yesterday's page and nobody notices; an omitted toolkit has no page at all.
 */
import type {
  FailedToolsReport,
  RecoveredToolkitEntry,
} from "../utils/run-logs";

export interface SlackMessage {
  readonly text: string;
}

export interface DocsAlertLinks {
  /** Deep link to the job log, so the reader lands on the error, not a summary. */
  readonly logUrl?: string;
}

const MISSING_METADATA_REASON = "missing design-system metadata";
const CURATION_REASON_PREFIX = "Curation";

const suggestFix = (entry: RecoveredToolkitEntry): string => {
  if (entry.reason.includes(MISSING_METADATA_REASON)) {
    return `Add a \`${entry.id}\` entry to \`@arcadeai/design-system\` and bump the pin in this repo, or add it to \`skip-toolkits.txt\` if it is not meant to be public yet.`;
  }
  if (entry.reason.startsWith(CURATION_REASON_PREFIX)) {
    return `Fix the curation source under \`toolkit-docs-generator/curation/${entry.id.toLowerCase()}/\`.`;
  }
  return "Open the failing step for the full error.";
};

const formatEntry = (entry: RecoveredToolkitEntry): string =>
  [`• *${entry.id}* — ${entry.reason}`, `    Fix: ${suggestFix(entry)}`].join(
    "\n"
  );

const formatSection = (
  heading: string,
  entries: readonly RecoveredToolkitEntry[]
): string[] =>
  entries.length === 0
    ? []
    : [`*${heading}*`, entries.map(formatEntry).join("\n")];

const formatHeadline = (
  omitted: readonly RecoveredToolkitEntry[],
  preserved: readonly RecoveredToolkitEntry[]
): string => {
  if (omitted.length === 1) {
    return `:no_entry: ${omitted[0]?.id} is missing from the docs site`;
  }
  if (omitted.length > 1) {
    return `:no_entry: ${omitted.length} toolkits are missing from the docs site`;
  }
  if (preserved.length === 1) {
    return `:warning: ${preserved[0]?.id} kept its previous docs`;
  }
  return `:warning: ${preserved.length} toolkits kept their previous docs`;
};

/**
 * Build the Slack payload for a finished run, or null when the run had nothing
 * worth interrupting anyone about.
 */
export const buildDocsAlert = (
  report: Pick<FailedToolsReport, "recoveredToolkits">,
  links: DocsAlertLinks = {}
): SlackMessage | null => {
  const recovered = report.recoveredToolkits ?? [];
  if (recovered.length === 0) {
    return null;
  }

  const omitted = recovered.filter((entry) => entry.recovery === "omitted");
  const preserved = recovered.filter((entry) => entry.recovery === "preserved");

  const blocks = [
    formatHeadline(omitted, preserved),
    ...formatSection("Missing entirely (no previous output)", omitted),
    ...formatSection("Still serving the previous docs", preserved),
  ];

  if (links.logUrl) {
    blocks.push(
      `<${links.logUrl}|Open the failing step> · full detail in the \`failed-tools\` artifact on the run`
    );
  }

  return { text: blocks.join("\n\n") };
};
