import { Survey, SurveyQuestionBranchingType } from "posthog-js";

export const getQuestionResponse = (
  formData: FormData,
  questionType: string,
) => {
  switch (questionType) {
    case "single_choice":
      return formData.get("choice");
    case "multiple_choice": {
      const choices = Array.from(formData.keys()).filter(
        (key) => key !== "other",
      );
      const otherValue = formData.get("other")?.toString();
      return otherValue ? [...choices, otherValue] : choices;
    }
    case "open":
      return formData.get("response");
    default:
      return null;
  }
};

export const formatSurveyResponse = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  response: any,
): string | string[] | null => {
  if (response === null || response === undefined || response === "")
    return null;
  return Array.isArray(response)
    ? response.length > 0
      ? response.map((r) => r?.toString() || "")
      : null
    : response?.toString() || null;
};
export const createSurveyEventProperties = (
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  responses: Record<number, any>,
  surveyId: string,
) => {
  return Object.entries(responses).reduce(
    (acc, [, response], i) => {
      const formattedResponse = formatSurveyResponse(response);
      // Only include responses that have a value
      if (formattedResponse === null) return acc;

      const key = i === 0 ? "$survey_response" : `$survey_response_${i}`;
      return { ...acc, [key]: formattedResponse };
    },
    { $survey_id: surveyId },
  );
};

export const getNextQuestionIndex = (
  survey: Survey,
  currentIndex: number,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  response: any,
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  posthog: any,
): number | "end" => {
  if (!survey.questions[currentIndex].branching) {
    if (currentIndex === survey.questions.length - 1) {
      return "end";
    }
    return currentIndex + 1;
  }

  const nextStep = posthog?.getNextSurveyStep(survey, currentIndex, response);

  if (nextStep === SurveyQuestionBranchingType.End) {
    return "end";
  }

  return typeof nextStep === "number" ? nextStep : currentIndex + 1;
};
