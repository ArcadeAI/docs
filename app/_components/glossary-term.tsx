"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@arcadeai/design-system";
import Link from "next/link";
import { useState } from "react";

const MAX_DEFINITION_LENGTH = 200;

type GlossaryTermProps = {
  term: string;
  definition: string;
  link: string;
  children?: React.ReactNode;
};

export function GlossaryTerm({
  term,
  definition,
  link,
  children,
}: GlossaryTermProps) {
  const [open, setOpen] = useState(false);

  // Use children if provided, otherwise use term
  const displayText = children || term;

  // Truncate long definitions for popover display
  const truncatedDef =
    definition.length > MAX_DEFINITION_LENGTH
      ? `${definition.slice(0, MAX_DEFINITION_LENGTH)}...`
      : definition;

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <button
          className="cursor-help border-gray-400 border-b border-dotted bg-transparent p-0 font-inherit text-inherit transition-colors hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          type="button"
        >
          {displayText}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="w-80 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        side="top"
      >
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 text-sm dark:text-gray-100">
            💡 {term}
          </h4>
          <p className="text-gray-600 text-xs leading-relaxed dark:text-gray-400">
            {truncatedDef}
          </p>
          <Link
            className="inline-block text-blue-600 text-xs hover:underline dark:text-blue-400"
            href={link}
            onClick={() => setOpen(false)}
          >
            View in glossary →
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
