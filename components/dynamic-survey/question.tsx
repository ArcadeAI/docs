import type {
  BasicSurveyQuestion,
  MultipleSurveyQuestion,
  SurveyQuestion,
} from "posthog-js";

import { MultipleChoiceQuestion } from "./multiple-choice-question";
import { OpenQuestion } from "./open-question";
import { SingleChoiceQuestion } from "./single-choice-question";

type QuestionProps = {
  question: SurveyQuestion;
  previousResponse?: string;
};

export function Question({ question, previousResponse }: QuestionProps) {
  if (question.type === "single_choice") {
    return (
      <SingleChoiceQuestion
        previousResponse={previousResponse as string}
        question={question as MultipleSurveyQuestion}
      />
    );
  }

  if (question.type === "multiple_choice") {
    return (
      <MultipleChoiceQuestion
        previousResponse={previousResponse ? [previousResponse] : undefined}
        question={question as MultipleSurveyQuestion}
      />
    );
  }

  if (question.type === "open") {
    return (
      <OpenQuestion
        previousResponse={previousResponse}
        question={question as BasicSurveyQuestion}
      />
    );
  }

  return null;
}
