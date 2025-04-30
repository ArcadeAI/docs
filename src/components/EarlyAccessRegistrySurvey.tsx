import { useEffect, useState } from "react";
import DynamicSurvey from "./DynamicSurvey";
import { Survey } from "posthog-js";
import { usePostHog } from "posthog-js/react";

// TODO: Make this an ENV variable
const SURVEY_ID = "019683f6-4fe2-0000-d182-6ef8f3982fc3";

export const EarlyAccessRegistrySurvey = () => {
  const posthog = usePostHog();
  const [surveyData, setSurveyData] = useState<Survey | null>(null);

  function loadSurvey() {
    posthog.getSurveys((surveys) => {
      const survey = surveys.find((s) => s.id === SURVEY_ID);

      if (survey) {
        setSurveyData(survey);
        posthog?.capture("Early Access Registry Survey viewed", {
          survey_version: survey.id,
        });
      }
    });
  }

  useEffect(() => {
    if (posthog) {
      loadSurvey();
    } else {
      console.warn("PostHog is not initialized");
    }
  }, [posthog]);

  const handleSurveyComplete = (data: Record<string, unknown>) => {
    // Handle survey completion logic here
    console.log("Survey completed with data:", data);
  };

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Early Access Registry Survey</h2>
      <DynamicSurvey
        surveyData={surveyData}
        onComplete={handleSurveyComplete}
        onBack={() => {}}
      />
    </>
  );
};
