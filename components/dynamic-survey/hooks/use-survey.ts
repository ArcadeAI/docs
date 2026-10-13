"use client";
import posthog, { type Survey } from "posthog-js";
import { type FormEvent, useRef, useState } from "react";

import {
  createSurveyEventProperties,
  getNextQuestionIndex,
  getQuestionResponse,
} from "../utils";

interface UseSurveyProps {
  /* eslint-disable no-unused-vars */
  onComplete: (data: Record<string, unknown>) => void;
  surveyData: Survey | null;
}

export const useSurvey = ({ surveyData, onComplete }: UseSurveyProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, unknown>>({});
  const [questionPath, setQuestionPath] = useState<number[]>([0]);
  const submitted = useRef<boolean>(false);

  const handleSubmitQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!surveyData) {
      return;
    }

    const currentQuestion = surveyData.questions[currentQuestionIndex];
    if (!currentQuestion) {
      return;
    }

    const response = getQuestionResponse(formData, currentQuestion.type);
    const hasValidResponse =
      response !== null &&
      response !== undefined &&
      (!Array.isArray(response) || response.length > 0);

    // Update responses if valid
    const updatedResponses = hasValidResponse
      ? {
          ...responses,
          [currentQuestionIndex]: response,
        }
      : responses;

    const nextIndex = getNextQuestionIndex(
      surveyData,
      currentQuestionIndex,
      response,
      posthog
    );

    if (nextIndex === "end") {
      const data = createSurveyEventProperties(updatedResponses, surveyData.id);
      if (!submitted.current) {
        posthog.capture("survey sent", data);
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
        setCurrentQuestionIndex(newPath.at(-1) ?? 0);
        return newPath;
      });
    }
  };

  const currentQuestion = surveyData?.questions[currentQuestionIndex];

  return {
    currentQuestion,
    currentQuestionIndex,
    handleBack,
    handleSubmitQuestion,
    responses,
    totalQuestions: surveyData?.questions.length ?? 0,
  };
};
