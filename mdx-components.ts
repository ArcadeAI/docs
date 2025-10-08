import { Pre, withIcons } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import type { UseMDXComponents } from "nextra/mdx-components";
import { useMDXComponents as getDocsMdxComponents } from "nextra-theme-docs";
import { GlossaryTerm } from "./app/_components/glossary-term";
import Note from "./app/_components/note";

const docsComponents = getDocsMdxComponents({
  pre: withIcons(Pre, { js: GitHubIcon }),
});

export const useMDXComponents: UseMDXComponents<typeof docsComponents> = <T>(
  components?: T
) => ({
  ...docsComponents,
  GlossaryTerm,
  Note,
  ...components,
});
