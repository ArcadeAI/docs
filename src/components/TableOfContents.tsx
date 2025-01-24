import React from "react";
import styles from "./TableOfContents.module.css";

/**
 * DynamicTable Component
 *
 * This component renders a dynamic table with clickable rows that navigate to * specific sections on the same page. The contents of the first column of each * row is used to generate the section ID.
 *
 */

function TableOfContents({ headers, data }) {
  const handleRowClick = (firstColumnValue) => {
    // Convert first column value to a valid ID format
    const sectionId = firstColumnValue.toLowerCase().replace(/\s+/g, "");
    // Update the URL hash to navigate to the section
    window.location.hash = `#${sectionId}`;
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {headers.map((header, index) => (
            <th key={index} className={styles.th}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={styles.tr}
            onClick={() => handleRowClick(row[0])}
          >
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={styles.td}>
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
