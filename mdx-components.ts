import type { UseMDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getDocsMdxComponents } from "nextra-theme-docs";
import CustomPre from "./app/_components/custom-pre";
import { GlossaryTerm } from "./app/_components/glossary-term";
import { GuideOverview } from "./app/_components/guide-overview";
import Note from "./app/_components/note";

const docsComponents = getDocsMdxComponents({
  pre: CustomPre,
});

export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(
  components?: T
) => ({
  ...docsComponents,
  GlossaryTerm,
  GuideOverview,
  Note,
  ...components,
});
