import { useState, useEffect } from "react";
import styles from './TabbedCodeBlock.module.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { atomLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface TabContent {
  label: string;
  content: string;
  language?: string;
}

interface CodeTabSwitcherProps {
  tabs: TabContent[];
}

const CodeTabSwitcher = ({ tabs }: CodeTabSwitcherProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('Python');
    const [selectedExample, setSelectedExample] = useState(0);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [fileContent, setFileContent] = useState('');

    // Watch for changes between light and dark mode and update the code block theme accordingly
    useEffect(() => {
        const updateTheme = () => {
            const htmlElement = document.documentElement;
            const isDarkMode = htmlElement.classList.contains('dark') || htmlElement.getAttribute('data-theme') === 'dark';
            setTheme(isDarkMode ? 'dark' : 'light');
        };

        updateTheme();

        // Create a MutationObserver to watch for changes
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class', 'data-theme']
        });

        return () => observer.disconnect();
    }, []);

    // Fetch the file content for the selected tab and example
    useEffect(() => {
        const fetchFileContent = async () => {
            const filePath = tabs[activeTab].content[selectedLanguage][selectedExample];
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error('Failed to fetch file content');
                }
                const text = await response.text();
                setFileContent(text);
            } catch (error) {
                console.error("Error fetching file content:", error);
                setFileContent("Coming Soon");
            }
        };

        fetchFileContent();
    }, [activeTab, selectedLanguage, selectedExample, tabs]);

    return (
      <div>
        <div className={styles.tabs}>
          <select className={styles.button} onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
          </select>

          <select className={styles.button} onChange={(e) => setActiveTab(Number(e.target.value))} value={activeTab}>
            {tabs.map((tab, index) => (
              <option key={index} value={index}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.tabContent}>
          <SyntaxHighlighter
            language={selectedLanguage.toLowerCase()}
            style={theme === 'dark' ? atomDark : atomLight}
            wrapLines={true}
          >
            {fileContent}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };

export default CodeTabSwitcher;
