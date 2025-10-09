import { cn } from "@arcadeai/design-system/lib/utils";
import React from "react";

type GuideOverviewProps = {
  children: React.ReactNode;
  className?: string;
};

type SectionProps = {
  children: React.ReactNode;
};

export function GuideOverview({ children, className }: GuideOverviewProps) {
  const childrenArray = React.Children.toArray(children);

  // Find specific sections by their type
  const outcomes = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === GuideOverview.Outcomes
  );
  const prerequisites = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === GuideOverview.Prerequisites
  );
  const youWillLearn = childrenArray.find(
    (child) =>
      React.isValidElement(child) && child.type === GuideOverview.YouWillLearn
  );

  return (
    <div
      className={cn(
        "my-6 rounded-lg border border-border bg-card p-6",
        className
      )}
    >
      {/* Outcomes section (full width) */}
      {outcomes && (
        <div className="mb-6">
          <h2 className="mb-3 font-semibold text-card-foreground text-xl">
            Outcomes
          </h2>
          <div className="text-muted-foreground">
            {React.isValidElement(outcomes) &&
              (outcomes.props as { children: React.ReactNode }).children}
          </div>
        </div>
      )}

      {/* Two column layout - You will Learn (2/3) and Prerequisites (1/3) */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* You will Learn column - takes 2/3 of width */}
        {youWillLearn && (
          <div className="md:col-span-2">
            <h3 className="mb-3 font-medium text-card-foreground text-lg">
              You will Learn
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              {React.isValidElement(youWillLearn) &&
                (youWillLearn.props as { children: React.ReactNode }).children}
            </div>
          </div>
        )}

        {/* Prerequisites column - takes 1/3 of width */}
        {prerequisites && (
          <div className="md:col-span-1">
            <h3 className="mb-3 font-medium text-card-foreground text-lg">
              Prerequisites
            </h3>
            <div className="space-y-2 text-muted-foreground text-sm">
              {React.isValidElement(prerequisites) &&
                (prerequisites.props as { children: React.ReactNode }).children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-components for nested structure
GuideOverview.Outcomes = function Outcomes({ children }: SectionProps) {
  return <>{children}</>;
};

GuideOverview.Prerequisites = function Prerequisites({
  children,
}: SectionProps) {
  return <>{children}</>;
};

GuideOverview.YouWillLearn = function YouWillLearn({ children }: SectionProps) {
  return <>{children}</>;
};
