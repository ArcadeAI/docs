import { FileText, Terminal } from "lucide-react";
import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { CopyToClipboard, ToggleWordWrapButton } from "./code-buttons";
import { CODE_BORDER, cx } from "./elements";

type NextraPreProps = ComponentProps<"pre"> & {
  "data-copy"?: string;
  "data-filename"?: string;
  "data-language"?: string;
  "data-word-wrap"?: string;
  icon?: ReactNode;
};

/**
 * Nextra's `Pre` (nextra/components), ported class for class: optional
 * filename bar, the hover copy button and the mobile word-wrap toggle. The
 * `data-*` props are set by the Shiki transformer in source.config.ts.
 */
export function NextraPre({
  children,
  className,
  "data-filename": filename,
  "data-copy": copy,
  "data-language": _language,
  "data-word-wrap": hasWordWrap,
  icon,
  ...props
}: NextraPreProps) {
  const tokens = new Set((className ?? "").split(" "));
  const copyButton =
    copy === "" ? (
      <CopyToClipboard className={filename ? "ms-auto text-sm" : ""} />
    ) : null;

  const floatingCopyButton = filename ? null : copyButton;

  return (
    <div
      className="nextra-code relative not-first:mt-[1.25em]"
      data-pagefind-ignore="all"
    >
      {filename ? (
        <div
          className={cx(
            "px-4 text-gray-700 text-xs dark:text-gray-200",
            "bg-gray-100 dark:bg-neutral-900",
            "flex h-12 items-center gap-2 rounded-t-[.375rem]",
            CODE_BORDER,
            "border-b-0"
          )}
        >
          {icon}
          <span className="truncate">{filename}</span>
          {copyButton}
        </div>
      ) : null}
      <pre
        className={cx(
          "group",
          "focus-visible:nextra-focus",
          "overflow-x-auto subpixel-antialiased",
          // The production wrapper's own classes came later in the cascade
          // than Nextra's, so they replace these defaults when present.
          tokens.has("text-sm") ? undefined : "text-[.9em]",
          "bg-white py-4",
          tokens.has("dark:bg-gray-950") ? undefined : "dark:bg-black",
          "ring-1 ring-gray-300 ring-inset dark:ring-neutral-700",
          "contrast-more:ring-gray-900 contrast-more:dark:ring-gray-50",
          "contrast-more:contrast-150",
          filename ? "rounded-b-[.375rem]" : "rounded-[.375rem]",
          "not-prose",
          className
        )}
        {...props}
      >
        <div
          className={cx(
            "group-hover:opacity-100",
            "group-focus:opacity-100",
            "opacity-0 transition focus-within:opacity-100",
            "absolute right-4 flex gap-1",
            filename ? "top-14" : "top-2"
          )}
        >
          {hasWordWrap === "" ? <ToggleWordWrapButton /> : null}
          {floatingCopyButton}
        </div>
        {children}
      </pre>
    </div>
  );
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

const TERMINAL_LANGUAGES = new Set([
  "bash",
  "shell",
  "sh",
  "zsh",
  "fish",
  "powershell",
  "ps1",
  "cmd",
]);

const getLanguageDisplayName = (lang: string): string =>
  languageDisplayNames[lang.toLowerCase()] || lang.toUpperCase();

const TERMINAL_PRE_STYLE: CSSProperties = {
  background: "transparent",
  borderRadius: 0,
  margin: 0,
};
const CODE_PRE_STYLE: CSSProperties = { borderRadius: 0, margin: 0 };

/**
 * The production `custom-pre.tsx`: shell languages get a "Terminal" header
 * with the three window dots, every other language a header with its name,
 * both wrapped around Nextra's `Pre`.
 */
export function Pre({
  children,
  className,
  "data-language": dataLanguage,
  ...props
}: NextraPreProps) {
  const language = dataLanguage || className?.replace("language-", "") || "";

  if (language && language.trim() !== "") {
    if (TERMINAL_LANGUAGES.has(language.toLowerCase())) {
      return (
        <div className="my-4 overflow-hidden rounded-lg border border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
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
          <div className="overflow-x-auto">
            <NextraPre
              className={`text-gray-800 text-sm dark:text-gray-100 ${className || ""}`}
              style={TERMINAL_PRE_STYLE}
              {...props}
            >
              {children}
            </NextraPre>
          </div>
        </div>
      );
    }
    return (
      <div className="my-4 overflow-hidden rounded border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center justify-between border-gray-200 border-b bg-gray-50 px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-700 text-sm dark:text-gray-300">
              {getLanguageDisplayName(language)}
            </span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <NextraPre
            className={`bg-white text-sm dark:bg-gray-950 ${className || ""}`}
            style={CODE_PRE_STYLE}
            {...props}
          >
            {children}
          </NextraPre>
        </div>
      </div>
    );
  }

  return (
    <NextraPre className={className} data-language={dataLanguage} {...props}>
      {children}
    </NextraPre>
  );
}
