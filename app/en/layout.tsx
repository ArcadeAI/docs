import SharedLayout from "@/app/_layouts/shared-layout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function EnLayout({ children }: LayoutProps) {
  return <SharedLayout lang="en">{children}</SharedLayout>;
}
