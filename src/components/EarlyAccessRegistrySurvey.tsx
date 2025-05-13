import { useEffect, useState } from "react";
import DynamicSurvey from "./DynamicSurvey";
import { Survey } from "posthog-js";
import { usePostHog } from "posthog-js/react";

const SURVEY_ID = "019683f6-4fe2-0000-d182-6ef8f3982fc3";

export const EarlyAccessRegistrySurvey = () => {
  const posthog = usePostHog();
  const [surveyData, setSurveyData] = useState<Survey | null>(null);
  const [completed, setCompleted] = useState(false);

  function loadSurvey() {
    posthog.getSurveys((surveys) => {
      const survey = surveys.find((s) => s.id === SURVEY_ID);
      if (survey) setSurveyData(survey);
    });
  }

  useEffect(() => {
    if (!posthog) return;
    posthog.onFeatureFlags(loadSurvey);
  }, [posthog]);

  const handleSurveyComplete = () => {
    setCompleted(true);
  };

  return (
    <>
      <h2
        className="mb-4 text-2xl font-bold"
        id="early-access-registry-survey-header"
      >
        Early Access Registry Survey
      </h2>
      {completed && (
        <p className="mb-4 text-sm text-gray-500">
          Thank you! We will be in touch soon.
        </p>
      )}
      {!completed && (
        <DynamicSurvey
          surveyData={surveyData}
          onComplete={handleSurveyComplete}
          onBack={() => {}}
        />
      )}
    </>
  );
};
