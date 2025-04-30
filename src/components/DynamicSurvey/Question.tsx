import {
  BasicSurveyQuestion,
  MultipleSurveyQuestion,
  SurveyQuestion,
} from "posthog-js";

import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { OpenQuestion } from "./OpenQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";

interface QuestionProps {
  question: SurveyQuestion;
  previousResponse?: string;
}

export function Question({ question, previousResponse }: QuestionProps) {
  if (question.type === "single_choice") {
    return (
      <SingleChoiceQuestion
        question={question as MultipleSurveyQuestion}
        previousResponse={previousResponse as string}
      />
    );
  }

  if (question.type === "multiple_choice") {
    return (
      <MultipleChoiceQuestion
        question={question as MultipleSurveyQuestion}
        previousResponse={[previousResponse]}
      />
    );
  }

  if (question.type === "open") {
    return (
      <OpenQuestion
        question={question as BasicSurveyQuestion}
        previousResponse={previousResponse}
      />
    );
  }

  return null;
}
