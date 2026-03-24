"use client";

import { type ReactNode, useState } from "react";

type ExamplesTabsProps = {
  tabs: { label: string; content: ReactNode }[];
};

export function ExamplesTabs({ tabs }: ExamplesTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="mt-6 flex gap-2 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === index
                ? "border-b-2 border-[#ee175e] text-[#ee175e]"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
            key={tab.label}
            onClick={() => setActiveTab(index)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab]?.content}</div>
    </div>
  );
}
