"use client";

import { CheckCircle2 } from "lucide-react";

import type { ParametersTableProps, ToolParameter } from "../types";

/**
 * Formats a parameter type for display.
 */
export function formatParameterType(param: ToolParameter): string {
  if (param.type === "array" && param.innerType) {
    return `array<${param.innerType}>`;
  }

  return param.type;
}

/**
 * Formats enum values for display.
 */
export function formatEnumValues(
  enumValues: string[] | null | undefined
): string[] {
  if (!enumValues || enumValues.length === 0) {
    return [];
  }

  return enumValues.filter((value) => value.trim().length > 0);
}

/**
 * ParametersTable
 *
 * Renders a table of tool parameters with type, required, and description.
 */
export function ParametersTable({
  parameters,
  enumBaseUrl,
}: ParametersTableProps) {
  if (!parameters || parameters.length === 0) {
    return (
      <div className="rounded-lg border border-neutral-dark-high/40 bg-neutral-dark/30 p-4 text-center">
        <p className="text-sm text-muted-foreground/70">No parameters required.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-dark-high/50 shadow-sm">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-neutral-dark to-neutral-dark/80">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-light-high/80">
              Parameter
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-light-high/80">
              Type
            </th>
            <th className="w-20 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-neutral-light-high/80">
              Req.
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-light-high/80">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-dark-high/30">
          {parameters.map((param, index) => {
            const enumValues = formatEnumValues(param.enum);

            return (
              <tr
                className={index % 2 === 0 ? "bg-neutral-dark/20" : "bg-transparent"}
                key={param.name}
              >
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2">
                    {param.required && (
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-red-400"
                        title="Required"
                      />
                    )}
                    <code className="font-medium text-text-color">{param.name}</code>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <code className="rounded-md bg-neutral-dark-medium px-2 py-1 text-xs text-muted-foreground">
                    {formatParameterType(param)}
                  </code>
                </td>
                <td className="px-4 py-3.5 text-center">
                  {param.required ? (
                    <CheckCircle2 className="mx-auto h-4 w-4 text-red-400" />
                  ) : (
                    <span className="text-muted-foreground/50">—</span>
                  )}
                </td>
                <td className="px-4 py-3.5 text-sm text-text-color/80">
                  {param.description ?? "No description provided."}
                  {enumValues.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {enumValues.map((value) => {
                        const chip = (
                          <code className="rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-1.5 py-0.5 text-xs">
                            {value}
                          </code>
                        );

                        if (enumBaseUrl) {
                          return (
                            <a
                              className="text-brand-accent hover:underline"
                              href={`${enumBaseUrl}${encodeURIComponent(value)}`}
                              key={value}
                            >
                              {chip}
                            </a>
                          );
                        }

                        return <span key={value}>{chip}</span>;
                      })}
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ParametersTable;
