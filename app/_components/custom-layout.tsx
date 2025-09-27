import type React from "react";
import { PlaceholderReplacer } from "@/app/_components/placeholder-replacer";
import { OrySessionProvider } from "@/app/_lib/ory-session-context";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <OrySessionProvider>
    <PlaceholderReplacer />
    <main className="custom-main">{children}</main>
  </OrySessionProvider>
);

export default CustomLayout;
