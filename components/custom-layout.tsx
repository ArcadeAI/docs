import type React from "react";
import { PlaceholderReplacer } from "@/components/placeholder-replacer";
import { OrySessionProvider } from "@/lib/ory-session-context";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <OrySessionProvider>
    <PlaceholderReplacer />
    {children}
  </OrySessionProvider>
);

export default CustomLayout;
