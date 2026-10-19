"use client";
import { Button } from "@arcadeai/design-system";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

type BackButtonProps = {
  goBackText: string;
};

export function BackButton({ goBackText }: BackButtonProps) {
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    const hasHistory = !!window.history.state?.idx || !!document.referrer;
    setCanGoBack(hasHistory);
  }, []);

  if (!canGoBack) {
    return null;
  }

  return (
    <Button
      className="flex-1 text-black sm:flex-initial dark:text-white"
      onClick={() => window.history.back()}
      size="lg"
      variant="outline"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {goBackText}
    </Button>
  );
}
