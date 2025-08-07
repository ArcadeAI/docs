"use client";
import { useState } from "react";

interface ToggleContentProps {
  children: React.ReactNode;
  showText?: string;
  hideText?: string;
}

const ToggleContent: React.FC<ToggleContentProps> = ({
  children,
  showText = "Show more",
  hideText = "Hide",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <button
        className="bg-neutral-dark-medium hover:bg-neutral-dark-high mb-4 cursor-pointer rounded-md border-none px-3 py-2 font-normal text-white transition-colors duration-200 ease-in-out"
        onClick={handleToggle}
      >
        {isExpanded ? hideText : showText}
      </button>
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default ToggleContent;
