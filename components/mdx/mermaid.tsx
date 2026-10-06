"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface MermaidProps {
  chart: string;
}

/**
 * Renders a Mermaid diagram client-side. `remarkMdxMermaid` (source.config.ts)
 * rewrites ```mermaid fences into `<Mermaid chart="..." />`, which replaces the
 * diagram rendering Nextra provided out of the box. Mermaid draws straight into
 * the container element, so no HTML string is injected from React.
 */
export function Mermaid({ chart }: MermaidProps) {
  const container = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const element = container.current;
    if (!element) {
      return;
    }
    let cancelled = false;
    const render = async () => {
      const { default: mermaid } = await import("mermaid");
      if (cancelled) {
        return;
      }
      mermaid.initialize({
        fontFamily: "inherit",
        securityLevel: "strict",
        startOnLoad: false,
        theme: resolvedTheme === "dark" ? "dark" : "default",
      });
      element.textContent = chart.replaceAll("\\n", "\n");
      element.removeAttribute("data-processed");
      try {
        await mermaid.run({ nodes: [element] });
      } catch (error) {
        element.textContent =
          error instanceof Error ? error.message : String(error);
      }
    };
    render();
    return () => {
      cancelled = true;
    };
  }, [chart, resolvedTheme]);

  return (
    <div
      className="mermaid my-6 flex justify-center overflow-x-auto [&>svg]:max-w-full"
      ref={container}
    />
  );
}
