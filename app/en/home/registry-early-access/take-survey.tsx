"use client";

import { Button } from "@arcadeai/design-system";

export const TakeSurvey = () => (
  <Button
    className="my-6 inline-flex items-center justify-center rounded-md bg-primary px-4 font-medium text-primary-foreground text-sm hover:bg-primary/90"
    onClick={() => {
      document
        .getElementById("early-access-registry-survey-header")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Take the survey
  </Button>
);
