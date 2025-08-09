import type React from 'react';
import { PlaceholderReplacer } from '@/components/placeholder-replacer';
import { OrySessionProvider } from '@/lib/ory-session-context';

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
