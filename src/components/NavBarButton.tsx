import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface NavBarButtonProps {
  text: string;
  hideOnPath?: string[];
  variant?:
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
}

export const NavBarButton = ({
  text,
  variant = "default",
  hideOnPath = [],
}: NavBarButtonProps) => {
  const pathname = usePathname();
  if (hideOnPath.includes(pathname)) return null;
  return (
    <Button
      variant={variant}
      className={variant === "ghost" ? "mx-1 px-3" : ""}
    >
      <span className="text-xs">{text}</span>
    </Button>
  );
};

export default NavBarButton;
