import { Button } from "@/components/ui/button";

export interface NavigationProps {
  onBack: () => void;
  buttonText?: string;
  disableBackButton?: boolean;
}

export function Navigation({
  onBack,
  buttonText = "Next",
  disableBackButton,
}: NavigationProps) {
  return (
    <div className="mt-4 flex w-full justify-between gap-4">
      <Button
        type="button"
        variant="outline"
        onClick={onBack}
        disabled={disableBackButton}
      >
        Back
      </Button>
      <Button type="submit">{buttonText}</Button>
    </div>
  );
}
