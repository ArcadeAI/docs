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
      <p className="my-3 text-muted-foreground text-sm">
        No parameters required.
      </p>
    );
  }

  return (
    <table className="my-4 w-full border-collapse overflow-hidden rounded-lg border-2 border-neutral-dark-high shadow-sm sm:text-sm">
      <thead>
        <tr>
          <th className="border-neutral-dark-high border-b-2 bg-neutral-dark px-3 py-2.5 text-left text-neutral-light-high text-sm">
            Parameter
          </th>
          <th className="border-neutral-dark-high border-b-2 bg-neutral-dark px-3 py-2.5 text-left text-neutral-light-high text-sm">
            Type
          </th>
          <th className="border-neutral-dark-high border-b-2 bg-neutral-dark px-3 py-2.5 text-left text-neutral-light-high text-sm">
            Required
          </th>
          <th className="border-neutral-dark-high border-b-2 bg-neutral-dark px-3 py-2.5 text-left text-neutral-light-high text-sm">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {parameters.map((param, index) => {
          const enumValues = formatEnumValues(param.enum);
          const rowClass =
            index % 2 === 0
              ? "bg-neutral-dark"
              : "border-neutral-dark-medium border-b bg-transparent";

          return (
            <tr className={`text-xs ${rowClass}`} key={param.name}>
              <td className="border-neutral-dark-low border-b px-3 py-2 text-left font-semibold text-xs">
                <code>{param.name}</code>
              </td>
              <td className="border-neutral-dark-low border-b px-3 py-2 text-left text-xs">
                <code>{formatParameterType(param)}</code>
              </td>
              <td className="border-neutral-dark-low border-b px-3 py-2 text-left text-xs">
                {param.required ? "Yes" : "No"}
              </td>
              <td className="border-neutral-dark-low border-b px-3 py-2 text-left text-xs">
                {param.description ?? "No description provided."}
                {enumValues.length > 0 && (
                  <div className="mt-1 text-muted-foreground text-xs">
                    Options:{" "}
                    {enumValues.map((value, valueIndex) => {
                      const content = <code>{value}</code>;
                      const separator =
                        valueIndex < enumValues.length - 1 ? ", " : "";

                      if (enumBaseUrl) {
                        return (
                          <span key={value}>
                            <a
                              className="text-brand-accent hover:underline"
                              href={`${enumBaseUrl}${encodeURIComponent(value)}`}
                            >
                              {content}
                            </a>
                            {separator}
                          </span>
                        );
                      }

                      return (
                        <span key={value}>
                          {content}
                          {separator}
                        </span>
                      );
                    })}
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ParametersTable;
