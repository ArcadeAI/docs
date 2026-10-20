"use client";

import {
  Children,
  type ComponentProps,
  cloneElement,
  type Dispatch,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { cx } from "./elements";

const OPEN_DURATION_MS = 500;
const CLOSE_DURATION_MS = 300;

/** Nextra's `Collapse`: animates the height of its only child. */
function Collapse({
  className,
  children,
  isOpen,
}: {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialOpen] = useState(isOpen);
  const animationRef = useRef<number>(0);
  const initialRender = useRef<boolean>(true);

  useEffect(() => {
    const animation = animationRef.current;
    const container = containerRef.current;
    if (animation) {
      clearTimeout(animation);
      animationRef.current = 0;
    }
    if (initialRender.current || !container) {
      return;
    }
    const child = container.children[0] as HTMLElement | undefined;
    if (!child) {
      return;
    }
    container.style.height = `${child.clientHeight}px`;
    if (isOpen) {
      animationRef.current = window.setTimeout(() => {
        container.style.removeProperty("height");
      }, OPEN_DURATION_MS);
    } else {
      requestAnimationFrame(() => {
        container.style.height = "0";
      });
    }
  }, [isOpen]);

  useEffect(() => {
    initialRender.current = false;
  }, []);

  return (
    <div
      className={cx(
        "transform-gpu transition-all ease-in-out motion-reduce:transition-none",
        isOpen ? "opacity-100" : "overflow-hidden opacity-0",
        className
      )}
      ref={containerRef}
      style={{
        ...(initialOpen ? undefined : { height: 0 }),
        transitionDuration: `${isOpen ? OPEN_DURATION_MS : CLOSE_DURATION_MS}ms`,
      }}
    >
      <div>{children}</div>
    </div>
  );
}

type ElementWithChildren = ReactElement<{
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}>;

function findSummary(
  list: ReactNode,
  setIsOpen: Dispatch<SetStateAction<boolean>>
): [ReactNode, ReactNode] {
  let summary: ReactNode;
  const rest = Children.map(list, (child) => {
    if (summary || !isValidElement(child)) {
      return child;
    }
    const element = child as ElementWithChildren;
    if (element.type === "summary") {
      summary = cloneElement(element, {
        onClick(event: MouseEvent<HTMLElement>) {
          if ((event.target as HTMLElement).tagName !== "A") {
            event.preventDefault();
            setIsOpen((v) => !v);
          }
        },
      });
      return;
    }
    if (element.type !== Details && element.props.children) {
      const [found, remaining] = findSummary(element.props.children, setIsOpen);
      summary = found;
      return remaining;
    }
    return child;
  });
  return [summary, rest];
}

/**
 * Nextra's `<details>`: a bordered box whose body slides open and closed. It
 * also opens itself when the URL hash points at an element inside it.
 */
export function Details({
  children,
  open,
  className,
  ...props
}: ComponentProps<"details">) {
  const [isOpen, setIsOpen] = useState(!!open);
  const [delayedOpenState, setDelayedOpenState] = useState(isOpen);
  const animationRef = useRef<number>(0);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const animation = animationRef.current;
    if (animation) {
      clearTimeout(animation);
      animationRef.current = 0;
    }
    if (!isOpen) {
      animationRef.current = window.setTimeout(
        () => setDelayedOpenState(isOpen),
        CLOSE_DURATION_MS
      );
      return () => {
        clearTimeout(animationRef.current);
      };
    }
    setDelayedOpenState(true);
  }, [isOpen]);

  useEffect(() => {
    function openForHash() {
      const hash = location.hash.replace("#", "");
      if (!hash) {
        return;
      }
      const target = detailsRef.current?.querySelector(
        `[id="${CSS.escape(decodeURIComponent(hash))}"]`
      );
      if (target) {
        setIsOpen(true);
      }
    }
    openForHash();
    window.addEventListener("hashchange", openForHash);
    return () => {
      window.removeEventListener("hashchange", openForHash);
    };
  }, []);

  const [summaryElement, restChildren] = findSummary(children, setIsOpen);

  return (
    <details
      className={cx(
        "not-first:mt-4 rounded-[.25rem] border border-gray-200 bg-white p-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900",
        "overflow-hidden",
        className
      )}
      ref={detailsRef}
      {...props}
      data-expanded={isOpen ? "" : undefined}
      open={isOpen || delayedOpenState}
    >
      {summaryElement}
      <Collapse className={cx("*:pt-2", "grid")} isOpen={isOpen}>
        {restChildren}
      </Collapse>
    </details>
  );
}
