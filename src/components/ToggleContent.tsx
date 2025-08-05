"use client";
import { useState } from "react";
import styles from "./ToggleContent.module.css";

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
      <button className={styles.toggleButton} onClick={handleToggle}>
        {isExpanded ? hideText : showText}
      </button>
      {isExpanded && <div className={styles.toggleContent}>{children}</div>}
    </div>
  );
};

export default ToggleContent;
