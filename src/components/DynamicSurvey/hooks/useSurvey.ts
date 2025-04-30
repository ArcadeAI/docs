import { Survey } from "posthog-js";
import { usePostHog } from "posthog-js/react";
import { FormEvent, useRef, useState } from "react";

import {
  createSurveyEventProperties,
  getNextQuestionIndex,
  getQuestionResponse,
} from "../utils";

interface UseSurveyProps {
  surveyData: Survey | null;
  onComplete: (data: Record<string, unknown>) => void;
}

export const useSurvey = ({ surveyData, onComplete }: UseSurveyProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const [responses, setResponses] = useState<Record<number, any>>({});
  const [questionPath, setQuestionPath] = useState<number[]>([0]);
  const submitted = useRef(false);
  const posthog = usePostHog();

  const handleSubmitQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!surveyData) return;

    const currentQuestion = surveyData.questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const response = getQuestionResponse(formData, currentQuestion.type);
    const hasValidResponse =
      response !== null &&
      response !== undefined &&
      (!Array.isArray(response) || response.length > 0);

    // Update responses if valid
    const updatedResponses = hasValidResponse
      ? {
          ...responses,
          [currentQuestion.originalQuestionIndex]: response,
        }
      : responses;

    const nextIndex = getNextQuestionIndex(
      surveyData,
      currentQuestionIndex,
      response,
      posthog,
    );

    if (nextIndex === "end") {
      const data = createSurveyEventProperties(updatedResponses, surveyData.id);
      if (!submitted.current) {
        posthog?.capture("survey sent", data);
        submitted.current = true;
      }
      onComplete(data);
    } else {
      setCurrentQuestionIndex(nextIndex);
      setQuestionPath((prev) => [...prev, nextIndex]);
      setResponses(updatedResponses);
    }
  };

  const handleBack = () => {
    if (questionPath.length > 1) {
      setQuestionPath((prev) => {
        const newPath = prev.slice(0, -1);
        setCurrentQuestionIndex(newPath[newPath.length - 1]);
        return newPath;
      });
    }
  };

  const currentQuestion = surveyData?.questions[currentQuestionIndex];
  const previousResponse = currentQuestion
    ? responses[currentQuestion.originalQuestionIndex]
    : undefined;

  return {
    currentQuestion,
    previousResponse,
    handleSubmitQuestion,
    handleBack,
    currentQuestionIndex,
    totalQuestions: surveyData?.questions.length ?? 0,
  };
};
