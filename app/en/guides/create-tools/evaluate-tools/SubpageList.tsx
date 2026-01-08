import meta from "./_meta";

export function SubpageList() {
  const subpages = Object.entries(meta).filter(([key]) => key !== "index");

  return (
    <ul className="x:ms-[1.5em] x:not-first:mt-[1.25em] x:list-disc x:[:is(ol,ul)_&]:my-[.75em]">
      {subpages.map(([key, title]) => {
        const linkText = typeof title === "string" ? title : title.title;
        return (
          <li className="x:my-[.5em]" key={key}>
            <a
              className="x:focus-visible:nextra-focus x:text-primary-600 x:underline x:decoration-from-font x:[text-underline-position:from-font] x:hover:no-underline"
              href={`/guides/create-tools/evaluate-tools/${key}`}
            >
              {linkText}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
