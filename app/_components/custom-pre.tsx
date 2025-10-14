"use client";

import { FileText, Terminal } from "lucide-react";
import { Pre } from "nextra/components";
import type React from "react";

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

  // If we have a language, add custom wrapper with header
  if (language && language.trim() !== "") {
    if (isTerminalLanguage) {
      // Terminal styling
      return (
        <div className="my-4 overflow-hidden rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-200 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span className="font-medium text-sm">Terminal</span>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
          </div>

          {/* Code content with syntax highlighting preserved */}
          <div className="overflow-x-auto">
            <Pre
              className={`text-gray-800 text-sm dark:text-gray-100 ${className || ""}`}
              style={{ margin: 0, borderRadius: 0, background: "transparent" }}
              {...props}
            >
              {children}
            </Pre>
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
        </div>

        {/* Code content with syntax highlighting preserved */}
        <div className="overflow-x-auto">
          <Pre
            className={`bg-white text-sm dark:bg-gray-950 ${className || ""}`}
            style={{ margin: 0, borderRadius: 0 }}
            {...props}
          >
            {children}
          </Pre>
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
