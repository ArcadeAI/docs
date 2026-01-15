"use client";

import { Button } from "@arcadeai/design-system";
import { ChevronDown } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect, useMemo, useState } from "react";

import { CopyButton } from "../../tabbed-code-block/copy-button";
import { LanguageTabs } from "../../tabbed-code-block/language-tabs";
import type {
  DynamicCodeBlockProps,
  ExampleParameterValue,
  ToolCodeExample,
} from "../types";

type LanguageKey = "python" | "javascript";

const LANGUAGE_LABELS: Record<LanguageKey, "Python" | "JavaScript"> = {
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

  const isValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);
  return isValidIdentifier ? key : JSON.stringify(key);
}

function serializePrimitive(value: unknown, language: LanguageKey): string {
  if (value === null) {
    return language === "python" ? "None" : "null";
  }

  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "number":
      return Number.isFinite(value) ? String(value) : "null";
    case "boolean":
      return language === "python" ? (value ? "True" : "False") : String(value);
    default:
      return language === "python" ? "None" : "null";
  }
}

function shouldInline(values: string[]): boolean {
  return values.every((value) => !value.includes("\n")) && values.join(", ").length < 80;
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

    const items = value.map((item) => serializeValue(item, language, level + 1));
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

function buildExecuteArgs(language: LanguageKey, includeUserId: boolean): string {
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

export function generateJavaScriptExample(codeExample: ToolCodeExample): string {
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
  const lines: string[] = ["from arcadepy import Arcade", "", "client = Arcade()", ""];

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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const languageLabels = useMemo(
    () => languages.map((lang) => LANGUAGE_LABELS[lang]),
    [languages]
  );

  const [currentLanguage, setCurrentLanguage] = useState(
    languageLabels[0] ?? "Python"
  );

  useEffect(() => {
    const updateTheme = () => {
      const html = document.documentElement;
      const hasClassDark = html.classList.contains("dark");
      const hasClassLight = html.classList.contains("light");
      const hasDataThemeDark = html.getAttribute("data-theme") === "dark";
      const hasDataThemeLight = html.getAttribute("data-theme") === "light";
      const systemPrefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

      let isDark: boolean;
      if (hasClassDark || hasDataThemeDark) {
        isDark = true;
      } else if (hasClassLight || hasDataThemeLight) {
        isDark = false;
      } else {
        isDark = systemPrefersDark;
      }

      setIsDarkMode(isDark);
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    mediaQuery?.addEventListener("change", updateTheme);

    return () => {
      observer.disconnect();
      mediaQuery?.removeEventListener("change", updateTheme);
    };
  }, []);

  const codeByLanguage = useMemo(
    () => ({
      Python: generatePythonExample(codeExample),
      JavaScript: generateJavaScriptExample(codeExample),
    }),
    [codeExample]
  );

  const selectedCode = codeByLanguage[currentLanguage as "Python" | "JavaScript"];
  const displayLabel = tabLabel ?? codeExample.tabLabel;

  const syntaxTheme = isDarkMode ? atomDark : oneLight;
  const lowerCaseLanguage = currentLanguage.toLowerCase();

  if (!isExpanded) {
    return (
      <div className="my-4">
        {displayLabel && (
          <p className="text-muted-foreground text-sm">{displayLabel}</p>
        )}
        <Button
          className="mt-2"
          onClick={() => setIsExpanded(true)}
          size="sm"
          variant="outline"
        >
          See Example
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </div>
    );
  }

  return (
    <div className="my-4 space-y-3">
      {displayLabel && (
        <p className="text-muted-foreground text-sm">{displayLabel}</p>
      )}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-muted/20 p-3">
        <div className="flex flex-wrap items-center gap-4">
          {languageLabels.length > 1 && (
            <LanguageTabs
              currentLanguage={currentLanguage}
              languages={languageLabels}
              onSelect={setCurrentLanguage}
            />
          )}
        </div>
        <Button
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(false)}
          size="sm"
          variant="ghost"
        >
          Close
        </Button>
      </div>
      <div className="relative rounded-md border border-muted/80">
        <div className="flex items-center justify-between border-muted border-b bg-muted/5 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-muted-foreground text-xs">
              {lowerCaseLanguage}
            </span>
          </div>
          <CopyButton content={selectedCode} disabled={!selectedCode} />
        </div>
        <div className="relative">
          <SyntaxHighlighter
            customStyle={{
              margin: 0,
              padding: "1rem",
              fontSize: "13px",
              lineHeight: "1.4",
              background: isDarkMode ? "transparent" : "#fafafa",
            }}
            language={lowerCaseLanguage}
            style={syntaxTheme}
            wrapLines={true}
          >
            {selectedCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default DynamicCodeBlock;
