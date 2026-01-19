"use client";

import posthog from "posthog-js";
import { useState } from "react";

type Tool = {
  name: string;
  scopes: string[];
};

type ScopePickerProps = {
  tools: Tool[];
};

export default function ScopePicker({ tools }: ScopePickerProps) {
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());

  const trackScopeCalculatorUsed = (
    action: string,
    toolName: string | undefined,
    newSelectedCount: number
  ) => {
    posthog.capture("Scope calculator used", {
      action,
      tool_name: toolName || null,
      selected_tools_count: newSelectedCount,
      total_tools_available: tools.length,
    });
  };

  const toggleTool = (toolName: string) => {
    const newSelected = new Set(selectedTools);
    const isSelecting = !newSelected.has(toolName);
    if (newSelected.has(toolName)) {
      newSelected.delete(toolName);
    } else {
      newSelected.add(toolName);
    }
    setSelectedTools(newSelected);
    trackScopeCalculatorUsed(
      isSelecting ? "tool_selected" : "tool_deselected",
      toolName,
      newSelected.size
    );
  };

  const selectAll = () => {
    setSelectedTools(new Set(tools.map((t) => t.name)));
    trackScopeCalculatorUsed("select_all", undefined, tools.length);
  };

  const clearAll = () => {
    setSelectedTools(new Set());
    trackScopeCalculatorUsed("clear_all", undefined, 0);
  };

  // Get unique scopes from selected tools
  const requiredScopes = Array.from(
    new Set(
      tools.filter((t) => selectedTools.has(t.name)).flatMap((t) => t.scopes)
    )
  ).sort();

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="border-gray-200 border-b bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-sm dark:text-gray-100">
            Scope calculator
          </h3>
          <div className="flex gap-2">
            <button
              className="rounded bg-blue-100 px-2 py-1 text-blue-700 text-xs transition-colors hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
              onClick={selectAll}
              type="button"
            >
              Select all
            </button>
            <button
              className="rounded bg-gray-100 px-2 py-1 text-gray-600 text-xs transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
              onClick={clearAll}
              type="button"
            >
              Clear
            </button>
          </div>
        </div>
        <p className="mt-1 text-gray-500 text-xs dark:text-gray-400">
          Select the tools you plan to use to see the required OAuth scopes.
        </p>
      </div>

      <div className="p-4">
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {tools.map((tool) => (
            <label
              className={`flex cursor-pointer items-center gap-2 rounded p-2 transition-colors ${
                selectedTools.has(tool.name)
                  ? "border border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/30"
                  : "border border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              key={tool.name}
            >
              <input
                checked={selectedTools.has(tool.name)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
                onChange={() => toggleTool(tool.name)}
                type="checkbox"
              />
              <span className="text-gray-700 text-sm dark:text-gray-300">
                {tool.name}
              </span>
            </label>
          ))}
        </div>

        <div className="border-gray-200 border-t pt-4 dark:border-gray-700">
          <h4 className="mb-2 font-medium text-gray-900 text-sm dark:text-gray-100">
            Required scopes{" "}
            {selectedTools.size > 0 && (
              <span className="font-normal text-gray-500 dark:text-gray-400">
                ({requiredScopes.length})
              </span>
            )}
          </h4>
          {requiredScopes.length > 0 ? (
            <ul className="space-y-1">
              {requiredScopes.map((scope) => (
                <li
                  className="rounded bg-gray-100 px-2 py-1 font-mono text-gray-700 text-xs dark:bg-gray-800 dark:text-gray-300"
                  key={scope}
                >
                  {scope}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm italic dark:text-gray-400">
              Select tools above to see required scopes
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
