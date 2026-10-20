import { type ComponentProps, type CSSProperties, useId } from "react";
import { cx } from "./elements";

/**
 * Nextra's `<Steps>` (nextra/components): a left rule, with every `h3` inside
 * numbered by a CSS counter (`.nextra-steps` in app/global.css). No `<Step>`
 * wrappers are needed, exactly as in the Nextra-authored MDX.
 */
export function Steps({
  children,
  className,
  style,
  ...props
}: ComponentProps<"div">) {
  const id = useId().replaceAll(":", "");
  return (
    <div
      className={cx(
        "nextra-steps ms-4 mb-12 border-gray-200 border-s ps-6",
        "dark:border-neutral-800",
        className
      )}
      style={{ ...style, "--counter-id": id } as CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}

/** Kept for MDX that wraps a step explicitly; renders its children as-is. */
export function Step({ children }: ComponentProps<"div">) {
  return <>{children}</>;
}
