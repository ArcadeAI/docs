import { Label, RadioGroup, RadioGroupItem } from "@arcadeai/design-system";
import type { MultipleSurveyQuestion } from "posthog-js";

interface SingleChoiceQuestionProps {
  previousResponse?: string;
  question: MultipleSurveyQuestion;
}

export function SingleChoiceQuestion({
  question,
  previousResponse,
}: SingleChoiceQuestionProps) {
  return (
    <RadioGroup
      className="space-y-3"
      defaultValue={previousResponse}
      name="choice"
      required={!question.optional}
    >
      {question.choices.map((choice) => (
        <div className="flex items-center space-x-2" key={choice}>
          <RadioGroupItem id={choice} value={choice} />
          <Label htmlFor={choice}>{choice}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
