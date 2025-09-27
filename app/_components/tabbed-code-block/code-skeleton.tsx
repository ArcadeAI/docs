"use client";
import { useMemo } from "react";

const SKELETON_LINES = 8;
const MIN_LINE_WIDTH = 60;
const MAX_LINE_WIDTH_VARIANCE = 40;
const ANIMATION_DELAY_STEP = 100;

export function CodeSkeleton({
  lines = SKELETON_LINES,
  minWidth = MIN_LINE_WIDTH,
  maxVariance = MAX_LINE_WIDTH_VARIANCE,
  delayStep = ANIMATION_DELAY_STEP,
}: {
  lines?: number;
  minWidth?: number;
  maxVariance?: number;
  delayStep?: number;
}) {
  const widths = useMemo(
    () =>
      Array.from(
        { length: lines },
        () => Math.random() * maxVariance + minWidth
      ),
    [lines, maxVariance, minWidth]
  );
  return (
    <div className="space-y-3 p-4">
      {Array.from({ length: lines }, (_, i) => i).map((lineIndex) => (
        <div
          className="flex items-center space-x-2"
          key={`skeleton-line-${lineIndex}`}
        >
          <div className="h-4 w-6 animate-pulse rounded bg-muted/60" />
          <div
            className="h-4 animate-pulse rounded bg-muted/40"
            style={{
              width: `${widths[lineIndex]}%`,
              animationDelay: `${lineIndex * delayStep}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
