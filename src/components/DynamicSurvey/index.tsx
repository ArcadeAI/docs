import { Survey } from "posthog-js";
import { usePostHog } from "posthog-js/react";
import { useEffect, useRef } from "react";

import { Navigation } from "./Navigation";
import { Progress } from "./Progress";
import { Question } from "./Question";
import { useSurvey } from "./hooks/useSurvey";

interface DynamicSurveyProps {
  surveyData: Survey | null;
  /* eslint-disable no-unused-vars */
  onComplete: (data: Record<string, unknown>) => void;
  onBack: () => void;
}

export default function DynamicSurvey({
  surveyData,
  onComplete,
  onBack,
}: DynamicSurveyProps) {
  const posthog = usePostHog();
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
    if (!surveyData || !posthog || surveyData.questions.length === 0) return;
    if (!surveyShown.current) {
      posthog?.capture("survey shown", { $survey_id: surveyData.id });
      surveyShown.current = true;
    }
  }, [surveyData, posthog, surveyShown]);

  // Capture the survey dismissed event when the user navigates away from the survey
  useEffect(() => {
    if (!surveyData || !posthog) return;

    const handleBeforeUnload = () => {
      if (currentQuestionIndex < surveyData.questions.length - 1) {
        posthog?.capture("survey dismissed", { $survey_id: surveyData.id });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [surveyData, posthog, currentQuestionIndex]);

  // Handle back button click
  const handleBackButton = () => {
    if (currentQuestionIndex === 0) {
      onBack();
    } else {
      // Otherwise use the default back behavior
      handleBack();
    }
  };

  if (!surveyData || !currentQuestion) return <div>Loading...</div>;

  return (
    <div
      className="flex h-full w-full flex-col space-y-4 border-t border-border py-4"
      id="dynamic-survey-container"
    >
      <Progress
        currentIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
      />
      <span className="text-lg font-bold">{currentQuestion.question}</span>
      {currentQuestion.description && (
        <span className="text-sm text-muted-foreground">
          {currentQuestion.description}
        </span>
      )}

      <form onSubmit={handleSubmitQuestion} key={currentQuestionIndex}>
        <div className="space-y-8">
          <Question
            question={currentQuestion}
            previousResponse={responses[currentQuestionIndex]}
          />
          <Navigation
            onBack={handleBackButton}
            buttonText={currentQuestion.buttonText}
            disableBackButton={currentQuestionIndex === 0}
          />
        </div>
      </form>
    </div>
  );
}
