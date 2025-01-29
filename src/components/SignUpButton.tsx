import Link from "next/link";
import { Button } from "./ui/button";

export const SignUpButton = () => (
  <Link
    href="https://account.arcade.dev/registerOrRedirect?return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard&new_user_return_to=https%3A%2F%2Fapi.arcade.dev%2Fdashboard%2Fwelcome"
    target="_blank"
  >
    <Button>
      <span className="text-xs">Sign Up</span>
    </Button>
  </Link>
);

export default SignUpButton;
