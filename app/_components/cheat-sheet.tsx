"use client";

import { AlertTriangle, Info, Lightbulb } from "lucide-react";
import type React from "react";

interface CheatSheetSectionProps {
  title: string;
  icon: string;
  color:
    | "red"
    | "orange"
    | "purple"
    | "blue"
    | "green"
    | "cyan"
    | "pink"
    | "yellow";
  children: React.ReactNode;
}

const colorClasses = {
  red: "bg-red-500/10 border-red-500/20 dark:bg-red-500/10 dark:border-red-400/30",
  orange:
    "bg-orange-500/10 border-orange-500/20 dark:bg-orange-500/10 dark:border-orange-400/30",
  purple:
    "bg-purple-500/10 border-purple-500/20 dark:bg-purple-500/10 dark:border-purple-400/30",
  blue: "bg-blue-500/10 border-blue-500/20 dark:bg-blue-500/10 dark:border-blue-400/30",
  green:
    "bg-green-500/10 border-green-500/20 dark:bg-green-500/10 dark:border-green-400/30",
  cyan: "bg-cyan-500/10 border-cyan-500/20 dark:bg-cyan-500/10 dark:border-cyan-400/30",
  pink: "bg-pink-500/10 border-pink-500/20 dark:bg-pink-500/10 dark:border-pink-400/30",
  yellow:
    "bg-yellow-500/10 border-yellow-500/20 dark:bg-yellow-500/10 dark:border-yellow-400/30",
};

const headerColorClasses = {
  red: "bg-red-500 text-white",
  orange: "bg-orange-500 text-white",
  purple: "bg-purple-500 text-white",
  blue: "bg-blue-500 text-white",
  green: "bg-green-500 text-white",
  cyan: "bg-cyan-500 text-white",
  pink: "bg-pink-500 text-white",
  yellow: "bg-yellow-500 text-black",
};

export function CheatSheetSection({
  title,
  icon,
  color,
  children,
}: CheatSheetSectionProps) {
  return (
    <div
      className={`cheat-sheet-section rounded-lg border ${colorClasses[color]} overflow-hidden print:break-inside-avoid print:border-gray-300 print:text-[6pt]`}
    >
      <div
        className={`px-4 py-2 font-semibold text-sm ${headerColorClasses[color]} print:!bg-gray-100 print:!text-black print:!text-[7pt] print:!py-[3pt] print:!px-[4pt]`}
      >
        <span className="mr-2">{icon}</span>
        {title}
      </div>
      <div className="print:!p-[4pt] print:!text-[6pt] print:!space-y-[2pt] space-y-3 p-4 text-sm">
        {children}
      </div>
    </div>
  );
}

export function CheatSheetGrid({
  children,
  pageNumber,
}: {
  children: React.ReactNode;
  pageNumber?: number;
}) {
  const pageClass = pageNumber ? `cheat-sheet-page-${pageNumber}` : "";
  return (
    <div
      className={`cheat-sheet-grid ${pageClass} grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 print:grid-cols-5 print:gap-2`}
    >
      {children}
    </div>
  );
}

export function CommandBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="print:!bg-gray-100 print:!border-0 print:!p-[2pt] print:!text-[5.5pt] overflow-auto whitespace-pre rounded border border-gray-200 bg-black/5 p-2 font-mono text-xs dark:border-gray-700 dark:bg-white/5">
      {children}
    </pre>
  );
}

export function CommandList({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export function CommandItem({
  command,
  description,
}: {
  command: string;
  description?: string;
}) {
  return (
    <div className="print:!space-y-[1pt] space-y-1">
      <code className="print:!bg-gray-100 print:!border-0 print:!px-[2pt] print:!py-[1pt] print:!text-[5.5pt] block rounded bg-black/5 px-2 py-1 font-mono text-xs dark:bg-white/5">
        {command}
      </code>
      {description && (
        <div className="print:!text-gray-600 print:!text-[5pt] print:!pl-[2pt] pl-2 text-gray-600 text-xs dark:text-gray-400">
          {description}
        </div>
      )}
    </div>
  );
}

export function InfoBox({
  type = "tip",
  children,
}: {
  type?: "tip" | "note" | "warning";
  children: React.ReactNode;
}) {
  const styles = {
    tip: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    note: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
  };

  const icons = {
    tip: Lightbulb,
    note: Info,
    warning: AlertTriangle,
  };

  const Icon = icons[type];

  return (
    <div
      className={`rounded border p-2 text-xs ${styles[type]} print:!bg-gray-50 print:!text-black print:!border-gray-300 print:!text-[5.5pt] print:!p-[2pt] flex items-start gap-1.5`}
    >
      <Icon className="print:!h-[8pt] print:!w-[8pt] h-3 w-3 flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </div>
  );
}
