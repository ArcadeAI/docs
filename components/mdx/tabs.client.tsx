"use client";

import {
  Children,
  type ComponentProps,
  createContext,
  isValidElement,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { cx } from "./elements";

type TabItem = ReactNode | { label: ReactNode; disabled?: boolean };

function isTabObjectItem(
  item: TabItem
): item is { label: ReactNode; disabled?: boolean } {
  return !!item && typeof item === "object" && "label" in item;
}

export interface TabsProps {
  children?: ReactNode;
  className?: string;
  defaultIndex?: number;
  items: TabItem[];
  onChange?: (index: number) => void;
  selectedIndex?: number;
  /** Shares and remembers the selected tab (localStorage) across groups. */
  storageKey?: string;
  tabClassName?: string;
}

interface TabsContextValue {
  baseId: string;
  selected: number;
}

const TabsContext = createContext<TabsContextValue | null>(null);
const TabIndexContext = createContext(0);

function clampIndex(index: number, count: number): number {
  if (!Number.isFinite(index) || index < 0) {
    return 0;
  }
  return Math.min(index, Math.max(count - 1, 0));
}

/** The enabled tab reached from `from` by `key`, as Headless UI resolves it. */
function targetIndex(
  key: string,
  from: number,
  disabled: boolean[]
): number | undefined {
  const count = disabled.length;
  const enabled = disabled.flatMap((isDisabled, i) => (isDisabled ? [] : [i]));
  if (key === "Home" || key === "PageUp") {
    return enabled[0];
  }
  if (key === "End" || key === "PageDown") {
    return enabled.at(-1);
  }
  if (key !== "ArrowRight" && key !== "ArrowLeft") {
    return;
  }
  const step = key === "ArrowRight" ? 1 : -1;
  for (let offset = 1; offset <= count; offset += 1) {
    const next = (((from + step * offset) % count) + count) % count;
    if (!disabled[next]) {
      return next;
    }
  }
}

function readStoredIndex(storageKey: string): number {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(storageKey);
  } catch {
    // localStorage unavailable (private mode, blocked storage).
  }
  const index = Number(stored);
  return Number.isNaN(index) ? 0 : index;
}

/** Index of the panel that contains the element the URL hash points at. */
function panelIndexForHash(panels: HTMLElement, hash: string): number {
  let target: Element | null = null;
  try {
    target = panels.querySelector(
      `[role=tabpanel]:has([id="${CSS.escape(decodeURIComponent(hash))}"])`
    );
  } catch {
    return -1;
  }
  return target ? Array.from(panels.children).indexOf(target) : -1;
}

/**
 * Nextra's `<Tabs items={[...]} storageKey="...">`, ported: underline tabs,
 * every panel rendered into the HTML (inactive ones `hidden`), the selected
 * index stored in `localStorage[storageKey]` and synced between groups through
 * `storage` events, and a hash that points inside a panel selects that panel.
 * Keyboard handling follows Headless UI's `TabGroup`, which Nextra used.
 */
export function Tabs({
  items,
  children,
  storageKey,
  defaultIndex = 0,
  selectedIndex: controlledIndex,
  onChange,
  className,
  tabClassName,
}: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const tabPanelsRef = useRef<HTMLDivElement>(null);
  const baseId = useId();

  useEffect(() => {
    if (controlledIndex !== undefined) {
      setSelectedIndex(controlledIndex);
    }
  }, [controlledIndex]);

  useEffect(() => {
    function selectPanelForHash() {
      const hash = location.hash.replace("#", "");
      const panels = tabPanelsRef.current;
      if (!(hash && panels)) {
        return;
      }
      const index = panelIndexForHash(panels, hash);
      if (index === -1) {
        return;
      }
      setSelectedIndex(index);
      // Re-apply the hash so the browser scrolls once the panel is visible.
      location.hash = "";
      requestAnimationFrame(() => {
        location.hash = `#${hash}`;
      });
    }
    selectPanelForHash();
    window.addEventListener("hashchange", selectPanelForHash);
    return () => {
      window.removeEventListener("hashchange", selectPanelForHash);
    };
  }, []);

  useEffect(() => {
    if (!storageKey) {
      return;
    }
    function onStorage(event: StorageEvent) {
      if (event.key === storageKey) {
        setSelectedIndex(Number(event.newValue));
      }
    }
    setSelectedIndex(readStoredIndex(storageKey));
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [storageKey]);

  const handleChange = useCallback(
    (index: number) => {
      if (storageKey) {
        const newValue = String(index);
        try {
          localStorage.setItem(storageKey, newValue);
        } catch {
          // localStorage unavailable: still sync the groups on this page.
        }
        window.dispatchEvent(
          new StorageEvent("storage", { key: storageKey, newValue })
        );
        return;
      }
      setSelectedIndex(index);
      onChange?.(index);
    },
    [storageKey, onChange]
  );

  const disabledTabs = useMemo(
    () => items.map((item) => isTabObjectItem(item) && !!item.disabled),
    [items]
  );

  const onTabClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      handleChange(Number(event.currentTarget.dataset.index));
    },
    [handleChange]
  );

  const onTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const from = Number(event.currentTarget.dataset.index);
      const next = targetIndex(event.key, from, disabledTabs);
      if (next === undefined) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const tabs =
        event.currentTarget.parentElement?.querySelectorAll<HTMLElement>(
          "[role=tab]"
        );
      tabs?.[next]?.focus();
      handleChange(next);
    },
    [disabledTabs, handleChange]
  );

  const selected = clampIndex(selectedIndex, items.length);
  const context = useMemo(() => ({ baseId, selected }), [baseId, selected]);
  const tabs = items.map((item, index) => ({
    disabled: disabledTabs[index] ?? false,
    id: `${baseId}-tab-${index}`,
    index,
    isSelected: index === selected,
    label: isTabObjectItem(item) ? item.label : item,
  }));
  const panels = Children.toArray(children)
    .filter(isValidElement)
    .map((panel, index) => ({
      id: `${baseId}-panel-${index}`,
      index,
      panel,
    }));

  return (
    <TabsContext.Provider value={context}>
      <div
        aria-orientation="horizontal"
        className={cx(
          "nextra-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain",
          "mt-4 flex w-full gap-2 border-gray-200 border-b pb-px dark:border-neutral-800",
          "focus-visible:nextra-focus",
          className
        )}
        role="tablist"
      >
        {tabs.map(({ disabled, id, index, isSelected, label }) => (
          <button
            aria-controls={`${baseId}-panel-${index}`}
            aria-selected={isSelected}
            className={cx(
              "focus-visible:nextra-focus focus-visible:ring-inset",
              "cursor-pointer whitespace-nowrap",
              "rounded-t-[.25rem] p-2 font-medium leading-5 transition-colors",
              "-mb-0.5 select-none border-b-2",
              isSelected &&
                "border-current text-(--x-color-primary-600) outline-none",
              !isSelected &&
                disabled &&
                "pointer-events-none border-transparent text-gray-400 dark:text-neutral-600",
              !(isSelected || disabled) &&
                "border-transparent text-gray-600 hover:border-gray-200 hover:text-black dark:text-gray-200 dark:hover:border-neutral-800 dark:hover:text-white",
              tabClassName
            )}
            data-index={index}
            data-selected={isSelected ? "" : undefined}
            disabled={disabled}
            id={id}
            key={id}
            onClick={onTabClick}
            onKeyDown={onTabKeyDown}
            role="tab"
            tabIndex={isSelected ? 0 : -1}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
      <div ref={tabPanelsRef}>
        {panels.map(({ panel, index, id }) => (
          <TabIndexContext.Provider key={id} value={index}>
            {panel}
          </TabIndexContext.Provider>
        ))}
      </div>
    </TabsContext.Provider>
  );
}

/** `<Tabs.Tab>`: one panel. Stays in the DOM when it is not selected. */
export function Tab({ children, className, ...props }: ComponentProps<"div">) {
  const context = useContext(TabsContext);
  const index = useContext(TabIndexContext);
  const isSelected = context ? context.selected === index : true;
  return (
    <div
      aria-labelledby={context ? `${context.baseId}-tab-${index}` : undefined}
      className={cx(
        "mt-[1.25em] rounded-[.25rem] focus-visible:nextra-focus",
        className
      )}
      data-selected={isSelected ? "" : undefined}
      hidden={!isSelected}
      id={context ? `${context.baseId}-panel-${index}` : undefined}
      role="tabpanel"
      style={isSelected ? undefined : { display: "none" }}
      tabIndex={isSelected ? 0 : -1}
      {...props}
    >
      {children}
    </div>
  );
}
