import { Textarea } from "@arcadeai/design-system";
import { BasicSurveyQuestion } from "posthog-js";

interface OpenQuestionProps {
  question: BasicSurveyQuestion;
  previousResponse?: string;
}

export function OpenQuestion({
  question,
  previousResponse,
}: OpenQuestionProps) {
  return (
    <Textarea
      id="response"
      name="response"
      placeholder="Type your answer here..."
      className="min-h-[100px]"
      required={!question.optional}
      defaultValue={previousResponse || ""}
    />
  );
}
