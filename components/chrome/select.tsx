"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import {
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CheckIcon } from "@/components/chrome/icons";

export interface SelectOption {
  id: string;
  name: ReactNode;
}

interface SelectProps {
  /** Where the options open relative to the button. */
  anchor: "top start" | "bottom start" | "bottom end";
  className?: string;
  onChange: (id: string) => void;
  options: SelectOption[];
  /** Content of the trigger button. */
  selectedOptionName: ReactNode;
  title?: string;
  /** Selected option id. Leave empty for menus that only run an action. */
  value: string;
}

/** Distance between the trigger and the options. */
const ANCHOR_GAP = 10;
const VIEWPORT_PADDING = 0;
const NAVIGATION_KEYS = new Set(["ArrowDown", "ArrowUp", "Home", "End"]);

interface Position {
  left: number;
  maxHeight: number;
  top: number;
  width: number;
}

function nextIndex(key: string, current: number, count: number): number {
  if (key === "Home") {
    return 0;
  }
  if (key === "End") {
    return count - 1;
  }
  if (key === "ArrowDown") {
    return Math.min(count - 1, current + 1);
  }
  return Math.max(0, current - 1);
}

function optionIndex(element: HTMLElement): number {
  return Number(element.dataset.index ?? -1);
}

/**
 * Button + listbox used by the theme switch, the language switch and the
 * "Copy page" menu. Options render in a portal next to the trigger.
 */
export function Select({
  anchor,
  className,
  onChange,
  options,
  selectedOptionName,
  title,
  value,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [position, setPosition] = useState<Position | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const buttonId = `${id}-button`;
  const listId = `${id}-options`;

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    setPosition(null);
    if (restoreFocus) {
      buttonRef.current?.focus();
    }
  }, []);

  const openList = useCallback(() => {
    setActiveIndex(options.findIndex((option) => option.id === value));
    setOpen(true);
  }, [options, value]);

  const place = useCallback(() => {
    const button = buttonRef.current;
    const list = listRef.current;
    if (!(button && list)) {
      return;
    }
    const rect = button.getBoundingClientRect();
    const listWidth = Math.max(list.offsetWidth, rect.width);
    const listHeight = list.scrollHeight + 2;
    const above = anchor.startsWith("top");
    const available = above
      ? rect.top - ANCHOR_GAP - VIEWPORT_PADDING
      : window.innerHeight - rect.bottom - ANCHOR_GAP - VIEWPORT_PADDING;
    const height = Math.min(listHeight, available);
    const top = above
      ? rect.top - ANCHOR_GAP - height
      : rect.bottom + ANCHOR_GAP;
    const rawLeft = anchor.endsWith("end") ? rect.right - listWidth : rect.left;
    const left = Math.min(
      Math.max(0, rawLeft),
      Math.max(0, document.documentElement.clientWidth - listWidth)
    );
    setPosition({
      left: left + window.scrollX,
      maxHeight: available,
      top: top + window.scrollY,
      width: rect.width,
    });
  }, [anchor]);

  useLayoutEffect(() => {
    if (open) {
      place();
      listRef.current?.focus({ preventScroll: true });
    }
  }, [open, place]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        listRef.current?.contains(target)
      ) {
        return;
      }
      close(false);
    };
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, close, place]);

  const select = useCallback(
    (index: number) => {
      const option = options[index];
      if (option) {
        onChange(option.id);
        close(true);
      }
    },
    [options, onChange, close]
  );

  const onListKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" || event.key === "Tab") {
        event.preventDefault();
        close(true);
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        select(activeIndex);
        return;
      }
      if (!NAVIGATION_KEYS.has(event.key)) {
        return;
      }
      event.preventDefault();
      setActiveIndex((current) =>
        nextIndex(event.key, current, options.length)
      );
    },
    [activeIndex, close, options.length, select]
  );

  const onButtonKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openList();
      }
      // Space opens the list; Enter is left alone, as before.
      if (event.key === "Enter") {
        event.preventDefault();
      }
    },
    [openList]
  );

  const onButtonClick = useCallback(() => {
    if (open) {
      close(false);
    } else {
      openList();
    }
  }, [open, close, openList]);

  const onOptionClick = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      select(optionIndex(event.currentTarget));
    },
    [select]
  );

  const onOptionKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Enter") {
        select(optionIndex(event.currentTarget));
      }
    },
    [select]
  );

  const onOptionPointerMove = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      setActiveIndex(optionIndex(event.currentTarget));
    },
    []
  );

  const style: CSSProperties = {
    left: position?.left ?? 0,
    maxHeight: position
      ? `min(var(--anchor-max-height, 100vh), ${position.maxHeight}px)`
      : undefined,
    maxWidth: "100vw",
    overflow: "auto",
    position: "absolute",
    top: position?.top ?? 0,
    visibility: position ? undefined : "hidden",
    ["--button-width" as string]: `${position?.width ?? 0}px`,
  };

  return (
    <>
      <button
        aria-controls={open ? listId : undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={cn(
          "h-7 cursor-pointer rounded-[6px] px-2 font-medium text-xs transition-colors focus-visible:nextra-focus",
          open
            ? "bg-gray-200 text-gray-900 dark:bg-primary-100/10 dark:text-gray-50"
            : "text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-primary-100/5 dark:hover:text-gray-50",
          className
        )}
        id={buttonId}
        onClick={onButtonClick}
        onKeyDown={onButtonKeyDown}
        ref={buttonRef}
        title={title}
        type="button"
      >
        {selectedOptionName}
      </button>
      {open
        ? createPortal(
            <div
              aria-labelledby={buttonId}
              aria-orientation="vertical"
              className={cn(
                "focus-visible:nextra-focus",
                "z-30 max-h-64 min-w-(--button-width) rounded-[6px] border border-black/5 bg-nextra-bg/70 py-1 text-sm shadow-lg backdrop-blur-md dark:border-white/20"
              )}
              data-anchor={anchor}
              id={listId}
              onKeyDown={onListKeyDown}
              ref={listRef}
              role="listbox"
              style={style}
              tabIndex={0}
            >
              {options.map((option, index) => {
                const isSelected = option.id === value;
                return (
                  <div
                    aria-selected={isSelected}
                    className={cn(
                      index === activeIndex
                        ? "bg-primary-100 text-primary-800 dark:bg-primary-500/10 dark:text-primary-500"
                        : "text-gray-800 dark:text-gray-100",
                      "cursor-pointer whitespace-nowrap px-3 py-1.5 transition-colors",
                      isSelected && "flex items-center justify-between gap-3"
                    )}
                    data-index={index}
                    key={option.id}
                    onClick={onOptionClick}
                    onKeyDown={onOptionKeyDown}
                    onPointerMove={onOptionPointerMove}
                    role="option"
                    tabIndex={-1}
                  >
                    {option.name}
                    {isSelected ? <CheckIcon height="1em" /> : null}
                  </div>
                );
              })}
            </div>,
            document.body
          )
        : null}
    </>
  );
}
