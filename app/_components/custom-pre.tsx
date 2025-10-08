import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { ReactNode } from "react";
import React from "react";
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
  // Check if this is a bash/shell code block
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

  if (isTerminalLanguage) {
    const codeContent = getCodeContent(children);
    return (
      <TerminalCodeBlock className={className}>{codeContent}</TerminalCodeBlock>
    );
  }

  // For non-terminal languages, use the default enhanced pre component
  return (
    <EnhancedPre className={className} data-language={dataLanguage} {...props}>
      {children}
    </EnhancedPre>
  );
};

export default CustomPre;
