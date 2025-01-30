import Link from "next/link";
import { Button } from "./ui/button";

interface NavBarButtonProps {
  href: string;
  text: string;
  variant?: string;
}

export const NavBarButton = ({
  href,
  text,
  variant = "default",
}: NavBarButtonProps) => (
  <Link href={href}>
    <Button
      variant={
        variant as
          | "default"
          | "link"
          | "destructive"
          | "outline"
          | "secondary"
          | "ghost"
      }
    >
      <span className="text-xs">{text}</span>
    </Button>
  </Link>
);

export default NavBarButton;
