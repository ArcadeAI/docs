import { Textarea } from '@arcadeai/design-system';
import type { BasicSurveyQuestion } from 'posthog-js';

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
      className="min-h-[100px]"
      defaultValue={previousResponse || ''}
      id="response"
      name="response"
      placeholder="Type your answer here..."
      required={!question.optional}
    />
  );
}
