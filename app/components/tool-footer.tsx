'use client';
import { Cloud, Puzzle } from 'lucide-react';
import type React from 'react';
import { QuickStartCard } from './quick-start-card';

interface ToolFooterProps {
  pipPackageName: string;
}

const ToolFooter: React.FC<ToolFooterProps> = ({ pipPackageName }) => {
  return (
    <div className="mt-8 border-neutral-dark-medium border-t pt-4">
      <h2 className="mb-4 font-bold text-2xl text-white tracking-tight md:text-2xl">
        Get Building
      </h2>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <QuickStartCard
          description="Arcade tools are hosted by our cloud platform and ready to be used in your agents.  Learn how."
          href="/home/quickstart"
          icon={Cloud}
          title="Use tools hosted on Arcade Cloud"
        />
        <QuickStartCard
          code={`pip install ${pipPackageName}`}
          description={
            'Arcade tools can be self-hosted on your own infrastructure.  Learn more about self-hosting.'
          }
          href="/home/hosting-overview"
          icon={Puzzle}
          title="Self Host Arcade tools"
        />
      </div>
    </div>
  );
};

export default ToolFooter;
