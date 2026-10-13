"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@arcadeai/design-system";

type TabContent = {
  label: string;
  content: Record<string, string[]>;
};

export function TabSelect({
  tabs,
  activeIndex,
  onChange,
}: {
  tabs: TabContent[];
  activeIndex: number;
  onChange: (index: number) => void;
}) {
  if (tabs.length <= 1) {
    return null;
  }
  return (
    <Select
      onValueChange={(value) => onChange(Number(value))}
      value={String(activeIndex)}
    >
      <SelectTrigger className="h-9 w-[160px] border-muted/60 text-sm hover:border-muted">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {tabs.map((tab, index) => (
          <SelectItem className="text-sm" key={tab.label} value={String(index)}>
            {tab.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
