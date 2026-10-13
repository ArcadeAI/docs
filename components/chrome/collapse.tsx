"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";

interface CollapseProps {
  children: ReactNode;
  className?: string;
  closeDuration?: number;
  /** Animate the width instead of the height (sidebar collapse). */
  horizontal?: boolean;
  isOpen: boolean;
  openDuration?: number;
}

/**
 * Animated open/close container. The children stay in the DOM while closed
 * (height 0, clipped) so every sidebar link is present in the served HTML.
 */
export function Collapse({
  children,
  className,
  closeDuration = 300,
  horizontal = false,
  isOpen,
  openDuration = 500,
}: CollapseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [initialOpen] = useState(isOpen);
  const animationRef = useRef<number>(0);
  const previousOpen = useRef(isOpen);

  useEffect(() => {
    // Animate only when the state really changed, not on mount or re-mount.
    if (previousOpen.current === isOpen) {
      return;
    }
    previousOpen.current = isOpen;
    const container = containerRef.current;
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = 0;
    }
    const child = container?.firstElementChild;
    if (!(container && child instanceof HTMLElement)) {
      return;
    }
    if (horizontal) {
      child.style.width = `${child.clientWidth}px`;
      container.style.width = `${child.clientWidth}px`;
    } else {
      container.style.height = `${child.clientHeight}px`;
    }
    if (isOpen) {
      animationRef.current = window.setTimeout(() => {
        container.style.removeProperty("height");
      }, openDuration);
    } else {
      requestAnimationFrame(() => {
        if (horizontal) {
          container.style.width = "0";
        } else {
          container.style.height = "0";
        }
      });
    }
  }, [horizontal, isOpen, openDuration]);

  return (
    <div
      className={cn(
        "transform-gpu transition-all ease-in-out motion-reduce:transition-none",
        isOpen ? "opacity-100" : "overflow-hidden opacity-0",
        className
      )}
      ref={containerRef}
      style={{
        ...(initialOpen || horizontal ? undefined : { height: 0 }),
        transitionDuration: `${isOpen ? openDuration : closeDuration}ms`,
      }}
    >
      {children}
    </div>
  );
}
