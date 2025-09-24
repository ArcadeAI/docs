"use client";

/**
 * DynamicTable Component
 *
 * This component renders a dynamic table with clickable rows that navigate to * specific sections on the same page. The contents of the first column of each * row is used to generate the section ID.
 *
 */

function TableOfContents({ headers, data }) {
  const handleRowClick = (firstColumnValue) => {
    // Convert first column value to a valid ID format
    const sectionId = firstColumnValue
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(".", "");
    // Update the URL hash to navigate to the section
    window.location.hash = `#${sectionId}`;
  };

  return (
    <table className="my-4 w-full border-collapse overflow-hidden rounded-lg border-2 border-neutral-dark-high shadow-sm sm:text-sm">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              className="border-neutral-dark-high border-b-2 bg-neutral-dark px-3 py-2.5 text-left text-neutral-light-high text-sm"
              key={String(header)}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            className={`cursor-pointer text-xs hover:bg-neutral-dark-opacity ${
              rowIndex % 2 === 0
                ? "bg-neutral-dark"
                : "border-neutral-dark-medium border-b bg-transparent"
            }`}
            key={String(row[0])}
            onClick={() => handleRowClick(row[0])}
          >
            {row.map((cell, cellIndex) => (
              <td
                className={`border-neutral-dark-low border-b px-3 py-2 text-left ${
                  cellIndex === 0 ? "font-semibold text-xs" : ""
                }`}
                key={`${String(row[0])}-${String(cell)}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableOfContents;
