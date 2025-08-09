import { Check, Important, Info, Note, Tip, Warning } from '@markdown/callouts';
import { Card, Cards } from '@markdown/cards';
import { DarkOnly, LightOnly } from '@markdown/theme-content';
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';
import { Hero } from '@/components/hero';
import ToggleContent from '@/components/toggle-content';

const docsComponents = getDocsMDXComponents();

export function useMDXComponents(components) {
  return {
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
  };
}
