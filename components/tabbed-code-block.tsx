"use client";
import { Button } from "@arcadeai/design-system";
import { ChevronDown } from "lucide-react";
import posthog from "posthog-js";
import React, { useMemo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeSkeleton } from "./tabbed-code-block/code-skeleton";
import { CopyButton } from "./tabbed-code-block/copy-button";
import { LanguageTabs } from "./tabbed-code-block/language-tabs";
import { TabSelect } from "./tabbed-code-block/tab-select";
import { useExampleFile } from "./tabbed-code-block/use-example-file";

type TabContent = {
  label: string;
  content: Record<string, string[]>;
};

type CodeTabSwitcherProps = {
  tabs: TabContent[];
};

const CodeTabSwitcher = ({ tabs }: CodeTabSwitcherProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to monitor theme changes
  React.useEffect(() => {
    const updateTheme = () => {
      // Check for Nextra's theme classes or data attributes
      const html = document.documentElement;
      const hasClassDark = html.classList.contains("dark");
      const hasClassLight = html.classList.contains("light");
      const hasDataThemeDark = html.getAttribute("data-theme") === "dark";
      const hasDataThemeLight = html.getAttribute("data-theme") === "light";
      const systemPrefersDark =
        window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

      // Prioritize manual theme settings over system preference
      let isDark: boolean;
      if (hasClassDark || hasDataThemeDark) {
        isDark = true;
      } else if (hasClassLight || hasDataThemeLight) {
        isDark = false;
      } else {
        // Only use system preference if no manual theme is set
        isDark = systemPrefersDark;
      }

      setIsDarkMode(isDark);
    };

    // Initial check
    updateTheme();

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    // Also listen for system theme changes
    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    mediaQuery?.addEventListener("change", updateTheme);

    return () => {
      observer.disconnect();
      mediaQuery?.removeEventListener("change", updateTheme);
    };
  }, []);

  // Syntax highlighting theme with better contrast
  const syntaxTheme = isDarkMode ? atomDark : oneLight;

  const currentTab = useMemo(() => tabs[activeTab], [tabs, activeTab]);

  const availableLanguages = useMemo(
    () => (currentTab ? Object.keys(currentTab.content) : []),
    [currentTab]
  );

  const validLanguage = useMemo(
    () =>
      availableLanguages.includes(selectedLanguage)
        ? selectedLanguage
        : availableLanguages[0] || "Python",
    [availableLanguages, selectedLanguage]
  );

  const { filePath, fileName } = useMemo(() => {
    const path = currentTab?.content[validLanguage]?.[0] || "";
    const name = path.split("/").pop() || "";
    return { filePath: path, fileName: name };
  }, [currentTab, validLanguage]);

  const { fileContent, loading, error, retry } = useExampleFile(
    isExpanded,
    filePath,
    fileName
  );

  const handleExpandExample = () => {
    setIsExpanded(true);
    posthog.capture("Code example expanded", {
      tab_count: tabs.length,
      initial_language: selectedLanguage,
    });
  };

  if (!isExpanded) {
    return (
      <Button
        className="mt-2"
        onClick={handleExpandExample}
        size="sm"
        variant="outline"
      >
        See Example
        <ChevronDown className="ml-1 h-3 w-3" />
      </Button>
    );
  }

  return (
    <div className="mt-3 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-muted/20 p-3">
        <div className="flex flex-wrap items-center gap-4">
          <LanguageTabs
            currentLanguage={validLanguage}
            languages={availableLanguages}
            onSelect={setSelectedLanguage}
          />
          <TabSelect
            activeIndex={activeTab}
            onChange={setActiveTab}
            tabs={tabs}
          />
        </div>

        <Button
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setIsExpanded(false)}
          size="sm"
          variant="ghost"
        >
          Close
        </Button>
      </div>

      {/* Code block */}
      <div className="relative rounded-md border border-muted/80">
        <div className="flex items-center justify-between border-muted border-b bg-muted/5 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-muted-foreground text-xs">
              {fileName || `${validLanguage.toLowerCase()}`}
            </span>
            {error && (
              <Button
                className="h-6 px-2 text-destructive text-xs hover:text-destructive"
                onClick={retry}
                size="sm"
                variant="ghost"
              >
                Retry
              </Button>
            )}
          </div>
          <CopyButton
            content={fileContent}
            disabled={loading || !fileContent || Boolean(error)}
          />
        </div>

        <div className="relative">
          {loading ? (
            <CodeSkeleton />
          ) : (
            <SyntaxHighlighter
              customStyle={{
                margin: 0,
                padding: "1rem",
                fontSize: "13px",
                lineHeight: "1.4",
                background: isDarkMode ? "transparent" : "#fafafa",
              }}
              language={validLanguage.toLowerCase()}
              style={syntaxTheme}
              wrapLines={true}
            >
              {fileContent ||
                (error
                  ? `# ⚠️ ${error}\n\n# Please try again or check your connection.`
                  : "🔜 Coming soon")}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeTabSwitcher;
