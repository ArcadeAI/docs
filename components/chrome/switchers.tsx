"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { GlobeIcon, MoonIcon, SunIcon } from "@/components/chrome/icons";
import { Select } from "@/components/chrome/select";

const THEME_LABELS = {
  dark: "Dark",
  light: "Light",
  system: "System",
} as const;

type ThemeId = keyof typeof THEME_LABELS;

const THEME_OPTIONS = [
  { id: "light", name: THEME_LABELS.light },
  { id: "dark", name: THEME_LABELS.dark },
  { id: "system", name: THEME_LABELS.system },
];

/** Docs are English-only; the switch is kept so the sidebar footer is unchanged. */
const LOCALES = [{ locale: "en", name: "English" }];
const LOCALE_OPTIONS = LOCALES.map((l) => ({ id: l.locale, name: l.name }));
const CURRENT_LOCALE = "en";
const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;

function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

function isThemeId(value: string | undefined): value is ThemeId {
  return value === "dark" || value === "light" || value === "system";
}

interface SwitchProps {
  className?: string;
  /** Icon only, no label. */
  lite?: boolean;
}

export function ThemeSwitch({ lite, className }: SwitchProps) {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const mounted = useMounted();
  const Icon = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
  const id: ThemeId = mounted && isThemeId(theme) ? theme : "light";

  return (
    <Select
      anchor="top start"
      className={cn("flex items-center gap-2", className)}
      onChange={setTheme}
      options={THEME_OPTIONS}
      selectedOptionName={
        <>
          <Icon height="12" />
          {lite ? null : THEME_LABELS[id]}
        </>
      }
      title="Change theme"
      value={id}
    />
  );
}

export function LocaleSwitch({ lite, className }: SwitchProps) {
  const pathname = usePathname();

  const onChange = useCallback(
    (lang: string) => {
      const go = () => {
        window.location.href = pathname.replace(
          `/${CURRENT_LOCALE}`,
          `/${lang}`
        );
      };
      // Same cookie the previous theme wrote when a language was picked.
      if ("cookieStore" in window) {
        window.cookieStore
          .set({
            expires: Date.now() + ONE_YEAR,
            name: "NEXT_LOCALE",
            path: "/",
            value: lang,
          })
          .then(go, go);
        return;
      }
      go();
    },
    [pathname]
  );

  return (
    <Select
      anchor="top start"
      className={cn("flex items-center gap-2", className)}
      onChange={onChange}
      options={LOCALE_OPTIONS}
      selectedOptionName={
        <>
          <GlobeIcon height="12" />
          {lite ? null : LOCALES.find((l) => l.locale === CURRENT_LOCALE)?.name}
        </>
      }
      title="Change language"
      value={CURRENT_LOCALE}
    />
  );
}
