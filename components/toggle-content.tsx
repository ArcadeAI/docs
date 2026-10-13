"use client";
import { Button } from "@arcadeai/design-system";
import { useState } from "react";

type ToggleContentProps = {
  children: React.ReactNode;
  showText?: string;
  hideText?: string;
};

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
      <Button className="mb-4" onClick={handleToggle} variant="outline">
        {isExpanded ? hideText : showText}
      </Button>
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default ToggleContent;
