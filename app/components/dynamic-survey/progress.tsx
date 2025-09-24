type ProgressProps = {
  currentIndex: number;
  totalQuestions: number;
};

const PERCENTAGE_MULTIPLIER = 100;

export function Progress({ currentIndex, totalQuestions }: ProgressProps) {
  const progressPercentage =
    ((currentIndex + 1) / totalQuestions) * PERCENTAGE_MULTIPLIER;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-muted-foreground text-sm">
        <span>
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
