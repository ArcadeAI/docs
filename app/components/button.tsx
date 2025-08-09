import type React from 'react';

export const ExternalLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  [key: string]: unknown;
}) => {
  return (
    <a href={href} {...rest} className="button" target="_blank">
      {children}
    </a>
  );
};
