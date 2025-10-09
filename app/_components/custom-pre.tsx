"use client";

import { Copy, FileText, Terminal } from "lucide-react";
import { Pre } from "nextra/components";
import type { ReactNode } from "react";
import React from "react";

type CustomPreProps = {
  children?: React.ReactNode;
  className?: string;
  "data-language"?: string;
  [key: string]: unknown;
};

const languageDisplayNames: Record<string, string> = {
  js: "JavaScript",
  javascript: "JavaScript",
  ts: "TypeScript",
  typescript: "TypeScript",
  py: "Python",
  python: "Python",
  java: "Java",
  cpp: "C++",
  c: "C",
  go: "Go",
  rust: "Rust",
  php: "PHP",
  rb: "Ruby",
  ruby: "Ruby",
  sql: "SQL",
  json: "JSON",
  yaml: "YAML",
  yml: "YAML",
  xml: "XML",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  sass: "Sass",
  jsx: "JSX",
  tsx: "TSX",
  md: "Markdown",
  markdown: "Markdown",
  toml: "TOML",
};

const getLanguageDisplayName = (lang: string): string =>
  languageDisplayNames[lang.toLowerCase()] || lang.toUpperCase();

const CustomPre: React.FC<CustomPreProps> = ({
  children,
  className,
  "data-language": dataLanguage,
  ...props
}) => {
  // Parse language (remove filename support for simplicity)
  const language = dataLanguage || className?.replace("language-", "") || "";

  const isTerminalLanguage = [
    "bash",
    "shell",
    "sh",
    "zsh",
    "fish",
    "powershell",
    "ps1",
    "cmd",
  ].includes(language.toLowerCase());

  // Extract the code content for copy functionality
  const getCodeContent = (node: ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }
    if (
      React.isValidElement(node) &&
      node.props &&
      typeof node.props === "object" &&
      "children" in node.props
    ) {
      return getCodeContent(node.props.children as ReactNode);
    }
    if (Array.isArray(node)) {
      return node.map(getCodeContent).join("");
    }
    return "";
  };

  const codeContent = getCodeContent(children);

  // If we have a language, add custom wrapper with header
  if (language && language.trim() !== "") {
    if (isTerminalLanguage) {
      // Terminal styling
      return (
        <div className="my-4 overflow-hidden rounded-lg border border-gray-300 bg-gray-900 dark:border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-300">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span className="font-medium text-sm">Terminal</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-gray-300 text-xs transition-colors hover:bg-gray-700 hover:text-white"
                onClick={() => navigator.clipboard.writeText(codeContent)}
                type="button"
              >
                <Copy className="h-3 w-3" />
                Copy
              </button>
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
            </div>
          </div>

          {/* Code content with syntax highlighting preserved */}
          <div className="overflow-x-auto">
            <pre
              className={`p-4 text-gray-100 text-sm ${className || ""}`}
              style={{ margin: 0, borderRadius: 0, background: "transparent" }}
              {...props}
            >
              {children}
            </pre>
          </div>
        </div>
      );
    }
    // Code block styling
    return (
      <div className="my-4 overflow-hidden rounded border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        {/* Code Header */}
        <div className="flex items-center justify-between border-gray-200 border-b bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
              {getLanguageDisplayName(language)}
            </span>
          </div>
          <button
            className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-gray-600 text-xs transition-colors hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            onClick={() => navigator.clipboard.writeText(codeContent)}
            type="button"
          >
            <Copy className="h-3 w-3" />
            Copy
          </button>
        </div>

        {/* Code content with syntax highlighting preserved */}
        <div className="overflow-x-auto">
          <pre
            className={`bg-white p-4 text-sm dark:bg-gray-950 ${className || ""}`}
            style={{ margin: 0, borderRadius: 0 }}
            {...props}
          >
            {children}
          </pre>
        </div>
      </div>
    );
  }

  // For code blocks without language, use default pre component
  return (
    <Pre className={className} data-language={dataLanguage} {...props}>
      {children}
    </Pre>
  );
};

export default CustomPre;
