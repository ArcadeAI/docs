import defaultMdxComponents from "fumadocs-ui/mdx";
import type { ComponentProps } from "react";

const FumadocsTable = defaultMdxComponents.table;

/**
 * Nextra's `<Table>` with `Table.Tr`, `Table.Th` and `Table.Td`, for MDX that
 * writes a table as JSX (attributes a Markdown table cannot have). Drawn as
 * Fumadocs' Markdown tables are.
 */
export const Table = Object.assign(
  (props: ComponentProps<"table">) => <FumadocsTable {...props} />,
  {
    Td: (props: ComponentProps<"td">) => <td {...props} />,
    Th: (props: ComponentProps<"th">) => <th {...props} />,
    Tr: (props: ComponentProps<"tr">) => <tr {...props} />,
  }
);
