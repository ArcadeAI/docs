"use client";

import { Button } from "@arcadeai/design-system";
import { usePostHog } from "posthog-js/react";

export const TakeSurvey = () => {
  const posthog = usePostHog();

  const handleClick = () => {
    posthog?.capture("take_survey_clicked", {
      survey_type: "early_access_registry",
      source: "registry_early_access_page",
    });
    document
      .getElementById("early-access-registry-survey-header")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button
      className="my-6 inline-flex items-center justify-center rounded-md bg-primary px-4 font-medium text-primary-foreground text-sm hover:bg-primary/90"
      onClick={handleClick}
    >
      Take the survey
    </Button>
  );
};
