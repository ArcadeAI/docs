interface ProgressProps {
  currentIndex: number;
  totalQuestions: number;
}

export function Progress({ currentIndex, totalQuestions }: ProgressProps) {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span>{Math.round(((currentIndex + 1) / totalQuestions) * 100)}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>
    </div>
  );
}
