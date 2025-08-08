import { Label } from "@arcadeai/design-system";
import { RadioGroup, RadioGroupItem } from "@arcadeai/design-system";
import { MultipleSurveyQuestion } from "posthog-js";

interface SingleChoiceQuestionProps {
  question: MultipleSurveyQuestion;
  previousResponse?: string;
}

export function SingleChoiceQuestion({
  question,
  previousResponse,
}: SingleChoiceQuestionProps) {
  return (
    <RadioGroup
      name="choice"
      className="space-y-3"
      defaultValue={previousResponse}
      required={!question.optional}
    >
      {question.choices?.map((choice) => (
        <div key={choice} className="flex items-center space-x-2">
          <RadioGroupItem value={choice} id={choice} />
          <Label htmlFor={choice}>{choice}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
