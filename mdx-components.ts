import type { UseMDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getDocsMdxComponents } from "nextra-theme-docs";
import CustomPre from "./app/_components/custom-pre";
import { DashboardLink } from "./app/_components/dashboard-link";
import { GlossaryTerm } from "./app/_components/glossary-term";
import { GuideOverview } from "./app/_components/guide-overview";

const docsComponents = getDocsMdxComponents({
  pre: CustomPre,
});

export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(
  components?: T
) => ({
  ...docsComponents,
  DashboardLink,
  GlossaryTerm,
  GuideOverview,
  ...components,
});
