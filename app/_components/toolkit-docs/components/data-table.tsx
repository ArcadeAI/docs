"use client";

export type DataTableProps = {
  columns: string[];
  rows: string[][];
  caption?: string;
  compact?: boolean;
};

export function DataTable({
  columns,
  rows,
  caption,
  compact = false,
}: DataTableProps) {
  if (!(columns.length && rows.length)) {
    return null;
  }

  const cellPadding = compact
    ? "px-2 py-1.5 sm:px-3 sm:py-2"
    : "px-3 py-2 sm:px-4 sm:py-3";

  // Generate unique keys for rows, handling duplicates by appending index
  // This is computed once per render using the row index as a stable fallback
  const getRowKey = (row: string[], rowIndex: number): string => {
    const baseKey = row.join("|");
    // Use row index as suffix to ensure uniqueness for duplicate rows
    return `${baseKey}__${rowIndex}`;
  };

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-neutral-dark-high/50 shadow-sm">
      <table className="w-full border-collapse text-sm">
        {caption ? (
          <caption className="bg-neutral-dark/30 px-3 py-2 text-left text-neutral-light-high/70 text-xs uppercase tracking-wider sm:px-4">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="bg-gradient-to-r from-neutral-dark to-neutral-dark/80">
            {columns.map((column) => (
              <th
                className={`${cellPadding} text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider`}
                key={column}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-dark-high/30">
          {rows.map((row, rowIndex) => {
            const rowKey = getRowKey(row, rowIndex);
            return (
              <tr
                className={
                  rowIndex % 2 === 0 ? "bg-neutral-dark/20" : "bg-transparent"
                }
                key={rowKey}
              >
                {columns.map((column, columnIndex) => (
                  <td
                    className={`${cellPadding} align-top text-foreground`}
                    key={`${rowKey}-${column}`}
                  >
                    {row[columnIndex] ?? "—"}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
