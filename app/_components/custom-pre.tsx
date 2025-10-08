import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { ReactNode } from "react";
import React from "react";
import EnhancedCodeBlock from "./enhanced-code-block";
import TerminalCodeBlock from "./terminal-code-block";

type CustomPreProps = {
  children?: React.ReactNode;
  className?: string;
  "data-language"?: string;
  [key: string]: unknown;
};

const EnhancedPre = withIcons(Pre, { js: GitHubIcon });

const CustomPre: React.FC<CustomPreProps> = ({
  children,
  className,
  "data-language": dataLanguage,
  ...props
}) => {
  // Parse language and optional filename
  const rawLanguage = dataLanguage || className?.replace("language-", "") || "";
  const [language, filename] = rawLanguage.includes(":")
    ? rawLanguage.split(":", 2)
    : [rawLanguage, undefined];

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

  // Extract the code content from children
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

  if (isTerminalLanguage) {
    return (
      <TerminalCodeBlock className={className}>{codeContent}</TerminalCodeBlock>
    );
  }

  // If we have a language specified, use enhanced code block
  if (language && language.trim() !== "") {
    return (
      <EnhancedCodeBlock
        className={className}
        filename={filename}
        language={language}
      >
        {codeContent}
      </EnhancedCodeBlock>
    );
  }

  // For code blocks without language specification, use the default pre component
  return (
    <EnhancedPre className={className} data-language={dataLanguage} {...props}>
      {children}
    </EnhancedPre>
  );
};

export default CustomPre;
