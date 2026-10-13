"use client";
import { Checkbox, Input, Label } from "@arcadeai/design-system";
import type { MultipleSurveyQuestion } from "posthog-js";
import { useCallback, useMemo, useState } from "react";

interface MultipleChoiceQuestionProps {
  previousResponse?: string[];
  question: MultipleSurveyQuestion;
}

interface ChoiceCheckboxProps {
  choice: string;
  defaultChecked?: boolean;
  onChange: (choice: string, checked: boolean) => void;
  required: boolean;
}

function ChoiceCheckbox({
  choice,
  defaultChecked,
  onChange,
  required,
}: ChoiceCheckboxProps) {
  const handleCheckedChange = useCallback(
    (checked: boolean) => onChange(choice, checked),
    [choice, onChange]
  );
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        defaultChecked={defaultChecked}
        id={choice}
        name={choice}
        onCheckedChange={handleCheckedChange}
        required={required}
      />
      <Label htmlFor={choice}>{choice}</Label>
    </div>
  );
}

export function MultipleChoiceQuestion({
  question,
  previousResponse,
}: MultipleChoiceQuestionProps) {
  const hasOtherInChoices = question.choices.some(
    (choice) => choice.toLowerCase() === "other"
  );

  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    previousResponse || []
  );

  const shuffledChoices = useMemo(() => {
    if (!(question.choices.length && question.shuffleOptions)) {
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

  const handleCheckboxChange = useCallback(
    (choice: string, checked: boolean) => {
      setSelectedChoices((prev) => {
        if (checked) {
          return [...prev, choice];
        }
        return prev.filter((c) => c !== choice);
      });
    },
    []
  );

  const handleOtherChange = useCallback(
    (checked: boolean) => handleCheckboxChange("other", checked),
    [handleCheckboxChange]
  );

  const hasOtherSelected = hasOtherInChoices
    ? selectedChoices.some((choice) => choice.toLowerCase() === "other")
    : selectedChoices.includes("other");

  return (
    <div className="space-y-3">
      {shuffledChoices.map((choice) => (
        <ChoiceCheckbox
          choice={choice}
          defaultChecked={previousResponse?.includes(choice)}
          key={choice}
          onChange={handleCheckboxChange}
          required={!question.optional && selectedChoices.length === 0}
        />
      ))}
      {question.hasOpenChoice && !hasOtherInChoices ? (
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={hasOtherSelected}
            id="other"
            onCheckedChange={handleOtherChange}
          />
          <Label htmlFor="other">Other</Label>
        </div>
      ) : null}
      {question.hasOpenChoice && hasOtherSelected ? (
        <div className="mt-4">
          <Input
            className="mt-1"
            defaultValue={
              previousResponse?.find(
                (choice) => !question.choices.includes(choice)
              ) || ""
            }
            id="other"
            name="other"
            placeholder="Please specify"
            required={!question.optional}
          />
        </div>
      ) : null}
    </div>
  );
}
