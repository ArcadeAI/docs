import { AlertTriangle, BookOpen, Info } from "lucide-react";
import type React from "react";

type NoteType = "notice" | "caution" | "learn-more";

type NoteProps = {
  type?: NoteType;
  children: React.ReactNode;
};

const noteConfig: Record<
  NoteType,
  {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    styles: string;
  }
> = {
  notice: {
    icon: Info,
    label: "Notice",
    styles:
      "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-100",
  },
  caution: {
    icon: AlertTriangle,
    label: "Caution",
    styles:
      "border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-100",
  },
  "learn-more": {
    icon: BookOpen,
    label: "Learn More",
    styles:
      "border-purple-200 bg-purple-50 text-purple-900 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-100",
  },
};

const Note: React.FC<NoteProps> = ({ type = "notice", children }) => {
  const config = noteConfig[type];
  const Icon = config.icon;

  return (
    <div className={`my-4 rounded-lg border-l-4 p-4 ${config.styles}`}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
        <div className="flex-1">
          <div className="mb-1 font-semibold">{config.label}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Note;
