"use client";
import { Button } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { useCallback } from "react";

function LanguageTab({
  lang,
  isActive,
  onSelect,
}: {
  lang: string;
  isActive: boolean;
  onSelect: (language: string) => void;
}) {
  const handleClick = useCallback(() => onSelect(lang), [lang, onSelect]);
  return (
    <Button
      aria-label={`Switch to ${lang} example`}
      aria-selected={isActive}
      className={cn(
        "h-9 px-4 font-medium text-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isActive
          ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/80 active:text-primary-foreground"
          : "text-muted-foreground hover:bg-primary/60 hover:text-foreground active:bg-primary/60 active:text-foreground"
      )}
      onClick={handleClick}
      role="tab"
      size="sm"
      variant="secondary"
    >
      {lang}
    </Button>
  );
}

export function LanguageTabs({
  languages,
  currentLanguage,
  onSelect,
}: {
  languages: string[];
  currentLanguage: string;
  onSelect: (language: string) => void;
}) {
  return (
    <div
      aria-label="Programming languages"
      className="inline-flex items-center gap-1.5"
      role="tablist"
    >
      {languages.map((lang) => (
        <LanguageTab
          isActive={currentLanguage === lang}
          key={lang}
          lang={lang}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
