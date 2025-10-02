import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { UseMDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getDocsMdxComponents } from "nextra-theme-docs";
import { GlossaryTerm } from "./app/_components/glossary-term";

const docsComponents = getDocsMdxComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

// biome-ignore lint/style/useNamingConvention: This is ok for Nextra
export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(
  components?: T
) => ({
  ...docsComponents,
  GlossaryTerm,
  ...components,
});
