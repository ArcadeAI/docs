import {
  CodeBlock,
  type CodeBlockProps,
  Pre as FumadocsPre,
} from "fumadocs-ui/components/codeblock";
import { FileText, Terminal } from "lucide-react";
import type { ReactNode } from "react";

type PreProps = CodeBlockProps & {
  /** Set by the `data-language` Shiki transformer in source.config.ts. */
  "data-language"?: string;
  children?: ReactNode;
};

const languageDisplayNames: Record<string, string> = {
  c: "C",
  cpp: "C++",
  csharp: "C#",
  css: "CSS",
  dockerfile: "Dockerfile",
  go: "Go",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  js: "JavaScript",
  json: "JSON",
  jsx: "JSX",
  kotlin: "Kotlin",
  markdown: "Markdown",
  md: "Markdown",
  mdx: "MDX",
  php: "PHP",
  py: "Python",
  python: "Python",
  rb: "Ruby",
  ruby: "Ruby",
  rust: "Rust",
  sass: "Sass",
  scss: "SCSS",
  sql: "SQL",
  swift: "Swift",
  toml: "TOML",
  ts: "TypeScript",
  tsx: "TSX",
  typescript: "TypeScript",
  xml: "XML",
  yaml: "YAML",
  yml: "YAML",
};

const TERMINAL_LANGUAGES = new Set([
  "bash",
  "shell",
  "shellscript",
  "sh",
  "zsh",
  "fish",
  "powershell",
  "ps1",
  "cmd",
  "console",
]);

const PLAIN_LANGUAGES = new Set(["", "text", "plaintext", "txt", "plain"]);

const getLanguageDisplayName = (lang: string): string =>
  languageDisplayNames[lang.toLowerCase()] || lang.toUpperCase();

function TerminalTitle() {
  return (
    <span className="flex w-full items-center justify-between">
      <span className="flex items-center gap-2">
        <Terminal className="size-4" />
        <span className="font-medium">Terminal</span>
      </span>
      <span className="flex gap-2 pe-2">
        <span className="size-3 rounded-full bg-red-500!" />
        <span className="size-3 rounded-full bg-yellow-500!" />
        <span className="size-3 rounded-full bg-green-500!" />
      </span>
    </span>
  );
}

/**
 * Code block renderer. Reproduces the Nextra-era `custom-pre.tsx` look on top
 * of the Fumadocs `CodeBlock`: shell languages get a "Terminal" header with the
 * three window dots, other languages get a header with the language name (or
 * the `title="file"` from the fence meta). Copy button, line numbers and
 * highlighted lines are handled by Fumadocs.
 */
export function Pre({
  "data-language": dataLanguage,
  title,
  icon,
  children,
  ...props
}: PreProps) {
  const language = (dataLanguage ?? "").toLowerCase();

  if (TERMINAL_LANGUAGES.has(language)) {
    return (
      <CodeBlock
        {...props}
        className="terminal-code-block"
        icon={null}
        title={title ?? <TerminalTitle />}
      >
        <FumadocsPre>{children}</FumadocsPre>
      </CodeBlock>
    );
  }

  if (!PLAIN_LANGUAGES.has(language)) {
    return (
      <CodeBlock
        {...props}
        icon={icon ?? <FileText className="size-4" />}
        title={title ?? getLanguageDisplayName(language)}
      >
        <FumadocsPre>{children}</FumadocsPre>
      </CodeBlock>
    );
  }

  return (
    <CodeBlock {...props} icon={icon} title={title}>
      <FumadocsPre>{children}</FumadocsPre>
    </CodeBlock>
  );
}
