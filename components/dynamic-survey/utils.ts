import { type Survey, SurveyQuestionBranchingType } from "posthog-js";

/** The part of the PostHog client used for survey branching. */
interface SurveyBranchingClient {
  getNextSurveyStep: (
    survey: Survey,
    currentIndex: number,
    response: unknown
  ) => number | SurveyQuestionBranchingType | undefined;
}

export const getQuestionResponse = (
  formData: FormData,
  questionType: string
) => {
  switch (questionType) {
    case "single_choice":
      return formData.get("choice");
    case "multiple_choice": {
      const choices = Array.from(formData.keys()).filter(
        (key) => key !== "other"
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
  response: unknown
): string | string[] | null => {
  if (response === null || response === undefined || response === "") {
    return null;
  }
  if (Array.isArray(response)) {
    if (response.length === 0) {
      return null;
    }
    return response.map((r) =>
      r === null || r === undefined ? "" : String(r)
    );
  }
  return response === null ? null : String(response);
};
export const createSurveyEventProperties = (
  responses: Record<number, unknown>,
  surveyId: string
) => {
  const properties: Record<string, string | string[]> = {
    $survey_id: surveyId,
  };
  Object.entries(responses).forEach(([, response], i) => {
    const formattedResponse = formatSurveyResponse(response);
    // Only include responses that have a value
    if (formattedResponse === null) {
      return;
    }
    const key = i === 0 ? "$survey_response" : `$survey_response_${i}`;
    properties[key] = formattedResponse;
  });
  return properties;
};

export const getNextQuestionIndex = (
  survey: Survey,
  currentIndex: number,
  response: unknown,
  // PostHog client type is not exported broadly; keep as unknown
  posthog: unknown
): number | "end" => {
  if (!survey.questions[currentIndex].branching) {
    if (currentIndex === survey.questions.length - 1) {
      return "end";
    }
    return currentIndex + 1;
  }

  const nextStep = (
    posthog as SurveyBranchingClient | null | undefined
  )?.getNextSurveyStep(survey, currentIndex, response);

  if (nextStep === SurveyQuestionBranchingType.End) {
    return "end";
  }

  return typeof nextStep === "number" ? nextStep : currentIndex + 1;
};
