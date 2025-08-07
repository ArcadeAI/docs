"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MultipleSurveyQuestion } from "posthog-js";
import { useState, useMemo } from "react";

interface MultipleChoiceQuestionProps {
  question: MultipleSurveyQuestion;
  previousResponse?: string[];
}

export function MultipleChoiceQuestion({
  question,
  previousResponse,
}: MultipleChoiceQuestionProps) {
  const hasOtherInChoices = question.choices?.some(
    (choice) => choice.toLowerCase() === "other",
  );

  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    previousResponse || [],
  );

  const shuffledChoices = useMemo(() => {
    if (!question.choices?.length || !question.shuffleOptions) {
      return question.choices;
    }

    const [others, regular] = question.choices.reduce<[string[], string[]]>(
      ([o, r], choice) =>
        choice.toLowerCase() === "other"
          ? [[...o, choice], r]
          : [o, [...r, choice]],
      [[], []],
    );

    return [...regular.sort(() => Math.random() - 0.5), ...others];
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
        <div key={choice} className="flex items-center space-x-2">
          <Checkbox
            id={choice}
            name={choice}
            defaultChecked={previousResponse?.includes(choice)}
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
            id="other"
            checked={hasOtherSelected}
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
            id="other"
            name="other"
            placeholder="Please specify"
            className="mt-1"
            defaultValue={
              previousResponse?.find(
                (choice) => !question.choices?.includes(choice),
              ) || ""
            }
            required={!question.optional}
          />
        </div>
      )}
    </div>
  );
}
