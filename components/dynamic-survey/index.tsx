"use client";
import posthog, { type Survey } from "posthog-js";
import { useEffect, useRef } from "react";
import { useSurvey } from "./hooks/use-survey";
import { Navigation } from "./navigation";
import { Progress } from "./progress";
import { Question } from "./question";

type DynamicSurveyProps = {
  surveyData: Survey | null;
  /* eslint-disable no-unused-vars */
  onComplete: (data: Record<string, unknown>) => void;
  onBack: () => void;
};

export default function DynamicSurvey({
  surveyData,
  onComplete,
  onBack,
}: DynamicSurveyProps) {
  const surveyShown = useRef(false);

  const {
    currentQuestion,
    responses,
    handleSubmitQuestion,
    handleBack,
    currentQuestionIndex,
    totalQuestions,
  } = useSurvey({ surveyData, onComplete });

  // Capture the survey shown event when the survey is loaded
  useEffect(() => {
    if (!surveyData || surveyData.questions.length === 0) {
      return;
    }
    if (!surveyShown.current) {
      posthog.capture("survey shown", { $survey_id: surveyData.id });
      surveyShown.current = true;
    }
  }, [surveyData]);

  // Capture the survey dismissed event when the user navigates away from the survey
  useEffect(() => {
    if (!surveyData) {
      return;
    }

    const handleBeforeUnload = () => {
      if (currentQuestionIndex < surveyData.questions.length - 1) {
        posthog.capture("survey dismissed", { $survey_id: surveyData.id });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [surveyData, currentQuestionIndex]);

  // Handle back button click
  const handleBackButton = () => {
    if (currentQuestionIndex === 0) {
      onBack();
    } else {
      // Otherwise use the default back behavior
      handleBack();
    }
  };

  if (!(surveyData && currentQuestion)) {
    return <output aria-live="polite">Loading...</output>;
  }

  return (
    <div
      className="flex h-full w-full flex-col space-y-4 border-border border-t py-4"
      id="dynamic-survey-container"
    >
      <Progress
        currentIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <span className="font-bold text-lg">{currentQuestion.question}</span>
      {currentQuestion.description && (
        <span className="text-muted-foreground text-sm">
          {currentQuestion.description}
        </span>
      )}

      <form key={currentQuestionIndex} onSubmit={handleSubmitQuestion}>
        <div className="space-y-8">
          <Question
            previousResponse={
              responses[currentQuestionIndex] as string | undefined
            }
            question={currentQuestion}
          />
          <Navigation
            buttonText={currentQuestion.buttonText}
            disableBackButton={currentQuestionIndex === 0}
            onBack={handleBackButton}
          />
        </div>
      </form>
    </div>
  );
}
