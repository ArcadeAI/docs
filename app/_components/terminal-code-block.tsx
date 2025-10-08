import { Terminal } from "lucide-react";
import type React from "react";

type TerminalCodeBlockProps = {
  children: string;
  className?: string;
};

const TerminalCodeBlock: React.FC<TerminalCodeBlockProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-300 bg-gray-900 dark:border-gray-700">
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 text-gray-300">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span className="font-medium text-sm">Terminal</span>
        </div>
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className={`p-4 text-gray-100 text-sm ${className}`}>
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default TerminalCodeBlock;
