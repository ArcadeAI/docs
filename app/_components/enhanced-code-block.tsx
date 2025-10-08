"use client";

import { Copy, FileText } from "lucide-react";
import type React from "react";

type EnhancedCodeBlockProps = {
  children: string;
  className?: string;
  language: string;
  filename?: string;
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

const EnhancedCodeBlock: React.FC<EnhancedCodeBlockProps> = ({
  children,
  className = "",
  language,
  filename,
}) => {
  const displayName = filename || getLanguageDisplayName(language);

  return (
    <div className="my-4 overflow-hidden rounded border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-gray-200 border-b bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
            {displayName}
          </span>
        </div>
        <button
          className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-gray-600 text-xs transition-colors hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          onClick={() => navigator.clipboard.writeText(children)}
          type="button"
        >
          <Copy className="h-3 w-3" />
          Copy
        </button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className={`bg-white p-4 text-sm dark:bg-gray-950 ${className}`}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default EnhancedCodeBlock;
