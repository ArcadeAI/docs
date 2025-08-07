"use client";
import { useState, useEffect } from "react";
import styles from "./TabbedCodeBlock.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { a11yLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
      <button className={styles.button} onClick={() => setIsExpanded(true)}>
        See Example &gt;
      </button>
    );
  }

  return (
    <div>
      <div className={styles.tabs}>
        <select
          className={styles.button}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          value={selectedLanguage}
        >
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
        </select>
        <select
          className={styles.button}
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

      <div className={styles.tabContent}>
        <div style={{ position: "relative" }}>
          <button
            className={styles.copyButton}
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
            style={theme === "dark" ? atomDark : a11yLight}
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
