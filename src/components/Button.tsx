import Link from "next/link";
import React from "react";

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
    <a href={href} {...rest} target="_blank" className="button">
      {children}
    </a>
  );
};

export const Button = ({ children, href }) => (
  <Link href={href}>
    <button className="button px-4 py-2 text-sm sm:text-base">
      {children}
    </button>
  </Link>
);
