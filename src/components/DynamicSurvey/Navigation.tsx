import { Button } from "@/components/ui/button";

export interface NavigationProps {
  onBack: () => void;
  buttonText?: string;
}

export function Navigation({ onBack, buttonText = "Next" }: NavigationProps) {
  return (
    <div className="mt-4 flex w-full justify-between gap-4">
      <Button type="button" variant="outline" onClick={onBack}>
        Back
      </Button>
      <Button type="submit">{buttonText}</Button>
    </div>
  );
}
