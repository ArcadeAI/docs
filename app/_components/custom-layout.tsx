import type React from "react";
import { CopyPageOverride } from "@/app/_components/copy-page-override";
import { PlaceholderReplacer } from "@/app/_components/placeholder-replacer";
import { OrySessionProvider } from "@/app/_lib/ory-session-context";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <OrySessionProvider>
    <PlaceholderReplacer />
    <CopyPageOverride />
    <main className="custom-main">{children}</main>
  </OrySessionProvider>
);

export default CustomLayout;
