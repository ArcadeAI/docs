"use client";

import posthog, { type Survey } from "posthog-js";
import { useEffect, useState } from "react";
import DynamicSurvey from "./dynamic-survey";

const SURVEY_ID = "019db7ed-8745-0000-6627-84950f734a99";

export const ToolFeedbackSurvey = () => {
  const [surveyData, setSurveyData] = useState<Survey | null>(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const unsubscribe = posthog.onFeatureFlags(() => {
      posthog.getSurveys((surveys) => {
        const survey = surveys.find((s) => s.id === SURVEY_ID);
        if (survey) {
          setSurveyData(survey);
        }
      }, true);
    });
    return unsubscribe;
  }, []);

  const handleSurveyComplete = () => {
    setCompleted(true);
  };

  const handleSurveyBack = () => {
    /* no-op */
  };

  return (
    <>
      <h2 className="mb-4 font-bold text-2xl" id="tool-feedback-survey-header">
        Tool feedback survey
      </h2>
      {completed && (
        <p className="mb-4 text-gray-500 text-sm">
          Thank you! We will review your feedback soon.
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
