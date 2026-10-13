"use client";

import { type RefObject, useEffect, useId, useRef, useState } from "react";

interface MermaidProps {
  chart: string;
}

function useIsVisible(ref: RefObject<HTMLDivElement | null>): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        observer.disconnect();
        setIsIntersecting(true);
      }
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

/**
 * The Mermaid renderer Nextra used (`@theguild/remark-mermaid`), ported: the
 * diagram is drawn the first time its container scrolls into view, with the
 * same Mermaid config, and redrawn when the `<html>` theme class changes.
 * `remarkMdxMermaid` (source.config.ts) turns ```mermaid fences into
 * `<Mermaid chart="..." />`.
 */
export function Mermaid({ chart }: MermaidProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(containerRef);

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const htmlElement = document.documentElement;
    let cancelled = false;

    async function renderChart() {
      const container = containerRef.current;
      if (!container) {
        return;
      }
      const isDarkTheme =
        htmlElement.classList.contains("dark") ||
        htmlElement.getAttribute("data-theme") === "dark";
      const { default: mermaid } = await import("mermaid");
      try {
        mermaid.initialize({
          fontFamily: "inherit",
          // Mermaid 12 defaults to the ELK layout and the "neo" look; keep the
          // layout and look the diagrams were written for.
          layout: "dagre",
          look: "classic",
          securityLevel: "loose",
          startOnLoad: false,
          theme: isDarkTheme ? "dark" : "default",
          themeCSS: "margin: 1.5rem auto 0;",
        });
        const scratch = document.createElement("div");
        container.append(scratch);
        const { svg } = await mermaid.render(
          // strip invalid characters for `id` attribute
          id.replaceAll(":", ""),
          chart.replaceAll("\\n", "\n"),
          scratch
        );
        if (!cancelled) {
          container.replaceChildren(
            document.createRange().createContextualFragment(svg)
          );
        }
      } catch {
        // Invalid diagram source: leave the container empty, as Nextra did.
      }
    }

    const observer = new MutationObserver(renderChart);
    observer.observe(htmlElement, { attributes: true });
    renderChart();
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [chart, id, isVisible]);

  return <div ref={containerRef} />;
}
