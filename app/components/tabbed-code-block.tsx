"use client";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

type TabContent = {
  label: string;
  content: Record<string, string[]>;
  language?: string;
};

type CodeTabSwitcherProps = {
  tabs: TabContent[];
};

const CodeTabSwitcher = ({ tabs }: CodeTabSwitcherProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [selectedExample] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const updateTheme = () => {
      const htmlElement = document.documentElement;
      const isDarkMode =
        htmlElement.classList.contains("dark") ||
        htmlElement.getAttribute("data-theme") === "dark";
      setTheme(isDarkMode ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchFileContent = async () => {
      if (!isExpanded) {
        return;
      }
      const filePath =
        tabs[activeTab].content[selectedLanguage]?.[selectedExample] || "";
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch file content");
        }
        const text = await response.text();
        setFileContent(text);
      } catch (_error) {
        setFileContent("Coming Soon");
      }
    };

    fetchFileContent();
  }, [isExpanded, activeTab, selectedLanguage, selectedExample, tabs]);

  if (!isExpanded) {
    return (
      <button
        className="mt-1.5 cursor-pointer rounded-lg border border-code-block-text bg-neutral-dark-low px-2 py-1.5 text-left text-neutral-light-high text-sm transition-colors duration-400 hover:bg-neutral-dark-opacity sm:text-xs"
        onClick={() => setIsExpanded(true)}
        type="button"
      >
        See Example &gt;
      </button>
    );
  }

  return (
    <div>
      <div className="mb-4 flex gap-1.5 rounded-lg sm:flex-col sm:text-xs">
        <select
          className="mt-1.5 cursor-pointer rounded-lg border border-code-block-text bg-neutral-dark-low px-2 py-1.5 text-left text-neutral-light-high text-sm transition-colors duration-400 hover:bg-neutral-dark-opacity sm:text-xs"
          onChange={(e) => setSelectedLanguage(e.target.value)}
          value={selectedLanguage}
        >
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <select
          className="mt-1.5 cursor-pointer rounded-lg border border-code-block-text bg-neutral-dark-low px-2 py-1.5 text-left text-neutral-light-high text-sm transition-colors duration-400 hover:bg-neutral-dark-opacity sm:text-xs"
          onChange={(e) => setActiveTab(Number(e.target.value))}
          value={activeTab}
        >
          {tabs.map((tab, index) => (
            <option key={tab.label} value={index}>
              {tab.label}
            </option>
          ))}
        </select>
        {/* Collapse button */}
        {/* <div style={{ flexGrow: 1 }}></div>{" "} */}
        {/* <button className={styles.button} onClick={() => setIsExpanded(false)}> */}
        {/* X */}
        {/* </button> */}
      </div>

      <div className="w-93 break-words break-all rounded-lg border border-code-block-text p-1.5 pt-2 pr-2 pb-2 pl-2 text-code-block-text sm:flex-col sm:text-xs">
        <div style={{ position: "relative" }}>
          <button
            className="absolute top-0 right-4 z-10 mt-1.5 cursor-pointer rounded-lg border border-code-block-text bg-neutral-dark-low px-2 py-1.5 text-left text-neutral-light-high text-sm transition-colors duration-400 hover:bg-neutral-dark-opacity sm:text-xs"
            onClick={(e) => {
              navigator.clipboard.writeText(fileContent);
              const button = e.currentTarget as HTMLButtonElement;
              button.textContent = "Copied!";

              const CopyFeedbackDurationMs = 2000;
              setTimeout(() => {
                button.textContent = "Copy";
              }, CopyFeedbackDurationMs);
            }}
            type="button"
          >
            Copy
          </button>
          <SyntaxHighlighter
            language={selectedLanguage.toLowerCase()}
            style={theme === "dark" ? atomDark : oneLight}
            wrapLines={true}
          >
            {fileContent}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeTabSwitcher;
