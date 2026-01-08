interface SubpageListProps {
  basePath: string;
  meta: Record<string, any>;
}

export function SubpageList({ basePath, meta }: SubpageListProps) {
  const subpages = Object.entries(meta).filter(([key]) => key !== "index");

  return (
    <ul className="x:ms-[1.5em] x:not-first:mt-[1.25em] x:list-disc x:[:is(ol,ul)_&]:my-[.75em]">
      {subpages.map(([key, title]) => {
        const linkText =
          typeof title === "string"
            ? title
            : typeof title === "object" && title !== null && "title" in title
              ? (title as { title: string }).title
              : String(title);
        return (
          <li className="x:my-[.5em]" key={key}>
            <a
              className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:decoration-from-font x:[text-underline-position:from-font] x:hover:no-underline"
              href={`${basePath}/${key}`}
            >
              {linkText}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
