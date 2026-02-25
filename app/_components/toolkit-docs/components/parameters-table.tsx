"use client";

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
      <div className="rounded-lg bg-neutral-dark/30 p-4 text-center">
        <p className="text-muted-foreground/70 text-sm">
          No parameters required.
        </p>
      </div>
    );
  }

  const headerCellPadding = "px-3 py-2 sm:px-4 sm:py-3";
  const cellPadding = "px-3 py-2 sm:px-4 sm:py-3.5";

  return (
    <div className="overflow-hidden rounded-xl bg-neutral-dark/20">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-neutral-dark to-neutral-dark/80">
            <th
              className={`${headerCellPadding} text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider`}
            >
              Parameter
            </th>
            <th
              className={`${headerCellPadding} text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider`}
            >
              Type
            </th>
            <th
              className={`${headerCellPadding} w-20 text-center font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider`}
            >
              Req.
            </th>
            <th
              className={`${headerCellPadding} text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider`}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-dark-high/30">
          {parameters.map((param, index) => {
            const enumValues = formatEnumValues(param.enum);

            return (
              <tr
                className={`transition-colors ${
                  index % 2 === 0
                    ? "bg-muted/30 dark:bg-neutral-dark/40"
                    : "bg-transparent"
                } hover:bg-muted/50 dark:hover:bg-neutral-dark/50`}
                key={param.name}
              >
                <td className={cellPadding}>
                  <code className="font-medium text-foreground">
                    {param.name}
                  </code>
                </td>
                <td className={cellPadding}>
                  <code className="font-mono text-muted-foreground text-xs">
                    {formatParameterType(param)}
                  </code>
                </td>
                <td className={`${cellPadding} text-center`}>
                  {param.required ? (
                    <span className="text-red-400 text-xs">Required</span>
                  ) : (
                    <span className="text-muted-foreground/50 text-xs">
                      Optional
                    </span>
                  )}
                </td>
                <td className={`${cellPadding} text-sm text-foreground`}>
                  {param.description ?? "No description provided."}
                  {enumValues.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {enumValues.map((value) => {
                        const chip = (
                          <code className="font-mono text-muted-foreground text-xs">
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
