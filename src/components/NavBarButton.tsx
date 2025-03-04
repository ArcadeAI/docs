import { Button } from "./ui/button";

interface NavBarButtonProps {
  text: string;
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
}: NavBarButtonProps) => (
  <Button variant={variant}>
    <span className="text-xs">{text}</span>
  </Button>
);

export default NavBarButton;
