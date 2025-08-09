'use client';

import type { Survey } from 'posthog-js';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import DynamicSurvey from './dynamic-survey';

const SURVEY_ID = '019683f6-4fe2-0000-d182-6ef8f3982fc3';

export const EarlyAccessRegistrySurvey = () => {
  const posthog = usePostHog();
  const [surveyData, setSurveyData] = useState<Survey | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!posthog) {
      return;
    }
    posthog.onFeatureFlags(() => {
      posthog.getSurveys((surveys) => {
        const survey = surveys.find((s) => s.id === SURVEY_ID);
        if (survey) {
          setSurveyData(survey);
        }
      }, true);
    });
  }, [posthog]);

  const handleSurveyComplete = () => {
    setCompleted(true);
  };

  const handleSurveyBack = () => {
    /* no-op */
  };

  return (
    <>
      <h2
        className="mb-4 font-bold text-2xl"
        id="early-access-registry-survey-header"
      >
        Early Access Registry Survey
      </h2>
      {completed && (
        <p className="mb-4 text-gray-500 text-sm">
          Thank you! We will be in touch soon.
        </p>
      )}
      {!completed && (
        <DynamicSurvey
          onBack={handleSurveyBack}
          onComplete={handleSurveyComplete}
          surveyData={surveyData}
        />
      )}
    </>
  );
};
