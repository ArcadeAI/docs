"use client";

import { Button } from "@arcadeai/design-system";
import { Copy, FileText } from "lucide-react";
import type React from "react";
import { useCallback } from "react";

interface EnhancedCodeBlockProps {
  children: string;
  className?: string;
  filename?: string;
  language: string;
}

const languageDisplayNames: Record<string, string> = {
  c: "C",
  cpp: "C++",
  css: "CSS",
  go: "Go",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  js: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  markdown: "Markdown",
  md: "Markdown",
  php: "PHP",
  py: "Python",
  python: "Python",
  rb: "Ruby",
  ruby: "Ruby",
  rust: "Rust",
  sass: "Sass",
  scss: "SCSS",
  sql: "SQL",
  toml: "TOML",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  xml: "XML",
  yaml: "YAML",
  yml: "YAML",
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

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch {
      // Fallback: try to select the text for manual copying
      const textArea = document.createElement("textarea");
      textArea.value = children;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch {
        // Silent fallback failure
      }
      document.body.removeChild(textArea);
    }
  }, [children]);

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
        <Button onClick={handleCopy} size="xs" variant="ghost">
          <Copy />
          Copy
        </Button>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className={`bg-white text-sm dark:bg-gray-950 ${className}`}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default EnhancedCodeBlock;
