import React from "react";
import { OrySessionProvider } from "@/lib/OrySessionContext";
import { PlaceholderReplacer } from "@/components/PlaceholderReplacer";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <OrySessionProvider>
      <PlaceholderReplacer />
      <main className="custom-main">{children}</main>
    </OrySessionProvider>
  );
};

export default CustomLayout;
