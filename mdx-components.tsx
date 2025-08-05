import { Hero } from "@/components/Hero";
import ToggleContent from "@/components/ToggleContent";
import { Check, Important, Info, Note, Tip, Warning } from "@markdown/Callouts";
import { Card, Cards } from "@markdown/Cards";
import { DarkOnly, LightOnly } from "@markdown/ThemeContent";
import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";

const docsComponents = getDocsMDXComponents();

export const useMDXComponents = (components) => ({
  ...docsComponents,
  ...components,
  // ... your additional components
  Hero,
  Card,
  Cards,
  LightOnly,
  DarkOnly,
  Info,
  Warning,
  Note,
  Tip,
  Important,
  Check,
  ToggleContent,
});
