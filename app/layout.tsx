import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade Docs",
  description: "Arcade - AI platform for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
