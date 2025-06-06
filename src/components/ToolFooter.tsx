import React from "react";
import styles from "./ToolFooter.module.css";
import { Cloud } from "lucide-react";
import { Puzzle } from "lucide-react";
import { QuickStartCard } from "./QuickStartCard";

interface ToolFooterProps {
  pipPackageName: string;
}

const ToolFooter: React.FC<ToolFooterProps> = ({ pipPackageName }) => {
  return (
    <div className={styles.toolFooter}>
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-2xl">
        Get Building
      </h2>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <QuickStartCard
          icon={Cloud}
          title="Use tools hosted on Arcade Cloud"
          description="Arcade tools are hosted by our cloud platform and ready to be used in your agents.  Learn how."
          href="/home/quickstart"
        />
        <QuickStartCard
          icon={Puzzle}
          title="Self Host Arcade tools"
          description={`Arcade tools can be self-hosted on your own infrastructure.  Learn more about self-hosting.`}
          href="/home/local-deployment/install/overview"
          code={`pip install ${pipPackageName}`}
        />
      </div>
    </div>
  );
};

export default ToolFooter;
