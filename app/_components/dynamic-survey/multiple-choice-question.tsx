"use client";
import { Checkbox, Input, Label } from "@arcadeai/design-system";
import type { MultipleSurveyQuestion } from "posthog-js";
import { useMemo, useState } from "react";

type MultipleChoiceQuestionProps = {
  question: MultipleSurveyQuestion;
  previousResponse?: string[];
};

export function MultipleChoiceQuestion({
  question,
  previousResponse,
}: MultipleChoiceQuestionProps) {
  const hasOtherInChoices = question.choices?.some(
    (choice) => choice.toLowerCase() === "other"
  );

  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    previousResponse || []
  );

  const shuffledChoices = useMemo(() => {
    if (!(question.choices?.length && question.shuffleOptions)) {
      return question.choices;
    }

    const [others, regular] = question.choices.reduce<[string[], string[]]>(
      ([o, r], choice) =>
        choice.toLowerCase() === "other"
          ? [[...o, choice], r]
          : [o, [...r, choice]],
      [[], []]
    );

    const ShuffleRandomOffset = 0.5;
    return [
      ...regular.sort(() => Math.random() - ShuffleRandomOffset),
      ...others,
    ];
  }, [question.choices, question.shuffleOptions]);

  const handleCheckboxChange = (choice: string, checked: boolean) => {
    setSelectedChoices((prev) => {
      if (checked) {
        return [...prev, choice];
      }
      return prev.filter((c) => c !== choice);
    });
  };

  const hasOtherSelected = hasOtherInChoices
    ? selectedChoices.some((choice) => choice.toLowerCase() === "other")
    : selectedChoices.includes("other");

  return (
    <div className="space-y-3">
      {shuffledChoices?.map((choice) => (
        <div className="flex items-center space-x-2" key={choice}>
          <Checkbox
            defaultChecked={previousResponse?.includes(choice)}
            id={choice}
            name={choice}
            onCheckedChange={(checked) =>
              handleCheckboxChange(choice, checked as boolean)
            }
            required={!question.optional && selectedChoices.length === 0}
          />
          <Label htmlFor={choice}>{choice}</Label>
        </div>
      ))}
      {question.hasOpenChoice && !hasOtherInChoices && (
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={hasOtherSelected}
            id="other"
            onCheckedChange={(checked) =>
              handleCheckboxChange("other", checked as boolean)
            }
          />
          <Label htmlFor="other">Other</Label>
        </div>
      )}
      {question.hasOpenChoice && hasOtherSelected && (
        <div className="mt-4">
          <Input
            className="mt-1"
            defaultValue={
              previousResponse?.find(
                (choice) => !question.choices?.includes(choice)
              ) || ""
            }
            id="other"
            name="other"
            placeholder="Please specify"
            required={!question.optional}
          />
        </div>
      )}
    </div>
  );
}
