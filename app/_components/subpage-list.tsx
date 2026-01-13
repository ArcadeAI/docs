import Link from "next/link";

type SubpageListProps = {
  basePath: string;
  meta: Record<string, string | { title: string } | unknown>;
};

export function SubpageList({ basePath, meta }: SubpageListProps) {
  const subpages = Object.entries(meta).filter(([key]) => key !== "index");

  return (
    <ul className="x:ms-[1.5em] x:not-first:mt-[1.25em] x:list-disc x:[:is(ol,ul)_&]:my-[.75em]">
      {subpages.map(([key, title]) => {
        let linkText: string;
        if (typeof title === "string") {
          linkText = title;
        } else if (
          typeof title === "object" &&
          title !== null &&
          "title" in title
        ) {
          linkText = (title as { title: string }).title;
        } else {
          linkText = String(title);
        }
        return (
          <li className="x:my-[.5em]" key={key}>
            <Link
              className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:decoration-from-font x:[text-underline-position:from-font] x:hover:no-underline"
              href={`${basePath}/${key}`}
            >
              {linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
