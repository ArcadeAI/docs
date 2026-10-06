import {
  Step as FumadocsStep,
  Steps as FumadocsSteps,
} from "fumadocs-ui/components/steps";
import type { ReactNode } from "react";

/**
 * Nextra numbered `###` headings inside `<Steps>` automatically. Fumadocs
 * needs each step wrapped in `<Step>`; `lib/remark-nextra-steps.ts` performs
 * that wrapping at compile time, so MDX authored for Nextra keeps working.
 */
export function Steps({ children }: { children: ReactNode }) {
  return <FumadocsSteps>{children}</FumadocsSteps>;
}

export function Step({ children }: { children: ReactNode }) {
  return <FumadocsStep>{children}</FumadocsStep>;
}
