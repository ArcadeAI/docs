"use client";

import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { CopyButton } from "../../tabbed-code-block/copy-button";
import type {
  DynamicCodeBlockProps,
  ExampleParameterValue,
  ToolCodeExample,
} from "../types";

const JS_IDENTIFIER_REGEX = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
const INLINE_MAX_LENGTH = 80;

/**
 * Python logo SVG icon
 */
function PythonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <title>Python</title>
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
    </svg>
  );
}

/**
 * TypeScript logo SVG icon
 */
function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <title>TypeScript</title>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
  );
}

type LanguageKey = "python" | "javascript";

const _LANGUAGE_LABELS: Record<LanguageKey, "Python" | "JavaScript"> = {
  python: "Python",
  javascript: "JavaScript",
};

const DEFAULT_LANGUAGES: LanguageKey[] = ["python", "javascript"];

const PLACEHOLDER_VALUES: Record<ExampleParameterValue["type"], unknown> = {
  string: "your_value",
  integer: 123,
  boolean: true,
  array: [],
  object: {},
};

const INDENT_SIZE: Record<LanguageKey, number> = {
  python: 4,
  javascript: 2,
};

function indent(level: number, language: LanguageKey): string {
  return " ".repeat(level * INDENT_SIZE[language]);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date)
  );
}

function formatKey(key: string, language: LanguageKey): string {
  if (language === "python") {
    return JSON.stringify(key);
  }

  const isValidIdentifier = JS_IDENTIFIER_REGEX.test(key);
  return isValidIdentifier ? key : JSON.stringify(key);
}

function serializeNumber(value: number, language: LanguageKey): string {
  if (Number.isFinite(value)) {
    return String(value);
  }
  return language === "python" ? "None" : "null";
}

function serializePrimitive(value: unknown, language: LanguageKey): string {
  if (value === null) {
    return language === "python" ? "None" : "null";
  }

  if (typeof value === "string") {
    return JSON.stringify(value);
  }

  if (typeof value === "number") {
    return serializeNumber(value, language);
  }

  if (typeof value === "boolean") {
    if (language === "python") {
      return value ? "True" : "False";
    }
    return String(value);
  }

  return language === "python" ? "None" : "null";
}

function shouldInline(values: string[]): boolean {
  return (
    values.every((value) => !value.includes("\n")) &&
    values.join(", ").length < INLINE_MAX_LENGTH
  );
}

export function serializeValue(
  value: unknown,
  language: LanguageKey,
  level: number
): string {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }

    const items = value.map((item) =>
      serializeValue(item, language, level + 1)
    );
    if (shouldInline(items)) {
      return `[${items.join(", ")}]`;
    }

    const lines = items.map((item) => `${indent(level + 1, language)}${item}`);
    return `[\n${lines.join(",\n")}\n${indent(level, language)}]`;
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value);
    if (entries.length === 0) {
      return "{}";
    }

    const lines = entries.map(([key, entryValue]) => {
      const formattedKey = formatKey(key, language);
      const formattedValue = serializeValue(entryValue, language, level + 1);
      return `${indent(level + 1, language)}${formattedKey}: ${formattedValue}`;
    });

    return `{\n${lines.join(",\n")}\n${indent(level, language)}}`;
  }

  return serializePrimitive(value, language);
}

export function resolveExampleValue(param: ExampleParameterValue): unknown {
  if (param.value === null || param.value === undefined) {
    return param.required ? PLACEHOLDER_VALUES[param.type] : undefined;
  }

  return param.value;
}

export function buildToolInput(
  parameters: ToolCodeExample["parameters"]
): Record<string, unknown> {
  const entries = Object.entries(parameters)
    .map(([key, param]) => [key, resolveExampleValue(param)] as const)
    .filter(([, value]) => value !== undefined);

  return Object.fromEntries(entries);
}

function buildExecuteArgs(
  language: LanguageKey,
  includeUserId: boolean
): string {
  if (language === "python") {
    const args = [
      "tool_name=TOOL_NAME,",
      "input=tool_input,",
      includeUserId ? "user_id=USER_ID," : null,
    ].filter(Boolean);

    return [
      "response = client.tools.execute(",
      ...args.map((arg) => `${indent(1, language)}${arg}`),
      ")",
    ].join("\n");
  }

  const args = [
    "tool_name: TOOL_NAME,",
    "input: toolInput,",
    includeUserId ? "user_id: USER_ID," : null,
  ].filter(Boolean);

  return [
    "const response = await client.tools.execute({",
    ...args.map((arg) => `${indent(1, language)}${arg}`),
    "});",
  ].join("\n");
}

export function generateJavaScriptExample(
  codeExample: ToolCodeExample
): string {
  const toolInput = buildToolInput(codeExample.parameters);
  const toolInputLiteral = serializeValue(toolInput, "javascript", 0);
  const lines: string[] = [
    'import { Arcade } from "@arcadeai/arcadejs";',
    "",
    "const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable",
    "",
  ];

  if (codeExample.requiresAuth) {
    lines.push('const USER_ID = "{arcade_user_id}";');
  }

  lines.push(`const TOOL_NAME = "${codeExample.toolName}";`, "");

  if (codeExample.requiresAuth) {
    lines.push(
      "const authResponse = await client.tools.authorize({",
      `${indent(1, "javascript")}tool_name: TOOL_NAME,`,
      `${indent(1, "javascript")}user_id: USER_ID,`,
      "});",
      "",
      'if (authResponse.status !== "completed") {',
      `${indent(1, "javascript")}console.log(\`Click this link to authorize: \${authResponse.url}\`);`,
      "}",
      "",
      "await client.auth.waitForCompletion(authResponse);",
      ""
    );
  }

  lines.push(`const toolInput = ${toolInputLiteral};`, "");

  lines.push(buildExecuteArgs("javascript", codeExample.requiresAuth), "");

  lines.push("console.log(response);");

  return lines.join("\n");
}

export function generatePythonExample(codeExample: ToolCodeExample): string {
  const toolInput = buildToolInput(codeExample.parameters);
  const toolInputLiteral = serializeValue(toolInput, "python", 0);
  const lines: string[] = [
    "from arcadepy import Arcade",
    "",
    "client = Arcade()",
    "",
  ];

  if (codeExample.requiresAuth) {
    lines.push('USER_ID = "{arcade_user_id}"');
  }

  lines.push(`TOOL_NAME = "${codeExample.toolName}"`, "");

  if (codeExample.requiresAuth) {
    lines.push(
      "auth_response = client.tools.authorize(",
      `${indent(1, "python")}tool_name=TOOL_NAME,`,
      `${indent(1, "python")}user_id=USER_ID,`,
      ")",
      "",
      'if auth_response.status != "completed":',
      `${indent(1, "python")}print(f"Click this link to authorize: {auth_response.url}")`,
      "",
      "client.auth.wait_for_completion(auth_response)",
      ""
    );
  }

  lines.push(`tool_input = ${toolInputLiteral}`, "");

  lines.push(buildExecuteArgs("python", codeExample.requiresAuth), "");

  lines.push("print(response)");

  return lines.join("\n");
}

/**
 * Code popup modal for displaying examples
 */
function CodePopup({
  code,
  language,
  onClose,
}: {
  code: string;
  language: "python" | "typescript";
  onClose: () => void;
}) {
  const displayName = language === "python" ? "Python" : "TypeScript";
  const Icon = language === "python" ? PythonIcon : TypeScriptIcon;
  const iconColor = language === "python" ? "text-[#3776AB]" : "text-[#3178C6]";

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <button
        aria-label="Close code example"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        type="button"
      />
      <div
        aria-modal="true"
        className="relative z-10 mx-4 max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-neutral-dark-high/60 bg-neutral-dark shadow-2xl"
        role="dialog"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-neutral-dark-high/50 border-b bg-gradient-to-r from-neutral-dark to-neutral-dark/80 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className={`rounded-lg bg-white/10 p-2 ${iconColor}`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg text-text-color">
              {displayName} Example
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton content={code} disabled={!code} />
            <button
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-text-color"
              onClick={onClose}
              title="Close"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Code */}
        <div className="max-h-[calc(85vh-80px)] overflow-auto">
          <SyntaxHighlighter
            customStyle={{
              margin: 0,
              padding: "1.25rem",
              fontSize: "13px",
              lineHeight: "1.5",
              background: "transparent",
            }}
            language={language}
            style={atomDark}
            wrapLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

/**
 * DynamicCodeBlock
 *
 * Generates and renders JavaScript and Python code examples dynamically
 * from a ToolCodeExample configuration.
 */
export function DynamicCodeBlock({
  codeExample,
  languages = DEFAULT_LANGUAGES,
  tabLabel,
}: DynamicCodeBlockProps) {
  const [activePopup, setActivePopup] = useState<
    "python" | "typescript" | null
  >(null);

  const codeByLanguage = useMemo(
    () => ({
      python: generatePythonExample(codeExample),
      typescript: generateJavaScriptExample(codeExample),
    }),
    [codeExample]
  );

  const displayLabel = tabLabel ?? codeExample.tabLabel;

  const showPython = languages.includes("python");
  const showTypeScript = languages.includes("javascript");

  return (
    <div className="my-4">
      {displayLabel && (
        <p className="mb-3 text-muted-foreground text-sm">{displayLabel}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {showPython && (
          <button
            className="group flex items-center gap-2.5 rounded-xl border border-[#3776AB]/30 bg-gradient-to-br from-[#3776AB]/10 to-[#3776AB]/5 px-4 py-2.5 font-medium text-sm text-text-color shadow-sm transition-all hover:border-[#3776AB]/50 hover:from-[#3776AB]/20 hover:to-[#3776AB]/10 hover:shadow-md"
            onClick={() => setActivePopup("python")}
            type="button"
          >
            <div className="rounded-lg bg-[#3776AB]/20 p-1.5 transition-colors group-hover:bg-[#3776AB]/30">
              <PythonIcon className="h-4 w-4 text-[#3776AB]" />
            </div>
            <span>Python example</span>
          </button>
        )}
        {showTypeScript && (
          <button
            className="group flex items-center gap-2.5 rounded-xl border border-[#3178C6]/30 bg-gradient-to-br from-[#3178C6]/10 to-[#3178C6]/5 px-4 py-2.5 font-medium text-sm text-text-color shadow-sm transition-all hover:border-[#3178C6]/50 hover:from-[#3178C6]/20 hover:to-[#3178C6]/10 hover:shadow-md"
            onClick={() => setActivePopup("typescript")}
            type="button"
          >
            <div className="rounded-lg bg-[#3178C6]/20 p-1.5 transition-colors group-hover:bg-[#3178C6]/30">
              <TypeScriptIcon className="h-4 w-4 text-[#3178C6]" />
            </div>
            <span>TypeScript example</span>
          </button>
        )}
      </div>

      {/* Popup Modal */}
      {activePopup && (
        <CodePopup
          code={codeByLanguage[activePopup]}
          language={activePopup}
          onClose={() => setActivePopup(null)}
        />
      )}
    </div>
  );
}

export default DynamicCodeBlock;
