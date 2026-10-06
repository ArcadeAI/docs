"use client";
import { Button } from "@arcadeai/design-system";
import { useState } from "react";

interface ToggleContentProps {
  children: React.ReactNode;
  hideText?: string;
  showText?: string;
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

  const buttonText = isExpanded ? hideText : showText;

  return (
    <div>
      <Button className="mb-4" onClick={handleToggle} variant="outline">
        {buttonText}
      </Button>
      {isExpanded ? <div>{children}</div> : null}
    </div>
  );
};

export default ToggleContent;
