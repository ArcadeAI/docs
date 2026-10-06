"use client";
import { Button } from "@arcadeai/design-system";

export interface NavigationProps {
  buttonText?: string;
  disableBackButton?: boolean;
  onBack: () => void;
}

export function Navigation({
  onBack,
  buttonText = "Next",
  disableBackButton,
}: NavigationProps) {
  return (
    <div className="mt-4 flex w-full justify-between gap-4">
      <Button
        disabled={disableBackButton}
        onClick={onBack}
        type="button"
        variant="outline"
      >
        Back
      </Button>
      <Button type="submit">{buttonText}</Button>
    </div>
  );
}
