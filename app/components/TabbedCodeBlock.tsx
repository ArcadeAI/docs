"use client";
import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface TabContent {
  label: string;
  content: string;
  language?: string;
}

interface CodeTabSwitcherProps {
  tabs: TabContent[];
}

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
      if (!isExpanded) return;
      const filePath =
        tabs[activeTab].content[selectedLanguage][selectedExample];
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch file content");
        }
        const text = await response.text();
        setFileContent(text);
      } catch (error) {
        console.error("Error fetching file content:", error);
        setFileContent("Coming Soon");
      }
    };

    fetchFileContent();
  }, [isExpanded, activeTab, selectedLanguage, selectedExample, tabs]);

  if (!isExpanded) {
    return (
      <button
        className="bg-neutral-dark-low text-neutral-light-high border-code-block-text hover:bg-neutral-dark-opacity mt-1.5 cursor-pointer rounded-lg border px-2 py-1.5 text-left text-sm transition-colors duration-400 sm:text-xs"
        onClick={() => setIsExpanded(true)}
      >
        See Example &gt;
      </button>
    );
  }

  return (
    <div>
      <div className="mb-4 flex gap-1.5 rounded-lg sm:flex-col sm:text-xs">
        <select
          className="bg-neutral-dark-low text-neutral-light-high border-code-block-text hover:bg-neutral-dark-opacity mt-1.5 cursor-pointer rounded-lg border px-2 py-1.5 text-left text-sm transition-colors duration-400 sm:text-xs"
          onChange={(e) => setSelectedLanguage(e.target.value)}
          value={selectedLanguage}
        >
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <select
          className="bg-neutral-dark-low text-neutral-light-high border-code-block-text hover:bg-neutral-dark-opacity mt-1.5 cursor-pointer rounded-lg border px-2 py-1.5 text-left text-sm transition-colors duration-400 sm:text-xs"
          onChange={(e) => setActiveTab(Number(e.target.value))}
          value={activeTab}
        >
          {tabs.map((tab, index) => (
            <option key={index} value={index}>
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

      <div className="border-code-block-text text-code-block-text w-93 rounded-lg border p-1.5 pt-2 pr-2 pb-2 pl-2 break-words break-all sm:flex-col sm:text-xs">
        <div style={{ position: "relative" }}>
          <button
            className="bg-neutral-dark-low text-neutral-light-high border-code-block-text hover:bg-neutral-dark-opacity absolute top-0 right-4 z-10 mt-1.5 cursor-pointer rounded-lg border px-2 py-1.5 text-left text-sm transition-colors duration-400 sm:text-xs"
            onClick={() => {
              navigator.clipboard.writeText(fileContent);
              const button = event.target as HTMLButtonElement;
              button.textContent = "Copied!";
              setTimeout(() => {
                button.textContent = "Copy";
              }, 2000);
            }}
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
