"use client";
import React from "react";

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
    <table className="border-neutral-dark-high my-4 w-full border-collapse overflow-hidden rounded-lg border-2 shadow-sm sm:text-sm">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              className="bg-neutral-dark text-neutral-light-high border-neutral-dark-high border-b-4 px-3 py-2.5 text-left text-sm"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`hover:bg-neutral-dark-opacity cursor-pointer text-xs ${
              rowIndex % 2 === 0
                ? "bg-neutral-dark"
                : "border-neutral-dark-medium border-b bg-transparent"
            }`}
            onClick={() => handleRowClick(row[0])}
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={`border-neutral-dark-low border-b px-3 py-2 text-left ${
                  cellIndex === 0 ? "text-xs font-semibold" : ""
                }`}
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
